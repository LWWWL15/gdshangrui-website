import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// 站点域名配置（用于 sitemap）
const hostname = 'https://gdshangrui.com'

// 所有页面路径（含产品详情页）
const allPaths = [
  '/',
  '/about',
  '/products',
  '/products/hot-press',
  '/products/hot-press/mh3848x120t',
  '/products/cold-press',
  '/products/cold-press/mh3248-50t-20260207',
  '/products/cold-press/mh3248x200t',
  '/products/cold-press/mh3248x100t',
  '/products/multi-blade-saw',
  '/products/lifting-platform',
  '/products/splicing-machine',
  '/products/door-frame-machine',
  '/products/other',
  '/cases',
  '/contact',
  '/tools',
]

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]
  const urls = allPaths.map((path) => {
    const priority = path === '/' ? '1.0' : '0.8'
    return `  <url>\n    <loc>${hostname}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`

  writeFileSync(resolve(__dirname, 'dist/sitemap.xml'), xml, 'utf-8')
  console.log('[sitemap] Generated sitemap.xml with', allPaths.length, 'pages')
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
