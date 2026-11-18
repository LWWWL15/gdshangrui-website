import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { productSeries } from './src/data/products'
import { blogArticles } from './src/data/articles'
import lastmodManifest from './src/data/sitemapLastmod.json'

// 站点域名配置（用于 sitemap）
const hostname = 'https://gdshangrui.com'

// 四种语言的前缀。mic = English（x-default），cn = 中文，vn = 越南语，ru = 俄语
const LANGS = [
  { key: 'cn', hreflang: 'zh-CN' },
  { key: 'mic', hreflang: 'en' },
  { key: 'vn', hreflang: 'vi' },
  { key: 'ru', hreflang: 'ru' },
]

// 静态页面（与 router 中 LangLayout 的 children 对应）
const STATIC_PATHS = [
  '/',
  '/about',
  '/products',
  '/products/series',
  '/blog',
  '/contact',
  '/tools',
  '/tools/pressure-calculator',
  '/tools/ground-pressure-calculator',
  '/gallery',
  '/certification',
  '/privacy',
  '/terms',
]

// 从 products.ts 动态生成所有需要预渲染的具体路径
function getAllPaths() {
  const productPages: string[] = []
  for (const series of productSeries) {
    productPages.push(`/products/${series.id}`)
    for (const model of series.models) {
      productPages.push(`/products/${series.id}/${model.id}`)
    }
  }
  // 博客详情页 2026-11-17 起加入 sitemap：noindex 已摘除（观察期提前结束，主人批准），
  // 9 篇文章均为真实内容。详情页 sitemap 提交可加速 Bing/Google 发现。
  const blogPaths: string[] = blogArticles.map(a => `/blog/${a.slug}`)
  return [...STATIC_PATHS, ...productPages, ...blogPaths]
}

// lastmod = 该页**内容源文件最后一次实质改动**的日期
//
// 为什么改（2026-11-17 第 31 轮）：
//   旧实现有两种失真，两种都被 Google 官方点名：
//   ① 产品页用「型号 id 里的日期」（mh3248-50t-20260207 → 2026-02-07）——那是**建号日期**，
//      不是内容最后改动日期。正文 11-16 改过了，sitemap 还写着 2020-11-09 / 2024-08-10。
//      Google 原话：「如果页面 7 年前改的，sitemap 写昨天，那我们最终不会再相信你的日期。」
//   ② 其他页用「构建当天」——每次发版都变，内容没改也说改了。
//      Google 原话：「如果你的 CMS 每次部署都重写 lastmod，先把这个修掉。」
//   → lastmod 是 Google 唯一会看的日期类字段（changefreq 和 priority 官方明说被忽略），
//     上面两种都会让它彻底失去价值：该重抓的新页面不重抓，不该抓的照抓。
//
// 怎么实现：
//   日期来自 `src/data/sitemapLastmod.json`（提交进仓库的清单），
//   由 `_tools/sitemap_lastmod_sync.py --write` 按 git 提交历史生成。
//   不用「构建时跑 git log」的原因：**Cloudflare Pages 默认浅克隆**，
//   构建机上 git 历史不全 → 所有页面都会算成同一个提交日（又变成另一种灌水）。
//   清单随仓库走 → 本地构建与线上构建结果完全一致。
//
// 清单里没有的 URL（新增页面还没生成清单）：退回构建当天，
// 并在构建日志里告警提示需要跑一次 --write。
function lastmodFor(path: string, lang: string): string {
  const entries = (lastmodManifest as { entries?: Record<string, string> }).entries || {}
  const key = `/${lang}${path === '/' ? '' : path}`
  const hit = entries[key]
  if (hit) return hit
  console.warn(
    `[sitemap] lastmod 清单里没有 ${key} —— 退回构建当天。` +
    `跑一次 _tools/sitemap_lastmod_sync.py --write 生成清单。`)
  return new Date().toISOString().split('T')[0]
}

function priorityFor(path: string): string {
  if (path === '/') return '1.0'
  if (path === '/products') return '0.9'
  if (path.startsWith('/products/')) return '0.8'
  if (path === '/gallery' || path === '/about') return '0.7'
  return '0.6'
}

function changefreqFor(path: string): string {
  if (path === '/' || path === '/products') return 'weekly'
  if (path.startsWith('/products/')) return 'monthly'
  return 'monthly'
}

// 生成每种语言一份 sitemap（每份都带全五语 hreflang 互指）
function generateSitemap() {
  const allPaths = getAllPaths()

  for (const lang of LANGS) {
    const urls = allPaths.map((p) => {
      // canonical 统一不带尾斜杠（/cn 而不是 /cn/），sitemap 必须与之一致
      const suffix = p === '/' ? '' : p
      const alternates = LANGS.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${hostname}/${l.key}${suffix}"/>`
      ).join('\n')
      const enUrl = `${hostname}/mic${suffix}`
      return `  <url>
    <loc>${hostname}/${lang.key}${suffix}</loc>
    <lastmod>${lastmodFor(p, lang.key)}</lastmod>
    <changefreq>${changefreqFor(p)}</changefreq>
    <priority>${priorityFor(p)}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>`
    }).join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`

    const dir = resolve(__dirname, 'dist', lang.key)
    if (!mkdirSync) { /* noop */ }
    mkdirSync(dir, { recursive: true })
    writeFileSync(resolve(dir, 'sitemap.xml'), xml, 'utf-8')
  }

  // 根 sitemap 改成 sitemap index，指向四份语言 sitemap
  //
  // index 的 lastmod 语义 = 「这份 sitemap 文件最后一次实质变化的时间」。
  // 内容没变就不该变 —— 同样不能每次构建都填当天（Google 会开始不信这个字段）。
  // 做法：取该语言 sitemap 里**所有 URL 的最大 lastmod**（= 这份 sitemap 覆盖的内容里最新的那次改动）。
  const indexItems = LANGS.map((l) => {
    const entries = (lastmodManifest as { entries?: Record<string, string> }).entries || {}
    const dates = Object.keys(entries)
      .filter((k) => k.startsWith(`/${l.key}`))
      .map((k) => entries[k])
      .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))
      .sort()
    const last = dates.length ? dates[dates.length - 1] : new Date().toISOString().split('T')[0]
    return `  <sitemap>\n    <loc>${hostname}/${l.key}/sitemap.xml</loc>\n    <lastmod>${last}</lastmod>\n  </sitemap>`
  }).join('\n')
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexItems}\n</sitemapindex>`
  writeFileSync(resolve(__dirname, 'dist/sitemap.xml'), indexXml, 'utf-8')

  console.log('[sitemap] Generated 4 language sitemaps + index,', allPaths.length * LANGS.length, 'URLs total')
}

