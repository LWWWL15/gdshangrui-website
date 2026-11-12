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
import { getSeriesById, getModelById, productSeries } from '@/data/products'
import { getSeoPack } from '@/data/seo'
import {
  toolItems,
  toolName,
  toolDesc,
  pressureCalculatorFaq,
  groundPressureCalculatorFaq,
  faqFor,
} from '@/data/tools'
import { certificates, certificateHolder } from '@/data/certifications'
import {
  seriesPageSchemas,
  seriesIndexPageSchemas,
  calculatorPageSchemas,
  certificationPageSchemas,
  webPageSchemas,
  toolListPageSchemas,
  pick as pickLang,
} from '@/data/schema'

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
// canonical 统一去掉尾斜杠：/cn/ 与 /cn 只能有一个自指，否则是 canonical 冲突
const canonicalUrl = computed(() => {
  const p = route.fullPath.replace(/\/+$/, '')
  return `${SITE_URL}${p || '/'}`
})

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
  // 以下路径原来缺失，会 fallback 到首页标题，导致 TDH 重复
  '/products/series': {
    cn: '全部产品系列 | 热压机、冷压机、多片锯、拼板机 | 上锐机械',
    mic: 'All Product Series | Hot Press, Cold Press, Multi-blade Saw, Splicing | Shang Rui',
    vn: 'Tất cả dòng sản phẩm | Máy ép nóng, ép lạnh, cưa đa lưỡi, ghép ván | Shang Rui',
    ru: 'Все серии продукции | Горячий пресс, Холодный пресс, Многопильный станок | Shang Rui',
  },
  '/tools/pressure-calculator': {
    cn: '热压机压力计算器 | 上锐机械',
    mic: 'Hot Press Pressure Calculator | Shang Rui',
    vn: 'Máy tính lực ép máy ép nóng | Shang Rui',
    ru: 'Калькулятор давления горячего пресса | Shang Rui',
  },
  '/tools/ground-pressure-calculator': {
    cn: '冷压机地面承重计算器 | 上锐机械',
    mic: 'Cold Press Ground Pressure Calculator | Shang Rui',
    vn: 'Máy tính tải nền máy ép lạnh | Shang Rui',
    ru: 'Калькулятор нагрузки на пол холодного пресса | Shang Rui',
  },
  '/certification': {
    cn: 'CE 认证与 ISO 9001 质量管理体系 | 上锐机械',
    mic: 'CE Certification & ISO 9001 Quality Management | Shang Rui',
    vn: 'Chứng nhận CE và ISO 9001 | Shang Rui',
    ru: 'Сертификация CE и ISO 9001 | Shang Rui',
  },
  '/privacy': {
    cn: '隐私政策 | 上锐机械',
    mic: 'Privacy Policy | Shang Rui Machinery',
    vn: 'Chính sách bảo mật | Shang Rui',
    ru: 'Политика конфиденциальности | Shang Rui',
  },
  '/terms': {
    cn: '服务条款 | 上锐机械',
    mic: 'Terms of Service | Shang Rui Machinery',
    vn: 'Điều khoản dịch vụ | Shang Rui',
    ru: 'Условия использования | Shang Rui',
  },
  '/404': {
    cn: '页面未找到 | 上锐机械',
    mic: 'Page Not Found | Shang Rui Machinery',
    vn: 'Không tìm thấy trang | Shang Rui',
    ru: 'Страница не найдена | Shang Rui',
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
  // 以下路径原来缺失，description 会 fallback 到首页描述
  '/products/series': {
    cn: '上锐机械全部产品系列：热压机、冷压机、板式多片锯、拼板机、升降平台、门框组合机及备件，一站配套板式家具整线。',
    mic: 'Shang Rui Machinery full range: hot press, cold press, multi-blade saw, splicing machine, lifting platform, door frame assembly machine and spare parts for panel furniture lines.',
    vn: 'Đầy đủ dòng máy Shang Rui: máy ép nóng, ép lạnh, cưa đa lưỡi, ghép ván, bàn nâng, ráp khung cửa và phụ tùng cho dây chuyền gỗ tấm.',
    ru: 'Полный ряд оборудования Shang Rui: горячие и холодные прессы, многопильные станки, линии сращивания, подъёмные столы, станки сборки дверных коробок и запасные части.',
  },
  '/tools/pressure-calculator': {
    cn: '热压机选型计算器：按板材幅面、层数与工艺要求估算所需压合力与电机功率，快速确定热压机规格。',
    mic: 'Hot press sizing calculator: estimate required press force and motor power from panel size, layer count and process, to pick the right hot press model.',
    vn: 'Máy tính chọn máy ép nóng: ước tính lực ép và công suất động cơ theo khổ ván, số lớp và yêu cầu công nghệ.',
    ru: 'Калькулятор подбора горячего пресса: расчёт усилия прессования и мощности привода по формату плиты, числу слоёв и технологии.',
  },
  '/tools/ground-pressure-calculator': {
    cn: '冷压机地面承重计算器：按压机重量、台面尺寸与地基条件估算所需地面承载力，避免安装后地面开裂。',
    mic: 'Cold press floor load calculator: estimate required floor bearing capacity from machine weight, platen size and ground condition to avoid cracking after installation.',
    vn: 'Máy tính tải nền máy ép lạnh: ước tính sức chịu của nền theo trọng lượng máy, kích thước bàn và điều kiện nền để tránh nứt nền sau lắp đặt.',
    ru: 'Калькулятор нагрузки на пол для холодного пресса: расчёт требуемой несущей способности пола по массе пресса, размеру плиты и состоянию основания.',
  },
  '/certification': {
    cn: '上锐机械持有 CE 认证与 ISO 9001:2015 质量管理体系认证证书，证书编号、认证机构与覆盖产品系列公开可查，热压机、冷压机、板式多片锯等六大系列在列。',
    mic: 'Shang Rui Machinery holds CE certification and ISO 9001:2015 quality management certification. Certificate numbers, issuing bodies and the covered product series — hot press, cold press, multi-blade saw, splicing machine, door frame assembly and hydraulic lifting platform — are published for verification.',
    vn: 'Shang Rui Machinery có chứng nhận CE và hệ thống quản lý chất lượng ISO 9001:2015. Số chứng nhận, cơ quan cấp và các dòng sản phẩm được chứng nhận — máy ép nóng, ép lạnh, cưa đa lưỡi, ghép ván, ráp khung cửa, bàn nâng — đều công khai để tra cứu.',
    ru: 'Shang Rui Machinery имеет сертификаты CE и системы менеджмента качества ISO 9001:2015. Номера сертификатов, выдавшие органы и охваченные серии — горячий пресс, холодный пресс, многопильный станок, пресс для сращивания, станок сборки дверных коробок и гидравлический подъёмный стол — опубликованы для проверки.',
  },
  '/privacy': {
    cn: '上锐机械隐私政策：说明我们收集哪些信息（询盘表单、访问日志）、如何使用、保留多久，以及您在GDPR与个人信息保护法下的查询、更正、删除与复制权利。',
    mic: 'Shang Rui Machinery privacy policy: what we collect (inquiry forms, server logs), how we use and retain it, and your rights to access, correct, delete or copy your data under GDPR and local data protection laws.',
    vn: 'Chính sách bảo mật của Shang Rui: chúng tôi thu thập gì (biểu mẫu tư vấn, nhật ký máy chủ), sử dụng và lưu giữ ra sao, cùng quyền truy cập, sửa, xóa hoặc sao chép dữ liệu của bạn theo GDPR và luật bảo vệ dữ liệu địa phương.',
    ru: 'Политика конфиденциальности Shang Rui: что мы собираем (формы запросов, журналы сервера), как используем и храним, и ваши права на доступ, исправление, удаление или копирование данных согласно GDPR и местным законам о защите данных.',
  },
  '/terms': {
    cn: '上锐机械服务条款：报价与订单效力、付款方式、交货与验收、质保范围（整机12个月、液压18个月）、知识产权、责任限制与适用法律。',
    mic: 'Shang Rui Machinery terms of service: quotation and order validity, payment terms, delivery and acceptance, warranty scope (12 months on the machine, 18 months on hydraulics), intellectual property, liability limits and governing law.',
    vn: 'Điều khoản dịch vụ của Shang Rui: hiệu lực báo giá và đơn hàng, phương thức thanh toán, giao hàng và nghiệm thu, phạm vi bảo hành (12 tháng máy, 18 tháng thủy lực), quyền sở hữu trí tuệ, giới hạn trách nhiệm và luật áp dụng.',
    ru: 'Условия использования Shang Rui: действительность предложений и заказов, способы оплаты, поставка и приёмка, объём гарантии (12 месяцев на машину, 18 на гидравлику), интеллектуальная собственность, ограничение ответственности и применимое право.',
  },
  '/404': {
    cn: '您访问的页面不存在或已移动。请返回首页，或通过产品分类查找热压机、冷压机、多片锯等设备。',
    mic: 'The page you requested does not exist or has moved. Return to the homepage, or browse our product categories for hot press, cold press and multi-blade saw.',
    vn: 'Trang bạn truy cập không tồn tại hoặc đã chuyển. Quay lại trang chủ, hoặc xem các danh mục máy ép nóng, ép lạnh, cưa đa lưỡi.',
    ru: 'Запрашиваемая страница не существует или была перемещена. Вернитесь на главную или посмотрите категории: горячие прессы, холодные прессы, многопильные станки.',
  },
}

