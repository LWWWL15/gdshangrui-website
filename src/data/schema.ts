// 结构化数据（JSON-LD）构建 —— 补齐缺失页型的 schema
//
// 2026-11-10 第 7 轮新增。
//
// 原则（不可违背）：
//  1. **不碰 Title / Description / H1 / keywords** —— 这些由 LangLayout 的 TDH 逻辑负责，
//     观察期（11-08 ~ 11-22）冻结。本文件只产出 script 标签里的 JSON-LD。
//  2. **不编造** —— 名称/描述取自 products.ts、tools.ts、certifications.ts；
//     证书信息取证书实物；计算器 FAQ 取工具自身的计算逻辑。
//  3. 四语各写各的，不做机翻（哥飞 2025-01-06 血泪案例：改一语文案会污染另外三语）。
//  4. 每个 schema 独立成一个 script 标签，不合并成 @graph —— 与站点既有写法一致，
//     且 deep_page_audit.py 按 `<script type="application/ld+json">` 逐块解析。
//
// ⚠️ 范围：本文件只覆盖「会被收录的页型」。
//    blog / 404 页带 noindex，加 schema 对收录无意义 → 不做。

export type Lang = 'cn' | 'mic' | 'vn' | 'ru'

export const SITE_URL = 'https://gdshangrui.com'

/** 语言前缀：cn / mic / vn / ru */
export function langPrefix(lang: Lang): string {
  return '/' + lang
}

/** 语言的 BCP-47 标记 */
export function langTag(lang: Lang): string {
  return lang === 'cn' ? 'zh-CN' : lang === 'vn' ? 'vi' : lang === 'ru' ? 'ru' : 'en'
}

/**
 * 取多语言字段：vn / ru 缺省回退 mic。
 * 与站点 t(zh, en, vn, ru) 的既有回退规则保持一致。
 */
export function pick(lang: Lang, cn?: string, mic?: string, vn?: string, ru?: string): string {
  if (lang === 'cn') return cn || mic || ''
  if (lang === 'vn') return vn || mic || ''
  if (lang === 'ru') return ru || mic || ''
  return mic || ''
}

/**
 * 面包屑 —— 全站通用。
 * 首页 / 产品 / 当前页。所有需要层级语义的页面都该带。
 */
export function breadcrumbSchema(
  lang: Lang,
  url: string,
  crumbs: { name: string; item: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
    url,
  }
}

/** 两级面包屑（首页 → 目标页） */
export function twoLevelBreadcrumb(lang: Lang, url: string, targetName: string): Record<string, unknown> {
  const home = pick(lang, '首页', 'Home', 'Trang chủ', 'Главная')
  return breadcrumbSchema(lang, url, [
    { name: home, item: `${SITE_URL}${langPrefix(lang)}` },
    { name: targetName, item: url },
  ])
}

/** FAQPage —— 问答内容必须在页面上可见（Google 政策），因此只对有可见 FAQ 的页型调用 */
export function faqPageSchema(
  faq: { q: string; a: string }[],
  url: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
    url,
  }
}

/**
 * 产品系列页 —— 品类词的落点。
 * CollectionPage + ItemList（列出该系列下的型号）+ BreadcrumbList。
 * 型号清单直接取 products.ts 的 series.models，不手写。
 */
export function seriesPageSchemas(
  lang: Lang,
  url: string,
  series: {
    id: string
    cn: string
    mic: string
    vn?: string
    ru?: string
    descCn: string
    descMic: string
    descVn?: string
    descRu?: string
    models: { id: string; model: string }[]
    /** 页面上可见的 FAQ（只有部分系列有） */
    faq?: { q: { cn: string; mic: string; vn?: string; ru?: string }; a: { cn: string; mic: string; vn?: string; ru?: string } }[]
  }
): Record<string, unknown>[] {
  const name = pick(lang, series.cn, series.mic, series.vn, series.ru)
  const desc = pick(lang, series.descCn, series.descMic, series.descVn, series.descRu)
  const lp = langPrefix(lang)

  const items = series.models.map((m, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `${SITE_URL}${lp}/products/${series.id}/${m.id}`,
    name: m.model,
  }))

  const out: Record<string, unknown>[] = []

  out.push({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description: desc,
    url,
    inLanguage: langTag(lang),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items,
    },
  })

  // 首页 → 产品 → 本系列
  const home = pick(lang, '首页', 'Home', 'Trang chủ', 'Главная')
  const products = pick(lang, '产品', 'Products', 'Sản phẩm', 'Продукция')
  out.push(
    breadcrumbSchema(lang, url, [
      { name: home, item: `${SITE_URL}${lp}` },
      { name: products, item: `${SITE_URL}${lp}/products` },
      { name, item: url },
    ])
  )

  // 该系列在页面上有可见 FAQ 时才声明 FAQPage（Google 要求问答可见）
  if (series.faq && series.faq.length > 0) {
    out.push(
      faqPageSchema(
        series.faq.map(item => ({
          q: pick(lang, item.q.cn, item.q.mic, item.q.vn, item.q.ru),
          a: pick(lang, item.a.cn, item.a.mic, item.a.vn, item.a.ru),
        })),
        url
      )
    )
  }

  return out
}

