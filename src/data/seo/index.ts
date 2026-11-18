/**
 * SEO 内容包加载器
 *
 * 每个产品型号 × 每种语言，可以有一个独立的内容包：
 *   src/data/seo/<modelId>/<lang>.json
 * 语言取值：cn | mic | vn | ru
 *
 * 原则（来自实战教训）：
 *   · 每种语言的内容包是独立的，不是一键翻译
 *   · 没有对应语言的内容包时，页面回退到自动生成的 TDH，不影响现有收录
 */

export interface SeoPack {
  market: string
  language: string
  languageCode: string
  productId: string
  productSeries: string
  productSeriesName: string
  seoTitle: string
  metaDesc: string
  keywords: string[]
  description: string
  faq: { q: string; a: string }[]
  altTexts: Record<string, string>
  urlSlug: string
}

export type SeoLang = 'cn' | 'mic' | 'vn' | 'ru'

const modules = import.meta.glob('./**/*.json', { eager: true }) as Record<
  string,
  { default: SeoPack } | SeoPack
>

const packs = new Map<string, SeoPack>()

for (const [path, mod] of Object.entries(modules)) {
  // ./<modelId>/<lang>.json
  const m = path.match(/\.\/([^/]+)\/([^/]+)\.json$/)
  if (!m) continue
  const pack = (mod as { default?: SeoPack }).default ?? (mod as SeoPack)
  if (!pack || !pack.productId) continue
  packs.set(`${pack.productId}::${m[2]}`, pack)
}

/** 取某型号某语言的内容包，没有返回 null */
export function getSeoPack(modelId: string | undefined, lang: string): SeoPack | null {
  if (!modelId) return null
  return packs.get(`${modelId}::${lang}`) ?? null
}

/** 有内容包的型号列表（调试用） */
export function listSeoPacks(): { modelId: string; lang: string }[] {
  return Array.from(packs.keys()).map(k => {
    const [modelId, lang] = k.split('::')
    return { modelId, lang }
  })
}

/**
 * 按图片路径查 alt 文本
 * 内容包里的 key 是相对产品目录的路径，例如：
 *   冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_1_up_001.webp
 * 而页面里的 src 是：
 *   /冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_1_up_001.webp
 * 两者差一个「产品系列目录」段，这里做归一化匹配。
 */
export function getAltText(pack: SeoPack | null, imageSrc: string | undefined): string {
  if (!pack || !pack.altTexts || !imageSrc) return ''
  const alts = pack.altTexts

  // 精确匹配
  if (alts[imageSrc]) return alts[imageSrc]

  // 去掉开头的 /
  const noLead = imageSrc.replace(/^\//, '')
  if (alts[noLead]) return alts[noLead]

  // 去掉产品系列目录段（/冷压机/xxx → xxx）
  const parts = noLead.split('/')
  if (parts.length >= 2) {
    const withoutSeries = parts.slice(1).join('/')
    if (alts[withoutSeries]) return alts[withoutSeries]
  }

  // 按文件名匹配（同一张图在不同目录下的兜底）
  const file = parts[parts.length - 1]
  const hit = Object.keys(alts).find(k => k.endsWith('/' + file) || k === file)
  return hit ? alts[hit] : ''
}