// 生成顶层 dist/404.html
//
// 为什么需要：Cloudflare Pages 的规则是「找不到文件时向上查找最近的 404.html」，
// 顶层没有 404.html 时，Pages 会认为这是 SPA 并把任何路径都返回 /index.html（200 软 404）。
// 有了顶层 404.html，未知路径会返回真实 404 状态码。
//
// 内容用英文（站点默认语言 = mic = x-default），并给出四语入口。
function generateRoot404() {
  const dst = resolve(__dirname, 'dist/404.html')
  // 首选：public/404.html（vite 会自动复制过来，且不依赖插件执行顺序）
  if (existsSync(dst)) {
    console.log('[404] 顶层 404.html 已就位（public/404.html）')
    return
  }
  // 兜底：用中文 404 页复制一份
  const src = resolve(__dirname, 'dist/cn/404.html')
  if (!existsSync(src)) {
    console.warn('[404] 没有可用的 404 源页，跳过顶层兜底')
    return
  }
  let html = readFileSync(src, 'utf-8')
  html = html.replace(/<link rel="canonical"[^>]*>/g, '')
  if (!/<meta name="robots"/.test(html)) {
    html = html.replace(/<head>/, '<head>\n    <meta name="robots" content="noindex, follow">')
  }
  writeFileSync(dst, html, 'utf-8')
  console.log('[404] 顶层 404.html 已就位（从 dist/cn/404.html 复制）')
}

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'vite-plugin-sitemap',
      // closeBundle 必须晚于 vite-ssg（它要等所有语言页含 404.html 写完）
      // Rollup 4 的 hook order：写成对象形式才能指定 order
      closeBundle: {
        order: 'post',
        handler() {
          generateSitemap()
          generateRoot404()
        },
      },
    }
  ],
  ssgOptions: {
    script: 'defer',
    includedRoutes(paths, routes) {
      // 把所有基础路由展开为 zh/en 具体路径
      const langs = ['cn', 'mic', 'vn', 'ru']
      const expandedPaths: string[] = []
      for (const path of paths) {
        if (path.includes(':lang(cn|mic|vn|ru)')) {
          for (const lang of langs) {
            expandedPaths.push(path.replace(':lang(cn|mic|vn|ru)', lang))
          }
        } else if (path.includes(':lang(zh|en|vn)')) {
          for (const lang of langs) {
            expandedPaths.push(path.replace(':lang(zh|en|vn)', lang))
          }
        } else if (path.includes(':lang(zh|en)')) {
          for (const lang of langs) {
            expandedPaths.push(path.replace(':lang(zh|en)', lang))
          }
        } else if (path.includes(':lang')) {
          for (const lang of langs) {
            expandedPaths.push(path.replace(':lang', lang))
          }
        } else {
          expandedPaths.push(path)
        }
      }

      // 过滤掉还有占位符的动态路由（:slug, :seriesId, :modelId, :pathMatch, *, 等）
      // 但 :seriesId 和 :modelId 通过 getAllPaths 生成的混凝土路径补充
      const filtered = expandedPaths.filter(
        p =>
          !p.includes('|') &&            // 移除未展开的正则路由如 /cn|mic|vn/*
          !p.includes('/:slug') &&
          !p.includes('*') &&
          !p.match(/:\w+/)
      )

      // 再加入所有产品系列 + 型号的具体混凝土路径
      const productConcretePaths: string[] = []
      for (const series of productSeries) {
        productConcretePaths.push(`/cn/products/${series.id}`)
        productConcretePaths.push(`/mic/products/${series.id}`)
        productConcretePaths.push(`/vn/products/${series.id}`)
        productConcretePaths.push(`/ru/products/${series.id}`)
        for (const model of series.models) {
          productConcretePaths.push(`/cn/products/${series.id}/${model.id}`)
          productConcretePaths.push(`/mic/products/${series.id}/${model.id}`)
          productConcretePaths.push(`/vn/products/${series.id}/${model.id}`)
          productConcretePaths.push(`/ru/products/${series.id}/${model.id}`)
        }
      }

      // 博客文章详情页的混凝土路径（/:lang/blog/:slug）
      const blogConcretePaths = blogArticles.flatMap(a =>
        ['cn', 'mic', 'vn', 'ru'].map(l => `/${l}/blog/${a.slug}`)
      )

      return [...new Set([...filtered, ...productConcretePaths, ...blogConcretePaths])]
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/assets/styles/variables' as *;`
      }
    }
  }
})