/**
 * 产品系列总览页（/products/series）—— 列出全部系列。
 */
export function seriesIndexPageSchemas(
  lang: Lang,
  url: string,
  opts: {
    name: string
    description: string
    series: { id: string; name: string; description: string }[]
  }
): Record<string, unknown>[] {
  const lp = langPrefix(lang)
  const out: Record<string, unknown>[] = []

  out.push({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url,
    inLanguage: langTag(lang),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.series.length,
      itemListElement: opts.series.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}${lp}/products/${s.id}`,
        name: s.name,
      })),
    },
  })

  out.push(twoLevelBreadcrumb(lang, url, opts.name))

  return out
}

/**
 * 计算器 / 工具子页 —— WebApplication + FAQPage。
 * FAQ 内容取自工具自身的计算逻辑（见 src/data/tools.ts），页面必须同步渲染出来。
 */
export function calculatorPageSchemas(
  lang: Lang,
  url: string,
  opts: {
    name: string
    description: string
    /** 页面上真实可见的问答 */
    faq: { q: string; a: string }[]
  }
): Record<string, unknown>[] {
  const out: Record<string, unknown>[] = []

  out.push({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: opts.name,
    description: opts.description,
    url,
    inLanguage: langTag(lang),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  })

  if (opts.faq.length > 0) {
    out.push(faqPageSchema(opts.faq, url))
  }

  out.push(twoLevelBreadcrumb(lang, url, opts.name))

  return out
}

/**
 * 认证页 —— Organization + 证书凭据。
 * 证书信息取自 CertificationView.vue 展示的实物内容（编号/机构/标准/范围），不做二次演绎。
 */
export function certificationPageSchemas(
  lang: Lang,
  url: string,
  opts: {
    organizationName: string
    pageName: string
    certificates: {
      name: string
      identifier: string
      issuedBy: string
      standards?: string
      scope?: string
      covers?: string
    }[]
  }
): Record<string, unknown>[] {
  const out: Record<string, unknown>[] = []

  out.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: opts.organizationName,
    alternateName: '上锐机械',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 6, Shilong Avenue, Xintang Industrial Zone, Lunjiao Sub-district, Shunde District',
      addressLocality: 'Foshan',
      addressRegion: 'Guangdong',
      postalCode: '528000',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-139-2915-1908',
      email: 'caya15@qq.com',
      contactType: 'sales',
      areaServed: 'Worldwide',
      availableLanguage: ['Chinese', 'English', 'Vietnamese', 'Russian'],
    },
    hasCredential: opts.certificates.map(c => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: c.name,
      identifier: c.identifier,
      recognizedBy: {
        '@type': 'Organization',
        name: c.issuedBy,
      },
      ...(c.standards ? { description: c.standards } : {}),
      ...(c.scope ? { about: c.scope } : {}),
      ...(c.covers ? { description: c.covers } : {}),
    })),
  })

  out.push(twoLevelBreadcrumb(lang, url, opts.pageName))

  return out
}

/**
 * 法务页 / 图库页等通用内容页 —— WebPage + BreadcrumbList。
 * 只声明「这是一个网页」+ 层级，不编造正文内容。
 */
export function webPageSchemas(
  lang: Lang,
  url: string,
  opts: { name: string; description?: string; breadcrumbName?: string }
): Record<string, unknown>[] {
  const out: Record<string, unknown>[] = []

  out.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    url,
    inLanguage: langTag(lang),
    isPartOf: {
      '@type': 'WebSite',
      name: 'Shang Rui Machinery',
      url: `${SITE_URL}/`,
    },
  })

  out.push(twoLevelBreadcrumb(lang, url, opts.breadcrumbName || opts.name))

  return out
}

/**
 * 工具列表页 —— CollectionPage + ItemList（列出各工具）。
 */
export function toolListPageSchemas(
  lang: Lang,
  url: string,
  opts: {
    name: string
    description: string
    tools: { name: string; description: string; path: string }[]
  }
): Record<string, unknown>[] {
  const lp = langPrefix(lang)
  const out: Record<string, unknown>[] = []

  out.push({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url,
    inLanguage: langTag(lang),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.tools.length,
      itemListElement: opts.tools.map((t, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}${lp}${t.path}`,
        name: t.name,
      })),
    },
  })

  out.push(twoLevelBreadcrumb(lang, url, opts.name))

  return out
}
