// 博客文章数据 —— 内容全部来自主人提供的真实素材，不编造。
// 当前唯一一篇：公众号「上锐机械」2025-02-28《公司介绍》（主人给了链接并确认用它补博客）。
// 文章结构沿用 BlogView/BlogDetailView 的四语字段（titleCn/titleMic/…），
// 微信原文只有中文 → mic/vn/ru 为忠实翻译，事实数据（成立年份/地址/证书/市场）逐字对齐原文。
// 注意：本页当前整体 noindex（LangLayout isNoIndex），先有真实内容，是否放开收录由主人后续决定。

export interface BlogArticle {
  id: number
  slug: string
  region: string
  regionRu: string
  icon: string
  productCn: string
  productMic: string
  titleCn: string
  titleMic: string
  titleRu?: string
  descCn: string
  descMic: string
  descRu?: string
  contentCn: string
  contentMic: string
  contentRu?: string
  solutionCn: string
  solutionMic: string
  solutionRu?: string
  resultsCn: string
  resultsMic: string
  resultsRu?: string
  feedbackCn: string
  feedbackMic: string
  feedbackRu?: string
  customerName: string
  customerNameRu: string
  date: string
  productId: string
  color: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    slug: 'shangrui-company-introduction-000001',
    region: '🇨🇳 广东佛山',
    regionRu: 'Фошань, Гуандун, Китай',
    icon: '🏭',
    productCn: '公司介绍',
    productMic: 'Company Profile',
    titleCn: '上锐机械公司介绍：扎根顺德伦教的木工机械制造企业',
    titleMic: 'About Shangrui Machinery: Woodworking Equipment Manufacturer in Lunjiao, Shunde',
    titleRu: 'О компании Shangrui Machinery: производитель деревообрабатывающего оборудования в Лунцзяо, Шунде',
    descCn: '佛山市顺德区上锐机械有限公司成立于2013年，专注木工设备研发制造十余年，产品远销全球20多个国家和地区。',
    descMic: 'Foshan Shunde Shangrui Machinery Co., Ltd., founded in 2013, has specialized in woodworking equipment for over a decade, exporting to 20+ countries and regions.',
    descRu: 'Foshan Shunde Shangrui Machinery Co., Ltd., основанная в 2013 году, более десяти лет специализируется на деревообрабатывающем оборудовании и экспортирует продукцию более чем в 20 стран.',
    contentCn: '在"中国木工机械重镇"顺德伦教，有这样一家企业：专注木工设备研发制造十余年，以创新技术赋能家具产业升级——它就是佛山市顺德区上锐机械有限公司。公司成立于2013年，扎根于广东省佛山市顺德区伦教新塘村世龙集约工业区，是专业从事木竹材加工机械、金属加工机械制造的科技型企业。',
    contentMic: 'In Lunjiao, Shunde — known as "China\'s woodworking machinery hub" — Foshan Shunde Shangrui Machinery Co., Ltd. has focused on the R&D and manufacturing of woodworking equipment for over a decade, empowering the upgrading of the furniture industry with innovative technology. Founded in 2013 and based in Shilong Intensive Industrial Zone, Xintang Village, Lunjiao, Shunde, Foshan, Guangdong, the company is a technology-driven manufacturer of wood and bamboo processing machinery as well as metal processing machinery.',
    contentRu: 'В Лунцзяо, Шунде — «центре деревообрабатывающего станкостроения Китая» — компания Foshan Shunde Shangrui Machinery Co., Ltd. более десяти лет занимается разработкой и производством деревообрабатывающего оборудования, содействуя модернизации мебельной отрасли за счёт инновационных технологий. Компания основана в 2013 году и расположена в промышленной зоне Шилун, деревня Синьтан, Лунцзяо, Шунде, Фошань, провинция Гуандун. Это технологичное предприятие по производству оборудования для обработки древесины, бамбука и металла.',
    solutionCn: '公司核心产品覆盖三大系列：冷压机系列，适用于板材压合工艺；智能热压机系列，加热均匀、效率高，适用于贴面板、胶合板、密度板等产品的生产；板式多片锯系列，实现高效开料。三大系列一站配套，覆盖板式家具生产的关键工序。',
    solutionMic: 'The company\'s core products cover three major lines: the cold press series for panel pressing; the intelligent hot press series with uniform heating and high efficiency, suited to veneered panels, plywood and MDF production; and the multi-blade saw series for high-efficiency cutting. Together they form a one-stop configuration covering the key processes of panel furniture production.',
    solutionRu: 'Основная продукция компании охватывает три серии: серия холодных прессов для прессования плит; серия интеллектуальных горячих прессов с равномерным нагревом и высокой производительностью для производства шпонированных панелей, фанеры и MDF; серия многопильных станков для эффективного раскроя. Вместе они образуют комплексное решение, охватывающее ключевые этапы производства панельной мебели.',
    resultsCn: '凭借精工品质，上锐机械的产品已远销东南亚、中东、非洲等20多个国家和地区，并支持个性化定制、跨境物流配送与多语言技术文档，为全球家具厂商提供可靠的板式家具生产设备。',
    resultsMic: 'With refined craftsmanship, Shangrui Machinery\'s products have been exported to more than 20 countries and regions across Southeast Asia, the Middle East and Africa. The company supports customized configurations, cross-border logistics and multilingual technical documentation, providing reliable panel furniture production equipment for furniture manufacturers worldwide.',
    resultsRu: 'Благодаря качеству изготовления продукция Shangrui Machinery экспортируется более чем в 20 стран и регионов Юго-Восточной Азии, Ближнего Востока и Африки. Компания поддерживает индивидуальную конфигурацию, трансграничную логистику и многоязычную техническую документацию, обеспечивая производителей мебели по всему миру надёжным оборудованием.',
    feedbackCn: '上上之选，锐意进取。上锐机械持续以创新技术赋能家具产业升级。',
    feedbackMic: '"Shang Shang Zhi Xuan, Rui Yi Jin Qu" — the best choice, forging ahead with determination. Shangrui Machinery continues to empower the upgrading of the furniture industry with innovative technology.',
    feedbackRu: '«Лучший выбор — решительное движение вперёд». Shangrui Machinery продолжает содействовать модернизации мебельной отрасли инновационными технологиями.',
    customerName: '佛山市顺德区上锐机械有限公司',
    customerNameRu: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
    date: '2025-02',
    productId: 'hot-press',
    color: 'linear-gradient(135deg, #1a2744, #1a6fd4)',
  },
]

export default blogArticles
