// 构建后处理：为每个语言目录生成 index.html（内容同 <lang>.html）
// 背景：vite-ssg 输出 <lang>.html，但 Cloudflare Pages 等静态托管对 /cn/ 这类
// 目录路径依赖 <dir>/index.html 才能稳定返回（部分服务器不认 cleanUrls 映射）。
// 2026-11-18 Lighthouse 体检时发现 /cn/index.html 404，补此脚本。
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
const langs = ['cn', 'mic', 'vn', 'ru']
for (const l of langs) {
  copyFileSync(resolve(dist, `${l}.html`), resolve(dist, l, 'index.html'))
}
console.log(`[postbuild] ok: ${langs.map((l) => `${l}/index.html`).join(', ')}`)
