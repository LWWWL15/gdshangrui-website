<template>
  <LoadingScreen />
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import { computed, watch, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import { useLang } from '@/composables/useLang'
import { getSeriesById, getModelById } from '@/data/products'

const route = useRoute()
const router = useRouter()
const { lang, setLang } = useLang()

// Sync lang from URL before any computed properties (including htmlLang) run.
// This fixes /zh/* pages getting lang="en" because useHead ran before lang was synced.
// In the new useLang(), lang is a computed derived directly from route.params.lang,
// so no extra sync call is required.

// Guard flag to prevent watch firing during initial mount (avoids redirect loops)
const isLangMounted = ref(false)

// Hardcode site URL to avoid SSR window undefined issues
const SITE_URL = 'https://gdshangrui.com'
const canonicalUrl = computed(() => `${SITE_URL}${route.fullPath}`)

// Page-specific titles (static pages only; product model pages are generated dynamically below)
const pageTitleMap: Record<string, { cn: string; mic: string; vn: string; ru: string }> = {
  '/': {
    cn: '木工机械制造商 | 热压机、冷压机 | 上锐机械 (ISO9001 & CE)',
    mic: 'Woodworking Machinery Manufacturer | Hot Press, Cold Press | Shang Rui (ISO9001 & CE)',
    vn: 'Nhà sản xuất Máy móc Gỗ | Máy ép nóng, Máy ép lạnh | Shang Rui (ISO9001 & CE)',
    ru: 'Производитель деревообрабатывающих станков | Горячий пресс, Холодный пресс | Shang Rui (ISO9001 & CE)',
  },
  '/about': {
    cn: '关于上锐机械 - 10+ 年木工设备出口商，成立于2013年',
    mic: 'About Shang Rui Machinery - 10+ Years Woodworking Equipment Exporter Since 2013',
    vn: 'Về Shang Rui Machinery - 10+ Năm Xuất Khẩu Thiết Bị Gỗ, Thành Lập 2013',
    ru: 'О компании Shang Rui Machinery - 10+ лет экспорта деревообрабатывающего оборудования, основана в 2013 году',
  },
  '/products': {
    cn: '木工机械产品 | 热压机、冷压机、多片锯 | 上锐机械',
    mic: 'Woodworking Machinery Products | Hot Press, Cold Press, Multi-blade Saw | Shang Rui',
    vn: 'Sản phẩm Máy móc Gỗ | Máy ép nóng, Máy ép lạnh, Máy cưa đa lưỡi | Shang Rui',
    ru: 'Продукция деревообрабатывающих станков | Горячий пресс, Холодный пресс, Многопильный станок | Shang Rui',
  },
  '/blog': {
    cn: '博客 | 上锐机械',
    mic: 'Blog | Shang Rui Machinery',
    vn: 'Tin tức | Shang Rui Machinery',
    ru: 'Блог | Shang Rui Machinery',
  },
  '/contact': {
    cn: '联系我们 | 上锐机械',
    mic: 'Contact Us | Shang Rui Machinery',
    vn: 'Liên hệ | Shang Rui Machinery',
    ru: 'Связаться с нами | Shang Rui Machinery',
  },
  '/tools': {
    cn: '工具中心 | 上锐机械',
    mic: 'Tools | Shang Rui Machinery',
    vn: 'Công cụ | Shang Rui Machinery',
    ru: 'Инструменты | Shang Rui Machinery',
  },
  '/gallery': {
    cn: '出货现场 | 上锐机械',
    mic: 'Delivery in Action | Shang Rui Machinery',
    vn: 'Hình ảnh xuất hàng | Shang Rui Machinery',
    ru: 'Фото отгрузок | Shang Rui Machinery',
  },
}

// Page-specific descriptions (static pages only; product model pages are generated dynamically below)
const pageDescMap: Record<string, { cn: string; mic: string; vn: string; ru: string }> = {
  '/': {
    cn: '上锐机械是专业的木工机械制造商和出口商，13年行业经验，ISO9001认证，热压机、冷压机、多片锯等设备远销全球',
    mic: 'Shang Rui Machinery is a professional woodworking machinery manufacturer and exporter with 13 years of experience, ISO9001 certified. Hot press, cold press, multi-blade saw exported globally.',
    vn: 'Shang Rui Machinery là nhà sản xuất và xuất khẩu máy móc gỗ chuyên nghiệp với 13 năm kinh nghiệm, chứng nhận ISO9001. Máy ép nóng, máy ép lạnh, máy cưa đa lưỡi xuất khẩu toàn cầu.',
    ru: 'Shang Rui Machinery — профессиональный производитель и экспортёр деревообрабатывающих станков с 13-летним опытом, сертификация ISO9001. Горячие прессы, холодные прессы, многопильные станки поставляются по всему миру.',
  },
  '/about': {
    cn: '了解上锐机械的发展历程，我们是拥有10年以上经验的中国木工机械出口商，专业生产热压机、冷压机等设备',
    mic: 'Learn about Shang Rui Machinery, a Chinese woodworking machinery exporter with 10+ years of experience, specializing in hot press and cold press machines.',
    vn: 'Tìm hiểu về Shang Rui Machinery, nhà xuất khẩu máy móc gỗ Trung Quốc với hơn 10 năm kinh nghiệm, chuyên sản xuất máy ép nóng và máy ép lạnh.',
    ru: 'Узнайте о компании Shang Rui Machinery, китайском экспортёре деревообрабатывающего оборудования с более чем 10-летним опытом, специализирующемся на прессах горячего и холодного прессования.',
  },
  '/products': {
    cn: '上锐机械提供多种木工机械设备：热压机、冷压机、多片锯、提升平台、拼接机、门框机等，品质保证',
    mic: 'Shang Rui Machinery offers woodworking equipment: hot press, cold press, multi-blade saw, lifting platform, splicing machine, door frame machine. Quality guaranteed.',
    vn: 'Shang Rui Machinery cung cấp thiết bị máy móc gỗ: máy ép nóng, máy ép lạnh, máy cưa đa lưỡi, bục nâng, máy ghép gỗ, máy ghép khung cửa. Chất lượng đảm bảo.',
    ru: 'Shang Rui Machinery предлагает деревообрабатывающее оборудование: прессы горячего и холодного прессования, многопильные станки, подъёмные столы, линии сращивания, станки для сборки дверных коробок. Гарантия качества.',
  },
  '/blog': {
    cn: '上锐机械博客分享木工机械行业资讯、技术文章和公司动态',
    mic: 'Shang Rui Machinery blog shares woodworking industry news, technical articles and company updates.',
    vn: 'Blog Shang Rui Machinery chia sẻ tin tức ngành máy móc gỗ, bài viết kỹ thuật và cập nhật công ty.',
    ru: 'Блог Shang Rui Machinery: новости деревообрабатывающей отрасли, технические статьи и обновления компании.',
  },
  '/contact': {
    cn: '联系上锐机械，获取木工机械产品报价和技术支持',
    mic: 'Contact Shang Rui Machinery for woodworking machinery quotes and technical support.',
    vn: 'Liên hệ Shang Rui Machinery để nhận báo giá và hỗ trợ kỹ thuật máy móc gỗ.',
    ru: 'Свяжитесь с Shang Rui Machinery для получения коммерческого предложения на деревообрабатывающее оборудование и технической поддержки.',
  },
  '/tools': {
    cn: '上锐机械在线工具：压力计算器等实用工具',
    mic: 'Shang Rui Machinery online tools: pressure calculator and other useful tools.',
    vn: 'Công cụ trực tuyến của Shang Rui: máy tính áp suất và các công cụ hữu ích khác.',
    ru: 'Онлайн-инструменты Shang Rui Machinery: калькулятор давления и другие полезные утилиты.',
  },
  '/gallery': {
    cn: '上锐机械出货现场实拍：每一台设备的交付瞬间记录。见证产品打包、物流运输、客户签收。',
    mic: 'Shang Rui Machinery delivery gallery: real shots of every equipment shipment. Packing, logistics, customer sign-off.',
    vn: 'Thư viện ảnh xuất hàng Shang Rui: ghi lại khoảnh khắc giao hàng thực tế. Đóng gói, vận chuyển, khách hàng ký nhận.',
    ru: 'Фотогалерея отгрузок Shang Rui Machinery: реальные кадры каждой поставки. Упаковка, логистика, приёмка клиентом.',
  },
}

// ============================================
// Dynamic Title / Description for Product Pages
// ============================================

// Helper: get spec value by key (tries cn, mic, vn variants)
function getSpecValue(routeLang: 'cn' | 'mic' | 'vn', specs: any[], cnKey: string, micKey: string, vnKey?: string): string | null {
  const spec = specs.find(s => s.keyCn === cnKey || s.keyMic === micKey)
  if (!spec) return null
  if (routeLang === 'cn') return spec.valueCn
  if (routeLang === 'vn') return vnKey ? spec[vnKey] ?? spec.valueMic : spec.valueMic
  return spec.valueMic
}

// Build product model page title: "MH3848X120T 热压机 | 上锐机械"
function buildProductModelTitle(routeLang: 'cn' | 'mic' | 'vn', series: any, model: any): string {
  const seriesName = routeLang === 'cn' ? series.cn : routeLang === 'vn' ? (series.vn || series.mic) : series.mic
  const modelName = model.model
  if (routeLang === 'cn') return `${modelName} ${seriesName} | 上锐机械`
  if (routeLang === 'vn') return `${modelName} ${seriesName} | Shang Rui Vietnam`
  return `${modelName} ${seriesName} | Shang Rui Machinery`
}

// Build product model page description
// Priority: series description + key specs (table size, pressure, power, layers)
// Only includes specs that actually exist in the model data
function buildProductModelDesc(routeLang: 'cn' | 'mic' | 'vn', series: any, model: any): string {
  const specs = model.specs || []
  const parts: string[] = []

  // Series description first
  const seriesDesc = routeLang === 'cn' ? series.descCn : routeLang === 'vn' ? (series.descVn || series.descMic) : series.descMic
  if (seriesDesc) parts.push(seriesDesc)

  // Table size (try multiple possible key names)
  const tableSize =
    getSpecValue(routeLang, specs, '台面尺寸', 'Table Size') ||
    getSpecValue(routeLang, specs, '工作台尺寸', 'Table Size') ||
    getSpecValue(routeLang, specs, '压板尺寸', 'Press Plate Size')
  if (tableSize) parts.push(routeLang === 'cn' ? `台面尺寸${tableSize}` : `Table: ${tableSize}`)

  // Max pressure
  const pressure = getSpecValue(routeLang, specs, '最大压力', 'Max Pressure')
  if (pressure) parts.push(routeLang === 'cn' ? `最大压力${pressure}` : `Max Pressure: ${pressure}`)

  // Power (try multiple possible key names)
  const power =
    getSpecValue(routeLang, specs, '功率', 'Power') ||
    getSpecValue(routeLang, specs, '电机功率', 'Motor Power') ||
    getSpecValue(routeLang, specs, '液压电机功率', 'Hydraulic Motor Power') ||
    getSpecValue(routeLang, specs, '发热管功率', 'Heating Tube Power')
  if (power) parts.push(routeLang === 'cn' ? `功率${power}` : `Power: ${power}`)

  // Layers / specification (try multiple possible key names)
  const layers =
    getSpecValue(routeLang, specs, '层数', 'Layers') ||
    getSpecValue(routeLang, specs, '规格', 'Specification') ||
    getSpecValue(routeLang, specs, '层', 'Layers')
  if (layers) parts.push(routeLang === 'cn' ? layers : `(${layers})`)

  return parts.join(' | ')
}

// Build product series page title: "热压机系列 | 上锐机械木工机械"
function buildProductSeriesTitle(routeLang: 'cn' | 'mic' | 'vn', series: any): string {
  const seriesName = routeLang === 'cn' ? series.cn : routeLang === 'vn' ? (series.vn || series.mic) : series.mic
  if (routeLang === 'cn') return `${seriesName}系列 | 上锐机械木工机械`
  if (routeLang === 'vn') return `${seriesName} | Shang Rui Vietnam`
  return `${seriesName} Series | Shang Rui Woodworking Machinery`
}

// Build product series page description: use series.desc
function buildProductSeriesDesc(routeLang: 'cn' | 'mic' | 'vn', series: any): string {
  return routeLang === 'cn' ? series.descCn : routeLang === 'vn' ? (series.descVn || series.descMic) : series.descMic
}

// Route path helper: strip leading /:lang segment and trailing slash
function getStrippedPath(): string {
  return route.path.replace(/^\/(cn|mic|vn)/, '').replace(/\/$/, '') || '/'
}

// Route-level language: use route.params.lang directly (not lang.value)
// This avoids composable timing issues during SSR
function getRouteLang(): 'cn' | 'mic' | 'vn' {
  const l = route.params.lang as string
  return l === 'cn' ? 'cn' : l === 'vn' ? 'vn' : 'mic'
}

// ============================================
// Title and Description computed properties
// ============================================

const currentTitle = computed(() => {
  const routeLang = getRouteLang()

  // Product model page: /zh/products/hot-press/mh3848x120t
  if (route.params.seriesId && route.params.modelId) {
    const series = getSeriesById(route.params.seriesId as string)
    const model = getModelById(route.params.seriesId as string, route.params.modelId as string)
    if (series && model) {
      return buildProductModelTitle(routeLang, series, model)
    }
  }

  // Product series page: /zh/products/hot-press (no modelId)
  if (route.params.seriesId && route.path.includes('/products/')) {
    const series = getSeriesById(route.params.seriesId as string)
    if (series) {
      return buildProductSeriesTitle(routeLang, series)
    }
  }

  // Static page fallback
  const path = getStrippedPath()
  const titleObj = pageTitleMap[path] || pageTitleMap['/']
  if (routeLang === 'cn') return titleObj.cn
  if (routeLang === 'vn') return titleObj.vn
  return titleObj.mic
})

const currentDesc = computed(() => {
  const routeLang = getRouteLang()

  // Product model page
  if (route.params.seriesId && route.params.modelId) {
    const series = getSeriesById(route.params.seriesId as string)
    const model = getModelById(route.params.seriesId as string, route.params.modelId as string)
    if (series && model) {
      return buildProductModelDesc(routeLang, series, model)
    }
  }

  // Product series page
  if (route.params.seriesId && route.path.includes('/products/')) {
    const series = getSeriesById(route.params.seriesId as string)
    if (series) {
      return buildProductSeriesDesc(getRouteLang(), series)
    }
  }

  // Static page fallback
  const path = getStrippedPath()
  const descObj = pageDescMap[path] || pageDescMap['/']
  if (routeLang === 'cn') return descObj.cn
  if (routeLang === 'vn') return descObj.vn
  return descObj.mic
})

const ogImage = computed(() => `${SITE_URL}/og-image.jpg`)

// Organization Schema (for homepage)
const organizationSchema = computed(() => {
  const routeLang = getRouteLang()
  return {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Foshan Shunde SHANGRUI Machinery Co., Ltd.',
  alternateName: '上锐机械',
  url: canonicalUrl.value,
  logo: `${SITE_URL}/logo.png`,
  description: routeLang === 'cn'
    ? '上锐机械是专业的木工机械制造商和出口商，13年行业经验，ISO9001认证'
    : 'Shang Rui Machinery is a professional woodworking machinery manufacturer and exporter with 13 years of experience, ISO9001 certified.',
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
    availableLanguage: ['Chinese', 'English', 'Vietnamese'],
  },
  sameAs: [
    'https://www.facebook.com/share/1BREpu7DUr/?mibextid=wwXIfr',
    'https://www.instagram.com/shangruijx?igsh=Z2YxYnRuN3ljYnBj&utm_source=qr',
    'https://youtube.com/@shangrui-machinery?si=StEF7rJoldH0kP0K',
    'https://wa.me/8613929151908',
  ],
}
})

