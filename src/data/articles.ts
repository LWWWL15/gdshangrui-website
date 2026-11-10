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
  /** 越南语地区标签（2026-11-11 补：mic/vn/ru 页原本都显示中文「🇨🇳 广东佛山」） */
  regionVn?: string
  /** 英语地区标签 */
  regionMic?: string
  icon: string
  productCn: string
  productMic: string
  /** 越南语产品标签（2026-11-11 补：vn/ru 页原本都显示英文） */
  productVn?: string
  /** 俄语产品标签 */
  productRu?: string
  titleCn: string
  titleMic: string
  titleRu?: string
  titleVn?: string
  descCn: string
  descMic: string
  descRu?: string
  descVn?: string
  contentCn: string
  contentMic: string
  contentRu?: string
  contentVn?: string
  solutionCn: string
  solutionMic: string
  solutionRu?: string
  solutionVn?: string
  resultsCn: string
  resultsMic: string
  resultsRu?: string
  resultsVn?: string
  feedbackCn: string
  feedbackMic: string
  feedbackRu?: string
  feedbackVn?: string
  customerName: string
  customerNameRu: string
  date: string
  productId: string
  productSeries?: string
  color: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    slug: 'shangrui-company-introduction-000001',
    region: '🇨🇳 广东佛山',
    regionRu: 'Фошань, Гуандун, Китай',
    regionMic: '🇨🇳 Foshan, Guangdong, China',
    regionVn: '🇨🇳 Phật Sơn, Quảng Đông, Trung Quốc',
    icon: '🏭',
    productCn: '公司介绍',
    productMic: 'Company Profile',
    productVn: 'Giới thiệu công ty',
    productRu: 'О компании',
    titleCn: '上锐机械公司介绍：扎根顺德伦教的木工机械制造企业',
    titleMic: 'About Shangrui Machinery: Woodworking Equipment Manufacturer in Lunjiao, Shunde',
    titleRu: 'О компании Shangrui Machinery: производитель деревообрабатывающего оборудования в Лунцзяо, Шунде',
    titleVn: 'Giới thiệu Shangrui Machinery: nhà sản xuất máy gỗ tại Lunjiao, Thuận Đức',
    descCn: '佛山市顺德区上锐机械有限公司成立于2013年，专注木工设备研发制造十余年，产品远销全球20多个国家和地区。',
    descMic: 'Foshan Shunde Shangrui Machinery Co., Ltd., founded in 2013, has specialized in woodworking equipment for over a decade, exporting to 20+ countries and regions.',
    descRu: 'Foshan Shunde Shangrui Machinery Co., Ltd., основанная в 2013 году, более десяти лет специализируется на деревообрабатывающем оборудовании и экспортирует продукцию более чем в 20 стран.',
    descVn: 'Công ty TNHH Máy móc Thượng Nhuếch, Quảng Đông, thành lập năm 2013, chuyên về thiết bị chế biến gỗ hơn một thập kỷ, xuất khẩu sang hơn 20 quốc gia và vùng lãnh thổ.',
    contentCn: '在"中国木工机械重镇"顺德伦教，有这样一家企业：专注木工设备研发制造十余年，以创新技术赋能家具产业升级——它就是佛山市顺德区上锐机械有限公司。公司成立于2013年，扎根于广东省佛山市顺德区伦教新塘村世龙集约工业区，是专业从事木竹材加工机械、金属加工机械制造的科技型企业。',
    contentMic: 'In Lunjiao, Shunde — known as "China\'s woodworking machinery hub" — Foshan Shunde Shangrui Machinery Co., Ltd. has focused on the R&D and manufacturing of woodworking equipment for over a decade, empowering the upgrading of the furniture industry with innovative technology. Founded in 2013 and based in Shilong Intensive Industrial Zone, Xintang Village, Lunjiao, Shunde, Foshan, Guangdong, the company is a technology-driven manufacturer of wood and bamboo processing machinery as well as metal processing machinery.',
    contentRu: 'В Лунцзяо, Шунде — «центре деревообрабатывающего станкостроения Китая» — компания Foshan Shunde Shangrui Machinery Co., Ltd. более десяти лет занимается разработкой и производством деревообрабатывающего оборудования, содействуя модернизации мебельной отрасли за счёт инновационных технологий. Компания основана в 2013 году и расположена в промышленной зоне Шилун, деревня Синьтан, Лунцзяо, Шунде, Фошань, провинция Гуандун. Это технологичное предприятие по производству оборудования для обработки древесины, бамбука и металла.',
    contentVn: 'Tại Lunjiao, Thuận Đức — "trung tâm máy móc chế biến gỗ của Trung Quốc" — Công ty TNHH Máy móc Thượng Nhuếch, Quảng Đông đã tập trung nghiên cứu phát triển và sản xuất thiết bị chế biến gỗ hơn mười năm, thúc đẩy nâng cấp ngành công nghiệp nội thất bằng công nghệ đổi mới. Thành lập năm 2013, trụ sở tại Khu công nghiệp tập trung Thạch Long, thôn Tân Đường, Lunjiao, Thuận Đức, Phật Sơn, Quảng Đông, công ty là doanh nghiệp công nghệ chuyên sản xuất máy chế biến gỗ, tre và máy chế biến kim loại.',
    solutionCn: '公司核心产品覆盖三大系列：冷压机系列，适用于板材压合工艺；智能热压机系列，加热均匀、效率高，适用于贴面板、胶合板、密度板等产品的生产；板式多片锯系列，实现高效开料。三大系列一站配套，覆盖板式家具生产的关键工序。',
    solutionMic: 'The company\'s core products cover three major lines: the cold press series for panel pressing; the intelligent hot press series with uniform heating and high efficiency, suited to veneered panels, plywood and MDF production; and the multi-blade saw series for high-efficiency cutting. Together they form a one-stop configuration covering the key processes of panel furniture production.',
    solutionRu: 'Основная продукция компании охватывает три серии: серия холодных прессов для прессования плит; серия интеллектуальных горячих прессов с равномерным нагревом и высокой производительностью для производства шпонированных панелей, фанеры и MDF; серия многопильных станков для эффективного раскроя. Вместе они образуют комплексное решение, охватывающее ключевые этапы производства панельной мебели.',
    solutionVn: 'Sản phẩm cốt lõi của công ty bao gồm ba dòng lớn: dòng máy ép lạnh dùng cho công nghệ ép tấm; dòng máy ép nóng thông minh với gia nhiệt đồng đều, hiệu suất cao, phù hợp sản xuất tấm dán, ván dán, ván MDF; dòng cưa nhiều lưỡi tấm mang lại hiệu quả cắt vật liệu cao. Ba dòng sản phẩm cấu hình một bước, bao trùm các công đoạn then chốt trong sản xuất nội thất tấm.',
    resultsCn: '凭借精工品质，上锐机械的产品已远销东南亚、中东、非洲等20多个国家和地区，并支持个性化定制、跨境物流配送与多语言技术文档，为全球家具厂商提供可靠的板式家具生产设备。',
    resultsMic: 'With refined craftsmanship, Shangrui Machinery\'s products have been exported to more than 20 countries and regions across Southeast Asia, the Middle East and Africa. The company supports customized configurations, cross-border logistics and multilingual technical documentation, providing reliable panel furniture production equipment for furniture manufacturers worldwide.',
    resultsRu: 'Благодаря качеству изготовления продукция Shangrui Machinery экспортируется более чем в 20 стран и регионов Юго-Восточной Азии, Ближнего Востока и Африки. Компания поддерживает индивидуальную конфигурацию, трансграничную логистику и многоязычную техническую документацию, обеспечивая производителей мебели по всему миру надёжным оборудованием.',
    resultsVn: 'Nhờ chất lượng chế tác tinh xảo, sản phẩm của Shangrui Machinery đã xuất khẩu sang hơn 20 quốc gia và vùng lãnh thổ ở Đông Nam Á, Trung Đông và châu Phi, hỗ trợ cấu hình theo yêu cầu, logistics xuyên biên giới và tài liệu kỹ thuật đa ngôn ngữ, cung cấp thiết bị sản xuất nội thất tấm đáng tin cậy cho các nhà sản xuất nội thất trên toàn cầu.',
    feedbackCn: '上上之选，锐意进取。上锐机械持续以创新技术赋能家具产业升级。',
    feedbackMic: '"Shang Shang Zhi Xuan, Rui Yi Jin Qu" — the best choice, forging ahead with determination. Shangrui Machinery continues to empower the upgrading of the furniture industry with innovative technology.',
    feedbackRu: '«Лучший выбор — решительное движение вперёд». Shangrui Machinery продолжает содействовать модернизации мебельной отрасли инновационными технологиями.',
    feedbackVn: '"Lựa chọn tốt nhất, vững bước tiến lên". Shangrui Machinery tiếp tục thúc đẩy nâng cấp ngành nội thất bằng công nghệ đổi mới.',
    customerName: '佛山市顺德区上锐机械有限公司',
    customerNameRu: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
    date: '2025-02',
    productId: 'hot-press',
    productSeries: 'hot-press',
    color: 'linear-gradient(135deg, #1a2744, #1a6fd4)',
  },
  {
    // 公众号 2025-03-04《MH3248冷压机：家具制造高效解决方案》
    id: 2,
    slug: 'mh3248-cold-press-solution-000002',
    region: '🇨🇳 广东佛山',
    regionRu: 'Фошань, Гуандун, Китай',
    regionMic: '🇨🇳 Foshan, Guangdong, China',
    regionVn: '🇨🇳 Phật Sơn, Quảng Đông, Trung Quốc',
    icon: '🔶',
    productCn: '冷压机',
    productMic: 'Cold Press',
    productVn: 'Máy ép lạnh',
    productRu: 'Холодный пресс',
    titleCn: 'MH3248系列液压冷压机：家具制造的高效解决方案',
    titleMic: 'MH3248 Hydraulic Cold Press: An Efficient Solution for Furniture Manufacturing',
    titleRu: 'Гидравлический холодный пресс MH3248: эффективное решение для производства мебели',
    titleVn: 'Máy ép lạnh thủy lực MH3248: giải pháp hiệu quả cho sản xuất nội thất',
    descCn: 'MH3248系列液压冷压机：压力波动≤0.5MPa，成品合格率超99%，支持非标定制，最快5天交付。',
    descMic: 'MH3248 hydraulic cold press series: pressure fluctuation ≤0.5MPa, over 99% pass rate, non-standard customization available, delivery as fast as 5 days.',
    descRu: 'Серия гидравлических холодных прессов MH3248: колебание давления ≤0,5 МПа, выход годной продукции более 99%, нестандартная настройка по заказу, поставка от 5 дней.',
    descVn: 'Dòng máy ép lạnh thủy lực MH3248: biến động áp suất ≤0,5MPa, tỷ lệ đạt trên 99%, tùy chỉnh không tiêu chuẩn, giao hàng nhanh nhất 5 ngày.',
    contentCn: '在家具制造与板材加工领域，一台性能卓越的冷压机是品质与效率的保障。MH3248系列液压冷压机的标准台面尺寸为3000×1300mm、压力50吨，满足大部分板材加工需求；同时支持非标台面尺寸及压力开距定制（如1000/1300/1500mm开距），适应铝蜂窝板、防火门芯板等异形件或特殊工艺场景。',
    contentMic: 'In furniture manufacturing and panel processing, a high-performance cold press is the guarantee of quality and efficiency. The MH3248 hydraulic cold press series comes with a standard table size of 3000×1300mm and 50 tons of pressure, covering most panel processing needs. Non-standard table sizes and pressure opening distances (e.g. 1000/1300/1500mm) are also available for special applications such as aluminum honeycomb panels and fire door core boards.',
    contentRu: 'В производстве мебели и обработке плит высокопроизводительный холодный пресс — залог качества и эффективности. Серия гидравлических холодных прессов MH3248 имеет стандартный размер стола 3000×1300 мм и усилие 50 тонн, что покрывает большинство задач обработки плит. Доступны нестандартные размеры стола и расстояния раскрытия (например, 1000/1300/1500 мм) для особых применений, таких как алюминиевые сотовые панели и сердечники противопожарных дверей.',
    contentVn: 'Trong sản xuất nội thất và gia công tấm, một chiếc máy ép lạnh hiệu suất cao là bảo chứng cho chất lượng và hiệu quả. Dòng máy ép lạnh thủy lực MH3248 có kích thước mặt bàn tiêu chuẩn 3000×1300mm, áp lực 50 tấn, đáp ứng hầu hết nhu cầu gia công tấm; đồng thời hỗ trợ tùy chỉnh kích thước mặt bàn và khoảng mở không tiêu chuẩn (ví dụ 1000/1300/1500mm), phù hợp cho tấm tổ ong nhôm, lõi cửa chống cháy và các ứng dụng đặc biệt khác.',
    solutionCn: '智能控制方面，设备配备计时显示器与保压控制表，可根据材料特性预设保压时长；液压自动补压功能将压力波动控制在≤0.5MPa，确保胶合面均匀受力，成品合格率超99%。结构上，台面边缘采用圆弧修边工艺降低磕碰风险，机架采用国标加厚槽钢，抗张力强度达400牛顿/平方毫米；田字形焊接台面使压力分布均匀性提升30%，特别适合木门、家具等高平整度需求场景。设备还配备急停开关、变频调速及电动数字升降功能，支持一人安全作业。',
    solutionMic: 'For intelligent control, the press is equipped with a timer display and pressure-holding controller, allowing preset holding times based on material characteristics. The hydraulic automatic pressure compensation keeps fluctuation within ≤0.5MPa, ensuring even force across the glued surface and a pass rate above 99%. Structurally, rounded table edges reduce bump damage, and the frame uses thickened national-standard channel steel with a tensile strength of 400 N/mm². The grid-welded table improves pressure distribution uniformity by 30%, ideal for wooden doors and furniture requiring high flatness. Emergency stop, variable-frequency speed control and electric digital lifting support safe one-person operation.',
    solutionRu: 'В части интеллектуального управления пресс оснащён дисплеем таймера и контроллером выдержки давления с возможностью предустановки по характеристикам материала. Автоматическая гидравлическая компенсация давления удерживает колебания в пределах ≤0,5 МПа, обеспечивая равномерное усилие на склеиваемой поверхности и выход годных изделий выше 99%. Конструктивно скруглённые кромки стола снижают риск повреждений, а рама изготовлена из утолщенного швеллера госстандарта с пределом прочности 400 Н/мм². Сварочный стол с ячеистой структурой повышает равномерность распределения давления на 30%, что идеально для деревянных дверей и мебели с высокими требованиями к плоскостности. Кнопка аварийной остановки, частотное регулирование и электрический цифровой подъём обеспечивают безопасную работу одного оператора.',
    solutionVn: 'Về điều khiển thông minh, máy trang bị màn hình hẹn giờ và bộ điều khiển giữ áp suất, cho phép cài đặt trước thời gian giữ áp theo đặc tính vật liệu. Chức năng bù áp tự động thủy lực giữ biến động áp suất trong phạm vi ≤0,5MPa, đảm bảo lực ép đồng đều trên bề mặt dán, tỷ lệ đạt trên 99%. Về kết cấu, mép bàn bo tròn giảm nguy cơ va đập, khung máy dùng thép hình U tiêu chuẩn quốc gia dày, độ bền kéo đạt 400 N/mm². Mặt bàn hàn hình lưới cải thiện độ đồng đều phân bố áp suất lên 30%, đặc biệt phù hợp cho cửa gỗ, nội thất yêu cầu độ phẳng cao. Công tắc dừng khẩn cấp, điều khiển tốc độ biến tần và nâng hạ điện tử hỗ trợ vận hành an toàn một người.',
    resultsCn: '上锐机械已通过ISO9001质量管理体系认证及欧盟CE安全认证，ISO认证覆盖冷压机、热压机等核心产品的研发、生产及服务全流程；CE认证通过欧盟《机械指令》（MD）及《电磁兼容指令》（EMC）等多项安全测试。优先现货机型可快速投产，非标需求联系厂家定制，最快5天交付。',
    resultsMic: 'Shangrui Machinery has obtained ISO9001 quality management system certification and EU CE safety certification. The ISO certification covers the full process of R&D, production and service for core products including cold presses and hot presses; the CE certification passed multiple safety tests under the EU Machinery Directive (MD) and Electromagnetic Compatibility Directive (EMC). In-stock models can go into production quickly, and customized non-standard units can be delivered in as fast as 5 days.',
    resultsRu: 'Shangrui Machinery получила сертификацию системы менеджмента качества ISO9001 и европейский сертификат безопасности CE. Сертификация ISO охватывает весь цикл НИОКР, производства и обслуживания основной продукции, включая холодные и горячие прессы; сертификация CE прошла ряд испытаний безопасности по Европейской директиве по машинам (MD) и директиве по электромагнитной совместимости (EMC). Модели со склада позволяют быстро начать производство, нестандартные изделия изготавливаются на заказ за срок от 5 дней.',
    resultsVn: 'Shangrui Machinery đã đạt chứng nhận hệ thống quản lý chất lượng ISO9001 và chứng nhận an toàn CE của EU. Chứng nhận ISO bao trùm toàn bộ quy trình nghiên cứu, sản xuất và dịch vụ của các sản phẩm cốt lõi như máy ép lạnh, máy ép nóng; chứng nhận CE đã vượt qua nhiều thử nghiệm an toàn theo Chỉ thị Máy móc (MD) và Chỉ thị Tương thích Điện từ (EMC) của EU. Các mẫu có sẵn có thể đưa vào sản xuất nhanh chóng, thiết bị không tiêu chuẩn được đặt hàng riêng, giao hàng nhanh nhất 5 ngày.',
    feedbackCn: '服务保障：故障申报后24小时内出具解决方案，配备实拍视频教程；配件终身成本价供应，旧机置换补贴最高可抵合同金额20%。',
    feedbackMic: 'Service guarantee: solutions provided within 24 hours of a fault report, with real-shot video tutorials; spare parts supplied at lifetime cost price, and trade-in subsidies of up to 20% of the contract value.',
    feedbackRu: 'Гарантия сервиса: решение по неисправности в течение 24 часов после обращения, видеоинструкции по реальной съёмке; запчасти поставляются по себестоимости пожизненно, субсидия за сдачу старого станка — до 20% от суммы контракта.',
    feedbackVn: 'Cam kết dịch vụ: đưa ra giải pháp trong vòng 24 giờ sau khi báo sự cố, kèm video hướng dẫn quay thực tế; phụ tùng cung cấp giá vốn trọn đời, trợ giá đổi máy cũ tối đa 20% giá trị hợp đồng.',
    customerName: '佛山市顺德区上锐机械有限公司',
    customerNameRu: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
    date: '2025-03',
    productId: 'mh3248-50t-20260207',
    productSeries: 'cold-press',
    color: 'linear-gradient(135deg, #0d3b2e, #1a936f)',
  },
  {
    // 公众号 2025-03-11《MH3848热压机：用参数革命终结传统生产痛点》
    id: 3,
    slug: 'mh3848-hot-press-parameters-000003',
    region: '🇨🇳 广东佛山',
    regionRu: 'Фошань, Гуандун, Китай',
    regionMic: '🇨🇳 Foshan, Guangdong, China',
    regionVn: '🇨🇳 Phật Sơn, Quảng Đông, Trung Quốc',
    icon: '🔥',
    productCn: '热压机',
    productMic: 'Hot Press',
    productVn: 'Máy ép nóng',
    productRu: 'Горячий пресс',
    titleCn: 'MH3848系列热压机：用参数革命终结传统生产痛点',
    titleMic: 'MH3848 Hot Press: Ending Traditional Production Pain Points with a Parameter Revolution',
    titleRu: 'Горячий пресс MH3848: устранение традиционных болевых точек производства за счёт революции параметров',
    titleVn: 'Máy ép nóng MH3848: chấm dứt nút thắt sản xuất truyền thống bằng cuộc cách mạng thông số',
    descCn: 'MH3848热压机：2500×1300mm热压板、8支90mm油缸、常温-120℃精准控温±5℃，支持5-800吨压力定制，25天交付。',
    descMic: 'MH3848 hot press: 2500×1300mm press plates, eight 90mm cylinders, precise temperature control from ambient to 120°C (±5°C), custom pressure from 5 to 800 tons, delivery in 25 days.',
    descRu: 'Горячий пресс MH3848: плиты 2500×1300 мм, восемь цилиндров по 90 мм, точное управление температурой от комнатной до 120 °C (±5 °C), индивидуальное усилие от 5 до 800 тонн, поставка за 25 дней.',
    descVn: 'Máy ép nóng MH3848: tấm ép 2500×1300mm, 8 xy-lanh 90mm, điều khiển nhiệt độ chính xác từ nhiệt độ phòng đến 120°C (±5°C), tùy chỉnh áp lực 5–800 tấn, giao hàng 25 ngày.',
    contentCn: '在木工制造领域，如何实现高效生产与工艺精度的完美平衡？MH3848系列热压机以多场景适配性和智能控压系统给出答案。该设备配备2500×1300mm超大热压板，较常规设备加工面积提升40%；搭配8支90mm油缸，压力波动＜0.1%，实现三层同步均压——传统设备单层加工耗时30分钟，本机三层批量处理仅需45分钟。',
    contentMic: 'How do you strike the perfect balance between efficient production and process precision in woodworking? The MH3848 hot press series answers with multi-scenario adaptability and an intelligent pressure control system. Its extra-large 2500×1300mm press plates increase processing area by 40% over conventional equipment, and with eight 90mm cylinders keeping pressure fluctuation below 0.1%, it achieves synchronized three-layer pressing — a job that takes conventional machines 30 minutes per layer is done in just 45 minutes for three layers.',
    contentRu: 'Как достичь идеального баланса между эффективностью производства и точностью технологии в деревообработке? Серия горячих прессов MH3848 отвечает на этот вопрос многосценарной адаптивностью и интеллектуальной системой управления давлением. Увеличенные плиты 2500×1300 мм повышают площадь обработки на 40% по сравнению с обычным оборудованием, а восемь цилиндров по 90 мм удерживают колебание давления ниже 0,1%, обеспечивая синхронное трёхслойное прессование — операция, на которую обычные станки тратят 30 минут на слой, выполняется всего за 45 минут для трёх слоёв.',
    contentVn: 'Làm thế nào để đạt được sự cân bằng hoàn hảo giữa sản xuất hiệu quả và độ chính xác công nghệ trong chế biến gỗ? Dòng máy ép nóng MH3848 trả lời bằng khả năng thích ứng đa kịch bản và hệ thống điều khiển áp suất thông minh. Tấm ép siêu lớn 2500×1300mm tăng diện tích gia công 40% so với thiết bị thông thường; 8 xy-lanh 90mm giữ biến động áp suất dưới 0,1%, đạt ép ba lớp đồng bộ — việc mà máy truyền thống cần 30 phút mỗi lớp, máy chỉ cần 45 phút cho ba lớp.',
    solutionCn: '智能温控：常温至120℃精准控温（±5℃），导热油介质循环速度达5m/s，较电热丝加热效率提升60%；分两组发热系统按需开启，更省电节能。55.7kW总功率科学分配（48kW发热管+5.5kW液压系统），支持24小时连续作业。定制能力覆盖5-800吨压力段（远超行业常规20-150吨）、热压板可拓展至5000×2500mm、层数1-10层、温度范围-30℃~200℃，可选军工级不锈钢台面、复合羊毛毡台面或双面复合结构，签约后25天内交付。',
    solutionMic: 'Intelligent temperature control: precise control from ambient to 120°C (±5°C), with heat-transfer oil circulating at 5m/s — 60% more efficient than resistance-wire heating. Two heating groups switch on as needed for energy savings. The 55.7kW total power is scientifically allocated (48kW heating tubes + 5.5kW hydraulics), supporting 24-hour continuous operation. Customization covers pressures of 5–800 tons (far beyond the conventional 20–150 tons), press plates expandable to 5000×2500mm, 1–10 layers, temperature range from -30°C to 200°C, with optional military-grade stainless steel tables, composite wool-felt tables or dual-side composite structures. Delivery within 25 days of signing.',
    solutionRu: 'Интеллектуальное управление температурой: точный контроль от комнатной до 120 °C (±5 °C), циркуляция теплоносителя со скоростью 5 м/с — на 60% эффективнее нагрева нихромовой проволокой. Две группы нагревателей включаются по мере необходимости для экономии энергии. Общая мощность 55,7 кВт научно распределена (48 кВт ТЭНы + 5,5 кВт гидравлика), поддерживая круглосуточную работу. Кастомизация охватывает усилия 5–800 тонн (значительно шире обычных 20–150 тонн), плиты до 5000×2500 мм, 1–10 этажей, диапазон температур от -30 до 200 °C, опционально — столы из нержавеющей стали военного класса, композитные войлочные столы или двухсторонние комбинированные конструкции. Поставка в течение 25 дней после подписания договора.',
    solutionVn: 'Điều khiển nhiệt độ thông minh: kiểm soát chính xác từ nhiệt độ phòng đến 120°C (±5°C), dầu truyền nhiệt tuần hoàn ở tốc độ 5m/s — hiệu quả hơn 60% so với gia nhiệt bằng dây điện trở. Hai nhóm gia nhiệt bật theo nhu cầu để tiết kiệm điện. Tổng công suất 55,7kW được phân bổ khoa học (48kW ống gia nhiệt + 5,5kW thủy lực), hỗ trợ vận hành liên tục 24 giờ. Tùy chỉnh bao trùm dải áp lực 5–800 tấn (vượt xa mức thông thường 20–150 tấn), tấm ép mở rộng đến 5000×2500mm, 1–10 lớp, dải nhiệt độ từ -30°C đến 200°C, tùy chọn mặt bàn thép không gỉ cấp quân sự, mặt bàn nỉ len composite hoặc cấu trúc composite hai mặt. Giao hàng trong 25 ngày sau khi ký hợp đồng.',
    resultsCn: '五大用户价值：3700mm紧凑机身省地25%；单吨加工电费低至3.2元（行业平均4.8元）；标配高温膜台面零门槛上手；签约即享1年核心部件质保+24小时工程师响应；特殊机架结构便于后期维护。已成功赋能曲木加工、PVC地板层压、家具贴面等20+细分领域。',
    resultsMic: 'Five user value commitments: a compact 3700mm frame saves 25% of floor space; electricity cost as low as 3.2 yuan per ton processed (industry average 4.8 yuan); high-temperature film table included for zero-barrier start-up; 1-year core-component warranty plus 24-hour engineer response upon signing; special frame design for easy maintenance. The press has empowered 20+ niche fields including bent-wood processing, PVC flooring lamination and furniture veneering.',
    resultsRu: 'Пять обязательств ценности для пользователя: компактная рама 3700 мм экономит 25% площади; стоимость электроэнергии от 3,2 юаня за тонну обработки (средний по отрасли — 4,8 юаня); стол с высокотемпературной плёнкой в базовой комплектации; гарантия 1 год на ключевые узлы и отклик инженера за 24 часа после подписания; специальная конструкция рамы для удобного обслуживания. Пресс успешно применяется более чем в 20 нишах: гнутая древесина, ламинирование ПВХ-пола, фанеровка мебели и др.',
    resultsVn: 'Năm cam kết giá trị: khung máy gọn 3700mm tiết kiệm 25% diện tích; chi phí điện chỉ từ 3,2 nhân dân tệ mỗi tấn gia công (trung bình ngành 4,8); mặt bàn phim nhiệt độ cao đi kèm, khởi động không rào cản; bảo hành 1 năm linh kiện cốt lõi cộng phản hồi kỹ sư trong 24 giờ sau ký hợp đồng; kết cấu khung đặc biệt thuận tiện bảo trì. Máy đã ứng dụng thành công trong hơn 20 lĩnh vực chuyên biệt như gia công gỗ uốn, ép sàn PVC và dán veneer nội thất.',
    feedbackCn: '免费提供热压参数配置选型指导。无论是5mm超薄汽车皮革包覆，还是8层建材复合压合，25天让您获得量身定制的生产力引擎。',
    feedbackMic: 'Free guidance on hot-press parameter configuration and model selection. Whether it\'s 5mm ultra-thin automotive leather wrapping or 8-layer building material composite pressing, you get a tailor-made productivity engine in 25 days.',
    feedbackRu: 'Бесплатные консультации по настройке параметров горячего прессования и выбору модели. От 5-мм сверхтонкой автомобильной кожи до 8-слойного прессования строительных композитов — за 25 дней вы получите индивидуально настроенный двигатель производительности.',
    feedbackVn: 'Miễn phí hướng dẫn cấu hình thông số ép nóng và chọn mẫu. Dù là bọc da ô tô siêu mỏng 5mm hay ép composite vật liệu xây dựng 8 lớp, chỉ trong 25 ngày bạn sẽ có động cơ năng suất được đo lường riêng.',
    customerName: '佛山市顺德区上锐机械有限公司',
    customerNameRu: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
    date: '2025-03',
    productId: 'mh3848x120t-20260205',
    productSeries: 'hot-press',
    color: 'linear-gradient(135deg, #4a1a1a, #d4691a)',
  },
  {
    // 公众号 2025-04-08《热压机生产线：高端生产新趋势》
    id: 4,
    slug: 'hot-press-line-trends-000004',
    region: '🇨🇳 广东佛山',
    regionRu: 'Фошань, Гуандун, Китай',
    regionMic: '🇨🇳 Foshan, Guangdong, China',
    regionVn: '🇨🇳 Phật Sơn, Quảng Đông, Trung Quốc',
    icon: '📈',
    productCn: '热压机',
    productMic: 'Hot Press',
    productVn: 'Máy ép nóng',
    productRu: 'Горячий пресс',
    titleCn: '热压机生产线：高端生产新趋势',
    titleMic: 'Hot Press Production Lines: The New Trend in High-End Manufacturing',
    titleRu: 'Линии горячего прессования: новый тренд высококлассного производства',
    titleVn: 'Dây chuyền máy ép nóng: xu hướng mới của sản xuất cao cấp',
    descCn: '智能分组控温节能40%，8小时省电仅需99度；木皮贴合仅需150秒/片，温度波动±5℃杜绝板材翘曲。',
    descMic: 'Intelligent grouped temperature control cuts energy use by 40% — just 99 kWh saved over 8 hours of operation; veneer pressing takes only 150 seconds per panel, with ±5°C temperature stability preventing warping.',
    descRu: 'Интеллектуальное групповое управление температурой экономит 40% энергии — всего 99 кВт·ч за 8 часов работы; фанеровка занимает всего 150 секунд на панель, стабильность температуры ±5 °C исключает коробление плит.',
    descVn: 'Điều khiển nhiệt độ nhóm thông minh tiết kiệm 40% năng lượng — chỉ 99 kWh sau 8 giờ vận hành; ép veneer chỉ mất 150 giây/tấm, độ ổn định nhiệt độ ±5°C ngăn tấm bị cong vênh.',
    contentCn: '佛山市顺德区上锐机械的热压机生产线，让每一块板材都成为利润增长点。省钱才是硬道理：智能分组控温技术节能40%，实际用电量仅为传统机型的1/4，8小时省电仅需99度；PLC调速+半自动模式减少2名操作工，年省人力成本15万元。',
    contentMic: 'The hot press production lines of Foshan Shunde Shangrui Machinery turn every panel into a profit driver. Saving money is what counts: intelligent grouped temperature control cuts energy consumption by 40%, with actual electricity use just one quarter of conventional machines — only 99 kWh over 8 hours. PLC speed control plus semi-automatic mode reduces operators by two, saving 150,000 yuan in annual labor costs.',
    contentRu: 'Линии горячего прессования Foshan Shunde Shangrui Machinery превращают каждую панель в источник прибыли. Экономия — главное: интеллектуальное групповое управление температурой снижает энергопотребление на 40%, фактический расход электроэнергии — лишь четверть от обычных станков, всего 99 кВт·ч за 8 часов. Регулирование скорости через ПЛК и полуавтоматический режим сокращают двух операторов, экономя 150 000 юаней затрат на персонал в год.',
    contentVn: 'Dây chuyền máy ép nóng của Shangrui Machinery biến mỗi tấm gỗ thành điểm tăng trưởng lợi nhuận. Tiết kiệm tiền mới là thật: công nghệ điều khiển nhiệt độ nhóm thông minh giảm 40% tiêu thụ điện, lượng điện thực tế chỉ bằng một phần tư máy truyền thống — chỉ 99 kWh sau 8 giờ. Điều khiển tốc độ PLC kết hợp chế độ bán tự động giảm 2 công nhân vận hành, tiết kiệm 150.000 nhân dân tệ chi phí nhân công mỗi năm.',
    solutionCn: '故障率=隐性成本黑洞：台湾油泵+本地油缸黄金组合，连续13年零配件返修率低于0.5%，比国产通用件寿命延长3000小时；天正电器+军工级结构，电器故障率行业最低，12mm钢板+28#槽钢机架承重冗余设计达150%。良品率决定利润率：42mm整钢热压板数控精磨，平整度比普通20mm钢板提升60%（5丝精度）；28条深油路循环系统使温度波动仅±5℃，杜绝板材翘曲变形。',
    solutionMic: 'Failure rate is a hidden cost black hole: the golden combination of a Taiwanese oil pump and a locally made cylinder has kept parts return rate below 0.5% for 13 consecutive years, with service life 3,000 hours longer than generic domestic components. TIANZHENG electricals plus military-grade structure deliver the industry\'s lowest electrical failure rate, and the 12mm steel plate + 28# channel steel frame has a 150% load redundancy design. Yield determines profit margin: the 42mm solid-steel hot press plate is CNC precision-ground, 60% flatter than ordinary 20mm plates (5-si accuracy), and a 28-channel deep oil circulation system keeps temperature fluctuation within ±5°C, eliminating panel warping.',
    solutionRu: 'Уровень отказов — скрытая чёрная дыра затрат: золотая комбинация тайваньского масляного насоса и местного гидроцилиндра удерживает долю возврата деталей ниже 0,5% на протяжении 13 лет подряд, срок службы на 3000 часов дольше обычных отечественных комплектующих. Электрика TIANZHENG и конструкция военного класса обеспечивают самый низкий в отрасли уровень электрических отказов; рама из стального листа 12 мм и швеллера №28 имеет запас прочности по нагрузке 150%. Выход годной продукции определяет прибыль: цельностальная горячая плита 42 мм шлифуется с ЧПУ, плоскостность на 60% выше, чем у обычных плит 20 мм (точность 5 «си»); 28 каналов глубокой циркуляции масла удерживают колебание температуры в пределах ±5 °C, исключая коробление плит.',
    solutionVn: 'Tỷ lệ hỏng hóc là hố đen chi phí ẩn: kết hợp hoàn hảo giữa bơm dầu Đài Loan và xy-lanh nội địa giữ tỷ lệ trả lại linh kiện dưới 0,5% trong 13 năm liên tục, tuổi thọ dài hơn 3.000 giờ so với linh kiện phổ thông. Tụ điện TIANZHENG và kết cấu cấp quân sự mang lại tỷ lệ lỗi điện thấp nhất ngành; khung thép tấm 12mm cộng thép hình U số 28 có thiết kế dự tải 150%. Tỷ lệ sản phẩm đạt quyết định tỷ lệ lợi nhuận: tấm ép thép nguyên khối 42mm mài CNC chính xác, độ phẳng cao hơn 60% so với tấm thép thông thường 20mm (độ chính xác 5 si); hệ thống 28 đường dầu tuần hoàn sâu giữ biến động nhiệt độ chỉ ±5°C, loại bỏ cong vênh tấm.',
    resultsCn: '核心应用覆盖高定家居木皮贴合（20片/小时）与木门三合一粘合，支持压力、尺寸、温度参数定制，适配中高端生产需求。冷热压机怎么选？冷压机适用于对温度敏感的材料，单次压制需3-4小时甚至更久，设备成本和能耗较低；热压机结合高温和压力，木皮贴合仅需150秒，板面平整度更高，初期投资较高但分组控温等节能设计可降低长期电耗。',
    resultsMic: 'Core applications cover high-end custom furniture veneer pressing (20 panels/hour) and wooden door 3-in-1 bonding, with customizable pressure, size and temperature parameters for mid-to-high-end production. Cold press or hot press? Cold presses suit temperature-sensitive materials, taking 3-4 hours or more per pressing cycle, with lower equipment cost and energy use. Hot presses combine heat and pressure — veneer pressing takes just 150 seconds with higher surface flatness — and although the initial investment is higher, energy-saving designs like grouped temperature control reduce long-term electricity costs.',
    resultsRu: 'Ключевые применения охватывают фанеровку мебели по индивидуальным заказам (20 панелей/час) и трёхв одном склеивание деревянных дверей, с настраиваемыми параметрами давления, размеров и температуры для производства среднего и высшего класса. Холодный пресс или горячий? Холодные прессы подходят для термочувствительных материалов: цикл прессования занимает 3–4 часа и более, зато оборудование и энергозатраты дешевле. Горячие прессы сочетают нагрев и давление — фанеровка занимает всего 150 секунд при более высокой плоскостности поверхности; первоначальные вложения выше, но энергосберегающие решения вроде группового управления температурой снижают долгосрочные расходы на электроэнергию.',
    resultsVn: 'Ứng dụng cốt lõi bao trùm ép veneer nội thất cao cấp đặt riêng (20 tấm/giờ) và dán ba trong một cửa gỗ, với thông số áp lực, kích thước, nhiệt độ có thể tùy chỉnh, phù hợp nhu cầu sản xuất trung-cao cấp. Chọn máy ép lạnh hay ép nóng? Máy ép lạnh phù hợp vật liệu nhạy cảm nhiệt, mỗi chu kỳ ép cần 3-4 giờ hoặc lâu hơn, chi phí thiết bị và năng lượng thấp hơn. Máy ép nóng kết hợp nhiệt và áp lực — ép veneer chỉ mất 150 giây, độ phẳng bề mặt cao hơn — đầu tư ban đầu cao hơn nhưng thiết kế tiết kiệm điện như điều khiển nhiệt độ nhóm giúp giảm chi phí điện dài hạn.',
    feedbackCn: '副油箱设有控油标尺，日常维护一目了然；现场贴面成品平整度即所见即所得。',
    feedbackMic: 'The auxiliary oil tank features an oil-level gauge for at-a-glance daily maintenance, and on-site veneered finished panels show flatness exactly as it is.',
    feedbackRu: 'Дополнительный масляный бак оснащён щупом уровня масла для наглядного ежедневного обслуживания, а готовые фанерованные панели на месте демонстрируют плоскостность как она есть.',
    feedbackVn: 'Bể dầu phụ trang bị thước đo mực dầu, bảo trì hàng ngày nhìn là hiểu; thành phẩm ép veneer tại chỗ cho độ phẳng như nhìn thấy.',
    customerName: '佛山市顺德区上锐机械有限公司',
    customerNameRu: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
    date: '2025-04',
    productId: 'hot-press',
    productSeries: 'hot-press',
    color: 'linear-gradient(135deg, #2d1b4e, #7b3fd4)',
  },
  {
    // 公众号 2025-04-18《MJ1300系列多片锯：传统木工机械的痛点破解者》
    id: 5,
    slug: 'mj1300-multi-blade-saw-000005',
    region: '🇨🇳 广东佛山',
    regionRu: 'Фошань, Гуандун, Китай',
    regionMic: '🇨🇳 Foshan, Guangdong, China',
    regionVn: '🇨🇳 Phật Sơn, Quảng Đông, Trung Quốc',
    icon: '⚙️',
    productCn: '多片锯',
    productMic: 'Multi-blade Saw',
    productVn: 'Máy cưa đa lưỡi',
    productRu: 'Многопильный станок',
    titleCn: 'MJ1300系列板式多片锯：传统木工机械的痛点破解者',
    titleMic: 'MJ1300 Multi-blade Saw Series: Breaking Through the Pain Points of Traditional Woodworking Machinery',
    titleRu: 'Серия многопильных станков MJ1300: решение болевых точек традиционного деревообрабатывающего оборудования',
    titleVn: 'Dòng cưa nhiều lưỡi MJ1300: người phá giải nút thắt của máy gỗ truyền thống',
    descCn: 'MJ1300多片锯：30KW主轴电机、送料速度12米/分钟、加工厚度5-50mm、能耗降低35%，三重防护事故率降低90%。',
    descMic: 'MJ1300 multi-blade saw: 30KW spindle motor, feed speed up to 12m/min, cutting thickness 5-50mm, 35% lower energy consumption, and a triple protection system that cuts accident rate by 90%.',
    descRu: 'Многопильный станок MJ1300: двигатель шпинделя 30 кВт, скорость подачи до 12 м/мин, толщина реза 5–50 мм, снижение энергопотребления на 35% и тройная система защиты, сокращающая аварийность на 90%.',
    descVn: 'Cưa nhiều lưỡi MJ1300: động cơ trục 30KW, tốc độ cấp liệu lên đến 12m/phút, độ dày cắt 5-50mm, giảm 35% tiêu thụ năng lượng, hệ thống bảo vệ ba lớp giảm 90% tỷ lệ sự cố.',
    contentCn: '还在为木板切割效率低、精度差、人工成本高而头疼？MJ1300系列板式多片锯以"三倍效能、毫米级精度"重新定义木材加工标准。安全性能上，全封闭式防护罩+智能防反弹装置+紧急制动按钮的三重防护系统，事故率降低90%。效能上，30KW大功率主轴电机支持24小时连续作业，搭配14条超耐磨胶辊，送料速度可达12米/分钟，加工厚度覆盖5-50mm全规格板材。',
    contentMic: 'Still struggling with low cutting efficiency, poor precision and high labor costs in wood cutting? The MJ1300 multi-blade saw series redefines wood processing standards with triple efficiency and millimeter-level precision. For safety, a triple protection system — fully enclosed guard, anti-kickback device and emergency brake button — cuts the accident rate by 90%. For performance, the 30KW high-power spindle motor supports 24-hour continuous operation, and with 14 ultra-wear-resistant rubber rollers, feed speed reaches 12m/min, handling panel thicknesses across the full 5-50mm range.',
    contentRu: 'До сих пор мучаетесь с низкой эффективностью распиловки, плохой точностью и высокими затратами на персонал? Серия многопильных станков MJ1300 переопределяет стандарты обработки древесины благодаря тройной эффективности и точности до миллиметра. В плане безопасности тройная система защиты — полностью закрытый кожух, устройство защиты от обратного выброса и кнопка аварийной остановки — снижает аварийность на 90%. В плане производительности двигатель шпинделя мощностью 30 кВт поддерживает круглосуточную работу, а 14 сверхизносостойких резиновых роликов обеспечивают скорость подачи до 12 м/мин и обработку плит толщиной во всём диапазоне 5–50 мм.',
    contentVn: 'Vẫn đang đau đầu vì hiệu suất cắt thấp, độ chính xác kém và chi phí nhân công cao? Dòng cưa nhiều lưỡi tấm MJ1300 tái định nghĩa tiêu chuẩn gia công gỗ với "hiệu suất gấp ba, độ chính xác cấp milimet". Về an toàn, hệ thống bảo vệ ba lớp — vỏ che kín toàn phần, thiết bị chống bật ngược và nút phanh khẩn cấp — giảm 90% tỷ lệ sự cố. Về hiệu suất, động cơ trục công suất lớn 30KW hỗ trợ vận hành liên tục 24 giờ, cùng 14 con lăn cao su siêu chống mài mòn, tốc độ cấp liệu đạt 12m/phút, xử lý độ dày tấm toàn dải 5-50mm.',
    solutionCn: '智能省钱：自主研发变频调速系统能耗降低35%，支持零损耗启停；标配双键槽锯片寿命延长2倍，年省超2万元维护成本。选型指南：入门优选XD3适合中小型加工厂（板材厚度≤30mm）；旗舰配置XD5双键槽锯片+14条胶辊，稳定性更优，适配高强度作业，精度更高、效率更快；短期主力X5高功率+厚板兼容性，适合中大规模连续生产。',
    solutionMic: 'Smart savings: the self-developed variable-frequency drive cuts energy consumption by 35% with zero-loss start/stop; standard double-keyway saw blades last twice as long, saving over 20,000 yuan in annual maintenance. Selection guide: the entry-level XD3 suits small and medium workshops (panel thickness ≤30mm); the flagship XD5 with double-keyway blades and 14 rubber rollers offers superior stability for heavy-duty work, with higher precision and faster cutting; the X5 offers high power plus thick-panel compatibility for medium-to-large continuous production.',
    solutionRu: 'Умная экономия: собственная система частотного регулирования снижает энергопотребление на 35% с пуском/остановкой без потерь; стандартные пильные диски с двойной шпоночной канавкой служат вдвое дольше, экономя более 20 000 юаней на обслуживании в год. Руководство по выбору: стартовая модель XD3 подходит для малых и средних цехов (толщина плит ≤30 мм); флагманская XD5 с двойными шпоночными дисками и 14 роликами обладает превосходной стабильностью для интенсивной работы, большей точностью и скоростью реза; X5 — высокая мощность и совместимость с толстыми плитами для среднего и крупного непрерывного производства.',
    solutionVn: 'Tiết kiệm thông minh: hệ thống điều khiển biến tần tự phát triển giảm 35% tiêu thụ năng lượng, khởi động/dừng không tổn thất; lưỡi cưa rãnh then đôi tiêu chuẩn bền gấp đôi, tiết kiệm hơn 20.000 nhân dân tệ chi phí bảo trì mỗi năm. Hướng dẫn chọn mẫu: XD3 tầm trung phù hợp xưởng nhỏ và vừa (độ dày tấm ≤30mm); XD5 flagship với lưỡi rãnh then đôi và 14 con lăn cao su, độ ổn định vượt trội cho công việc cường độ cao, độ chính xác cao hơn, cắt nhanh hơn; X5 công suất lớn cộng khả năng tương thích tấm dày, phù hợp sản xuất liên tục quy mô trung và lớn.',
    resultsCn: '应用广泛：板式家具批量开料（衣柜、橱柜标准化部件）、实木门填充料与床排骨架切割、建筑模板分切、木托盘标准化切割、复合地板基材加工、PVC板与蜂窝板等新型材料切割。一次性多片切割大幅提升效率，尤其适合家具厂、建材厂、包装企业等批量处理标准化板材的行业。',
    resultsMic: 'Wide applications: batch cutting for panel furniture (standardized wardrobe and cabinet parts), solid door infill and bed slat cutting, construction formwork slitting, standardized wooden pallet cutting, composite flooring substrate processing, and cutting of new materials such as PVC and honeycomb panels. One-pass multi-blade cutting dramatically boosts efficiency, ideal for furniture factories, building material plants and packaging companies processing standardized panels in bulk.',
    resultsRu: 'Широкое применение: пакетный раскрой для панельной мебели (стандартизированные детали шкафов и кухонь), раскрой заполнения дверей и кровельных реек, нарезка строительной опалубки, стандартизированная нарезка деревянных поддонов, обработка основы композитного ламината и резка новых материалов, таких как ПВХ и сотовые панели. Однопроходный многопильный рез значительно повышает эффективность, идеален для мебельных заводов, производителей стройматериалов и упаковочных предприятий, обрабатывающих стандартные плиты в больших объёмах.',
    resultsVn: 'Ứng dụng rộng rãi: cắt hàng loạt cho nội thất tấm (linh kiện tiêu chuẩn hóa tủ quần áo, tủ bếp), cắt vật liệu lấp cửa gỗ nguyên khối và thanh giường, cắt ván khuôn xây dựng, cắt pallet gỗ tiêu chuẩn hóa, gia công nền sàn composite, và cắt vật liệu mới như tấm PVC và tổ ong. Cắt nhiều lưỡi một lần vượt trội nâng cao hiệu quả, lý tưởng cho nhà máy nội thất, nhà máy vật liệu xây dựng và doanh nghiệp đóng gói xử lý tấm tiêu chuẩn hóa số lượng lớn.',
    feedbackCn: '优先建议选择旗舰款MJ1300-XD5：相对X5精度更高、结构设计合理；相对XD3效率更快、动力系统更强。故障申报24小时内响应，中英双语图文手册符合CE认证标准。',
    feedbackMic: 'The flagship MJ1300-XD5 is the recommended choice: higher precision and better-structured design than the X5, faster cutting and a stronger power system than the XD3. Fault reports are answered within 24 hours, and bilingual (Chinese-English) illustrated manuals comply with CE certification standards.',
    feedbackRu: 'Рекомендуется флагманская модель MJ1300-XD5: более высокая точность и продуманная конструкция по сравнению с X5, более быстрый рез и более мощная силовая система, чем у XD3. Реакция на неисправности в течение 24 часов, двуязычные (кит.-англ.) иллюстрированные руководства соответствуют стандарту CE.',
    feedbackVn: 'Khuyến nghị chọn mẫu flagship MJ1300-XD5: độ chính xác cao hơn và kết cấu hợp lý hơn so với X5, cắt nhanh hơn và hệ thống động lực mạnh hơn so với XD3. Phản hồi báo sự cố trong 24 giờ, hướng dẫn minh họa song ngữ Trung-Anh đạt tiêu chuẩn chứng nhận CE.',
    customerName: '佛山市顺德区上锐机械有限公司',
    customerNameRu: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
    date: '2025-04',
    productId: 'mj1300-xd5-20240716',
    productSeries: 'multi-blade-saw',
    color: 'linear-gradient(135deg, #1a2744, #38b6d4)',
  },
  {
    // 公众号 2025-08-18《部件图文说明之冷压机冲压设置表》
    id: 6,
    slug: 'cold-press-timer-settings-000006',
    region: '🇨🇳 广东佛山',
    regionRu: 'Фошань, Гуандун, Китай',
    regionMic: '🇨🇳 Foshan, Guangdong, China',
    regionVn: '🇨🇳 Phật Sơn, Quảng Đông, Trung Quốc',
    icon: '🛠️',
    productCn: '冷压机',
    productMic: 'Cold Press',
    productVn: 'Máy ép lạnh',
    productRu: 'Холодный пресс',
    titleCn: '冷压机部件说明：冲压设置表（定时补压）使用指南',
    titleMic: 'Cold Press Component Guide: How to Use the Pressure Timer Settings Panel',
    titleRu: 'Руководство по узлам холодного пресса: как пользоваться панелью таймера давления',
    titleVn: 'Hướng dẫn linh kiện máy ép lạnh: cách dùng bảng cài đặt hẹn giờ áp suất',
    descCn: '冷压机定时补压设置表使用指南：卸压时间0.5秒+计时周期60分钟协同工作，实现压制过程压力自调节。',
    descMic: 'A guide to the cold press auto-repressure timer: relief time of 0.5 seconds working with a 60-minute timing cycle for automatic pressure regulation during pressing.',
    descRu: 'Руководство по таймеру автододавливания холодного пресса: время сброса 0,5 секунды в сочетании с 60-минутным циклом для автоматической регуляции давления в процессе прессования.',
    descVn: 'Hướng dẫn dùng bảng hẹn giờ tái áp máy ép lạnh: thời gian xả áp 0,5 giây kết hợp chu kỳ hẹn giờ 60 phút để tự điều chỉnh áp suất trong quá trình ép.',
    contentCn: '冲压设置表是维持冷压机工艺精度的关键部件，用于控制冷压机的定时补压功能：通过预设卸压时间与计时周期，实现设备在持续压制过程中的压力自调节，确保工件成型稳定性。该部件集成于设备电控箱内部面板，所有参数出厂前已由厂家预先调试完成，用户可直接使用，必要时可自定义调整。建议每季度检查参数状态及线路连接。',
    contentMic: 'The pressure timer panel is a key component for maintaining the process precision of a cold press. It controls the timed auto-repressure function: by presetting the relief time and timing cycle, the press self-regulates its pressure during continuous pressing, ensuring stable workpiece forming. The panel is integrated into the electrical control box; all parameters are factory-configured and ready to use, with custom adjustments possible when needed. Check the parameter status and wiring quarterly.',
    contentRu: 'Панель таймера давления — ключевой узел поддержания точности технологии холодного прессования. Она управляет функцией периодической подпитки давления: за счёт предустановки времени сброса и длительности цикла пресс автоматически регулирует давление в процессе непрерывного прессования, обеспечивая стабильное формование заготовок. Панель интегрирована в шкаф электроуправления; все параметры настроены на заводе и готовы к использованию, при необходимости возможна собственная настройка. Рекомендуется проверять состояние параметров и соединений ежеквартально.',
    contentVn: 'Bảng cài đặt áp suất là linh kiện then chốt duy trì độ chính xác công nghệ của máy ép lạnh, dùng để điều khiển chức năng bù áp hẹn giờ: bằng cách cài đặt trước thời gian xả áp và chu kỳ hẹn giờ, máy tự điều chỉnh áp suất trong quá trình ép liên tục, đảm bảo độ ổn định định hình phôi. Bảng được tích hợp trong tủ điện; tất cả thông số đã được nhà máy cài đặt sẵn và sử dụng ngay, có thể điều chỉnh tùy chỉnh khi cần. Nên kiểm tra trạng thái thông số và kết nối dây mỗi quý.',
    solutionCn: '两个核心参数：① 卸压时间——设备执行瞬时卸压操作的持续时间，示例设置0.5秒，作用是短暂释放压力、避免材料应力集中，配合压力表实现精准补压；② 计时周期——两次补压操作的时间间隔，示例设置60分钟，计时进度实时显示于控制屏幕。二者需协同设置，共同构成完整的补压逻辑链。',
    solutionMic: 'Two core parameters: ① Relief time — the duration of the momentary pressure release, e.g. 0.5 seconds. It briefly releases pressure to avoid material stress concentration and works with the pressure gauge for precise repressurization. ② Timing cycle — the interval between two repressurization operations, e.g. 60 minutes, with progress displayed live on the control screen. The two must be set in coordination, forming a complete repressure logic chain.',
    solutionRu: 'Два ключевых параметра: ① Время сброса — длительность мгновенного сброса давления, например 0,5 секунды; кратковременно снижает давление, предотвращая концентрацию напряжений в материале, и работает вместе с манометром для точной подпитки. ② Длительность цикла — интервал между двумя подпитками давления, например 60 минут; ход отображается на экране управления в реальном времени. Параметры настраиваются совместно, образуя полную логическую цепочку подпитки.',
    solutionVn: 'Hai thông số cốt lõi: ① Thời gian xả áp — thời gian thực hiện xả áp tức thời của thiết bị, ví dụ cài đặt 0,5 giây, tác dụng là giải phóng áp suất ngắn hạn, tránh tập trung ứng suất vật liệu, kết hợp đồng hồ áp lực để bù áp chính xác; ② Chu kỳ hẹn giờ — khoảng thời gian giữa hai lần bù áp, ví dụ cài đặt 60 phút, tiến trình hẹn giờ hiển thị thời gian thực trên màn hình điều khiển. Hai thông số cần cài đặt phối hợp, tạo thành chuỗi logic bù áp hoàn chỉnh.',
    resultsCn: '工作流程示例（以图示参数为例）：计时启动——设备开始压制后，屏幕计时器从0累积至60分钟；触发卸压——达到60分钟时，系统自动执行0.5秒瞬时卸压；压力恢复——卸压结束后，压力表实时监测压力值并触发液压系统重新加压至设定压力；循环运行——计时器复位，进入下一周期。',
    resultsMic: 'Example workflow (with the illustrated parameters): Timer starts — once pressing begins, the on-screen timer counts up to 60 minutes. Relief triggers — at 60 minutes, the system automatically performs a 0.5-second momentary pressure release. Pressure recovers — after relief, the pressure gauge monitors the value in real time and triggers the hydraulic system to re-pressurize to the set pressure. Cycle repeats — the timer resets and the next cycle begins.',
    resultsRu: 'Пример рабочего цикла (с иллюстрированными параметрами): старт таймера — после начала прессования экранный таймер отсчитывает до 60 минут; срабатывание сброса — по достижении 60 минут система автоматически выполняет мгновенный сброс на 0,5 секунды; восстановление давления — после сброса манометр в реальном времени отслеживает значение и запускает гидросистему на повторное давление до заданного; цикл повторяется — таймер сбрасывается и начинается следующий цикл.',
    resultsVn: 'Ví dụ quy trình làm việc (với thông số minh họa): hẹn giờ khởi động — sau khi bắt đầu ép, bộ đếm trên màn hình tích lũy đến 60 phút; kích hoạt xả áp — đạt 60 phút, hệ thống tự động thực hiện xả áp tức thời 0,5 giây; áp suất phục hồi — sau xả áp, đồng hồ áp lực giám sát giá trị thời gian thực và kích hoạt hệ thống thủy lực tái nén đến áp suất cài đặt; chu kỳ lặp lại — bộ đếm reset và chu kỳ mới bắt đầu.',
    feedbackCn: '操作注意事项：参数修改需由专业技术人员操作，避免影响设备稳定性；调整后需执行空载测试，确认动作逻辑无误；补压功能依赖压力表反馈，需定期校准确保精度。',
    feedbackMic: 'Operation notes: parameter changes must be performed by professional technicians to avoid affecting equipment stability; run a no-load test after adjustment to confirm the action logic; the repressure function relies on pressure gauge feedback, so calibrate regularly to ensure accuracy.',
    feedbackRu: 'Примечания по эксплуатации: изменение параметров должны выполнять профессиональные техники, чтобы не нарушить стабильность оборудования; после настройки проведите тест на холостом ходу для проверки логики работы; функция подпитки зависит от обратной связи манометра — регулярно калибруйте его для точности.',
    feedbackVn: 'Lưu ý vận hành: thay đổi thông số phải do kỹ thuật viên chuyên nghiệp thực hiện để tránh ảnh hưởng độ ổn định thiết bị; sau điều chỉnh cần chạy thử không tải để xác nhận logic hành động; chức năng bù áp phụ thuộc phản hồi đồng hồ áp lực, cần hiệu chuẩn thường xuyên để đảm bảo độ chính xác.',
    customerName: '佛山市顺德区上锐机械有限公司',
    customerNameRu: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
    date: '2025-08',
    productId: 'cold-press',
    productSeries: 'cold-press',
    color: 'linear-gradient(135deg, #1a3a4a, #4ac3d4)',
  },
]

export default blogArticles