// ============================================
// Dynamic Title / Description for Product Pages
// ============================================

// Helper: get spec value by key (tries cn, mic, vn variants)
function getSpecValue(routeLang: 'cn' | 'mic' | 'vn' | 'ru', specs: any[], cnKey: string, micKey: string, vnKey?: string): string | null {
  const spec = specs.find(s => s.keyCn === cnKey || s.keyMic === micKey)
  if (!spec) return null
  if (routeLang === 'cn') return spec.valueCn
  if (routeLang === 'vn') return vnKey ? spec[vnKey] ?? spec.valueMic : spec.valueMic
  if (routeLang === 'ru') return spec.valueRu ?? spec.valueMic
  return spec.valueMic
}

// Build product model page title: "MH3848X120T 热压机 | 上锐机械"
// Priority: SEO content pack (src/data/seo/<modelId>/<lang>.json) → auto-generated fallback.
// Content packs hold independently-researched keywords per language, so they win when present.
function buildProductModelTitle(routeLang: 'cn' | 'mic' | 'vn' | 'ru', series: any, model: any): string {
  const pack = getSeoPack(model.id, routeLang)
  if (pack?.seoTitle) return pack.seoTitle

  const seriesName = routeLang === 'cn' ? series.cn
    : routeLang === 'vn' ? (series.vn || series.mic)
    : routeLang === 'ru' ? (series.ru || series.mic)
    : series.mic
  const modelName = model.model
  if (routeLang === 'cn') return `${modelName} ${seriesName} | 上锐机械`
  if (routeLang === 'vn') return `${modelName} ${seriesName} | Shang Rui Vietnam`
  if (routeLang === 'ru') return `${modelName} ${seriesName} | Shang Rui Machinery`
  return `${modelName} ${seriesName} | Shang Rui Machinery`
}

