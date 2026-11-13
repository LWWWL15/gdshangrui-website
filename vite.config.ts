import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { writeFileSync, mkdirSync, readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { productSeries } from './src/data/products'
import { blogArticles } from './src/data/articles'

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
  // ⚠️ 博客详情页**故意不进 sitemap**（2026-11-13 第 19 轮改回）：
  //    博客详情页现在是 noindex（沿用首页兜底 title/desc，等 11-22 观察期结束后
  //    补齐独立 TDH 再解除 noindex 放开收录）。
  //    sitemap 里提交 noindex URL = Google 直接报「Submitted URL marked noindex」，
  //    只会污染主人的 GSC 基线，对收录零帮助（noindex 优先级高于 sitemap）。
  //    解除 noindex 的那一天，把下面这行加回来即可：
  //    const blogPaths: string[] = blogArticles.map(a => `/blog/${a.slug}`)
  return [...STATIC_PATHS, ...productPages]
}

// 型号 id 里带日期（mh3248-50t-20260207 → 2026-02-07），用它做 lastmod 比"每次构建都填今天"诚实
function lastmodFor(path: string): string {
  const m = path.match(/-(\d{4})(\d{2})(\d{2})$/)
  if (m) return `${m[1]}-${m[2]}-${m[3]}`
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
    <lastmod>${lastmodFor(p)}</lastmod>
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
  const indexItems = LANGS.map(
    (l) => `  <sitemap>\n    <loc>${hostname}/${l.key}/sitemap.xml</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n  </sitemap>`
  ).join('\n')
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