// ContactPage Schema (for contact page)
const contactPageSchema = computed(() => {
  const routeLang = getRouteLang()
  return {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'WebPage'],
  name: 'Foshan Shunde SHANGRUI Machinery Co., Ltd. - Contact',
  description: routeLang === 'cn'
    ? '联系上锐机械，获取木工机械产品报价和技术支持'
    : 'Contact Shang Rui Machinery for woodworking machinery quotes and technical support.',
  url: canonicalUrl.value,
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
    availableLanguage: ['Chinese', 'English'],
    areaServed: 'Worldwide',
  },
  sameAs: [
    'https://www.facebook.com/share/1BREpu7DUr/?mibextid=wwXIfr',
    'https://www.instagram.com/shangruijx?igsh=Z2YxYnRuN3ljYnBj&utm_source=qr',
    'https://youtube.com/@shangrui-machinery?si=StEF7rJoldH0kP0K',
    'https://wa.me/8613929151908',
  ],
}
})

// AboutPage Schema (for about page)
const aboutPageSchema = computed(() => {
  const routeLang = getRouteLang()
  return {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Foshan Shunde SHANGRUI Machinery Co., Ltd.',
    alternateName: '上锐机械',
    url: canonicalUrl.value,
    logo: `${SITE_URL}/favicon.jpg`,
    foundingDate: '2013',
    description: routeLang === 'cn'
      ? '了解上锐机械的发展历程，我们是拥有10年以上经验的中国木工机械出口商，专业生产热压机、冷压机等设备'
      : 'Shang Rui Machinery is a Chinese woodworking machinery exporter with 10+ years of experience, specializing in hot press and cold press machines.',
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
      availableLanguage: ['Chinese', 'English'],
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.facebook.com/share/1BREpu7DUr/?mibextid=wwXIfr',
      'https://www.instagram.com/shangruijx?igsh=Z2YxYnRuN3ljYnBj&utm_source=qr',
      'https://youtube.com/@shangrui-machinery?si=StEF7rJoldH0kP0K',
      'https://wa.me/8613929151908',
    ],
  },
}
})