// Build product model page description
// Priority: series description + key specs (table size, pressure, power, layers)
// Only includes specs that actually exist in the model data
function buildProductModelDesc(routeLang: 'cn' | 'mic' | 'vn' | 'ru', series: any, model: any): string {
  const pack = getSeoPack(model.id, routeLang)
  if (pack?.metaDesc) return pack.metaDesc

  const specs = model.specs || []
  const parts: string[] = []

  // Series description first
  const seriesDesc = routeLang === 'cn' ? series.descCn
    : routeLang === 'vn' ? (series.descVn || series.descMic)
    : routeLang === 'ru' ? (series.descRu || series.descMic)
    : series.descMic
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
function buildProductSeriesTitle(routeLang: 'cn' | 'mic' | 'vn' | 'ru', series: any): string {
  const seriesName = routeLang === 'cn' ? series.cn
    : routeLang === 'vn' ? (series.vn || series.mic)
    : routeLang === 'ru' ? (series.ru || series.mic)
    : series.mic
  if (routeLang === 'cn') return `${seriesName}系列 | 上锐机械木工机械`
  if (routeLang === 'vn') return `${seriesName} | Shang Rui Vietnam`
  if (routeLang === 'ru') return `${seriesName} | Shang Rui Machinery`
  return `${seriesName} Series | Shang Rui Woodworking Machinery`
}

// Build product series page description: use series.desc
function buildProductSeriesDesc(routeLang: 'cn' | 'mic' | 'vn' | 'ru', series: any): string {
  return routeLang === 'cn' ? series.descCn
    : routeLang === 'vn' ? (series.descVn || series.descMic)
    : routeLang === 'ru' ? (series.descRu || series.descMic)
    : series.descMic
}

// Route path helper: strip leading /:lang segment and trailing slash
function getStrippedPath(): string {
  return route.path.replace(/^\/(cn|mic|vn|ru)/, '').replace(/\/$/, '') || '/'
}

// 语言根（/cn、/mic…）的 URL 后缀：根路径用空串，避免出现 /cn/ 与 /cn 两种写法
function getLangSuffix(): string {
  const s = getStrippedPath()
  return s === '/' ? '' : s
}

// Route-level language: use route.params.lang directly (not lang.value)
// This avoids composable timing issues during SSR
function getRouteLang(): 'cn' | 'mic' | 'vn' | 'ru' {
  const l = route.params.lang as string
  if (l === 'cn') return 'cn'
  if (l === 'vn') return 'vn'
  if (l === 'ru') return 'ru'
  return 'mic'
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
  if (routeLang === 'ru') return titleObj.ru
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
  if (routeLang === 'ru') return descObj.ru
  return descObj.mic
})

