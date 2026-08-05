import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { productSeries } from './src/data/products'

// 站点域名配置（用于 sitemap）
const hostname = 'https://gdshangrui.com'

// 从 products.ts 动态生成所有需要预渲染的具体路径
function getAllPaths() {
  const basePages = [
    { zh: '/', en: '/' },
    { zh: '/about', en: '/about' },
    { zh: '/products', en: '/products' },
    { zh: '/blog', en: '/blog' },
    { zh: '/contact', en: '/contact' },
    { zh: '/tools', en: '/tools' },
    { zh: '/tools/pressure-calculator', en: '/tools/pressure-calculator' },
  ]

  const productPages: { zh: string; en: string }[] = []
  for (const series of productSeries) {
    productPages.push({ zh: `/products/${series.id}`, en: `/products/${series.id}` })
    for (const model of series.models) {
      productPages.push({ zh: `/products/${series.id}/${model.id}`, en: `/products/${series.id}/${model.id}` })
    }
  }

  return [...basePages, ...productPages]
}

// 生成 sitemap（含 hreflang 注解，zh-CN 标准格式）
function generateSitemap() {
  const allPaths = getAllPaths()
  const today = new Date().toISOString().split('T')[0]

  const urls = allPaths.map((entry) => {
    const zhUrl = `${hostname}/cn${entry.zh}`
    const enUrl = `${hostname}/mic${entry.en}`
    const vnUrl = `${hostname}/vn${entry.zh}`
    const ruUrl = `${hostname}/ru${entry.zh}`
    const priority = entry.zh === '/' ? '1.0' : '0.8'
    return `  <url>
    <loc>${enUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="vi" href="${vnUrl}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${ruUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`

  writeFileSync(resolve(__dirname, 'dist/sitemap.xml'), xml, 'utf-8')
  console.log('[sitemap] Generated sitemap.xml with', allPaths.length * 2, 'URLs (zh + en)')
}

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'vite-plugin-sitemap',
      closeBundle() {
        generateSitemap()
      }
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

      return [...new Set([...filtered, ...productConcretePaths])]
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