// Product Schema (for products page)
const productSchema = computed(() => {
  const routeLang = getRouteLang()
  const langPrefix = routeLang === 'cn' ? '/cn' : routeLang === 'vn' ? '/vn' : routeLang === 'ru' ? '/ru' : '/mic'
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: routeLang === 'cn' ? '木工机械产品' : routeLang === 'vn' ? 'Sản phẩm máy móc gỗ' : 'Woodworking Machinery Products',
    description: currentDesc.value,
    url: canonicalUrl.value,
    itemListElement: [
      { '@type': 'Product', name: 'Hot Press Machine', url: `${SITE_URL}${langPrefix}/products/hot-press` },
      { '@type': 'Product', name: 'Cold Press Machine', url: `${SITE_URL}${langPrefix}/products/cold-press` },
      { '@type': 'Product', name: 'Multi-blade Saw', url: `${SITE_URL}${langPrefix}/products/multi-blade-saw` },
      { '@type': 'Product', name: 'Lifting Platform', url: `${SITE_URL}${langPrefix}/products/lifting-platform` },
    ],
  }
})

// Route-based JSON-LD
const jsonLdSchema = computed(() => {
  const path = getStrippedPath()
  const routeLang = getRouteLang()

  if (path === '/') {
    return organizationSchema.value
  } else if (path === '/about') {
    return aboutPageSchema.value
  } else if (path === '/contact') {
    return contactPageSchema.value
  } else if (path === '/products') {
    return productSchema.value
  }
  return null
})

  // Also set html lang attribute via useHead htmlAttrs (works during SSR)
  // Use route.params.lang directly to bypass useLang() composable timing issues
  const htmlLang = computed(() => {
    const routeLang = route.params.lang as string
    return routeLang === 'cn' ? 'zh-CN' : routeLang === 'vn' ? 'vi' : routeLang === 'ru' ? 'ru' : 'en'
  })