const ogImage = computed(() => `${SITE_URL}/og-image.jpg`)

// SEO 内容包里的 keywords（该语言为这个型号页独立找的词）
const currentKeywords = computed(() => {
  if (route.params.seriesId && route.params.modelId) {
    const model = getModelById(route.params.seriesId as string, route.params.modelId as string)
    if (model) {
      const pack = getSeoPack(model.id, getRouteLang())
      if (pack?.keywords?.length) return pack.keywords.join(', ')
    }
  }
  return undefined
})

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

// ============================================
// 补齐其余页型的 JSON-LD（2026-11-10 第 7 轮）
// ============================================
//
// ⚠️ 本段只产出 script 标签里的结构化数据。
//    Title / Description / H1 / keywords 一律不动 —— 那是上面 currentTitle /
//    currentDesc / currentKeywords 的职责，观察期（11-08 ~ 11-22）冻结。
//
// 覆盖的页型（其余页型见 jsonLdSchema）：
//   /products/series          → CollectionPage + ItemList + BreadcrumbList
//   /products/:seriesId       → CollectionPage + ItemList + BreadcrumbList
//   /tools                    → CollectionPage + ItemList + BreadcrumbList
//   /tools/pressure-calculator→ WebApplication + FAQPage + BreadcrumbList
//   /tools/ground-pressure-…  → WebApplication + FAQPage + BreadcrumbList
//   /certification            → Organization(含证书凭据) + BreadcrumbList
//   /privacy /terms           → WebPage + BreadcrumbList
//   /gallery                  → WebPage + BreadcrumbList
//
// 不覆盖的页型及原因：
//   /blog   → 带 noindex, follow，不进索引，加 schema 无意义
//   /404    → 同上（noindex）
const extraSchemas = computed<Record<string, unknown>[]>(() => {
  const path = getStrippedPath()
  const routeLang = getRouteLang()
  const url = canonicalUrl.value
  const lp = '/' + routeLang

  // ---- 产品系列页 ----
  // /products/series 是「全部系列」总览，/products/:seriesId 是单个系列
  if (path === '/products/series') {
    return seriesIndexPageSchemas(routeLang, url, {
      name: pickLang(routeLang, '主要产品系列', 'Our Product Lines', 'Dòng sản phẩm chính', 'Основные серии продукции'),
      description: pickLang(
        routeLang,
        '上锐机械全部产品系列：热压机、冷压机、板式多片锯、拼板机、升降平台、门框组合机及备件，一站配套板式家具整线。',
        'Shang Rui Machinery full range: hot press, cold press, multi-blade saw, splicing machine, lifting platform, door frame assembly machine and spare parts for panel furniture lines.',
        'Đầy đủ dòng máy Shang Rui: máy ép nóng, ép lạnh, cưa đa lưỡi, ghép ván, bàn nâng, ráp khung cửa và phụ tùng cho dây chuyền gỗ tấm.',
        'Полный ряд оборудования Shang Rui: горячие и холодные прессы, многопильные станки, линии сращивания, подъёмные столы, станки сборки дверных коробок и запасные части.'
      ),
      series: productSeries.map(s => ({
        id: s.id,
        name: pickLang(routeLang, s.cn, s.mic, s.vn, s.ru),
        description: pickLang(routeLang, s.descCn, s.descMic, s.descVn, s.descRu),
      })),
    })
  }

  // 单个系列页（不含型号页 —— 型号页的 schema 在 ProductModelView 里）
  if (route.params.seriesId && !route.params.modelId && path.startsWith('/products/')) {
    const series = getSeriesById(route.params.seriesId as string)
    if (series) {
      return seriesPageSchemas(routeLang, url, series)
    }
  }

  // ---- 工具列表页 ----
  if (path === '/tools') {
    return toolListPageSchemas(routeLang, url, {
      name: pickLang(routeLang, '实用工具集', 'Collection of useful tools', 'Bộ công cụ hữ ích', 'Набор полезных инструментов'),
      description: pickLang(
        routeLang,
        '上锐机械在线工具：压力计算器等实用工具',
        'Shang Rui Machinery online tools: pressure calculator and other useful tools.',
        'Công cụ trực tuyến của Shang Rui: máy tính áp suất và các công cụ hữu ích khác.',
        'Онлайн-инструменты Shang Rui Machinery: калькулятор давления и другие полезные утилиты.'
      ),
      tools: toolItems.map(t => ({
        name: toolName(t, routeLang),
        description: toolDesc(t, routeLang),
        path: t.path,
      })),
    })
  }

  // ---- 计算器子页 ----
  if (path === '/tools/pressure-calculator') {
    return calculatorPageSchemas(routeLang, url, {
      name: pickLang(routeLang, '压力换算表', 'Pressure Calculator', 'Bảng chuyển đổi áp suất', 'Таблица перевода давления'),
      description: pickLang(
        routeLang,
        '热压机选型计算器：按板材幅面、层数与工艺要求估算所需压合力与电机功率，快速确定热压机规格。',
        'Hot press sizing calculator: estimate required press force and motor power from panel size, layer count and process, to pick the right hot press model.',
        'Máy tính chọn máy ép nóng: ước tính lực ép và công suất động cơ theo khổ ván, số lớp và yêu cầu công nghệ.',
        'Калькулятор подбора горячего пресса: расчёт усилия прессования и мощности привода по формату плиты, числу слоёв и технологии.'
      ),
      faq: faqFor(pressureCalculatorFaq, routeLang),
    })
  }

  if (path === '/tools/ground-pressure-calculator') {
    return calculatorPageSchemas(routeLang, url, {
      name: pickLang(routeLang, '地面承重计算器', 'Ground Pressure Calculator', 'Máy tính áp suất mặt đất', 'Калькулятор давления на грунт'),
      description: pickLang(
        routeLang,
        '冷压机地面承重计算器：按压机重量、台面尺寸与地基条件估算所需地面承载力，避免安装后地面开裂。',
        'Cold press floor load calculator: estimate required floor bearing capacity from machine weight, platen size and ground condition to avoid cracking after installation.',
        'Máy tính tải nền máy ép lạnh: ước tính sức chịu của nền theo trọng lượng máy, kích thước bàn và điều kiện nền để tránh nứt nền sau lắp đặt.',
        'Калькулятор нагрузки на пол для холодного пресса: расчёт требуемой несущей способности пола по массе пресса, размеру плиты и состоянию основания.'
      ),
      faq: faqFor(groundPressureCalculatorFaq, routeLang),
    })
  }

  // ---- 认证页 ----
  if (path === '/certification') {
    return certificationPageSchemas(routeLang, url, {
      organizationName: pickLang(routeLang, certificateHolder.cn, certificateHolder.mic, certificateHolder.vn, certificateHolder.ru),
      pageName: pickLang(routeLang, 'CE 认证与 ISO 9001 质量管理体系', 'CE Certification & ISO 9001 Quality Management', 'Chứng nhận CE và ISO 9001', 'Сертификация CE и ISO 9001'),
      certificates: certificates.map(c => ({
        name: c.name,
        identifier: c.identifier,
        issuedBy: c.issuedBy,
        standards: c.standards,
        // scope / covers 传四语对象，由 certificationPageSchemas 按当前语言取
        scope: c.scope,
        covers: c.covers,
      })),
    })
  }

  // ---- 法务页 ----
  if (path === '/privacy' || path === '/terms') {
    const isPrivacy = path === '/privacy'
    return webPageSchemas(routeLang, url, {
      name: isPrivacy
        ? pickLang(routeLang, '隐私政策', 'Privacy Policy', 'Chính sách bảo mật', 'Политика конфиденциальности')
        : pickLang(routeLang, '服务条款', 'Terms of Service', 'Điều khoản dịch vụ', 'Условия использования'),
      description: isPrivacy
        ? pickLang(
            routeLang,
            '上锐机械隐私政策：说明我们收集哪些信息（询盘表单、访问日志）、如何使用、保留多久，以及您在GDPR与个人信息保护法下的查询、更正、删除与复制权利。',
            'Shang Rui Machinery privacy policy: what we collect (inquiry forms, server logs), how we use and retain it, and your rights to access, correct, delete or copy your data under GDPR and local data protection laws.',
            'Chính sách bảo mật của Shang Rui: chúng tôi thu thập gì (biểu mẫu tư vấn, nhật ký máy chủ), sử dụng và lưu giữ ra sao, cùng quyền truy cập, sửa, xóa hoặc sao chép dữ liệu của bạn theo GDPR và luật bảo vệ dữ liệu địa phương.',
            'Политика конфиденциальности Shang Rui: что мы собираем (формы запросов, журналы сервера), как используем и храним, и ваши права на доступ, исправление, удаление или копирование данных согласно GDPR и местным законам о защите данных.'
          )
        : pickLang(
            routeLang,
            '上锐机械服务条款：报价与订单效力、付款方式、交货与验收、质保范围（整机12个月、液压18个月）、知识产权、责任限制与适用法律。',
            'Shang Rui Machinery terms of service: quotation and order validity, payment terms, delivery and acceptance, warranty scope (12 months on the machine, 18 months on hydraulics), intellectual property, liability limits and governing law.',
            'Điều khoản dịch vụ của Shang Rui: hiệu lực báo giá và đơn hàng, phương thức thanh toán, giao hàng và nghiệm thu, phạm vi bảo hành (12 tháng máy, 18 tháng thủy lực), quyền sở hữu trí tuệ, giới hạn trách nhiệm và luật áp dụng.',
            'Условия использования Shang Rui: действительность предложений и заказов, способы оплаты, поставка и приёмка, объём гарантии (12 месяцев на машину, 18 на гидравлику), интеллектуальная собственность, ограничение ответственности и применимое право.'
          ),
    })
  }

  // ---- 图库页 ----
  if (path === '/gallery') {
    return webPageSchemas(routeLang, url, {
      name: pickLang(routeLang, '出货现场', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок'),
      description: pickLang(
        routeLang,
        '上锐机械出货现场实拍：每一台设备的交付瞬间记录。见证产品打包、物流运输、客户签收。',
        'Shang Rui Machinery delivery gallery: real shots of every equipment shipment. Packing, logistics, customer sign-off.',
        'Thư viện ảnh xuất hàng Shang Rui: ghi lại khoảnh khắc giao hàng thực tế. Đóng gói, vận chuyển, khách hàng ký nhận.',
        'Фотогалерея отгрузок Shang Rui Machinery: реальные кадры каждой поставки. Упаковка, логистика, приёмка клиентом.'
      ),
    })
  }

  void lp
  return []
})

  // Also set html lang attribute via useHead htmlAttrs (works during SSR)
  // Use route.params.lang directly to bypass useLang() composable timing issues
  const htmlLang = computed(() => {
    const routeLang = route.params.lang as string
    return routeLang === 'cn' ? 'zh-CN' : routeLang === 'vn' ? 'vi' : routeLang === 'ru' ? 'ru' : 'en'
  })

  // og:locale —— 社交平台（Facebook / LinkedIn）按语言决定把分享推给哪类受众。
  // 11-12 第15轮补：此前 234 页全部缺失，四语站分享出去没有语言信号。
  // 取值为 OG 标准 locale 码；og:locale:alternate 列出另外三语。
  const ogLocales: Record<string, string> = {
    cn: 'zh_CN',
    mic: 'en_US',
    vn: 'vi_VN',
    ru: 'ru_RU',
  }
  const ogLocale = computed(() => ogLocales[getRouteLang()] || 'en_US')
  const ogLocaleAlternates = computed(() =>
    ['cn', 'mic', 'vn', 'ru'].filter(l => l !== getRouteLang()).map(l => ogLocales[l])
  )

useHead(() => {
  const stripped = getStrippedPath()
  // 博客栏目（列表页 + 详情页 /blog/:slug）整体 noindex：
  // 列表页是栏目入口，详情页虽已补真实文章，但标题仍沿用首页兜底 title，
  // 若被收录会造成 24 个详情页与首页抢同一个标题（TDH 重复）→ 观察期基线被污染。
  // 是否放开收录由主人决定（11-22 后）。robots meta 不在 TDH 冻结范围内。
  const isNoIndex = stripped === '/blog' || stripped.startsWith('/blog/')
  const isRoot = stripped === '/' && route.path === '/'
  const headConfig: any = {
    htmlAttrs: { lang: htmlLang.value },
    title: currentTitle.value,
    meta: [
      { name: 'description', content: currentDesc.value },
      { name: 'keywords', content: currentKeywords.value },
      { name: 'robots', content: isNoIndex ? 'noindex, follow' : undefined },
      { property: 'og:title', content: currentTitle.value },
      { property: 'og:description', content: currentDesc.value },
      { property: 'og:image', content: ogImage.value },
      // 11-12 第15轮补：og:image 实际尺寸 1200×630（已核实 og-image.jpg 像素），
      // 社交平台据此预留版面，避免分享卡片抖动。
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Shang Rui Machinery' },
      { property: 'og:url', content: canonicalUrl.value },
      { property: 'og:type', content: 'website' },
      // 11-12 第15轮补：og:site_name 用站内既有品牌名（四语 footer.copyright 一致）
      { property: 'og:site_name', content: 'Shang Rui Machinery' },
      // 11-12 第15轮补：og:locale 声明本页语言 + 另外三语，社交平台按语言分发给对应受众
      { property: 'og:locale', content: ogLocale.value },
      ...ogLocaleAlternates.value.map(loc => ({ property: 'og:locale:alternate', content: loc })),
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: currentTitle.value },
      { name: 'twitter:description', content: currentDesc.value },
      { name: 'twitter:image', content: ogImage.value },
    ],
    link: [
      // canonical: self-referencing，统一不带尾斜杠（/cn 而非 /cn/）
      { rel: 'canonical', href: canonicalUrl.value },
      // hreflang 四语互指，格式与 canonical / sitemap 完全一致
      ...(isRoot ? [
        { rel: 'alternate', hreflang: 'zh-CN', href: `${SITE_URL}/cn` },
        { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/mic` },
        { rel: 'alternate', hreflang: 'vi', href: `${SITE_URL}/vn` },
        { rel: 'alternate', hreflang: 'ru', href: `${SITE_URL}/ru` },
        { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/mic` },
      ] : [
        {
          rel: 'alternate',
          hreflang: 'zh-CN',
          href: `${SITE_URL}/cn${getLangSuffix()}`,
        },
        {
          rel: 'alternate',
          hreflang: 'en',
          href: `${SITE_URL}/mic${getLangSuffix()}`,
        },
        {
          rel: 'alternate',
          hreflang: 'vi',
          href: `${SITE_URL}/vn${getLangSuffix()}`,
        },
        {
          rel: 'alternate',
          hreflang: 'ru',
          href: `${SITE_URL}/ru${getLangSuffix()}`,
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: `${SITE_URL}/mic${getLangSuffix()}`,
        },
      ]),
    ],
    script: [
      ...(jsonLdSchema.value
        ? [{ type: 'application/ld+json', children: JSON.stringify(jsonLdSchema.value) }]
        : []),
      // 其余页型的结构化数据（2026-11-10 第 7 轮补齐）
      ...extraSchemas.value.map(s => ({
        type: 'application/ld+json',
        children: JSON.stringify(s),
      })),
    ],
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