useHead(() => {
  const stripped = getStrippedPath()
  const isNoIndex = stripped === '/blog'
  const isRoot = stripped === '/' && route.path === '/'
  const headConfig: any = {
    htmlAttrs: { lang: htmlLang.value },
    title: currentTitle.value,
    meta: [
      { name: 'description', content: currentDesc.value },
      { name: 'robots', content: isNoIndex ? 'noindex, follow' : undefined },
      { property: 'og:title', content: currentTitle.value },
      { property: 'og:description', content: currentDesc.value },
      { property: 'og:image', content: ogImage.value },
      { property: 'og:url', content: canonicalUrl.value },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: currentTitle.value },
      { name: 'twitter:description', content: currentDesc.value },
      { name: 'twitter:image', content: ogImage.value },
    ],
    link: [
      // canonical: self-referencing for root / and language roots /zh/ /en/
      { rel: 'canonical', href: isRoot || stripped === '/' ? canonicalUrl.value : canonicalUrl.value },
      // hreflang for root /: point to /zh/ and /en/ to help Google understand language versions
      ...(isRoot ? [
        { rel: 'alternate', hreflang: 'zh-CN', href: `${SITE_URL}/cn/` },
        { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/mic/` },
        { rel: 'alternate', hreflang: 'vi', href: `${SITE_URL}/vn/` },
        { rel: 'alternate', hreflang: 'ru', href: `${SITE_URL}/ru/` },
        { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/mic/` },
      ] : [
        {
          rel: 'alternate',
          hreflang: 'zh-CN',
          href: `${SITE_URL}/cn${getStrippedPath() || '/'}`,
        },
        {
          rel: 'alternate',
          hreflang: 'en',
          href: `${SITE_URL}/mic${getStrippedPath() || '/'}`,
        },
        {
          rel: 'alternate',
          hreflang: 'vi',
          href: `${SITE_URL}/vn${getStrippedPath() || '/'}`,
        },
        {
          rel: 'alternate',
          hreflang: 'ru',
          href: `${SITE_URL}/ru${getStrippedPath() || '/'}`,
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: `${SITE_URL}/mic${getStrippedPath() || '/'}`,
        },
      ]),
    ],
    script: jsonLdSchema.value
      ? [{ type: 'application/ld+json', children: JSON.stringify(jsonLdSchema.value) }]
      : [],
  }
  return headConfig
})

// Sync lang from URL to store AND force update <html lang> attribute
// This fixes /en/ pages incorrectly showing <html lang="zh-CN">
onMounted(() => {
  document.documentElement.lang = lang.value === 'cn' ? 'zh-CN' : lang.value === 'vn' ? 'vi' : 'en'
  isLangMounted.value = true
})

watch(() => lang.value, (newLang) => {
  if (!isLangMounted.value) return
  document.documentElement.lang = newLang === 'cn' ? 'zh-CN' : newLang === 'vn' ? 'vi' : 'en'
  if (newLang === 'cn' || newLang === 'mic' || newLang === 'vn') {
    setLang(newLang)
  }
})

watch(() => route.params.lang, (newLang) => {
  if (!isLangMounted.value) return
  if (newLang === 'cn' || newLang === 'mic' || newLang === 'vn') {
    setLang(newLang)
  }
})

// Scroll to top on navigation
router.afterEach(() => {
  window.scrollTo({ top: 0 })
})
</script>