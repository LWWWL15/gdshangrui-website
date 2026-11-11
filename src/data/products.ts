// 产品数据定义
// 后续可替换为 API 获取

export interface ProductModel {
  id: string
  model: string // 型号
  cn?: string   // 中文名称（可选）
  mic?: string  // 英文名称（可选）
  vn?: string   // 越南语名称（可选）
  ru?: string   // 俄语名称（可选，缺省回退 mic）
  image?: string // 单张图片（已废弃，请使用 images）
  images?: string[] // 多张图片数组
  specs?: {     // 产品参数（待补充）
    keyCn: string
    keyMic: string
    keyVn?: string   // 越南语参数名（可选，缺省回退 valueMic）
    keyRu?: string   // 俄语参数名（可选，缺省回退 keyMic）
    valueCn: string
    valueMic: string
    valueVn?: string // 越南语参数值（可选，缺省回退 valueMic）
    valueRu?: string // 俄语参数值（可选，缺省回退 valueMic）
  }[]
  features?: {  // 产品特点（待补充）
    cn: string
    mic: string
    vn?: string
    ru?: string
  }[]
}

export interface MultiLangText {
  cn: string
  mic: string
  vn?: string
  ru?: string
}

export interface ProductSeries {
  id: string
  cn: string
  mic: string
  vn?: string
  ru?: string
  descCn: string
  descMic: string
  descVn?: string
  descRu?: string
  icon: string
  color: string
  // 以下为可选的系列页扩展内容，只有填写了的系列才会渲染
  intro?: MultiLangText[]      // 工位/定位叙述段落
  highlights?: MultiLangText[] // 卖点条目
  selection?: MultiLangText[]  // 选型需客户提供的资料
  faq?: { q: MultiLangText; a: MultiLangText }[]
  models: ProductModel[]
}

// 产品系列数据
export const productSeries: ProductSeries[] = [
  {
    id: 'hot-press',
    cn: '热压机',
    mic: 'Hot Press',
    vn: 'Máy ép nóng',
    ru: 'Горячий пресс',
    descCn: '高温热压，适用于贴面板、胶合板、密度板等产品的生产，加热均匀，效率高。',
    descMic: 'High-temperature pressing for veneered panels, plywood and MDF production with uniform heating.',
    descVn: 'Ép nóng ở nhiệt độ cao, phù hợp sản xuất ván dán, ván ép, MDF với hệ thống gia nhiệt đồng đều, hiệu suất cao.',
    descRu: 'Горячее прессование при высокой температуре для производства шпонированных панелей, фанеры и ДВП. Равномерный нагрев и высокая производительность.',
    icon: '🔶',
    color: "url('/hot-press-bg.webp')",
    intro: [
      {
        cn: '热压机是板式贴面线的核心设备，用高温与压力把三聚氰胺浸渍纸、装饰纸或木皮压贴到刨花板、中纤板、胶合板等基材表面。压板内部通导热油或蒸汽均匀加热，板材在层与层之间同时受热受压，一次循环完成一幅或多幅的压贴。',
        mic: 'A hot press is the core machine of a panel laminating line. It bonds melamine impregnated paper, decorative paper or veneer onto particleboard, MDF or plywood with heat and pressure. The platens are heated evenly by thermal oil or steam, so one or more panels are pressed and heated at the same time in each cycle.',
        vn: 'Máy ép nóng là thiết bị cốt lõi của dây chuyền dán bề mặt ván. Máy dùng nhiệt độ cao và áp suất để ép giấy ngâm melamine, giấy trang trí hoặc veneer lên bề mặt ván dăm, MDF hay ván ép. Tấm ép được gia nhiệt đồng đều bằng dầu truyền nhiệt hoặc hơi nước, mỗi chu kỳ ép đồng thời một hoặc nhiều tấm.',
        ru: 'Горячий пресс — ключевая машина линии облицовывания плит. Он приклеивает меламиновую пропитанную бумагу, декоративную бумагу или шпон на ДСП, МДФ или фанеру за счёт температуры и давления. Плиты нагреваются равномерно термомаслом или паром, за один цикл прессуются одна или несколько плит одновременно.'
      },
      {
        cn: '选热压机主要看三件事：热压板尺寸决定能压多大幅面，层数决定一天能压多少张，单位压力决定能不能把胶层压实。MH3848 系列热压板 3000×1500mm，层距 100mm，单层或多层可选，压力与层数都按您的板材幅面和日产量来配。',
        mic: 'Choosing a hot press comes down to three things: platen size determines the largest panel format you can press, the number of daylight layers determines daily output, and the specific pressure determines whether the glue line is pressed solid. The MH3848 series has 3000×1500mm platens with 100mm openings, available in single or multi-layer, with pressure and layers configured to your panel size and daily output.',
        vn: 'Chọn máy ép nóng cần quan tâm ba điểm: kích thước tấm ép quyết định khổ ván lớn nhất, số tầng quyết định sản lượng mỗi ngày, áp suất đơn vị quyết định lớp keo có được ép chặt không. Dòng MH3848 có tấm ép 3000×1500mm, khoảng tầng 100mm, chọn một tầng hoặc nhiều tầng, áp suất và số tầng được cấu hình theo khổ ván và sản lượng ngày của anh.',
        ru: 'Выбор горячего пресса сводится к трём вещам: размер плит определяет максимальный формат плиты, число этажей — суточную производительность, а удельное давление — насколько плотно схватится клеевой шов. Серия MH3848 имеет плиты 3000×1500 мм с шагом этажей 100 мм, в одно- и многоэтажном исполнении; давление и число этажей подбираются под ваш формат плит и суточный выпуск.'
      }
    ],
    highlights: [
      {
        cn: '热压板整块加热，板面温差小，贴面色泽均匀不起泡',
        mic: 'The platen is heated as a whole with a small temperature spread across the surface — even color, no blistering',
        vn: 'Tấm ép được gia nhiệt đồng khối, chênh lệch nhiệt độ mặt ép nhỏ, màu bề mặt đồng đều không phồng rộp',
        ru: 'Плита прогревается по всей площади с малым разбросом температуры — равномерный цвет облицовки без пузырей'
      },
      {
        cn: '层数、压力与台面尺寸按产量与板材幅面定制',
        mic: 'Number of layers, pressing force and platen size customized to your output and panel format',
        vn: 'Số tầng, áp lực và kích thước tấm ép được tùy chỉnh theo sản lượng và khổ ván',
        ru: 'Число этажей, усилие прессования и размер плит изготавливаются под ваш выпуск и формат плит'
      },
      {
        cn: '液压系统压力稳定，保压时间可调，胶合强度一致',
        mic: 'Stable hydraulic pressure with adjustable hold time for consistent bond strength',
        vn: 'Hệ thống thủy lực áp suất ổn định, thời gian giữ áp điều chỉnh được, độ bền dán đồng đều',
        ru: 'Гидросистема держит давление стабильно, время выдержки регулируется — прочность склейки одинаковая'
      },
      {
        cn: '可配装卸板机与辊筒线，接入自动化贴面生产线',
        mic: 'Can be equipped with loading/unloading machines and roller conveyors for automated laminating lines',
        vn: 'Có thể trang bị máy nạp/xả và băng tải con lăn để kết nối dây chuyền dán bề mặt tự động',
        ru: 'Возможна комплектация загрузчиком/разгрузчиком и рольгангом для автоматической линии облицовывания'
      },
      {
        cn: '适用于免漆板、生态板、覆膜板与三聚氰胺浸渍纸贴面',
        mic: 'Suitable for melamine-faced, eco-board, film-faced panels and impregnated paper lamination',
        vn: 'Phù hợp dán bề mặt ván không sơn, ván sinh thái, ván phủ phim và giấy ngâm melamine',
        ru: 'Подходит для ламинирования плёнкой, эко-плит, плёнки FEN и меламиновой пропитанной бумаги'
      }
    ],
    selection: [
      {
        cn: '基材类型与规格（刨花板/中纤板/胶合板，厚度与幅面）',
        mic: 'Substrate type and size (particleboard / MDF / plywood, thickness and format)',
        vn: 'Loại và quy cách ván nền (ván dăm/MDF/ván ép, độ dày và khổ)',
        ru: 'Тип и размер основы (ДСП / МДФ / фанера, толщина и формат)'
      },
      {
        cn: '贴面材料（三聚氰胺浸渍纸/木皮/覆膜）与日产量要求',
        mic: 'Facing material (melamine paper / veneer / film) and required daily output',
        vn: 'Vật liệu dán (giấy melamine/veneer/phim) và sản lượng ngày cần đạt',
        ru: 'Облицовочный материал (меламиновая бумага / шпон / плёнка) и требуемый суточный выпуск'
      },
      {
        cn: '期望的热压板尺寸与层数',
        mic: 'Desired platen size and number of layers',
        vn: 'Kích thước tấm ép và số tầng mong muốn',
        ru: 'Желаемый размер плит и число этажей'
      },
      {
        cn: '加热方式偏好（导热油/蒸汽/电加热）与供电条件',
        mic: 'Heating preference (thermal oil / steam / electric) and power supply conditions',
        vn: 'Phương thức gia nhiệt mong muốn (dầu truyền nhiệt/hơi nước/điện) và điều kiện nguồn điện',
        ru: 'Предпочтительный способ нагрева (термомасло / пар / электричество) и условия электропитания'
      },
      {
        cn: '是否需要配套装卸板机、辊筒线等整线设备',
        mic: 'Whether loading/unloading machines, roller conveyors and other line equipment are needed',
        vn: 'Có cần máy nạp/xả, băng tải con lăn và thiết bị dây chuyền kèm theo không',
        ru: 'Нужны ли загрузчик/разгрузчик, рольганг и другое оборудование линии'
      }
    ],
    faq: [
      {
        q: {
          cn: '单层和多层热压机怎么选？',
          mic: 'How do I choose between single-layer and multi-layer hot press?',
          vn: 'Chọn máy ép nóng một tầng hay nhiều tầng?',
          ru: 'Как выбрать одноэтажный или многоэтажный горячий пресс?'
        },
        a: {
          cn: '看日产量和板材厚度。幅面大、日产量几千张以内选单层大台面，压贴周期短、板面质量最稳定；产量要求高、板材较薄选多层，一次压十几张，产能翻倍。把您的板材幅面和日产量发给我们，我们给出单层或多层的配置建议和产能测算。',
          mic: 'It depends on daily output and panel thickness. For large formats and a few thousand panels a day, choose a single-layer press with a large platen — short cycle and the most stable surface quality. For high output and thinner panels, choose multi-layer, pressing a dozen or more sheets at once. Send us your panel format and daily output, and we will recommend single or multi-layer with an output estimate.',
          vn: 'Tùy vào sản lượng ngày và độ dày ván. Khổ lớn, sản lượng vài nghìn tấm mỗi ngày nên chọn máy một tầng tấm lớn — chu kỳ ngắn, chất lượng bề mặt ổn định nhất. Sản lượng cao, ván mỏng thì chọn nhiều tầng, ép hơn chục tấm một lần. Gửi khổ ván và sản lượng ngày cho chúng tôi, chúng tôi sẽ tư vấn cấu hình và tính công suất.',
          ru: 'Зависит от суточного выпуска и толщины плит. Для больших форматов и нескольких тысяч плит в день берите одноэтажный пресс с большой плитой — короткий цикл и максимально стабильное качество поверхности. Для высокого выпуска и тонких плит подходит многоэтажный: за раз прессуется десяток и более листов. Пришлите формат плит и суточный выпуск — мы предложим конфигурацию и расчёт производительности.'
        }
      },
      {
        q: {
          cn: '可以压哪些板材和贴面材料？',
          mic: 'What panels and facing materials can it press?',
          vn: 'Máy có thể ép những loại ván và vật liệu dán nào?',
          ru: 'Какие плиты и облицовочные материалы можно прессовать?'
        },
        a: {
          cn: '基材上刨花板、中纤板、胶合板都可以压；贴面材料常见的是三聚氰胺浸渍纸，也支持木皮、覆膜板。不同贴面材料的温度曲线和保压时间不同，下单时告诉我们主打的基材与贴面组合，我们把加热与压合参数调到对应的工艺窗口。',
          mic: 'Particleboard, MDF and plywood all work as substrates. The common facing is melamine impregnated paper; veneer and film facing are also supported. Different facing materials need different temperature curves and hold times — tell us your main substrate and facing combination when ordering, and we will set the heating and pressing parameters to the matching process window.',
          vn: 'Ván dăm, MDF và ván ép đều dùng làm ván nền được. Vật liệu dán phổ biến là giấy ngâm melamine, ngoài ra hỗ trợ veneer và phim. Mỗi vật liệu cần đường nhiệt và thời gian giữ áp khác nhau — khi đặt hàng cho biết tổ hợp ván nền và vật liệu chính, chúng tôi sẽ chỉnh tham số gia nhiệt và ép theo đúng quy trình.',
          ru: 'Основой могут быть ДСП, МДФ и фанера. Типовая облицовка — меламиновая пропитанная бумага; также поддерживаются шпон и плёнка. Разные материалы требуют своих температурных кривых и времени выдержки: при заказе укажите основную пару «основа + облицовка», и мы настроим параметры нагрева и прессования под нужный технологический режим.'
        }
      },
      {
        q: {
          cn: '压出的板面起泡或不平怎么办？',
          mic: 'What if the pressed surface blisters or is uneven?',
          vn: 'Bề mặt ép bị phồng rộp hoặc không phẳng thì xử lý sao?',
          ru: 'Что делать, если поверхность после прессования пузырится или неровная?'
        },
        a: {
          cn: '起泡多与板面温差和卸压过快有关，不平整多与压力偏低或垫板变形有关。我们的热压板整块加热、板面温差小，液压系统保压稳定。设备到场后我们负责调机，把温度、压力、保压时间按您的板材调到工艺窗口内，交付时以实际压板质量验收。',
          mic: 'Blistering is usually related to uneven surface temperature or depressurizing too fast; unevenness usually traces to low pressure or warped cauls. Our platens are heated as a whole with a small temperature spread, and the hydraulic system holds pressure steadily. After installation we commission the machine with you, tuning temperature, pressure and hold time to your panel, and acceptance is based on actual pressed panel quality.',
          vn: 'Phồng rộp thường do chênh nhiệt độ mặt ép hoặc xả áp quá nhanh; bề mặt không phẳng thường do áp suất thấp hoặc tấm đệm biến dạng. Tấm ép của chúng tôi gia nhiệt đồng khối, chênh nhiệt nhỏ, hệ thủy lực giữ áp ổn định. Sau khi lắp đặt chúng tôi hiệu chỉnh nhiệt độ, áp suất, thời gian giữ áp theo ván của anh, nghiệm thu theo chất lượng tấm ép thực tế.',
          ru: 'Пузыри чаще всего связаны с неравномерной температурой поверхности или слишком быстрым сбросом давления; неровность — с низким давлением или деформацией прокладных плит. Наши плиты греются по всей площади с малым разбросом температур, гидросистема держит давление стабильно. После монтажа мы выполняем пусконаладку: настраиваем температуру, давление и выдержку под вашу плиту, приёмка — по фактическому качеству готовых панелей.'
        }
      },
      {
        q: {
          cn: '能接入整条贴面生产线吗？',
          mic: 'Can it be integrated into a full laminating line?',
          vn: 'Có thể kết nối vào dây chuyền dán bề mặt hoàn chỉnh không?',
          ru: 'Можно ли интегрировать его в полную линию облицовывания?'
        },
        a: {
          cn: '可以，这正是我们的强项。热压机前后可配装卸板机、辊筒输送线、升降平台，组成自动贴面线，设备间用联锁信号对接。把您的厂房布局和产量目标发给我们，我们出整线配置方案和设备清单。',
          mic: 'Yes — complete line solutions are exactly what we do. The hot press can be combined with loading/unloading machines, roller conveyors and lifting platforms into an automated laminating line, with machines interlocked by signals. Send us your plant layout and output target, and we will deliver a line configuration and equipment list.',
          vn: 'Có, đây chính là thế mạnh của chúng tôi. Máy ép nóng có thể kết hợp máy nạp/xả, băng tải con lăn và bục nâng thành dây chuyền dán tự động, các thiết bị liên động bằng tín hiệu. Gửi mặt bằng xưởng và mục tiêu sản lượng, chúng tôi sẽ đưa phương án cấu hình dây chuyền và danh sách thiết bị.',
          ru: 'Да — комплектные линии как раз наша сильная сторона. Горячий пресс объединяется с загрузчиком/разгрузчиком, рольгангом и подъёмным столом в автоматическую линию облицовывания с межмашинными блокировками. Пришлите планировку цеха и целевой выпуск — мы подготовим конфигурацию линии и список оборудования.'
        }
      }
    ],
    models: [

      {
        id: 'mh3848x120t-20260205',
        model: 'MH3848X120T',
        cn: '热压机',
        mic: 'Hot Press',
        vn: 'Máy ép nóng',
        ru: 'Горячий пресс',
        images: [
          '/hot-press/hot-press_MH3848X120T_20260205_green-white/hot-press_MH3848X120T_20260205_green-white_up(2)_001.webp',
          '/hot-press/hot-press_MH3848X120T_20260205_green-white/hot-press_MH3848X120T_20260205_green-white_up (2)_001.webp',
          '/hot-press/hot-press_MH3848X120T_20260205_green-white/hot-press_MH3848X120T_20260205_green-white_up (3)_001.webp',
        ],
        specs: [
          { keyCn: '产品描述', keyMic: 'Description', keyVn: 'Mô tả sản phẩm', valueCn: '三面4层热压拼板机', valueMic: 'Three-sided 4-layer hot press splicing machine', valueVn: 'Máy ghép gỗ ép nóng 4 tầng 3 mặt', valueRu: 'Трёхсторонний 4-этажный горячий пресс для сращивания', keyRu: 'Описание продукции' },
          { keyCn: '开距', keyMic: 'Opening Distance', keyVn: 'Hành trình mở', valueCn: '100mm', valueMic: '100mm', valueRu: '100 мм', keyRu: 'Раскрытие' },
          { keyCn: '发热管功率', keyMic: 'Heating Tube Power', keyVn: 'Công suất ống nhiệt', valueCn: '72kW', valueMic: '72kW', valueRu: '72 кВт', keyRu: 'Мощность ТЭНов' },
          { keyCn: '热油泵功率', keyMic: 'Hot Oil Pump Power', keyVn: 'Công suất bơm dầu nóng', valueCn: '2.2kW', valueMic: '2.2kW', valueRu: '2,2 кВт', keyRu: 'Мощность маслонагревательного насоса' },
          { keyCn: '油缸', keyMic: 'Hydraulic Cylinders', keyVn: 'Xi-lanh thủy lực', valueCn: 'φ100×4PCS', valueMic: 'φ100×4PCS', valueRu: 'φ100 × 4 шт.', keyRu: 'Гидроцилиндры' },
          { keyCn: '压板尺寸', keyMic: 'Press Plate Size', keyVn: 'Kích thước tấm ép', valueCn: '1370×1200×40mm', valueMic: '1370×1200×40mm', valueRu: '1370 × 1200 × 40 мм', keyRu: 'Размер пресс-плиты' },
        ],
        features: []
      },
      {
        id: 'mh3848x120t-20260428',
        model: 'MH3848X120T',
        cn: '热压机',
        mic: 'Hot Press',
        vn: 'Máy ép nóng',
        ru: 'Горячий пресс',
        images: [
          '/hot-press/hot-press_MH3848x120T_20260428_black-yellow-white/hot-press_MH3848x120T_20260428_untranslated-3_up_001.webp',
          '/hot-press/hot-press_MH3848x120T_20260428_black-yellow-white/hot-press_MH3848x120T_20260428_untranslated-1_up_001.webp',
          '/hot-press/hot-press_MH3848x120T_20260428_black-yellow-white/hot-press_MH3848x120T_20260428_untranslated-7_up_001.webp',
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '2500×1300mm', valueMic: '2500×1300mm', valueRu: '2500 × 1300 мм', keyRu: 'Размер стола' },
          { keyCn: '开距', keyMic: 'Opening Distance', keyVn: 'Hành trình mở', valueCn: '100mm', valueMic: '100mm', valueRu: '100 мм', keyRu: 'Раскрытие' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '120T', valueMic: '120T', valueRu: '120 т', keyRu: 'Максимальное усилие' },
          { keyCn: '规格', keyMic: 'Specification', keyVn: 'Thông số kỹ thuật', valueCn: '3层', valueMic: '3 Layers', valueVn: '3 tầng', valueRu: '3 этажа', keyRu: 'Спецификация' },
          { keyCn: '缸数', keyMic: 'Cylinder Quantity', keyVn: 'Số xi-lanh', valueCn: '8支φ90', valueMic: '8 Cylinders φ90', valueVn: '8 cái φ90', valueRu: '8 шт., φ90', keyRu: 'Количество цилиндров' },
          { keyCn: '液压电机', keyMic: 'Hydraulic Motor', keyVn: 'Động cơ thủy lực', valueCn: '5.5kW', valueMic: '5.5kW', valueRu: '5,5 кВт', keyRu: 'Гидравлический двигатель' },
          { keyCn: '热油泵', keyMic: 'Hot Oil Pump', keyVn: 'Bơm dầu nóng', valueCn: '1.5kW', valueMic: '1.5kW', valueRu: '1,5 кВт', keyRu: 'Маслонагревательный насос' },
          { keyCn: '发热管', keyMic: 'Heating Tubes', keyVn: 'Ống nhiệt', valueCn: '48kW', valueMic: '48kW', valueRu: '48 кВт', keyRu: 'ТЭНы (трубчатые электронагреватели)' },
        ],
        features: []
      },
      {
        id: 'mh3848x120t-20240810',
        model: 'MH3848x120T',
        cn: '热压机',
        mic: 'Hot Press',
        vn: 'Máy ép nóng',
        ru: 'Горячий пресс',
        images: [
          '/hot-press/hot-press_MH3848x120T_20240810_red-blue-white/hot-press_MH3848x120T_20240810_red-blue-white_up_001.webp'
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '3000×1300mm', valueMic: '3000×1300mm', valueRu: '3000 × 1300 мм', keyRu: 'Размер стола' },
          { keyCn: '开距', keyMic: 'Opening Distance', keyVn: 'Hành trình mở', valueCn: '150mm', valueMic: '150mm', valueRu: '150 мм', keyRu: 'Раскрытие' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '120T', valueMic: '120T', valueRu: '120 т', keyRu: 'Максимальное усилие' },
          { keyCn: '最高温度', keyMic: 'Max Temperature', keyVn: 'Nhiệt độ tối đa', valueCn: '120°C', valueMic: '120°C', valueRu: '120 °C', keyRu: 'Максимальная температура' },
          { keyCn: '层数', keyMic: 'Layers', keyVn: 'Số tầng', valueCn: '2层', valueMic: '2 Layers', valueVn: '2 tầng', valueRu: '2 этажа', keyRu: 'Количество этажей' },
          { keyCn: '压向', keyMic: 'Pressing Direction', keyVn: 'Hướng ép', valueCn: '下往上压', valueMic: 'Bottom-up pressing', valueVn: 'Ép từ dưới lên', valueRu: 'Снизу вверх', keyRu: 'Направление прессования' }
        ],
        features: []
      },
      {
        id: 'mh3848x160t',
        model: 'MH3848x160T',
        cn: '热压机',
        mic: 'Hot Press',
        vn: 'Máy ép nóng',
        ru: 'Горячий пресс',
        images: [
          '/hot-press/hot-press_MH3848x160T_20260618_black-yellow-white/hot-press_MH3848x160T_20260618_black-yellow-white_up (1)_001.webp',
          '/hot-press/hot-press_MH3848x160T_20260618_black-yellow-white/hot-press_MH3848x160T_20260618_black-yellow-white_up (4)_001.webp',
        ],
        specs: [
          { keyCn: '热压板规格', keyMic: 'Platen Size', keyVn: 'Kích thước tấm ép', valueCn: '3000×1500×42mm', valueMic: '3000×1500×42mm', valueVn: '3000×1500×42mm', valueRu: '3000 × 1500 × 42 мм', keyRu: 'Размер пресс-плиты' },
          { keyCn: '工作层数', keyMic: 'Working Layers', keyVn: 'Số tầng làm việc', valueCn: '3层', valueMic: '3 Layers', valueVn: '3 tầng', valueRu: '3 этажа', keyRu: 'Количество рабочих этажей' },
          { keyCn: '层距', keyMic: 'Layer Spacing', keyVn: 'Khoảng cách tầng', valueCn: '100mm', valueMic: '100mm', valueRu: '100 мм', keyRu: 'Расстояние между этажами' },
          { keyCn: '加压方向', keyMic: 'Pressing Direction', keyVn: 'Hướng ép', valueCn: '下往上压', valueMic: 'Bottom-up pressing', valueVn: 'Ép từ dưới lên', valueRu: 'Снизу вверх', keyRu: 'Направление прессования' },
          { keyCn: '最大工作压力', keyMic: 'Max Working Pressure', keyVn: 'Áp suất làm việc tối đa', valueCn: '160T', valueMic: '160T', valueRu: '160 т', keyRu: 'Максимальное рабочее усилие' },
          { keyCn: '油缸', keyMic: 'Hydraulic Cylinders', keyVn: 'Xi-lanh thủy lực', valueCn: '90缸×10支', valueMic: '90 Cylinders × 10 PCS', valueVn: '90 xi-lanh × 10 cái', valueRu: '90 цилиндров × 10 шт.', keyRu: 'Гидроцилиндры' },
          { keyCn: '加热温度', keyMic: 'Heating Temperature', keyVn: 'Nhiệt độ gia nhiệt', valueCn: '常温-120℃', valueMic: 'Room temp – 120°C', valueVn: 'Nhiệt độ phòng – 120°C', valueRu: 'От комнатной температуры до 120 °C', keyRu: 'Температура нагрева' },
          { keyCn: '液压电机功率', keyMic: 'Hydraulic Motor Power', keyVn: 'Công suất động cơ thủy lực', valueCn: '5.5kW', valueMic: '5.5kW', valueRu: '5,5 кВт', keyRu: 'Мощность гидравлического двигателя' },
          { keyCn: '热油泵功率', keyMic: 'Hot Oil Pump Power', keyVn: 'Công suất bơm dầu nóng', valueCn: '2.2kW', valueMic: '2.2kW', valueRu: '2,2 кВт', keyRu: 'Мощность маслонагревательного насоса' },
          { keyCn: '热管功率', keyMic: 'Heating Tube Power', keyVn: 'Công suất ống nhiệt', valueCn: '72kW', valueMic: '72kW', valueRu: '72 кВт', keyRu: 'Мощность ТЭНов' },
          { keyCn: '热压板表面', keyMic: 'Platen Surface', keyVn: 'Bề mặt tấm ép', valueCn: '铺高温膜', valueMic: 'Covered with high-temperature film', valueVn: 'Phủ màng chịu nhiệt cao', valueRu: 'Покрыта высокотемпературной плёнкой', keyRu: 'Поверхность пресс-плиты' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', valueCn: '415V 50Hz 3P', valueMic: '415V 50Hz 3P', valueVn: '415V 50Hz 3P', valueRu: '415 В, 50 Гц, 3 фазы', keyRu: 'Напряжение' },
          { keyCn: '总功率', keyMic: 'Total Power', keyVn: 'Tổng công suất', valueCn: '79.7kW', valueMic: '79.7kW', valueRu: '79,7 кВт', keyRu: 'Общая мощность' },
          { keyCn: '包装', keyMic: 'Packaging', keyVn: 'Bao bì', valueCn: '珍珠棉缠绕膜', valueMic: 'EPE pearl cotton + stretch film', valueVn: 'Màng xốp EPE + màng PE', valueRu: 'Пупырчатая плёнка EPE + стрейч-плёнка', keyRu: 'Упаковка' },
          { keyCn: '外形尺寸', keyMic: 'Overall Dimensions', keyVn: 'Kích thước tổng thể', valueCn: '4400×1950×2160mm', valueMic: '4400×1950×2160mm', valueVn: '4400×1950×2160mm', valueRu: '4400 × 1950 × 2160 мм', keyRu: 'Габаритные размеры' },
        ],
        features: []
      },
      {
        id: 'mh3848x160t-20261008',
        model: 'MH3848x160T',
        cn: '热压机',
        mic: 'Hot Press',
        vn: 'Máy ép nóng',
        ru: 'Горячий пресс',
        images: [
          '/hot-press/hot-press_MH3848x160T_20261008_blue-white/hot-press_MH3848x160T_20261008_blue-white_up (1)_001.webp',
          '/hot-press/hot-press_MH3848x160T_20261008_blue-white/hot-press_MH3848x160T_20261008_blue-white_up (2)_001.webp',
          '/hot-press/hot-press_MH3848x160T_20261008_blue-white/hot-press_MH3848x160T_20261008_blue-white_up(3)_001.webp'
        ],
        specs: [
          { keyCn: '层数', keyMic: 'Number of Layers', keyVn: 'Số tầng', keyRu: 'Количество слоёв', valueCn: '5层', valueMic: '5 Layers', valueVn: '5 tầng', valueRu: '5 слоёв' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', keyRu: 'Напряжение', valueCn: '415V/50HZ/3P', valueMic: '415V/50HZ/3P', valueVn: '415V/50HZ/3P', valueRu: '415 В / 50 Гц / 3 фазы' },
          { keyCn: '总功率', keyMic: 'Total Power', keyVn: 'Tổng công suất', keyRu: 'Общая мощность', valueCn: '80.5kW', valueMic: '80.5kW', valueVn: '80.5kW', valueRu: '80,5 кВт' },
          { keyCn: '控制系统', keyMic: 'Control System', keyVn: 'Hệ thống điều khiển', keyRu: 'Система управления', valueCn: '带PLC', valueMic: 'With PLC', valueVn: 'Có PLC', valueRu: 'С ПЛК' },
          { keyCn: '重量约', keyMic: 'Approx. Weight', keyVn: 'Trọng lượng (khoảng)', keyRu: 'Вес (прибл.)', valueCn: '9500kg', valueMic: '9500kg', valueVn: '9500 kg', valueRu: '9500 кг' },
          { keyCn: '外形尺寸约', keyMic: 'Overall Dimensions (Approx.)', keyVn: 'Kích thước tổng thể (khoảng)', keyRu: 'Габариты (прибл.)', valueCn: '3800×1800×2500mm', valueMic: '3800×1800×2500mm', valueVn: '3800×1800×2500 mm', valueRu: '3800×1800×2500 мм' }
        ],
        features: []
      },
    ]
  },
  {
    id: 'cold-press',
    cn: '冷压机',
    mic: 'Cold Press',
    vn: 'Máy ép lạnh',
    ru: 'Холодный пресс',
    descCn: '适用于木材、板材的冷压成型，压力均匀稳定，操作简便，广泛用于家具、门板等生产。',
    descMic: 'For cold pressing wood and panels with uniform and stable pressure. Widely used in furniture and door panel production.',
    descVn: 'Dùng để ép lạnh gỗ và ván với áp suất đồng đều và ổn định. Được sử dụng rộng rãi trong sản xuất nội thất và cửa.',
    descRu: 'Холодное прессование древесины и панелей с равномерным и стабильным давлением. Простота в эксплуатации, широко применяется в производстве мебели и дверных полотен.',
    icon: '⬛',
    color: "url('/cold-press-bg.webp')",
    intro: [
      {
        cn: '冷压机不加温，靠液压缸的长行程静压力把板材压合定型，适合胶合板、单板、中板以及免漆板、蜂窝板等冷压成型的工序。压合过程缓慢均匀，板材内应力小，不易开裂变形，是厚板覆合与冷固胶工艺的主力设备。',
        mic: 'A cold press applies no heat. It uses the long-stroke static force of hydraulic cylinders to bond and set panels — suitable for plywood, veneer, core panels, melamine-faced board and honeycomb panels in cold pressing. The slow, even pressing keeps internal stress low, so panels are less likely to crack or warp. It is the main machine for thick-panel laminating and cold-cure gluing.',
        vn: 'Máy ép lạnh không gia nhiệt, dùng áp lực tĩnh hành trình dài của xi lanh thủy lực để ép và định hình ván, phù hợp ép lạnh ván ép, veneer, ván lõi, ván không sơn và ván tổ ong. Quá trình ép chậm và đồng đều, ứng suất trong ván nhỏ, ít nứt vỡ cong vênh — là thiết bị chủ lực cho ép dán ván dày và keo lạnh.',
        ru: 'Холодный пресс не нагревается: длинноходовое статическое усилие гидроцилиндров склеивает и фиксирует плиты. Подходит для холодного прессования фанеры, шпона, серединок, ламинированных и сотовых панелей. Медленное равномерное прессование даёт малые внутренние напряжения — плиты меньше трескаются и коробятся. Это основная машина для облицовывания толстых плит и холодного отверждения клея.'
      },
      {
        cn: '选冷压机先定两个数：需要的总压力（吨位）和最大板材幅面。吨位按板材面积乘单位压力算，台面按最大加工幅面留余量。MH3248 系列台面从 2500×1250mm 到 4200×1250mm，吨位 30T 到 250T，压力与台面按您的产品规格定制。',
        mic: 'Sizing a cold press starts with two numbers: the total force you need (tonnage) and your largest panel format. Tonnage = panel area × required unit pressure; the table is sized to your largest panel with margin. The MH3248 series covers tables from 2500×1250mm to 4200×1250mm and 30T to 250T, with force and table size built to your product specs.',
        vn: 'Chọn máy ép lạnh trước hết tính hai con số: tổng áp lực cần (tấn) và khổ ván lớn nhất. Tấn = diện tích ván × áp suất đơn vị; mặt bàn chọn theo khổ lớn nhất và chừa dư. Dòng MH3248 có mặt bàn từ 2500×1250mm đến 4200×1250mm, tải 30T đến 250T, áp lực và mặt bàn tùy theo quy cách sản phẩm của anh.',
        ru: 'Подбор холодного пресса начинается с двух цифр: необходимое суммарное усилие (тоннаж) и максимальный формат плиты. Тоннаж = площадь плиты × требуемое удельное давление; стол выбирается по наибольшей плите с запасом. Серия MH3248 покрывает столы от 2500×1250 мм до 4200×1250 мм и усилия от 30 до 250 т — усилие и стол изготавливаются под вашу продукцию.'
      }
    ],
    highlights: [
      {
        cn: '长行程液压缸，一次装夹完成大厚度板材的压合',
        mic: 'Long-stroke hydraulic cylinders bond thick panels in a single clamping',
        vn: 'Xi lanh thủy lực hành trình dài, ép ván dày chỉ trong một lần kẹp',
        ru: 'Длинноходовые гидроцилиндры склеивают толстые пакеты за одну установку'
      },
      {
        cn: '压力均匀稳定，板材内应力小，不易开裂变形',
        mic: 'Uniform and stable pressure keeps internal stress low — less cracking and warping',
        vn: 'Áp suất đồng đều ổn định, ứng suất nội tại nhỏ, ván ít nứt cong vênh',
        ru: 'Равномерное стабильное давление даёт малые внутренние напряжения — меньше трещин и коробления'
      },
      {
        cn: '吨位 30T–250T、台面最大 4200×1250mm，按产品定制',
        mic: '30T–250T tonnage and tables up to 4200×1250mm, built to your product',
        vn: 'Tải 30T–250T, mặt bàn tới 4200×1250mm, tùy chỉnh theo sản phẩm',
        ru: 'Усилие 30–250 т, столы до 4200×1250 мм — изготовление под вашу продукцию'
      },
      {
        cn: '结构简洁，故障率低，日常维护成本低',
        mic: 'Simple structure, low failure rate and low day-to-day maintenance cost',
        vn: 'Cấu tạo đơn giản, ít hỏng hóc, chi phí bảo trì hằng ngày thấp',
        ru: 'Простая конструкция, низкая аварийность и невысокие эксплуатационные расходы'
      },
      {
        cn: '与热压机配套组成「先冷压定型、后热压贴面」的整线工艺',
        mic: 'Pairs with the hot press in a line: cold press for shaping, hot press for facing',
        vn: 'Kết hợp máy ép nóng thành dây chuyền «ép lạnh định hình trước, ép nóng dán bề mặt sau»',
        ru: 'Работает в паре с горячим прессом по схеме «сначала холодная формовка, затем горячее облицовывание»'
      }
    ],
    selection: [
      {
        cn: '板材类型与最大幅面（胶合板/中板/免漆板/蜂窝板）',
        mic: 'Panel type and largest format (plywood / core panels / melamine-faced / honeycomb)',
        vn: 'Loại ván và khổ lớn nhất (ván ép/ván lõi/ván không sơn/ván tổ ong)',
        ru: 'Тип плит и максимальный формат (фанера / серединки / ЛДСП / сотовые панели)'
      },
      {
        cn: '需要的总压力（吨位）或单位压力要求',
        mic: 'Required total force (tonnage) or unit pressure requirement',
        vn: 'Tổng áp lực cần (tấn) hoặc yêu cầu áp suất đơn vị',
        ru: 'Необходимое усилие (тоннаж) или удельное давление'
      },
      {
        cn: '板垛最大厚度与单次压合数量',
        mic: 'Maximum stack thickness and number of panels pressed at once',
        vn: 'Độ dày chồng ván tối đa và số tấm ép mỗi lần',
        ru: 'Максимальная толщина пакета и число плит за одно прессование'
      },
      {
        cn: '日产量与冷压保压时间要求',
        mic: 'Daily output and required cold-press hold time',
        vn: 'Sản lượng ngày và thời gian giữ ép lạnh yêu cầu',
        ru: 'Суточный выпуск и требуемое время выдержки'
      },
      {
        cn: '供电条件（电压/相数）与车间布置空间',
        mic: 'Power supply (voltage / phase) and workshop layout space',
        vn: 'Nguồn điện (điện áp/số pha) và không gian bố trí xưởng',
        ru: 'Электропитание (напряжение/фазы) и пространство компоновки цеха'
      }
    ],
    faq: [
      {
        q: {
          cn: '冷压机和热压机到底怎么分工？',
          mic: 'How do cold press and hot press divide the work?',
          vn: 'Máy ép lạnh và máy ép nóng phân công thế nào?',
          ru: 'Как разделяются задачи холодного и горячего пресса?'
        },
        a: {
          cn: '简单说：冷压管「定型」，热压管「贴面」。冷压用冷固胶把厚板、多层板压实定型，内应力小、不伤板；热压用高温把浸渍纸、覆膜快速压贴到基材表面。免漆板、蜂窝板这类怕高温的板材走冷压，贴面装饰工序走热压。两条都做的话，我们按「冷压定型 → 热压贴面」给您排整线。',
          mic: 'In short: the cold press sets the shape, the hot press does the facing. The cold press bonds and sets thick and multi-layer panels with cold-cure glue — low internal stress, no heat damage. The hot press bonds impregnated paper and film onto the surface fast with heat. Heat-sensitive panels like melamine-faced and honeycomb boards go through the cold press, decorative facing goes through the hot press. If you need both, we lay out the line as cold press first, hot press after.',
          vn: 'Nói ngắn gọn: ép lạnh lo «định hình», ép nóng lo «dán bề mặt». Ép lạnh dùng keo lạnh ép chặt ván dày, ván nhiều lớp, ứng suất nhỏ không hại ván; ép nóng dùng nhiệt độ cao dán nhanh giấy ngâm, phim lên bề mặt. Ván không sơn, ván tổ ong vốn sợ nhiệt nên đi ép lạnh, công đoạn dán trang trí đi ép nóng. Nếu làm cả hai, chúng tôi sẽ bố trí dây chuyền «ép lạnh trước → ép nóng sau».',
          ru: 'Коротко: холодный пресс отвечает за формовку, горячий — за облицовку. Холодный склеивает и фиксирует толстые и многослойные пакеты клеем холодного отверждения — малые напряжения, без теплового вреда. Горячий быстро приклеивает пропитанную бумагу и плёнку к поверхности за счёт температуры. Теплочувствительные плиты (ЛДСП, сотовые) идут через холодный пресс, декоративная облицовка — через горячий. Если нужны оба, мы выстроим линию «холодный пресс → горячий пресс».'
        }
      },
      {
        q: {
          cn: '吨位怎么算？压我的板需要多大压力？',
          mic: 'How is tonnage calculated? How much force do my panels need?',
          vn: 'Tải tính thế nào? Ép ván của tôi cần áp lực bao nhiêu?',
          ru: 'Как рассчитывается тоннаж? Какое усилие нужно для моих плит?'
        },
        a: {
          cn: '总压力 = 板材受压面积 × 单位压力。常见板材冷压单位压力在 0.5–1.0 MPa 之间，板材越厚、层数越多取越高值。把您的板材幅面和厚度发给我们，我们直接算出吨位并推荐对应机型，不用您自己套公式。',
          mic: 'Total force = pressed panel area × unit pressure. For common panels, cold pressing runs 0.5–1.0 MPa unit pressure; thicker panels and more layers take the higher end. Send us your panel format and thickness and we will calculate the tonnage and recommend the matching model — no need to work the formula yourself.',
          vn: 'Tổng áp lực = diện tích chịu ép × áp suất đơn vị. Với ván thông thường, ép lạnh lấy 0,5–1,0 MPa; ván dày hơn, nhiều lớp hơn lấy giá trị cao. Gửi khổ và độ dày ván cho chúng tôi, chúng tôi tính tải và chỉ định máy phù hợp, anh không cần tự công thức.',
          ru: 'Усилие = площадь прессования × удельное давление. Для типовых плит холодное прессование идёт при 0,5–1,0 МПа; чем толще пакет и больше слоёв, тем ближе к верхней границе. Пришлите формат и толщину плит — мы посчитаем тоннаж и предложим подходящую модель, формула вам не понадобится.'
        }
      },
      {
        q: {
          cn: '台面 4200×1250mm 是为多大板材设计的？',
          mic: 'What panel size is the 4200×1250mm table designed for?',
          vn: 'Mặt bàn 4200×1250mm thiết kế cho ván cỡ nào?',
          ru: 'На какой размер плиты рассчитан стол 4200×1250 мм?'
        },
        a: {
          cn: '4200×1250mm 台面主要服务超长幅面与双幅并压：比如 2440mm 长板横放加余量，或两小幅并排一次压合。如果您压的是标准 1220×2440mm 板，2500×1250mm 或 3200×1300mm 台面通常就够。把产品清单发给我们，按最大幅面选台面，不花冤枉钱。',
          mic: 'The 4200×1250mm table mainly serves extra-long formats and double-up pressing: for example a 2440mm-long panel laid across with margin, or two smaller panels pressed side by side in one go. If you press standard 1220×2440mm panels, a 2500×1250mm or 3200×1300mm table is usually enough. Send us your product list and we will size the table to your largest format — no paying for capacity you don\'t need.',
          vn: 'Mặt bàn 4200×1250mm chủ yếu phục vụ khổ siêu dài và ép hai tấm song song: ví dụ ván dài 2440mm đặt ngang kèm dư, hoặc hai tấm nhỏ ép cạnh nhau một lần. Nếu ép ván tiêu chuẩn 1220×2440mm, mặt bàn 2500×1250mm hoặc 3200×1300mm thường là đủ. Gửi danh sách sản phẩm, chúng tôi chọn mặt bàn theo khổ lớn nhất, không lãng phí.',
          ru: 'Стол 4200×1250 мм предназначен для сверхдлинных форматов и двойного прессования: например, плита длиной 2440 мм поперёк с запасом или две малые плиты рядом за один цикл. Для стандартных плит 1220×2440 мм обычно достаточно стола 2500×1250 или 3200×1300 мм. Пришлите список продукции — подберём стол под максимальный формат, без лишних затрат.'
        }
      },
      {
        q: {
          cn: '冷压一次能压多少张？保压要多久？',
          mic: 'How many panels per cycle? How long is the hold time?',
          vn: 'Mỗi lần ép được bao nhiêu tấm? Giữ ép bao lâu?',
          ru: 'Сколько плит за цикл? Сколько держать под давлением?'
        },
        a: {
          cn: '一次压合的数量取决于板垛总厚度和开距，开距最大可到 1000mm，能容纳厚垛。保压时间由胶水决定：冷固胶一般 30 分钟到数小时，具体按胶水说明书和车间温度定。告诉我们用哪种胶、日产量多少，我们给出每次压合数量和班产测算。',
          mic: 'Panels per cycle depends on stack thickness and the daylight opening — up to 1000mm for thick stacks. Hold time is set by the glue: cold-cure adhesives typically run from 30 minutes to several hours, depending on the glue data sheet and shop temperature. Tell us which glue you use and your daily output, and we will estimate panels per cycle and output per shift.',
          vn: 'Số tấm mỗi lần phụ thuộc tổng độ dày chồng ván và khoảng mở — tối đa 1000mm, chứa được chồng dày. Thời gian giữ ép do keo quyết định: keo lạnh thường từ 30 phút đến vài giờ, tùy hướng dẫn keo và nhiệt độ xưởng. Cho biết loại keo và sản lượng ngày, chúng tôi tính số tấm mỗi lần và sản lượng mỗi ca.',
          ru: 'Число плит за цикл зависит от толщины пакета и просвета — до 1000 мм для толстых пакетов. Время выдержки определяет клей: клеи холодного отверждения — обычно от 30 минут до нескольких часов, по паспорту клея и температуре цеха. Укажите клей и суточный выпуск — мы рассчитаем плит за цикл и выработку за смену.'
        }
      }
    ],
    models: [
      {
        id: 'mh3248-50t-20260207',
        model: 'MH3248x50T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x50T_20260207_yellow-white/cold-press_MH3248x50T_20260207_yellow-white_1_up_001.webp',
          '/cold-press/cold-press_MH3248x50T_20260207_yellow-white/cold-press_MH3248x50T_20260207_yellow-white_1_up_002.webp',
          '/cold-press/cold-press_MH3248x50T_20260207_yellow-white/cold-press_MH3248x50T_20260207_yellow-white_2_up_001.webp',
          '/cold-press/cold-press_MH3248x50T_20260207_yellow-white/cold-press_MH3248x50T_20260207_yellow-white_2_up_002.webp',
          '/cold-press/cold-press_MH3248x50T_20260207_yellow-white/cold-press_MH3248x50T_20260207_yellow-white_3_up_001.webp',
        ],
        specs: [
          { keyCn: '工作台尺寸', keyMic: 'Table Size', keyVn: 'Kích thước bàn làm việc', valueCn: '2500x1300mm', valueMic: '2500x1300mm', valueRu: '2500 × 1300 мм', keyRu: 'Размер рабочего стола' },
          { keyCn: '行程高度', keyMic: 'Stroke Height', keyVn: 'Chiều cao hành trình', valueCn: '1300mm', valueMic: '1300mm', valueRu: '1300 мм', keyRu: 'Высота хода' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '50T', valueMic: '50T', valueRu: '50 т', keyRu: 'Максимальное усилие' },
          { keyCn: '油缸直径及数量', keyMic: 'Cylinder Diameter & Qty', keyVn: 'Đường kính và số lượng xi-lanh', valueCn: 'D125/90mm x 2PCS', valueMic: 'D125/90mm x 2PCS', valueRu: 'D125/90 мм × 2 шт.', keyRu: 'Диаметр и количество гидроцилиндров' },
          { keyCn: '液压电机功率', keyMic: 'Hydraulic Motor Power', keyVn: 'Công suất động cơ thủy lực', valueCn: '4KW', valueMic: '4KW', valueRu: '4 кВт', keyRu: 'Мощность гидравлического двигателя' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', valueCn: '380V 60HZ 3PH', valueMic: '380V 60HZ 3PH', valueRu: '380 В, 60 Гц, 3 фазы', keyRu: 'Напряжение' },
          { keyCn: '下工作台', keyMic: 'Lower Table', keyVn: 'Bàn làm việc dưới', valueCn: '三排气缸升降滚轮', valueMic: 'Triple-row cylinder lifting rollers', valueVn: 'Con lăn nâng hạ bằng xi-lanh ba hàng', valueRu: 'Подъёмные ролики на трёхрядных цилиндрах', keyRu: 'Нижний рабочий стол' },
          { keyCn: '载重', keyMic: 'Load Capacity', keyVn: 'Tải trọng', valueCn: '1000KG', valueMic: '1000KG', valueRu: '1000 кг', keyRu: 'Грузоподъёмность' },
          { keyCn: '台面每边气缸数量', keyMic: 'Cylinders Per Side', keyVn: 'Số xi-lanh mỗi cạnh bàn', valueCn: '3条', valueMic: '3 pcs', valueVn: '3 thanh', valueRu: '3 шт.', keyRu: 'Количество цилиндров на стороне стола' },
          { keyCn: '气缸内径', keyMic: 'Cylinder Bore', keyVn: 'Đường kính trong xi-lanh', valueCn: '100mm', valueMic: '100mm', valueRu: '100 мм', keyRu: 'Внутренний диаметр цилиндра' },
          { keyCn: '气缸行程', keyMic: 'Cylinder Stroke', keyVn: 'Hành trình xi-lanh', valueCn: '20mm', valueMic: '20mm', valueRu: '20 мм', keyRu: 'Ход цилиндра' },
          { keyCn: '滚轮升起最高', keyMic: 'Max Roller Lift', keyVn: 'Chiều cao nâng tối đa con lăn', valueCn: '15mm', valueMic: '15mm', valueRu: '15 мм', keyRu: 'Максимальный подъём роликов' },
          { keyCn: '滚轮直径', keyMic: 'Roller Diameter', keyVn: 'Đường kính con lăn', valueCn: '50mm', valueMic: '50mm', valueRu: '50 мм', keyRu: 'Диаметр ролика' },
          { keyCn: '滚轮长度', keyMic: 'Roller Length', keyVn: 'Chiều dài con lăn', valueCn: '90mm', valueMic: '90mm', valueRu: '90 мм', keyRu: 'Длина ролика' },
          { keyCn: '滚轮中心间距', keyMic: 'Roller Center Distance', keyVn: 'Khoảng cách tâm con lăn', valueCn: '150mm', valueMic: '150mm', valueRu: '150 мм', keyRu: 'Расстояние между центрами роликов' },
          { keyCn: '每排滚轮数量', keyMic: 'Rollers Per Row', keyVn: 'Số con lăn mỗi hàng', valueCn: '10个', valueMic: '10 pcs', valueVn: '10 cái', valueRu: '10 шт.', keyRu: 'Количество роликов в ряду' },
        ],
        features: []
      },
      {
        id: 'mh3248x200t-20251020',
        model: 'MH3248x200T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x200T_20251020_yellow-white/cold-press_MH3248x200T_20251020_yellow-white_1_up_001.webp',
          '/cold-press/cold-press_MH3248x200T_20251020_yellow-white/cold-press_MH3248x200T_20251020_yellow-white_2_up_001.webp',
        ],
        specs: [
          { keyCn: '工作台尺寸', keyMic: 'Table Size', keyVn: 'Kích thước bàn làm việc', valueCn: '4200×1250mm', valueMic: '4200×1250mm', valueRu: '4200 × 1250 мм', keyRu: 'Размер рабочего стола' },
          { keyCn: '开距', keyMic: 'Opening Distance', keyVn: 'Hành trình mở', valueCn: '1000mm', valueMic: '1000mm', valueRu: '1000 мм', keyRu: 'Раскрытие' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '200T', valueMic: '200T', valueRu: '200 т', keyRu: 'Максимальное усилие' },
          { keyCn: '规格', keyMic: 'Specification', keyVn: 'Thông số kỹ thuật', valueCn: '分四段', valueMic: '4 Sections', valueVn: 'Chia bốn đoạn', valueRu: '4 секции', keyRu: 'Спецификация' },
          { keyCn: '缸数', keyMic: 'Cylinder Quantity', keyVn: 'Số xi-lanh', valueCn: '4支120缸', valueMic: '4 x D120mm Cylinders', valueVn: '4 xi-lanh 120', valueRu: '4 цилиндра D120 мм', keyRu: 'Количество цилиндров' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '7.5kW', valueMic: '7.5kW', valueRu: '7,5 кВт', keyRu: 'Мощность' },
        ],
        features: []
      },
      {
        id: 'mh3248x100t-20260425',
        model: 'MH3248x100T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x100T_20260425_black-yellow-white/cold-press_MH3248x100T_20260425_black-yellow-white_up(4)_001.webp',
          '/cold-press/cold-press_MH3248x100T_20260425_black-yellow-white/cold-press_MH3248x100T_20260425_black-yellow-white_up(5)_001.webp',
          '/cold-press/cold-press_MH3248x100T_20260425_black-yellow-white/cold-press_MH3248x100T_20260425_black-yellow-white_up (3)_001.webp',
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '3200×1600mm', valueMic: '3200×1600mm', valueRu: '3200 × 1600 мм', keyRu: 'Размер стола' },
          { keyCn: '油缸数量', keyMic: 'Number of Cylinders', keyVn: 'Số lượng xi-lanh', valueCn: '6支', valueMic: '6 Pcs', valueVn: '6 cái', valueRu: '6 шт.', keyRu: 'Количество гидроцилиндров' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '100T', valueMic: '100T', valueRu: '100 т', keyRu: 'Максимальное усилие' },
          { keyCn: '机器重量', keyMic: 'Machine Weight', keyVn: 'Trọng lượng máy', valueCn: '约4600kg', valueMic: 'approx. 4600kg', valueVn: 'Khoảng 4600kg', valueRu: 'ок. 4600 кг', keyRu: 'Масса станка' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '5.5kW', valueMic: '5.5kW', valueRu: '5,5 кВт', keyRu: 'Мощность' },
          { keyCn: '最大加工高度', keyMic: 'Max Processing Height', keyVn: 'Chiều cao gia công tối đa', valueCn: '1000mm', valueMic: '1000mm', valueRu: '1000 мм', keyRu: 'Максимальная высота обработки' },
        ],
        features: []
      },
      {
        id: 'mh3248x100t-20260509',
        model: 'MH3248x100T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x100T_20260509_yellow-white/cold-press_MH3248x100T_20260509_yellow-white (1)_up_001.webp',
          '/cold-press/cold-press_MH3248x100T_20260509_yellow-white/cold-press_MH3248x100T_20260509_yellow-white (3)_up_001.webp',
          '/cold-press/cold-press_MH3248x100T_20260509_yellow-white/cold-press_MH3248x100T_20260509_yellow-white (4)_up_001.webp',
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '4000×2200mm', valueMic: '4000×2200mm', valueRu: '4000 × 2200 мм', keyRu: 'Размер стола' },
          { keyCn: '油缸数量', keyMic: 'Number of Cylinders', keyVn: 'Số lượng xi-lanh', valueCn: '6支', valueMic: '6 Pcs', valueVn: '6 cái', valueRu: '6 шт.', keyRu: 'Количество гидроцилиндров' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '100T', valueMic: '100T', valueRu: '100 т', keyRu: 'Максимальное усилие' },
          { keyCn: '液压电机', keyMic: 'Hydraulic Motor', keyVn: 'Động cơ thủy lực', valueCn: '5.5kW', valueMic: '5.5kW', valueRu: '5,5 кВт', keyRu: 'Гидравлический двигатель' },
          { keyCn: '送料电机', keyMic: 'Feeding Motor', keyVn: 'Động cơ cấp liệu', valueCn: '2.2kW', valueMic: '2.2kW', valueRu: '2,2 кВт', keyRu: 'Двигатель подачи' },
          { keyCn: '最大加工高度', keyMic: 'Max Processing Height', keyVn: 'Chiều cao gia công tối đa', valueCn: '1300mm', valueMic: '1300mm', valueRu: '1300 мм', keyRu: 'Максимальная высота обработки' },
        ],
        features: []
      },
      {
        id: 'mh3248-30t-20260429',
        model: 'MH3248*30T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x30T_20260429_yellow-green-white/cold-press_MH3248x30T_20260429_yellow-green-white_1_up_001.webp',
          '/cold-press/cold-press_MH3248x30T_20260429_yellow-green-white/cold-press_MH3248x30T_20260429_yellow-green-white_2_up_001.webp',
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '400×160mm×2', valueMic: '400×160mm×2', valueRu: '400 × 160 мм × 2', keyRu: 'Размер стола' },
          { keyCn: '缸数', keyMic: 'Cylinder Count', keyVn: 'Số xi-lanh', valueCn: '2支', valueMic: '2 PCS', valueVn: '2 cái', valueRu: '2 шт.', keyRu: 'Количество цилиндров' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '30T', valueMic: '30T', valueRu: '30 т', keyRu: 'Максимальное усилие' },
          { keyCn: '最大加工高度', keyMic: 'Max Processing Height', keyVn: 'Chiều cao gia công tối đa', valueCn: '650mm', valueMic: '650mm', valueRu: '650 мм', keyRu: 'Максимальная высота обработки' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '4kW', valueMic: '4kW', valueRu: '4 кВт', keyRu: 'Мощность' },
        ],
        features: []
      },
      {
        id: 'mh3248x50t-20260604',
        model: 'MH3248x50T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x50T_20260604_yellow-white/cold-press_MH3248x50T_20260604_yellow-white (4)_up_001.webp',
          '/cold-press/cold-press_MH3248x50T_20260604_yellow-white/cold-press_MH3248x50T_20260604_yellow-white (2)_up_001.webp',
          '/cold-press/cold-press_MH3248x50T_20260604_yellow-white/cold-press_MH3248x50T_20260604_yellow-white (1)_up_001.webp',
          '/cold-press/cold-press_MH3248x50T_20260604_yellow-white/cold-press_MH3248x50T_20260604_yellow-white (6)_up_001.webp',
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '5000×2500mm', valueMic: '5000×2500mm', valueRu: '5000 × 2500 мм', keyRu: 'Размер стола' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '50T（5-50T 可调）', valueMic: '50T (adjustable 5-50T)', valueVn: '50T (điều chỉnh 5-50T)', valueRu: '50 т (регулируется в диапазоне 5–50 т)', keyRu: 'Максимальное усилие' },
          { keyCn: '油缸数量及直径', keyMic: 'Cylinder Qty & Diameter', keyVn: 'Số lượng và đường kính xi-lanh', valueCn: '6支 D100/70mm', valueMic: '6 cylinders, D100/70mm', valueVn: '6 cái D100/70mm', valueRu: '6 шт., D100/70 мм', keyRu: 'Количество и диаметр гидроцилиндров' },
          { keyCn: '压板开距', keyMic: 'Plate Opening Distance', keyVn: 'Hành trình mở tấm ép', valueCn: '1000mm', valueMic: '1000mm', valueRu: '1000 мм', keyRu: 'Раскрытие пресс-плиты' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '7.5kW+2.2kW', valueMic: '7.5kW+2.2kW', valueRu: '7,5 кВт + 2,2 кВт', keyRu: 'Мощность' },
          { keyCn: '平整度', keyMic: 'Flatness', keyVn: 'Độ phẳng', valueCn: '0.15mm/m', valueMic: '0.15mm/m', valueRu: '0,15 мм/м', keyRu: 'Плоскостность' },
          { keyCn: '下台承重', keyMic: 'Lower Table Load Capacity', keyVn: 'Tải bàn dưới', valueCn: '5t', valueMic: '5t', valueRu: '5 т', keyRu: 'Грузоподъёмность нижнего стола' },
          { keyCn: '控制方式', keyMic: 'Control Method', keyVn: 'Chế độ điều khiển', valueCn: '自动进出按键控制', valueMic: 'Auto in/out button control', valueVn: 'Điều khiển tự động vào ra bằng nút bấm', valueRu: 'Кнопочное управление автоматической подачей/выводом', keyRu: 'Способ управления' },
          { keyCn: '台面加工', keyMic: 'Table Processing', keyVn: 'Gia công mặt bàn', valueCn: '上下台面精磨，龙门铣床加工', valueMic: 'Precision-ground upper/lower tables, gantry milling machine processing', valueVn: 'Mặt bàn trên dưới mài tinh, thân máy gia công bằng máy phay giường', valueRu: 'Верхний и нижний столы — тонкое шлифование; корпус — обработка на портальном фрезерном станке', keyRu: 'Обработка стола' },
        ],
        features: []
      },
      {
        id: 'mh3248x50t-20260414',
        model: 'MH3248x50T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x50T_20260414_yellow-white/cold-press_MH3248x50T_20260414_yellow-white (1)_up_001.webp',
          '/cold-press/cold-press_MH3248x50T_20260414_yellow-white/cold-press_MH3248x50T_20260414_yellow-white (1)_up_002.webp',
          '/cold-press/cold-press_MH3248x50T_20260414_yellow-white/cold-press_MH3248x50T_20260414_yellow-white (1)_up_003.webp',
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '3000×1300mm', valueMic: '3000×1300mm', valueRu: '3000 × 1300 мм', keyRu: 'Размер стола' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', valueCn: '50T', valueMic: '50T', valueRu: '50 т', keyRu: 'Максимальное усилие' },
          { keyCn: '行程', keyMic: 'Stroke', keyVn: 'Hành trình', valueCn: '1300mm', valueMic: '1300mm', valueRu: '1300 мм', keyRu: 'Ход' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '4kW', valueMic: '4kW', valueRu: '4 кВт', keyRu: 'Мощность' },
          { keyCn: '油缸', keyMic: 'Cylinders', keyVn: 'Xi-lanh thủy lực', valueCn: '2支', valueMic: '2 pcs', valueVn: '2 cái', valueRu: '2 шт.', keyRu: 'Гидроцилиндры' },
        ],
        features: []
      },
      {
        id: 'mh3248x150tx3',
        model: 'MH3248x150Tx3',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x150Tx3_20190123_yellow-white/cold-press_MH3248x150Tx3_20190123_yellow-white_up(2)_001.webp',
          '/cold-press/cold-press_MH3248x150Tx3_20190123_yellow-white/cold-press_MH3248x150Tx3_20190123_yellow-white_up(1)_001.webp',
          '/cold-press/cold-press_MH3248x150Tx3_20190123_yellow-white/cold-press_MH3248x150Tx3_20190123_yellow-white_up(1)_002.webp',
        ],
        specs: [
          { keyCn: '每段台面尺寸', keyMic: 'Table Size per Section', keyVn: 'Kích thước bàn mỗi đoạn', valueCn: '1250×1500mm', valueMic: '1250×1500mm', valueVn: '1250×1500mm', valueRu: '1250 × 1500 мм', keyRu: 'Размер стола каждой секции' },
          { keyCn: '开距', keyMic: 'Opening Distance', keyVn: 'Hành trình mở', valueCn: '1300mm', valueMic: '1300mm', valueVn: '1300mm', valueRu: '1300 мм', keyRu: 'Раскрытие' },
          { keyCn: '每段压力', keyMic: 'Pressure per Section', keyVn: 'Áp suất mỗi đoạn', valueCn: '50T', valueMic: '50T', valueVn: '50T', valueRu: '50 т', keyRu: 'Усилие на секцию' },
          { keyCn: '规格', keyMic: 'Specification', keyVn: 'Thông số kỹ thuật', valueCn: '分三段', valueMic: '3 Sections', valueVn: '3 đoạn', valueRu: '3 секции', keyRu: 'Спецификация' },
          { keyCn: '缸数', keyMic: 'Cylinder Quantity', keyVn: 'Số xi-lanh', valueCn: '每段 2 条，共 6 条', valueMic: '2 per section, 6 total', valueVn: '2 mỗi đoạn, tổng 6 cái', valueRu: '2 на секцию, всего 6 шт.', keyRu: 'Количество цилиндров' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '5.5kW', valueMic: '5.5kW', valueVn: '5.5kW', valueRu: '5,5 кВт', keyRu: 'Мощность' },
          { keyCn: '下台面', keyMic: 'Lower Table', keyVn: 'Bàn làm việc dưới', valueCn: '配升降滚轮', valueMic: 'With lifting rollers', valueVn: 'Có con lăn nâng hạ', valueRu: 'С подъёмными роликами', keyRu: 'Нижний стол' },
          { keyCn: '外形尺寸', keyMic: 'Overall Dimensions', keyVn: 'Kích thước tổng thể', valueCn: '约 4250×1500×2300mm', valueMic: 'Approx. 4250×1500×2300mm', valueVn: 'Khoảng 4250×1500×2300mm', valueRu: 'ок. 4250 × 1500 × 2300 мм', keyRu: 'Габаритные размеры' },
          { keyCn: '重量', keyMic: 'Weight', keyVn: 'Trọng lượng', valueCn: '约 2000kg', valueMic: 'Approx. 2000kg', valueVn: 'Khoảng 2000kg', valueRu: 'ок. 2000 кг', keyRu: 'Масса' },
        ],
        features: []
      },
      {
        id: 'mh3248x60t',
        model: 'MH3248x60T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x60T_20261013_green-white/cold-press_MH3248x60T_20261013_green-white_up(2)_001.webp',
          '/cold-press/cold-press_MH3248x60T_20261013_green-white/cold-press_MH3248x60T_20261013_green-white_up(3)_001.webp'
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', keyRu: 'Размер стола', valueCn: '1000×800mm', valueMic: '1000×800mm', valueVn: '1000×800mm', valueRu: '1000 × 800 мм' },
          { keyCn: '开距', keyMic: 'Opening Distance', keyVn: 'Hành trình mở', keyRu: 'Раскрытие', valueCn: '1000mm', valueMic: '1000mm', valueVn: '1000mm', valueRu: '1000 мм' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', keyRu: 'Максимальное усилие', valueCn: '60T', valueMic: '60T', valueVn: '60T', valueRu: '60 т' },
          { keyCn: '缸数', keyMic: 'Cylinder Quantity', keyVn: 'Số xi-lanh', keyRu: 'Количество цилиндров', valueCn: '2支', valueMic: '2 Pcs', valueVn: '2 cái', valueRu: '2 шт.' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', keyRu: 'Мощность', valueCn: '4kW', valueMic: '4kW', valueVn: '4kW', valueRu: '4 кВт' },
        ],
        features: []
      },
      {
        id: 'mh3248x250t',
        model: 'MH3248x250T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/cold-press/cold-press_MH3248x250T_20261028_yellow-white/cold-press_MH3248x250T_20261028_yellow-white_up(1)_001.webp',
          '/cold-press/cold-press_MH3248x250T_20261028_yellow-white/cold-press_MH3248x250T_20261028_yellow-white_up(2)_001.webp'
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', keyRu: 'Размер стола', valueCn: '3000×1250mm', valueMic: '3000×1250mm', valueVn: '3000×1250mm', valueRu: '3000 × 1250 мм' },
          { keyCn: '开距', keyMic: 'Opening Distance', keyVn: 'Hành trình mở', keyRu: 'Раскрытие', valueCn: '1000mm', valueMic: '1000mm', valueVn: '1000mm', valueRu: '1000 мм' },
          { keyCn: '最大压力', keyMic: 'Max Pressure', keyVn: 'Áp suất tối đa', keyRu: 'Максимальное усилие', valueCn: '250T', valueMic: '250T', valueVn: '250T', valueRu: '250 т' },
          { keyCn: '缸数', keyMic: 'Cylinder Quantity', keyVn: 'Số xi-lanh', keyRu: 'Количество цилиндров', valueCn: '8支140/100缸', valueMic: '8 x D140/100mm Cylinders', valueVn: '8 xi-lanh D140/100mm', valueRu: '8 цилиндров D140/100 мм' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', keyRu: 'Мощность', valueCn: '7.5kW', valueMic: '7.5kW', valueVn: '7.5kW', valueRu: '7,5 кВт' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', keyRu: 'Напряжение', valueCn: '380V 50HZ 3PH', valueMic: '380V 50HZ 3PH', valueVn: '380V 50HZ 3PH', valueRu: '380 В, 50 Гц, 3 фазы' },
        ],
        features: []
      },

    ]
  },
  {
    id: 'multi-blade-saw',
    cn: '多片锯',
    mic: 'Multi-blade Saw',
    vn: 'Máy cưa đa lưỡi',
    ru: 'Многопильный станок',
    descCn: '一次性多片切割，大幅提高生产效率，切割精度高，适用于实木、板材的纵向开料。',
    descMic: 'Multiple blade cutting in one pass for high efficiency. Suitable for solid wood and panel longitudinal cutting.',
    descVn: 'Cắt nhiều lưỡi trong một lần, nâng cao hiệu suất và độ chính xác. Phù hợp cắt dọc gỗ tự nhiên và ván.',
    descRu: 'Многопильная резка за один проход значительно повышает производительность. Высокая точность реза, подходит для продольной распиловки массива и плитных материалов.',
    icon: '⚙️',
    color: "url('/multi-blade-saw-bg.webp')",
    intro: [
      {
        cn: '多片锯的核心是一根锯轴上装多片锯片，一次进给同时开出多条板条，替代反复装夹的单片锯开料。原木、方木经过它一次走完就是等宽板条，宽度和厚度靠锯片间距与垫套调整，是实木开料和板材纵剖线上提效率的关键工位。',
        mic: 'The core of a multi-blade saw is multiple blades mounted on one arbor: one feed cuts several strips at once, replacing the repeated clamping of a single-blade saw. Logs and squares come out as equal-width strips in a single pass; strip width and thickness are set by blade spacing and spacers. It is the key station for solid-wood breakdown and panel ripping lines.',
        vn: 'Cốt lõi của máy cưa đa lưỡi là gắn nhiều lưỡi trên một trục, một lần cấp cắt ra nhiều dải ván cùng lúc, thay thế cách kẹp đi kẹp lại của cưa đơn. Gỗ tròn, gỗ vuông đi qua một lần là ra các dải bằng nhau, chiều rộng và dày chỉnh bằng khoảng lưỡi và vòng đệm — là trạm then chốt nâng hiệu suất cho đường xẻ gỗ tròn và rọc ván.',
        ru: 'Суть многопильного станка — несколько пил на одном шпинделе: за одну подачу нарезается несколько реек сразу, вместо многократных переустановок однопильного станка. Бревно или брус за один проход превращаются в рейки равной ширины; ширина и толщина задаются межпильными втулками. Это ключевой пост для раскроя массива и продольного роспуска плит.'
      },
      {
        cn: '选多片锯主要看三个数：最大加工厚度、最少加工长度和锯轴直径。MJ1300 系列加工厚度 5–50mm、最少加工长度 650mm，板式与方木机型都有。锯片数量、上下轴配置和进出料辊台都按您开料的规格来配，保证一次开料就出成品条。',
        mic: 'Choosing a multi-blade saw comes down to three numbers: maximum cutting thickness, minimum workpiece length and arbor diameter. The MJ1300 series cuts 5–50mm thick with a 650mm minimum length, in both panel and square-timber versions. Blade count, upper/lower arbor configuration and infeed/outfeed tables are all configured to your ripping specs, so one pass yields finished strips.',
        vn: 'Chọn máy cưa đa lưỡi chủ yếu xem ba con số: độ dày gia công lớn nhất, chiều dài gia công nhỏ nhất và đường kính trục. Dòng MJ1300 gia công dày 5–50mm, chiều dài tối thiểu 650mm, có cả phiên bản ván và gỗ vuông. Số lưỡi, cấu hình trục trên/dưới và bàn进出 liệu đều được cấu hình theo quy cách xẻ của anh, một lần cắt là ra dải thành phẩm.',
        ru: 'Выбор многопильного станка сводится к трём числам: максимальная толщина реза, минимальная длина заготовки и диаметр шпинделя. Серия MJ1300 режет толщиной 5–50 мм при минимальной длине 650 мм, в версиях для плит и для бруса. Число пил, конфигурация верхнего/нижнего шпинделей и подающие столы подбираются под ваши задачи, чтобы за один проход получать готовые рейки.'
      }
    ],
    highlights: [
      {
        cn: '一次进给开出多条等宽板条，效率是单片锯的数倍',
        mic: 'One feed cuts multiple equal-width strips — several times faster than a single-blade saw',
        vn: 'Một lần cấp cắt nhiều dải bằng nhau, hiệu suất gấp nhiều lần cưa đơn',
        ru: 'Одна подача нарезает несколько реек равной ширины — в разы быстрее однопильного станка'
      },
      {
        cn: '加工厚度 5–50mm，板式与方木机型齐全',
        mic: 'Cutting thickness 5–50mm, with panel and square-timber models available',
        vn: 'Độ dày gia công 5–50mm, đủ phiên bản ván và gỗ vuông',
        ru: 'Толщина реза 5–50 мм, модели для плит и бруса'
      },
      {
        cn: '锯轴刚性好，锯片定位精准，切面光滑少跑锯',
        mic: 'Rigid arbor and precise blade positioning for smooth cuts with minimal wander',
        vn: 'Trục cưa cứng vững, định vị lưỡi chính xác, mặt cắt nhẵn, ít lệch đường',
        ru: 'Жёсткий шпиндель и точная установка пил — чистый рез с минимальным уводом'
      },
      {
        cn: '进出料辊台辅助送料，长条料连续开料不断流',
        mic: 'Infeed/outfeed roller tables support feeding for continuous ripping of long stock',
        vn: 'Bàn进出 liệu hỗ trợ đưa gỗ, xẻ liên tục vật liệu dài không gián đoạn',
        ru: 'Подающие и приемные рольганги обеспечивают непрерывный роспуск длинных заготовок'
      },
      {
        cn: '与上下料台组成开料工位，接入整线自动供料',
        mic: 'Forms a breakdown station with loading tables and links into automated line feeding',
        vn: 'Kết hợp bàn nạp/xả thành trạm xẻ liệu, kết nối cấp liệu tự động của dây chuyền',
        ru: 'Образует пост раскроя с загрузочными столами и встраивается в автоматическую подачу линии'
      }
    ],
    selection: [
      {
        cn: '开料对象（原木/方木/板材）与规格范围',
        mic: 'What you rip (logs / squares / panels) and the size range',
        vn: 'Đối tượng xẻ (gỗ tròn/gỗ vuông/ván) và phạm vi quy cách',
        ru: 'Что распиливаете (бревно / брус / плиты) и диапазон размеров'
      },
      {
        cn: '成品板条的宽度与厚度要求',
        mic: 'Required strip width and thickness',
        vn: 'Yêu cầu chiều rộng và độ dày dải thành phẩm',
        ru: 'Требуемые ширина и толщина реек'
      },
      {
        cn: '每日开料量与班次安排',
        mic: 'Daily ripping volume and shift arrangement',
        vn: 'Sản lượng xẻ mỗi ngày và bố trí ca làm việc',
        ru: 'Суточный объём роспуска и сменность'
      },
      {
        cn: '锯片数量与直径偏好（或有现成锯片库存）',
        mic: 'Blade count and diameter preference (or existing blade stock)',
        vn: 'Số lưỡi và đường kính mong muốn (hoặc tồn kho lưỡi sẵn có)',
        ru: 'Число и диаметр пил (или имеющийся запас пил)'
      },
      {
        cn: '供电条件与除尘配套情况',
        mic: 'Power supply and dust extraction setup',
        vn: 'Nguồn điện và tình trạng thiết bị hút bụi',
        ru: 'Электропитание и аспирационная система'
      }
    ],
    faq: [
      {
        q: {
          cn: '多片锯一次能开几条？宽度怎么调？',
          mic: 'How many strips per pass? How is width adjusted?',
          vn: 'Một lần cắt được mấy dải? Chỉnh độ rộng thế nào?',
          ru: 'Сколько реек за проход? Как регулируется ширина?'
        },
        a: {
          cn: '条数取决于锯轴长度和锯片直径，装几片就开几条，常见的从 4 片到 10 片以上。每条宽度由相邻锯片之间的垫套厚度决定，换垫套就能改宽度组合。告诉我们成品的宽度清单，我们配好锯片组合和垫套，到场就能按您的规格开料。',
          mic: 'Strip count depends on arbor length and blade diameter — as many strips as blades fitted, commonly 4 to 10 or more. Each strip width is set by the spacer thickness between adjacent blades; changing spacers changes the width combination. Send us your finished-strip width list and we will configure the blade set and spacers so the machine rips to your spec on day one.',
          vn: 'Số dải phụ thuộc chiều dài trục và đường kính lưỡi — gắn bao nhiêu lưỡi cắt bấy nhiêu dải, thường từ 4 đến 10 lưỡi trở lên. Độ rộng mỗi dải do độ dày vòng đệm giữa hai lưỡi quyết định, đổi đệm là đổi tổ hợp độ rộng. Gửi danh sách độ rộng thành phẩm, chúng tôi sẽ cấu hình bộ lưỡi và vòng đệm, máy về là xẻ đúng quy cách ngay.',
          ru: 'Число реек зависит от длины шпинделя и диаметра пил — сколько пил установлено, столько и режется; обычно от 4 до 10 и более. Ширина каждой рейки задаётся толщиной проставочных втулок между пилами: меняете втулки — меняется набор ширин. Пришлите список ширин готовых реек, мы скомплектуем набор пил и втулок, чтобы станок сразу работал под ваши размеры.'
        }
      },
      {
        q: {
          cn: '板式多片锯和圆木多片锯有什么区别？',
          mic: 'What is the difference between a panel multi-blade saw and a log multi-blade saw?',
          vn: 'Máy cưa đa lưỡi dạng ván và dạng gỗ tròn khác nhau thế nào?',
          ru: 'В чём разница между многопильным станком для плит и для бревна?'
        },
        a: {
          cn: '板式多片锯加工的是已经锯好的板材或方料，任务是纵剖开条，追求精度和切面光洁度；圆木多片锯带上下轴或导向装置，直接加工原木圆料，先把圆料铣出基准面再开条。两个机型我都做，按您上游来料是板材还是原木选型，也可以两台配成「先圆后板」的组合。',
          mic: 'A panel multi-blade saw processes boards and squares that are already sawn — its job is ripping with precision and clean cut faces. A log multi-blade saw has upper/lower arbors or guides to process round logs directly, milling a reference face before ripping. We make both: choose by whether your upstream material is sawn stock or logs, or pair the two as a log-first, panel-after setup.',
          vn: 'Máy đa lưỡi dạng ván gia công ván và gỗ vuông đã xẻ sẵn, nhiệm vụ là rọc dọc với độ chính xác và mặt cắt mịn; máy dạng gỗ tròn có trục trên/dưới hoặc cụm định vị để gia công trực tiếp gỗ tròn, phay mặt chuẩn trước khi xẻ. Cả hai loại chúng tôi đều làm, chọn theo nguyên liệu đầu vào của anh là ván hay gỗ tròn, hoặc ghép hai máy thành tổ hợp «gỗ tròn trước, ván sau».',
          ru: 'Многопильный станок для плит обрабатывает уже распиленные доски и брус — его задача роспуск с высокой точностью и чистым резом. Станок для бревна оснащается верхним/нижним шпинделем или направляющими и работает с круглым лесом напрямую, фрезеруя базовую поверхность перед роспуском. Мы делаем оба типа: выбор зависит от того, что поступает с предыдущей операции — доска или бревно; возможна и связка «сначала кругляк, затем плиты».'
        }
      },
      {
        q: {
          cn: '锯片消耗大不大？多久换一次？',
          mic: 'How much do blades wear? How often do they need changing?',
          vn: 'Mòn lưỡi nhiều không? Bao lâu thay một lần?',
          ru: 'Сильно изнашиваются пилы? Как часто их менять?'
        },
        a: {
          cn: '锯片寿命与材质硬度和含砂量关系最大。正常实木开料，硬质合金锯片修磨周期通常在几十到上百小时；砂石多的桉木等会明显缩短。建议备两套锯片轮换修磨，我们随机配套合金锯片，也提供常用规格的备件供应，修磨周期和耗材计划会在交付资料里给您。',
          mic: 'Blade life depends mostly on material hardness and grit content. For normal solid-wood ripping, carbide-tipped blades typically run tens to over a hundred hours between re-sharpenings; gritty species like eucalyptus shorten that noticeably. We recommend keeping two blade sets in rotation. Machines come with carbide blades fitted, we supply common spare specs, and the sharpening cycle and consumables plan are included in the handover documentation.',
          vn: 'Tuổi thọ lưỡi chủ yếu phụ thuộc độ cứng vật liệu và hàm lượng cát. Xẻ gỗ tròn bình thường, lưỡi hợp kim cứng thường mài lại sau vài chục đến hơn trăm giờ; các loại gỗ nhiều cát như bạch đàn sẽ rút ngắn đáng kể. Nên chuẩn bị hai bộ lưỡi xoay vòng mài. Máy giao kèm lưỡi hợp kim, chúng tôi cũng cung cấp lưỡi các quy cách thông dụng, chu kỳ mài và kế hoạch vật tư sẽ có trong hồ sơ bàn giao.',
          ru: 'Ресурс пил зависит прежде всего от твёрдости материала и содержания песка. При обычном роспуске массива твердосплавные пилы работают от десятков до ста с лишним часов между переточками; песочистые породы вроде эвкалипта заметно сокращают ресурс. Рекомендуем держать два комплекта пил для ротации. Станок поставляется с твердосплавными пилами, мы также поставляем ходовые типоразмеры, а график переточек и план расходников включены в документацию при передаче.'
        }
      },
      {
        q: {
          cn: '能和上下料设备组成自动开料线吗？',
          mic: 'Can it form an automatic ripping line with loading equipment?',
          vn: 'Có thể kết hợp thiết bị nạp/xả thành đường xẻ tự động không?',
          ru: 'Можно ли собрать автоматическую линию раскроя с загрузочным оборудованием?'
        },
        a: {
          cn: '可以。多片锯前后配升降进料台、出料辊台，再接分等输送，就是一条连续开料线；需要的话还能和修边锯、横截锯联线。把您的来料形式和场地尺寸发给我们，我们出开料工位的布局图和配置清单。',
          mic: 'Yes. Pair the saw with a lifting infeed table and outfeed roller table, then add sorting conveyors, and you have a continuous ripping line; it can also link to edge-trimming and crosscut saws. Send us your incoming material form and floor dimensions, and we will deliver a layout drawing and configuration list for the ripping station.',
          vn: 'Có. Ghép máy với bàn nạp nâng hạ, bàn xả con lăn rồi thêm băng phân loại là thành đường xẻ liên tục; cần thì còn nối với máy xẻ cạnh, máy cắt ngang. Gửi hình thức nguyên liệu và kích thước mặt bằng, chúng tôi sẽ xuất bản vẽ bố trí trạm xẻ và danh sách cấu hình.',
          ru: 'Да. Дополните станок подъёмным подающим столом и приемным рольгангом, добавьте сортировочные транспортеры — получится непрерывная линия роспуска; при необходимости она связывается с ребро-обрезными и торцовочными станками. Пришлите форму входного материала и размеры участка — мы подготовим планировку поста раскроя и список комплектации.'
        }
      }
    ],
    models: [
      {
        id: 'mj1300-xd5-20240716',
        model: 'MJ1300-XD5',
        cn: '多片锯',
        mic: 'Multi-blade Saw',
        vn: 'Máy cưa đa lưỡi',
        ru: 'Многопильный станок',
        images: [
          '/multi-blade-saw/multi-blade-saw_MJ1300-XD5_20240716_blue-white/multi-blade-saw_MJ1300-XD5_20240716_blue-white_up_001.webp'
        ],
        specs: [
          { keyCn: '防护罩', keyMic: 'Safety Guard', keyVn: 'Vỏ bảo vệ', valueCn: '全封闭式防护罩，带板料防反弹保护装置', valueMic: 'Fully enclosed safety guard with anti-rebound device for sheet materials', valueVn: 'Vỏ bảo vệ kín, có thiết bị bảo vệ chống văng phôi', valueRu: 'Полностью закрытый защитный кожух с устройством защиты от отскока заготовки', keyRu: 'Защитный кожух' },
          { keyCn: '整机总功率', keyMic: 'Total Power', keyVn: 'Tổng công suất', valueCn: '32.2kW', valueMic: '32.2kW', valueRu: '32,2 кВт', keyRu: 'Общая мощность' },
          { keyCn: '主电机功率', keyMic: 'Main Motor Power', keyVn: 'Công suất động cơ chính', valueCn: '30kW', valueMic: '30kW', valueRu: '30 кВт', keyRu: 'Мощность главного двигателя' },
          { keyCn: '主轴配置', keyMic: 'Spindle Configuration', keyVn: 'Cấu hình trục chính', valueCn: '下锯，可升降', valueMic: 'Lower saw blade, adjustable height', valueVn: 'Cưa dưới, có thể nâng hạ', valueRu: 'Нижняя пила, регулируемая по высоте', keyRu: 'Конфигурация шпинделя' },
          { keyCn: '送料电机', keyMic: 'Feed Motor', keyVn: 'Động cơ cấp liệu', valueCn: '功率2.2kW，无极调速0-12M/min', valueMic: '2.2kW, variable speed 0-12M/min', valueVn: 'Công suất 2.2kW, điều chỉnh tốc độ vô cấp 0-12M/min', valueRu: '2,2 кВт, бесступенчатая регулировка скорости 0–12 м/мин', keyRu: 'Двигатель подачи' },
          { keyCn: '加工厚度', keyMic: 'Processing Thickness', keyVn: 'Độ dày gia công', valueCn: '5-50mm', valueMic: '5-50mm', valueRu: '5–50 мм', keyRu: 'Толщина обработки' },
          { keyCn: '加工宽度', keyMic: 'Processing Width', keyVn: 'Chiều rộng gia công', valueCn: '1240mm', valueMic: '1240mm', valueRu: '1240 мм', keyRu: 'Ширина обработки' },
          { keyCn: '最少加工长度', keyMic: 'Minimum Processing Length', keyVn: 'Chiều dài gia công tối thiểu', valueCn: '650mm', valueMic: '650mm', valueRu: '650 мм', keyRu: 'Минимальная длина обработки' },
          { keyCn: '锯片规格', keyMic: 'Blade Specification', keyVn: 'Thông số lưỡi cưa', valueCn: '直径255×3.0×85mm，48T（带双键槽）', valueMic: 'Diameter 255×3.0×85mm, 48T (with double keyway)', valueVn: 'Đường kính 255×3.0×85mm, 48T (có rãnh then kép)', valueRu: 'Диаметр 255 × 3,0 × 85 мм, 48 зубьев (с двойным шпоночным пазом)', keyRu: 'Характеристики пильного диска' },
          { keyCn: '主轴直径', keyMic: 'Spindle Diameter', keyVn: 'Đường kính trục chính', valueCn: '85mm', valueMic: '85mm', valueRu: '85 мм', keyRu: 'Диаметр шпинделя' },
          { keyCn: '超耐磨胶辊', keyMic: 'Ultra-wear-resistant Rubber Rollers', keyVn: 'Con lăn cao su chống mài mòn', valueCn: '前四组后三组（上下共14条）', valueMic: '4 groups front, 3 groups back (14 rollers total)', valueVn: 'Bốn nhóm trước, ba nhóm sau (tổng cộng 14 thanh trên dưới)', valueRu: '4 группы спереди, 3 группы сзади (всего 14 роликов сверху и снизу)', keyRu: 'Износостойкие резиновые ролики' },
          { keyCn: '吸尘口直径', keyMic: 'Dust Extraction Port', keyVn: 'Đường kính cổng hút bụi', valueCn: '150mm', valueMic: '150mm', valueRu: '150 мм', keyRu: 'Диаметр аспирационного патрубка' },
          { keyCn: '外形尺寸', keyMic: 'Overall Dimensions', keyVn: 'Kích thước tổng thể', valueCn: '2300×1760×1200mm', valueMic: '2300×1760×1200mm', valueRu: '2300 × 1760 × 1200 мм', keyRu: 'Габаритные размеры' },
          { keyCn: '重量', keyMic: 'Weight', keyVn: 'Trọng lượng', valueCn: '约2吨', valueMic: 'Approx. 2 tons', valueVn: 'Khoảng 2 tấn', valueRu: 'ок. 2 т', keyRu: 'Масса' },
          { keyCn: '含隔套', keyMic: 'Included Spacers', keyVn: 'Bao gồm đệm lót', valueCn: '一种开料规格隔套1套', valueMic: '1 set of cutting specification spacers', valueVn: '1 bộ đệm lót cho một thông số cắt', valueRu: '1 комплект проставочных втулок для одного типоразмера раскроя', keyRu: 'Комплект проставочных втулок' },
          { keyCn: '锯片', keyMic: 'Saw Blades', keyVn: 'Lưỡi cưa', valueCn: '不含', valueMic: 'Not included', valueVn: 'Không bao gồm', valueRu: 'Не включены', keyRu: 'Пильные диски' },
          { keyCn: '包装', keyMic: 'Packaging', keyVn: 'Đóng gói', valueCn: '珍珠棉缠绕膜', valueMic: 'EPE stretch film', valueVn: 'Màng xốp PE quấn', valueRu: 'Вспененный полиэтилен (EPE), стрейч-плёнка', keyRu: 'Упаковка' }
        ],
        features: []
      },
      {
        id: 'mj1300-xd3-20201109',
        model: 'MJ1300-XD3',
        cn: '多片锯',
        mic: 'Multi-blade Saw',
        vn: 'Máy cưa đa lưỡi',
        ru: 'Многопильный станок',
        images: [
          '/multi-blade-saw/multi-blade-saw_MJ1300-XD3_20201109_blue-white/multi-blade-saw_MJ1300-XD3_20201109_blue-white_up(1)_001.webp',
          '/multi-blade-saw/multi-blade-saw_MJ1300-XD3_20201109_blue-white/multi-blade-saw_MJ1300-XD3_20201109_blue-white_up(2)_001.webp'
        ],
        specs: [
          { keyCn: '整机总功率', keyMic: 'Total Power', keyVn: 'Tổng công suất', keyRu: 'Общая мощность', valueCn: '23.5kW', valueMic: '23.5kW', valueVn: '23.5kW', valueRu: '23,5 кВт' },
          { keyCn: '主轴电机', keyMic: 'Spindle Motor', keyVn: 'Động cơ trục chính', keyRu: 'Шпиндельный двигатель', valueCn: '22kW，下锯可升降', valueMic: '22kW, lower blade, height adjustable', valueVn: '22kW, cưa dưới, nâng hạ được', valueRu: '22 кВт, нижняя пила, регулировка по высоте' },
          { keyCn: '送料速度', keyMic: 'Feed Speed', keyVn: 'Tốc độ cấp liệu', keyRu: 'Скорость подачи', valueCn: '无极调速 0-12m/min', valueMic: 'Stepless adjustment 0-12m/min', valueVn: 'Điều chỉnh vô cấp 0-12m/min', valueRu: 'Бесступенчато 0–12 м/мин' },
          { keyCn: '送料电机功率', keyMic: 'Feed Motor Power', keyVn: 'Công suất động cơ cấp liệu', keyRu: 'Мощность двигателя подачи', valueCn: '1.5kW', valueMic: '1.5kW', valueVn: '1.5kW', valueRu: '1,5 кВт' },
          { keyCn: '加工厚度', keyMic: 'Processing Thickness', keyVn: 'Độ dày gia công', keyRu: 'Толщина обработки', valueCn: '5-30mm', valueMic: '5-30mm', valueVn: '5-30mm', valueRu: '5–30 мм' },
          { keyCn: '加工宽度', keyMic: 'Processing Width', keyVn: 'Chiều rộng gia công', keyRu: 'Ширина обработки', valueCn: '1240mm', valueMic: '1240mm', valueVn: '1240mm', valueRu: '1240 мм' },
          { keyCn: '最少加工长度', keyMic: 'Minimum Processing Length', keyVn: 'Chiều dài gia công tối thiểu', keyRu: 'Минимальная длина обработки', valueCn: '650mm', valueMic: '650mm', valueVn: '650mm', valueRu: '650 мм' },
          { keyCn: '锯片规格', keyMic: 'Blade Specification', keyVn: 'Thông số lưỡi cưa', keyRu: 'Характеристики пильного диска', valueCn: '直径205×2.2×74mm，60T', valueMic: 'Diameter 205×2.2×74mm, 60T', valueVn: 'Đường kính 205×2.2×74mm, 60T', valueRu: 'Диаметр 205 × 2,2 × 74 мм, 60 зубьев' },
          { keyCn: '主轴直径', keyMic: 'Spindle Diameter', keyVn: 'Đường kính trục chính', keyRu: 'Диаметр шпинделя', valueCn: '74mm', valueMic: '74mm', valueVn: '74mm', valueRu: '74 мм' },
          { keyCn: '超耐磨胶辊', keyMic: 'Ultra-wear-resistant Rubber Rollers', keyVn: 'Con lăn cao su chống mài mòn', keyRu: 'Износостойкие резиновые ролики', valueCn: '前三组后三组（上下共12条）', valueMic: '3 groups front, 3 groups back (12 rollers total)', valueVn: '3 nhóm trước, 3 nhóm sau (tổng cộng 12 thanh trên dưới)', valueRu: '3 группы спереди, 3 сзади (всего 12 роликов сверху и снизу)' },
          { keyCn: '吸尘口直径', keyMic: 'Dust Extraction Port', keyVn: 'Đường kính cổng hút bụi', keyRu: 'Диаметр аспирационного патрубка', valueCn: '150mm', valueMic: '150mm', valueVn: '150mm', valueRu: '150 мм' },
          { keyCn: '包装', keyMic: 'Packaging', keyVn: 'Đóng gói', keyRu: 'Упаковка', valueCn: '珍珠棉缠绕膜', valueMic: 'EPE stretch film', valueVn: 'Màng xốp PE quấn', valueRu: 'Вспененный полиэтилен (EPE), стрейч-плёнка' },
          { keyCn: '外形尺寸约', keyMic: 'Overall Dimensions', keyVn: 'Kích thước tổng thể', keyRu: 'Габаритные размеры', valueCn: '约2300×1760×1200mm', valueMic: 'Approx. 2300×1760×1200mm', valueVn: 'Khoảng 2300×1760×1200mm', valueRu: 'ок. 2300 × 1760 × 1200 мм' },
          { keyCn: '重量约', keyMic: 'Weight', keyVn: 'Trọng lượng', keyRu: 'Масса', valueCn: '约2000kg', valueMic: 'Approx. 2000kg', valueVn: 'Khoảng 2000kg', valueRu: 'ок. 2000 кг' }
        ],
        features: []
      }
    ]
  },
  {
    id: 'lifting-platform',
    cn: '升降平台',
    mic: 'Lifting Platform',
    vn: 'Bục nâng',
    ru: 'Подъёмный стол',
    descCn: '液压升降，承重能力强，操作安全便捷，广泛用于木工生产线的物料搬运与高度调节。',
    descMic: 'Hydraulic lifting with strong load capacity. Safe and easy to operate for material handling in woodworking production lines.',
    descVn: 'Nâng hạ thủy lực, sức chịu tải mạnh, vận hành an toàn và tiện lợi, dùng rộng rãi trong dây chuyền sản xuất gỗ.',
    descRu: 'Гидравлический подъём с высокой грузоподъёмностью. Безопасное и удобное управление, широко используется для перемещения материалов и регулировки высоты на деревообрабатывающих линиях.',
    icon: '🔧',
    color: "url('/lifting-platform-bg.webp')",
    intro: [
      {
        cn: '升降平台通常不是一台单独使用的设备，而是板式生产线「自动入板工位」里的高度补偿单元。叉车把整垛模板放上平台，推板机逐张分离推走，平台随取随升，把下一张待取板材的取料面始终保持在同一高度。垛层再高再低，下游的压合与开料不用跟着变。',
        mic: 'A lifting platform is usually not a stand-alone machine. It is the height compensation unit inside the automatic panel infeed station of a panel production line. A forklift places the full pallet of panels on the platform, the pusher separates and pushes off one sheet at a time, and the platform rises as each sheet is taken, keeping the pick-up face of the next panel at a constant height. However high or low the stack becomes, the downstream press and saw never have to change their own feeding height.',
        vn: 'Bục nâng thường không hoạt động độc lập mà là bộ phận bù chiều cao trong trạm cấp liệu tự động của dây chuyền sản xuất ván. Xe nâng đặt cả pallet tấm lên bàn, máy đẩy tách từng tấm đẩy đi, bàn nâng lên theo từng tấm lấy đi, nhờ đó mặt lấy của tấm tiếp theo luôn giữ ở cùng một chiều cao. Dù chồng cao thấp thay đổi, phía ép và cưa phía sau không phải điều chỉnh lại chiều cao cấp liệu.',
        ru: 'Подъёмный стол обычно работает не как отдельная машина, а как узел компенсации высоты в автоматической станции подачи панелей. Погрузчик ставит на платформу весь стопку панелей, толкатель отделяет и выталкивает по одному листу, а платформа поднимается по мере снятия каждого листа, поддерживая поверхность забора следующей панели на постоянной высоте. Как бы ни менялась высота стопки, пресс и пила downstream не подстраивают свою высоту подачи.'
      },
      {
        cn: '平台采用液压驱动，E 型台面下方留有叉车通道，叉车或手动液压车可以直接把整垛模板推上平台、取走整垛模板，不需要在地面上二次倒垛。平台升起到工作高度后与辊筒输送线、压机或多片锯的进料辊台对接，整条线按一个取料高度设计。',
        mic: 'The platform is hydraulically driven. The E-type deck leaves a fork access channel underneath, so a forklift or hand pallet truck can push a full pallet of panels onto the platform and take it away again — no re-stacking on the floor. Once raised to working height, the platform meets the roller conveyor, the press or the multi-blade saw infeed table, so the whole line is designed around a single pick-up height.',
        vn: 'Bàn nâng dùng hệ thủy lực. Mặt bàn dạng E có khe để xỏ xe nâng, nhờ đó xe nâng hoặc xe nâng tay có thể đẩy cả pallet tấm lên bàn và lấy ra, không cần dọn lại pallet trên nền. Khi nâng lên cao làm việc, bàn nâng tiếp nối với băng tải con lăn, máy ép hoặc bàn nạp của cưa đa lưỡi, để cả dây chuyền được thiết kế theo một chiều cao lấy liệu duy nhất.',
        ru: 'Платформа приводится в действие гидравликой. Платформа типа E имеет снизу проём для вил, поэтому погрузчик или ручной гидравлический штабелёр может завезти стопку панелей на платформу и забрать её обратно — без перекладки на полу. Поднявшись на рабочую высоту, платформа стыкуется с роликовым конвейером, прессом или подающим столом многопильного станка, и вся линия проектируется под одну высоту забора материала.'
      }
    ],
    highlights: [
      {
        cn: '液压驱动，升降平稳无冲击，可在运行中连续微调取料高度',
        mic: 'Hydraulic drive with smooth, shock-free travel; the pick-up height can be fine-tuned continuously while running',
        vn: 'Dẫn động thủy lực, nâng hạ êm ái không va chạm, có thể tinh chỉnh liên tục chiều cao lấy liệu khi đang chạy',
        ru: 'Гидравлический привод с плавным ходом без рывков; высоту забора можно точно подстраивать во время работы'
      },
      {
        cn: 'E 型台面，叉车与手动液压车可直接上料取料，省去二次倒垛',
        mic: 'E-type deck: a forklift or hand pallet truck loads and unloads directly, with no re-stacking',
        vn: 'Mặt bàn dạng E: xe nâng và xe nâng tay lấy hàng trực tiếp, không cần dọn lại pallet',
        ru: 'Платформа типа E: погрузчик и ручной штабелёр грузят и разгружают напрямую, без перекладки'
      },
      {
        cn: '升降高度 150–1000mm，底面可压至 150mm，与辊筒线、压机进料高度直接对接',
        mic: '150–1000mm lifting range, deck lowers to 150mm, matching roller line and press infeed heights directly',
        vn: 'Hành trình nâng 150–1000mm, hạ mặt bàn xuống 150mm, khớp trực tiếp với băng tải con lăn và chiều cao nạp của máy ép',
        ru: 'Ход подъёма 150–1000 мм, платформа опускается до 150 мм и напрямую стыкуется с роликовой линией и высотой подачи пресса'
      },
      {
        cn: '额定承重 3T，满足整垛板材上料的载荷要求',
        mic: '3T rated load capacity, sufficient for loading a full pallet of panels',
        vn: 'Tải trọng định mức 3T, đáp ứng yêu cầu tải khi nạp cả pallet tấm',
        ru: 'Номинальная грузоподъёмность 3 т — достаточно для загрузки целой стопки панелей'
      },
      {
        cn: '与推板机组成自动入板工位，逐张补偿取料高度差，减少人工抬板',
        mic: 'Forms an automatic infeed station together with the pusher, compensating the pick-up height sheet by sheet and reducing manual panel handling',
        vn: 'Kết hợp với máy đẩy thành trạm cấp liệu tự động, bù chiều cao lấy từng tấm, giảm số lao động nâng tấm',
        ru: 'Вместе с толкателем образует автоматическую станцию подачи, компенсируя высоту забора по каждому листу и сокращая ручной труд по переносу панелей'
      },
      {
        cn: '台面尺寸、升降行程与承重可按产线非标定制',
        mic: 'Deck size, lifting range and load capacity are customized to the production line',
        vn: 'Kích thước mặt bàn, hành trình nâng hạ và tải trọng được đặt theo yêu cầu dây chuyền',
        ru: 'Размер настила, ход подъёма и грузоподъёмность изготавливаются по параметрам линии'
      }
    ],
    selection: [
      {
        cn: '板材规格与单垛重量（含板厚、堆垛层数）',
        mic: 'Panel dimensions and weight per pallet (including thickness and number of layers)',
        vn: 'Kích thước tấm và khối lượng mỗi pallet (gồm độ dày và số lớp)',
        ru: 'Размер панелей и масса одной стопки (включая толщину и число слоёв)'
      },
      {
        cn: '目标取料高度，以及下游压机或多片锯的进料辊台高度',
        mic: 'Target pick-up height and the infeed roller height of the downstream press or multi-blade saw',
        vn: 'Chiều cao lấy liệu mong muốn và chiều cao bàn nạp của máy ép hoặc cưa đa lưỡi phía sau',
        ru: 'Требуемая высота забора и высота подающего ролика пресса или многопильного станка'
      },
      {
        cn: '上料方向、工位布局与叉车/液压车的进出空间',
        mic: 'Loading direction, station layout and the space for the forklift or pallet truck to enter and leave',
        vn: 'Hướng cấp liệu, bố trí trạm và không gian cho xe nâng/xe nâng tay ra vào',
        ru: 'Направление подачи, компоновка станции и пространство для въезда и выезда погрузчика'
      },
      {
        cn: '供电条件（电压/相数）与联锁信号接口需求',
        mic: 'Power supply (voltage / phase) and interlock signal interface requirements',
        vn: 'Nguồn điện (điện áp/số pha) và yêu cầu giao diện tín hiệu liên động',
        ru: 'Электропитание (напряжение/число фаз) и требования к интерфейсу сигналов блокировки'
      },
      {
        cn: '是否需要防尘罩、安全光栅等附件',
        mic: 'Whether accessories such as a dust cover or a light curtain are required',
        vn: 'Có cần các phụ kiện như vỏ chống bụi, rào quang học hay không',
        ru: 'Нужны ли дополнительные принадлежности: пылезащитный чехол, световая завеса и т. п.'
      }
    ],
    faq: [
      {
        q: {
          cn: '升降平台必须配推板机一起用吗？可以单独买吗？',
          mic: 'Does the lifting platform have to be used with a pusher? Can it be bought on its own?',
          vn: 'Bục nâng có bắt buộc phải dùng cùng máy đẩy không? Có thể mua riêng không?',
          ru: 'Обязательно ли подъёмный стол работает вместе с толкателем? Можно ли купить отдельно?'
        },
        a: {
          cn: '可以单独使用，作为物料举升与高度调节平台。但升降平台真正的价值在于「逐张补偿取料高度」——脱离推板机后，垛顶会随取料不断变矮，平台再高也补不回来。做成推板机 + 升降平台成套的自动入板工位，才能稳定连续供料。',
          mic: 'It can be used on its own as a material lifting and height adjusting platform. But its real value lies in compensating the pick-up height sheet by sheet — without a pusher the stack top drops as material is taken away, and no platform height can compensate for that. Only a pusher and lifting platform working as a set deliver a stable, continuous supply.',
          vn: 'Có thể dùng riêng như một bàn nâng vật liệu và điều chỉnh chiều cao. Nhưng giá trị thực sự của bục nâng nằm ở việc bù chiều cao lấy từng tấm — nếu không có máy đẩy, đỉnh chồng tấm hạ dần khi lấy hàng, không có cách nào bù lại. Chỉ khi kết hợp máy đẩy và bục nâng thành một bộ cấp liệu tự động mới cấp liệu liên tục ổn định.',
          ru: 'Можно использовать и отдельно — как подъёмный стол для перемещения материалов и регулировки высоты. Но реальная ценность подъёмного стола — в компенсации высоты забора по каждому листу: без толкателя верх стопки опускается по мере снятия панелей, и никакая высота платформы это не компенсирует. Стабильная непрерывная подача получается только у комплекта «толкатель + подъёмный стол».'
        }
      },
      {
        q: {
          cn: '最低台面 150mm，叉车能直接开上去吗？',
          mic: 'The deck lowers to 150mm — can a forklift drive straight on?',
          vn: 'Mặt bàn hạ thấp nhất 150mm, xe nâng có thể đi thẳng lên không?',
          ru: 'Настил опускается до 150 мм — погрузчик может заехать прямо на него?'
        },
        a: {
          cn: 'E1825 的升降高度为 150–1000mm，E 型台面底部留有叉车通道，就是按叉车或手动液压车直接上料设计的。能否整车驶上取决于您的叉车型号、货叉高度与进叉空间，请把叉车参数发给我们核对，我们出对接方案。',
          mic: 'The E1825 has a 150–1000mm lifting range, and the E-type deck has a fork access channel underneath, designed for a forklift or hand pallet truck to load directly. Whether a full forklift can drive on depends on your truck model, fork height and entry clearance, so send us the forklift details and we will check the interface and propose the matching setup.',
          vn: 'E1825 có hành trình nâng 150–1000mm và mặt bàn dạng E có khe xỏ xe nâng phía dưới, được thiết kế để xe nâng hoặc xe nâng tay nạp hàng trực tiếp. Việc xe nâng có vào được hay không phụ thuộc vào loại xe, chiều cao chân chẻ và không gian vào của chúng, xin gửi thông số xe nâng để chúng tôi đối chiếu và đưa ra phương án ghép nối.',
          ru: 'У E1825 ход подъёма 150–1000 мм, а под настилом типа E предусмотрен проём для вил — платформа рассчитана на прямую загрузку погрузчиком или ручным штабелёром. Сможет ли погрузчик заехать целиком, зависит от модели, высоты вил и пространства для въезда, поэтому пришлите параметры погрузчика — мы проверим сопряжение и предложим схему стыковки.'
        }
      },
      {
        q: {
          cn: '台面 2000×1450mm，2440mm 长的标准板放得下吗？',
          mic: 'The deck is 2000×1450mm — does a standard 2440mm panel fit?',
          vn: 'Mặt bàn 2000×1450mm, tấm tiêu chuẩn dài 2440mm có vừa không?',
          ru: 'Настил 2000×1450 мм — поместится ли стандартная панель длиной 2440 мм?'
        },
        a: {
          cn: '取决于您的堆垛方式与取料方向（横置上料、斜置上料，或由推板机直推过台面不下板）。标准幅面 1220×2440mm 的整垛通常需要更大台面或改用推板机直推对接。把板材规格、垛型与您现在怎么上料告诉我们，我们按实际幅面出配置方案。',
          mic: 'It depends on how you stack and on the feeding direction — laid across, laid diagonally, or pushed straight over the deck by the pusher without resting on it. A full pallet of standard 1220×2440mm panels usually needs a larger deck, or the panels are pushed across by the pusher instead. Tell us the panel size, the stack layout and how you load today, and we will size the configuration to the actual format.',
          vn: 'Tùy vào cách xếp chồng và hướng lấy liệu (đặt ngang, đặt chéo, hoặc để máy đẩy đẩy qua mà không đặt lên bàn). Một pallet đầy đủ tấm tiêu chuẩn 1220×2440mm thường cần mặt bàn lớn hơn, hoặc dùng máy đẩy đẩy thẳng qua. Hãy cho chúng tôi biết kích thước tấm, kiểu xếp và cách anh đang nạp hiện tại, chúng tôi sẽ tính cấu hình theo đúng khổ thực tế.',
          ru: 'Зависит от способа укладки и направления подачи — поперёк, по диагонали либо панели толкателем проталкиваются прямо над платформой, без опирания на неё. Полная стопка стандартных панелей 1220×2440 мм обычно требует настила большего размера, либо панели проталкиваются толкателем насквозь. Пришлите размер панелей, схему укладки и то, как вы грузите сейчас, — мы подберём конфигурацию под фактический формат.'
        }
      },
      {
        q: {
          cn: '能和压机、多片锯联动吗？',
          mic: 'Can it be interlocked with the press and the multi-blade saw?',
          vn: 'Có thể liên động với máy ép và cưa đa lưỡi không?',
          ru: 'Возможна ли блокировка с прессом и многопильным станком?'
        },
        a: {
          cn: '可以。我们按整线方案配套，提供与推板机、辊筒输送线、压机或多片锯之间的联锁信号对接方案，包括平台到位信号、允许推送信号与安全互锁。请说明下游设备型号与接口需求，我们一并出对接图。',
          mic: 'Yes. We supply it as part of a complete line and provide the interlock interface between the platform, the pusher, the roller conveyor, the press or the multi-blade saw — including the platform-in-position signal, the allow-to-push signal and the safety interlocks. Tell us the downstream machine models and interface requirements, and we will issue the matching connection drawings.',
          vn: 'Có. Chúng tôi cung cấp theo phương án dây chuyền hoàn chỉnh, kèm phương án ghép nối tín hiệu liên động giữa bàn nâng, máy đẩy, băng tải con lăn, máy ép hoặc cưa đa lưỡi, gồm tín hiệu bàn đã vị trí, tín hiệu cho phép đẩy và liên động an toàn. Hãy cho biết model thiết bị phía sau và yêu cầu giao diện, chúng tôi sẽ gửi bản vẽ ghép nối.',
          ru: 'Да. Мы поставляем платформу в составе комплекса линии и предоставляем схему сигналов блокировки между платформой, толкателем, роликовым конвейером, прессом или многопильным станком — сигнал «платформа на позиции», сигнал разрешения толкания и аварийные блокировки. Укажите модели downstream-оборудования и требования к интерфейсу, и мы подготовим соответствующие чертежи стыковки.'
        }
      },
      {
        q: {
          cn: '报价前我需要提供哪些资料？',
          mic: 'What information do you need from me before quoting?',
          vn: 'Tôi cần cung cấp thông tin gì trước khi nhận báo giá?',
          ru: 'Какая информация нужна от меня до запроса цены?'
        },
        a: {
          cn: '板材规格与单垛重量、目标取料高度与下游设备进料高度、上料方向与工位布局、供电条件与联锁接口需求，以及是否需要防尘罩/安全光栅等附件。资料齐了，我们出的就是能直接对接生产的方案，而不是一份通用报价单。',
          mic: 'Panel dimensions and pallet weight, target pick-up height and the downstream infeed height, loading direction and station layout, power supply and interlock interface requirements, plus whether you need accessories such as a dust cover or light curtain. With that information we can give you a configuration that drops straight into production, not a generic quotation.',
          vn: 'Kích thước tấm và khối lượng pallet, chiều cao lấy liệu mong muốn và chiều cao nạp của thiết bị phía sau, hướng cấp liệu và bố trí trạm, điều kiện nguồn điện và giao diện liên động, cùng nhu cầu phụ kiện như vỏ chống bụi, rào quang học. Có đủ thông tin, báo giá chúng tôi gửi là cấu hình lắp vào chạy được, không phải một bảng giá chung chung.',
          ru: 'Размер панелей и масса стопки, требуемая высота забора и высота подачи downstream-оборудования, направление подачи и компоновка станции, условия электропитания и интерфейса блокировки, а также нужны ли аксессуары — пылезащитный чехол, световая завеса. С этими данными мы выдаём не общий прайс-лист, а конфигурацию, готовую к прямой стыковке с производством.'
        }
      }
    ],
    models: [
      {
        id: 'e1825',
        model: 'E1825',
        cn: '升降平台',
        mic: 'Lifting Platform',
        vn: 'Bục nâng',
        ru: 'Подъёмный стол',
        images: [
          '/lifting-platform/lifting-platform_E1825_20201027_orange/lifting-platform_E1825_20201027_orange (1)_up_001.webp'
        ],
        specs: [
          { keyCn: '规格', keyMic: 'Type', keyVn: 'Loại', keyRu: 'Тип', valueCn: 'E型', valueMic: 'Type E', valueVn: 'Loại E', valueRu: 'Тип E' },
          { keyCn: '承重', keyMic: 'Load Capacity', keyVn: 'Tải trọng', keyRu: 'Грузоподъёмность', valueCn: '3T', valueMic: '3T', valueVn: '3T', valueRu: '3 т' },
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', keyRu: 'Размер платформы', valueCn: '2000×1450mm', valueMic: '2000×1450mm', valueVn: '2000×1450mm', valueRu: '2000 × 1450 мм' },
          { keyCn: '升降高度', keyMic: 'Lifting Height', keyVn: 'Chiều cao nâng hạ', keyRu: 'Высота подъёма', valueCn: '150-1000mm', valueMic: '150-1000mm', valueVn: '150-1000mm', valueRu: '150–1000 мм' }
        ],
        features: [
          {
            cn: '液压驱动升降，运行平稳，可在取料过程中连续微调高度',
            mic: 'Hydraulic lifting with smooth travel; height can be continuously fine-tuned during feeding',
            vn: 'Nâng hạ thủy lực, vận hành êm, có thể tinh chỉnh chiều cao liên tục trong lúc lấy liệu',
            ru: 'Гидравлический подъём с плавным ходом; высоту можно непрерывно подстраивать во время подачи'
          },
          {
            cn: 'E 型台面底部留有叉车通道，叉车或手动液压车可直接上料取料',
            mic: 'E-type deck with a fork access channel underneath for direct forklift or pallet truck loading',
            vn: 'Mặt bàn dạng E có khe xỏ xe nâng phía dưới, xe nâng hoặc xe nâng tay nạp hàng trực tiếp',
            ru: 'Платформа типа E с проёмом для вил снизу — прямая загрузка погрузчиком или штабелёром'
          },
          {
            cn: '升降高度 150–1000mm，底面可压至 150mm，对接辊筒线与压机进料高度',
            mic: '150–1000mm lifting range down to a 150mm deck height, matching roller lines and press infeed',
            vn: 'Hành trình 150–1000mm, hạ mặt bàn xuống 150mm, khớp băng tải con lăn và chiều cao nạp máy ép',
            ru: 'Ход 150–1000 мм с опусканием настила до 150 мм — стыковка с роликовой линией и подачей пресса'
          },
          {
            cn: '额定承重 3T，满足整垛板材上料载荷',
            mic: '3T rated load capacity, sufficient for loading a full pallet of panels',
            vn: 'Tải trọng định mức 3T, đáp ứng tải khi nạp cả pallet tấm',
            ru: 'Номинальная грузоподъёмность 3 т для загрузки целой стопки панелей'
          },
          {
            cn: '与推板机组成自动入板工位，逐张补偿取料高度差',
            mic: 'Forms an automatic infeed station with the pusher, compensating pick-up height sheet by sheet',
            vn: 'Kết hợp máy đẩy thành trạm cấp liệu tự động, bù chiều cao lấy từng tấm',
            ru: 'Образует с толкателем автоматическую станцию подачи, компенсируя высоту забора по каждому листу'
          }
        ]
      }
    ]
  },
  {
    id: 'splicing-machine',
    cn: '拼板机',
    mic: 'Splicing Machine',
    vn: 'Máy ghép gỗ',
    ru: 'Пресс для сращивания',
    descCn: '高效拼板设备，适用于木板拼接，拼接牢固平整。',
    descMic: 'Efficient splicing equipment for wood board splicing with strong and flat joints.',
    descVn: 'Thiết bị ghép ván gỗ hiệu quả, mối ghép chắc chắn và phẳng.',
    descRu: 'Высокоэффективное оборудование для сращивания деревянных заготовок: прочное и ровное соединение.',
    icon: '📐',
    color: "url('/splicing-machine-bg.webp')",
    intro: [
      {
        cn: '拼板机解决的是旋切中板和木皮「长短不齐、宽窄不一」的问题。设备自动完成检测、齐边、涂胶、拼接、定尺剪切和码垛，把零散短料拼成整张大板，直接替代人工铺板。对做生态板、胶合板中板的工厂来说，这道工序决定了出板率和人工成本。',
        mic: 'The splicing machine solves the problem of rotary-cut core panels and veneer coming in uneven lengths and widths. It automatically detects, edge-trims, glues, splices, cuts to length and stacks, turning loose short strips into full-size sheets — directly replacing manual laying. For factories making eco-boards and plywood cores, this process decides both yield and labor cost.',
        vn: 'Máy ghép ván giải quyết vấn đề ván lõi và veneer quay «dài ngắn không đều, rộng hẹp khác nhau». Thiết bị tự động hoàn thành phát hiện, cắt bi, phủ keo, ghép nối, cắt định tầm và xếp chồng, ghép các mảnh ngắn rời thành cả tấm hoàn chỉnh, thay trực tiếp việc rải tay. Với nhà máy làm ván sinh thái, ván lõi plywood, công đoạn này quyết định tỷ lệ xuất tấm và chi phí nhân công.',
        ru: 'Пресс для сращивания решает проблему лущёных серединок и шпона «разной длины и ширины». Оборудование автоматически выполняет контроль, обрезку кромки, нанесение клея, сращивание, торцовку по размеру и укладку в штабель, превращая россыпь коротких кусков в полноценный лист — полностью заменяя ручную раскладку. Для фабрик, выпускающих эко-плиты и середины фанеры, этот передел определяет и выход годного, и затраты на труд.'
      },
      {
        cn: '选拼板机看两个指标：能拼的厚度范围和整张幅面。MH1325 台面 3200×1300mm、工作行程 400mm，中板、木皮、生态板芯层都能拼，拼接宽度与厚度范围按您的料单定制，薄至零点几毫米的木皮也有对应机型。',
        mic: 'Two specs decide the choice: the thickness range it can splice and the full-sheet format. The MH1325 has a 3200×1300mm table with a 400mm working stroke, splicing core panels, veneer and eco-board cores; splice width and thickness range are customized to your material list, with dedicated models for veneer down to a fraction of a millimeter.',
        vn: 'Chọn máy ghép ván xem hai chỉ số: phạm vi độ dày ghép được và khổ cả tấm. MH1325 có mặt bàn 3200×1300mm, hành trình làm việc 400mm, ghép được ván lõi, veneer, lõi ván sinh thái; chiều rộng ghép và phạm vi độ dày tùy theo danh mục nguyên liệu, với veneer mỏng dưới một milimet cũng có máy tương ứng.',
        ru: 'Выбор определяют два показателя: диапазон толщин сращивания и формат целого листа. MH1325 имеет стол 3200×1300 мм с рабочим ходом 400 мм — сращивает середины, шпон и заполнение эко-плит; ширина сращивания и диапазон толщин изготавливаются под ваш сортамент, а для шпона толщиной в доли миллиметра есть отдельные модели.'
      }
    ],
    highlights: [
      {
        cn: '自动检测、齐边、涂胶、拼接、剪切、码垛一条龙，替代人工铺板',
        mic: 'Automatic detecting, trimming, gluing, splicing, cutting and stacking in one flow — replacing manual laying',
        vn: 'Tự động phát hiện, cắt bi, phủ keo, ghép, cắt, xếp chồng một trạm, thay thế rải tay',
        ru: 'Автоматический контроль, обрезка, нанесение клея, сращивание, торцовка и штабелирование в одном потоке — вместо ручной раскладки'
      },
      {
        cn: '长短不齐的短料也能拼成整张，出板率显著提升',
        mic: 'Uneven short strips are spliced into full sheets, markedly improving yield',
        vn: 'Mảnh ngắn dài ngắn không đều cũng ghép thành cả tấm, tỷ lệ xuất tấm tăng rõ rệt',
        ru: 'Даже неровные короткие куски сращиваются в полный лист — заметно выше выход годного'
      },
      {
        cn: '拼接平整牢固，接头强度接近整体板材',
        mic: 'Splices are flat and strong, with joint strength close to solid sheet',
        vn: 'Mối ghép phẳng chắc, độ bền接头 gần bằng ván nguyên tấm',
        ru: 'Стыки ровные и прочные, по крепости близки к цельному листу'
      },
      {
        cn: '中板、木皮、生态板芯层通吃，厚度范围按料单定制',
        mic: 'Handles core panels, veneer and eco-board cores; thickness range customized to your list',
        vn: 'Xử lý được ván lõi, veneer, lõi ván sinh thái, phạm vi độ dày tùy danh mục nguyên liệu',
        ru: 'Работает с серединами, шпоном и заполнением эко-плит; диапазон толщин под ваш сортамент'
      },
      {
        cn: '拼接速度可调，与烘干、砂光线联机构成芯层制备段',
        mic: 'Adjustable splicing speed; links with drying and sanding lines into a core-preparation section',
        vn: 'Tốc độ ghép điều chỉnh được, liên động với sấy, chà bóng thành đoạn chế bị lõi',
        ru: 'Регулируемая скорость сращивания; связывается с сушкой и шлифовкой в участок подготовки середины'
      }
    ],
    selection: [
      {
        cn: '拼接对象（中板/木皮/生态板芯层）与厚度范围',
        mic: 'What you splice (core panels / veneer / eco-board cores) and thickness range',
        vn: 'Đối tượng ghép (ván lõi/veneer/lõi ván sinh thái) và phạm vi độ dày',
        ru: 'Что сращиваете (середины / шпон / заполнение эко-плит) и диапазон толщин'
      },
      {
        cn: '来料尺寸（长短宽窄范围）与整张目标幅面',
        mic: 'Incoming material sizes (length and width range) and target full-sheet format',
        vn: 'Kích thước nguyên liệu (phạm vi dài rộng) và khổ cả tấm mục tiêu',
        ru: 'Размеры входного материала (диапазон длин и ширин) и целевой формат листа'
      },
      {
        cn: '日产整张数量与拼接速度要求',
        mic: 'Daily full-sheet output and required splicing speed',
        vn: 'Số tấm hoàn chỉnh mỗi ngày và tốc độ ghép yêu cầu',
        ru: 'Суточный выпуск листов и требуемая скорость сращивания'
      },
      {
        cn: '用胶类型（脲胶/白乳胶等）与涂胶量要求',
        mic: 'Glue type (urea / PVA etc.) and glue spread requirement',
        vn: 'Loại keo (keo urê/keo sữa trắng...) và lượng phủ keo yêu cầu',
        ru: 'Тип клея (карбамидный / ПВА и др.) и требуемый расход'
      },
      {
        cn: '是否需要配烘干线、码垛方向与场地布局',
        mic: 'Whether a drying line is needed, stacking direction and site layout',
        vn: 'Có cần dây chuyền sấy, hướng xếp chồng và bố trí mặt bằng',
        ru: 'Нужна ли линия сушки, направление штабелирования и планировка участка'
      }
    ],
    faq: [
      {
        q: {
          cn: '多短的料能拼？最薄能拼多薄的木皮？',
          mic: 'How short can the pieces be? How thin a veneer can it splice?',
          vn: 'Mảnh ngắn cỡ nào ghép được? Veneer mỏng nhất ghép được bao nhiêu?',
          ru: 'Какие короткие куски можно сращивать? Какой тонкий шпон доступен?'
        },
        a: {
          cn: '常见来料短到几十厘米都能自动进料拼接，具体下限跟宽度有关——又短又窄的碎料建议先分级。木皮最薄能处理零点几毫米的规格，但太薄的木皮对张紧与输送要求高，我们按您的木皮厚度范围配对应机型，别用厚料机型凑合跑薄皮。',
          mic: 'Incoming pieces as short as a few tens of centimeters feed and splice automatically; the exact lower limit depends on width — very short and narrow scraps should be sorted first. Veneer down to a fraction of a millimeter can be handled, but very thin veneer demands more from tensioning and conveying, so we match the model to your veneer thickness range rather than running thin skins on a thick-panel machine.',
          vn: 'Nguyên liệu ngắn vài chục xen-ti-mét cũng cấp và ghép tự động; giới hạn cụ thể phụ thuộc chiều rộng — mảnh vụn vừa ngắn vừa hẹp nên phân loại trước. Veneer mỏng tới dưới một milimet xử lý được, nhưng veneer quá mỏng đòi hỏi cao về căng và truyền tải, chúng tôi sẽ chọn máy theo phạm vi độ dày veneer của anh, không dùng máy hàng dày chạy vỏ mỏng.',
          ru: 'Куски длиной до нескольких десятков сантиметров подаются и сращиваются автоматически; точный нижний предел зависит от ширины — совсем короткую и узкую мелочь лучше предварительно рассортировать. Шпон толщиной в доли миллиметра обрабатывается, но очень тонкий шпон предъявляет повышенные требования к натяжению и транспортировке, поэтому модель подбирается под ваш диапазон толщин шпона, а не «толстолистовая машина на тонком шпоне».'
        }
      },
      {
        q: {
          cn: '拼出来的板接头明显吗？影响后续贴面吗？',
          mic: 'Are the joints visible? Do they affect later facing?',
          vn: 'Mối ghép có rõ ràng không? Có ảnh hưởng đến dán bề mặt sau này không?',
          ru: 'Видны ли стыки? Влияют ли они на последующее облицовывание?'
        },
        a: {
          cn: '齐边切面平直、涂胶均匀、拼接压力稳定，接头处板面基本齐平；过砂光后表面一致性接近整芯板。后续贴三聚氰胺纸或木皮不受影响——接头平整度是出厂验收项，到场调试时我们按您的贴面工艺做试拼验证。',
          mic: 'With straight trim cuts, even gluing and stable splice pressure, the surface at the joint is essentially flush; after sanding the surface uniformity approaches a solid core sheet. Later melamine or veneer facing is not affected — joint flatness is an acceptance item at delivery, and during commissioning we run trial splices against your facing process.',
          vn: 'Mặt cắt bi phẳng, phủ keo đều, áp lực ghép ổn định, mặt ván tại mối ghép gần như phẳng hoàn toàn; sau chà bóng độ đồng nhất gần bằng ván lõi nguyên. Việc dán giấy melamine hoặc veneer sau đó không bị ảnh hưởng — độ phẳng mối ghép là hạng mục nghiệm thu khi giao, khi hiệu chỉnh máy chúng tôi ghép thử theo đúng quy trình dán bề mặt của anh.',
          ru: 'При ровной обрезке, равномерном нанесении клея и стабильном давлении сращивания поверхность в стыке практически заподлицо; после шлифовки однородность близка к цельной середине. Последующая облицовка меламином или шпоном не страдает — плоскостность стыков является пунктом приёмо-сдаточных испытаний, при пусконаладке мы делаем пробные сращивания под ваш процесс облицовки.'
        }
      },
      {
        q: {
          cn: '和人工铺板比，一年能省多少人工？',
          mic: 'Compared with manual laying, how much labor can it save in a year?',
          vn: 'So với rải tay, một năm tiết kiệm được bao nhiêu nhân công?',
          ru: 'По сравнению с ручной раскладкой, сколько труда можно сэкономить за год?'
        },
        a: {
          cn: '人工铺板一条芯层线通常要 4-6 人，拼接机一条线 1-2 人看机即可，速度还更稳定。以两班制算，一年省下的人工通常在数万元级；出板率提升带来的原料节约要看您来料的碎料比例。把日产和现在铺板人数发给我们，我们给您算一份具体的对比账。',
          mic: 'A manual core-laying line typically takes 4-6 workers; a splicing line needs only 1-2 operators watching the machine, and at a steadier pace. On a two-shift basis, annual labor savings are usually in the tens of thousands of RMB; the material savings from higher yield depend on your scrap ratio. Send us your daily output and current laying headcount, and we will work out a concrete comparison.',
          vn: 'Đường lõi rải tay thường cần 4-6 người, còn đường ghép máy chỉ cần 1-2 người trông máy, tốc độ còn ổn định hơn. Tính theo hai ca, nhân công tiết kiệm mỗi năm thường ở mức vài chục nghìn nhân dân tệ; phần tiết kiệm nguyên liệu nhờ tỷ lệ xuất tấm tăng phụ thuộc tỷ lệ mảnh vụn của anh. Gửi sản lượng ngày và số người rải hiện tại, chúng tôi tính cho anh một bản so sánh cụ thể.',
          ru: 'Ручная раскладка середины обычно требует 4–6 рабочих; на линии сращивания достаточно 1–2 операторов, и темп стабильнее. При двухсменной работе экономия труда за год обычно измеряется десятками тысяч юаней; экономия материала за счёт роста выхода зависит от доли у вас мелочи. Пришлите суточный выпуск и нынешнюю численность раскладчиков — мы посчитаем конкретное сравнение.'
        }
      },
      {
        q: {
          cn: '能和烘干、热压工序联起来吗？',
          mic: 'Can it link with drying and hot pressing?',
          vn: 'Có thể liên kết với sấy và ép nóng không?',
          ru: 'Можно ли связать с сушкой и горячим прессованием?'
        },
        a: {
          cn: '可以，这正是芯层制备段的标准组合：拼板机出整张 → 干燥/晾晒 → 热压成板。拼接速度可调，与烘干线的节拍匹配后整段连续跑。告诉我们的整线产能目标，我们把拼板机选型和节拍一起排进方案。',
          mic: 'Yes — this is the standard core-preparation combination: splicer outputs full sheets, then drying/air curing, then hot pressing into board. Splicing speed is adjustable to match the drying line\'s rhythm, and the whole section runs continuously. Give us your line capacity target and we will size the splicer and pace the whole layout together.',
          vn: 'Có, đây là tổ hợp chuẩn của đoạn chế bị lõi: máy ghép xuất cả tấm → sấy/phơi → ép nóng thành ván. Tốc độ ghép điều chỉnh được để khớp nhịp dây sấy, cả đoạn chạy liên tục. Cho chúng tôi mục tiêu công suất dây chuyền, chúng tôi sẽ chọn máy ghép và sắp nhịp luôn trong phương án.',
          ru: 'Да — это стандартная связка участка подготовки середины: сращиватель выдаёт листы → сушка/выдержка → горячее прессование в плиту. Скорость сращивания регулируется под такт линии сушки, и весь участок работает непрерывно. Назовите целевую производительность линии — мы подберём сращиватель и расставим такт в общем плане.'
        }
      }
    ],
    models: [
      {
        id: 'mh1325-20260608',
        model: 'MH1325',
        cn: '拼板机',
        mic: 'Splicing Machine',
        vn: 'Máy ghép gỗ',
        ru: 'Пресс для сращивания',
        images: [
          '/splicing-machine/splicing_MH1325_20260608_yellow-white/splicing_MH1325_20260608_yellow-white (3)_up_001.webp',
          '/splicing-machine/splicing_MH1325_20260608_yellow-white/splicing_MH1325_20260608_yellow-white (1)_up_002.webp',
          '/splicing-machine/splicing_MH1325_20260608_yellow-white/splicing_MH1325_20260608_yellow-white (1)_up_001.webp',
          '/splicing-machine/splicing_MH1325_20260608_yellow-white/splicing_MH1325_20260608_yellow-white (2)_up_001.webp',
          '/splicing-machine/splicing_MH1325_20260608_yellow-white/splicing_MH1325_20260608_yellow-white (2)_up_002.webp'
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '3200×1300mm', valueMic: '3200×1300mm', valueRu: '3200 × 1300 мм', keyRu: 'Размер стола' },
          { keyCn: '工作行程', keyMic: 'Working Stroke', keyVn: 'Hành trình làm việc', valueCn: '400mm', valueMic: '400mm', valueRu: '400 мм', keyRu: 'Рабочий ход' },
          { keyCn: '主油缸', keyMic: 'Main Cylinder', keyVn: 'Xi-lanh chính', valueCn: '15T', valueMic: '15T', valueRu: '15 т', keyRu: 'Главный цилиндр' },
          { keyCn: '副油缸', keyMic: 'Secondary Cylinder', keyVn: 'Xi-lanh phụ', valueCn: '30T', valueMic: '30T', valueRu: '30 т', keyRu: 'Вспомогательный цилиндр' },
          { keyCn: '外形尺寸', keyMic: 'Overall Dimensions', keyVn: 'Kích thước tổng thể', valueCn: '4080×1800×2460mm', valueMic: '4080×1800×2460mm', valueRu: '4080 × 1800 × 2460 мм', keyRu: 'Габаритные размеры' },
          { keyCn: '重量', keyMic: 'Weight', keyVn: 'Trọng lượng', valueCn: '约3000kg', valueMic: 'approx. 3000kg', valueVn: 'Khoảng 3000kg', valueRu: 'ок. 3000 кг', keyRu: 'Масса' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '4+1.1kW', valueMic: '4+1.1kW', valueRu: '4 + 1,1 кВт', keyRu: 'Мощность' }
        ],
        features: []
      },
      {
        id: 'mh1325-20260610',
        model: 'MH1325',
        cn: '拼板机',
        mic: 'Splicing Machine',
        vn: 'Máy ghép gỗ',
        ru: 'Пресс для сращивания',
        images: [
          '/splicing-machine/splicing_MH1325_20260610_yellow-white/splicing_MH1325_20260610_yellow-white (1)_up_001.webp',
          '/splicing-machine/splicing_MH1325_20260610_yellow-white/splicing_MH1325_20260610_yellow-white (2)_up_001.webp'
        ],
        specs: [
          { keyCn: '台面尺寸', keyMic: 'Table Size', keyVn: 'Kích thước mặt bàn', valueCn: '2500×1300mm', valueMic: '2500×1300mm', valueRu: '2500 × 1300 мм', keyRu: 'Размер стола' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', valueCn: '380V 50HZ 3P', valueMic: '380V 50HZ 3P', valueRu: '380 В, 50 Гц, 3 фазы', keyRu: 'Напряжение' },
          { keyCn: '电机功率', keyMic: 'Motor Power', keyVn: 'Công suất động cơ', valueCn: '4+1.1kW', valueMic: '4+1.1kW', valueRu: '4 + 1,1 кВт', keyRu: 'Мощность двигателя' },
          { keyCn: '有效工作行程', keyMic: 'Effective Working Stroke', keyVn: 'Hành trình làm việc hiệu dụng', valueCn: '400mm', valueMic: '400mm', valueRu: '400 мм', keyRu: 'Эффективный рабочий ход' },
          { keyCn: '主油缸', keyMic: 'Main Cylinder', keyVn: 'Xi-lanh chính', valueCn: '15T', valueMic: '15T', valueRu: '15 т', keyRu: 'Главный цилиндр' },
          { keyCn: '侧油缸', keyMic: 'Side Cylinder', keyVn: 'Xi-lanh bên', valueCn: '30T', valueMic: '30T', valueRu: '30 т', keyRu: 'Боковой цилиндр' },
          { keyCn: '重量', keyMic: 'Weight', keyVn: 'Trọng lượng', valueCn: '约3000kg', valueMic: 'Approx. 3000kg', valueVn: 'Khoảng 3000kg', valueRu: 'ок. 3000 кг', keyRu: 'Масса' }
        ],
        features: []
      }
    ]
  },
  {
    id: 'door-frame-machine',
    cn: '门框组合机',
    mic: 'Door Frame Assembly Machine',
    vn: 'Máy ghép khung cửa',
    ru: 'Станок для сборки дверных коробок',
    descCn: '专业门框生产设备，高效组装，精度高。',
    descMic: 'Professional door frame production equipment with high efficiency and precision.',
    descVn: 'Thiết bị sản xuất khung cửa chuyên nghiệp, lắp ráp hiệu quả và độ chính xác cao.',
    descRu: 'Профессиональное оборудование для производства дверных коробок: эффективная сборка и высокая точность.',
    icon: '🚪',
    color: "url('/door-frame-bg.webp')",
    intro: [
      {
        cn: '门框组合机把木门、橱柜门、家具框架的组装压合做成一个工位。前后与侧向油缸同时加压，一次循环完成涂胶后的压紧定型，90 度角接头受力均匀，不空不裂。相比人工锤打楔紧，组合机的成品角度准、批量一致性好。',
        mic: 'The door frame assembly machine turns the assembly and pressing of door leaves, cabinet doors and furniture frames into a single station. Front, rear and side cylinders press simultaneously, clamping and setting the glued joints in one cycle, so 90-degree corners are evenly loaded — no gaps, no cracks. Compared with manual mallet-and-wedge assembly, the machine delivers accurate angles and consistent batch quality.',
        vn: 'Máy ghép khung cửa biến việc lắp ráp và ép khung cửa gỗ, cửa tủ, khung nội thất thành một trạm duy nhất. Các xi lanh trước, sau và bên ép đồng thời, trong một chu kỳ hoàn thành kẹp chặt và định hình sau khi dán keo, mối góc 90 độ chịu lực đều, không hở không nứt. So với lắp thủ công bằng búa và nêm, máy cho góc chính xác và chất lượng đồng đều giữa các lô.',
        ru: 'Станок для сборки дверных коробок превращает сборку и прессование дверных полотен, фасадов и мебельных рамок в единый пост. Передние, задние и боковые гидроцилиндры сжимают одновременно — за один цикл проклеенные соединения фиксируются, прямые углы нагружаются равномерно, без щелей и трещин. По сравнению с ручной сборкой на клиньях станок даёт точные углы и стабильное качество партии.'
      },
      {
        cn: '选门框组合机看最大组合尺寸：MH2210 最大可组 1220×2440mm，标准门扇整门一次组装。框架偏大或做衣柜整框的话，把您最大的框件尺寸告诉我们，按上限选型，避免大件装不下。',
        mic: 'Sizing a door frame machine comes down to maximum assembly size: the MH2210 assembles frames up to 1220×2440mm — a standard door leaf in one go. For oversized frames or full wardrobe frames, send us your largest frame dimensions and we will size the machine to the upper limit so big frames always fit.',
        vn: 'Chọn máy ghép khung cửa dựa vào kích thước ghép tối đa: MH2210 ghép được tới 1220×2440mm, cửa tiêu chuẩn ghép trọn trong một lần. Khung cỡ lớn hoặc cả khổ tủ, hãy cho chúng tôi kích thước khung lớn nhất, chọn máy theo giới hạn trên để khung to không bị thiếu chỗ.',
        ru: 'Выбор станка определяется максимальным размером сборки: MH2210 собирает коробки до 1220×2440 мм — стандартное дверное полотно целиком за один раз. Для негабаритных рамок или полных корпусных рам пришлите размер наибольшей рамы — подберём станок с запасом, чтобы крупные рамы гарантированно помещались.'
      }
    ],
    highlights: [
      {
        cn: '前后与侧向油缸同时加压，一次循环完成压紧定型',
        mic: 'Front, rear and side cylinders press simultaneously — clamping and setting in one cycle',
        vn: 'Xi lanh trước, sau và bên ép đồng thời, một chu kỳ hoàn thành kẹp chặt định hình',
        ru: 'Передние, задние и боковые цилиндры сжимают одновременно — фиксация за один цикл'
      },
      {
        cn: '最大组合尺寸 1220×2440mm，标准门扇一次组装',
        mic: 'Maximum assembly size 1220×2440mm — a standard door leaf assembled in one pass',
        vn: 'Kích thước ghép tối đa 1220×2440mm, cửa tiêu chuẩn ghép một lần',
        ru: 'Максимальный размер сборки 1220×2440 мм — стандартное полотно за одну установку'
      },
      {
        cn: '90 度角受力均匀，接头不空不裂，角度批量一致',
        mic: 'Evenly loaded 90-degree corners — no gaps, no cracks, consistent angles across batches',
        vn: 'Góc 90 độ chịu lực đều, mối nối không hở không nứt, góc đồng đều giữa các lô',
        ru: 'Прямые углы нагружены равномерно — без щелей и трещин, углы стабильны от партии к партии'
      },
      {
        cn: '工位化作业，一人上料一人下料即可成组',
        mic: 'Station-based operation — one loader and one unloader can run the group',
        vn: 'Vận hành theo trạm, một người nạp một người xả là đủ chạy tổ',
        ru: 'Работа по постам: один на загрузку, один на выгрузку — и комплект собирается'
      },
      {
        cn: '适用于木门、橱柜门、实木门窗与家具框架多种框件',
        mic: 'Handles door leaves, cabinet doors, solid-wood windows/doors and furniture frames',
        vn: 'Phù hợp cửa gỗ, cửa tủ, cửa sổ cửa gỗ nguyên khối và khung nội thất',
        ru: 'Подходит для дверных полотен, фасадов, столярных окон/дверей и мебельных рам'
      }
    ],
    selection: [
      {
        cn: '框件类型（木门/橱柜门/窗框/家具框）与最大外形尺寸',
        mic: 'Frame type (door leaf / cabinet door / window frame / furniture frame) and largest dimensions',
        vn: 'Loại khung (cửa gỗ/cửa tủ/khung cửa sổ/khung nội thất) và kích thước lớn nhất',
        ru: 'Тип рамок (полотна / фасады / оконные рамы / мебельные рамы) и максимальные размеры'
      },
      {
        cn: '框件厚度与杆件截面尺寸',
        mic: 'Frame thickness and member cross-section sizes',
        vn: 'Độ dày khung và tiết diện thanh liệu',
        ru: 'Толщина рамок и сечение брусков'
      },
      {
        cn: '日产框件数量与组装节拍',
        mic: 'Daily frame output and assembly cycle time',
        vn: 'Sản lượng khung mỗi ngày và nhịp lắp ráp',
        ru: 'Суточный выпуск рамок и такт сборки'
      },
      {
        cn: '用胶方式（手动涂胶/配套涂胶机）',
        mic: 'Gluing method (manual / with a glue applicator)',
        vn: 'Cách dán keo (thủ công/kèm máy phủ keo)',
        ru: 'Способ нанесения клея (ручной / с аппликатором)'
      },
      {
        cn: '是否需要转台或双工位交替作业',
        mic: 'Whether a turntable or twin-station alternating operation is needed',
        vn: 'Có cần bàn xoay hoặc hai trạm xen kẽ không',
        ru: 'Нужен ли поворотный стол или двухпостная поочередная работа'
      }
    ],
    faq: [
      {
        q: {
          cn: '一次能组几个框？',
          mic: 'How many frames per cycle?',
          vn: 'Một lần ghép được mấy khung?',
          ru: 'Сколько рамок за один цикл?'
        },
        a: {
          cn: '常规做法一次一框，压得实、角度最准；做小框件（如柜门、抽屉框）时台面上可以并排多件同时压，数量按框件外形排布。把您最常见的框件尺寸清单发来，我们算单循环产量和班产。',
          mic: 'The standard practice is one frame per cycle for maximum clamping force and the most accurate angles; for small frames (cabinet doors, drawer frames), several can be laid side by side and pressed together, with the count set by frame size. Send us your most common frame size list and we will calculate output per cycle and per shift.',
          vn: 'Cách chuẩn là mỗi lần một khung để ép chắc và góc chuẩn nhất nhất; với khung nhỏ (cửa tủ, khung ngăn kéo) có thể đặt nhiều cái cạnh nhau ép cùng lúc, số lượng theo kích thước khung. Gửi danh sách kích thước khung phổ biến nhất, chúng tôi tính sản lượng mỗi chu kỳ và mỗi ca.',
          ru: 'Стандартная практика — одна рамка за цикл: так достигается максимальное усилие и самые точные углы. Для малых рамок (фасады, ящики) несколько штук раскладываются рядом и прессуются одновременно; количество зависит от размера рамок. Пришлите список ходовых размеров — посчитаем выпуск за цикл и за смену.'
        }
      },
      {
        q: {
          cn: '异形框或者斜角框能压吗？',
          mic: 'Can it press irregular or angled frames?',
          vn: 'Khung dị dạng hoặc góc xiên có ép được không?',
          ru: 'Можно ли прессовать фигурные или скошенные рамки?'
        },
        a: {
          cn: '标准机型压 90 度矩形框。斜角框（如 45 度拼角的相框、门套线）可以通过更换定位靠模实现；完全异形的曲面框不适合机型压合，建议改用分段夹具。把您的框件图纸发给我们，我们判断能不能压、怎么压。',
          mic: 'The standard machine presses 90-degree rectangular frames. Angled frames (45-degree miter frames, architrave moldings) can be handled by swapping the positioning fixture; fully irregular curved frames are not suited to machine pressing and are better done with segmented clamps. Send us your frame drawings and we will judge whether and how it can be pressed.',
          vn: 'Máy tiêu chuẩn ép khung chữ nhật 90 độ. Khung góc xiên (khung ảnh ghép 45 độ, đường bao cửa) có thể làm được bằng cách thay khu định vị; khung cong hoàn toàn dị dạng không phù hợp ép bằng máy, nên dùng kẹp chia đoạn. Gửi bản vẽ khung cho chúng tôi, chúng tôi đánh giá có ép được không và ép thế nào.',
          ru: 'Стандартный станок прессует прямоугольные рамки 90 градусов. Рамки со скосом (45-градусные багетные, наличники) делаются заменой базирующей оснастки; полностью фигурные криволинейные рамки для станочного прессования не годятся — лучше сегментные струбцины. Пришлите чертежи ваших рамок — мы оценим, можно ли их прессовать и как.'
        }
      },
      {
        q: {
          cn: '组装前涂胶是手动还是配套设备？',
          mic: 'Is gluing done manually or with matching equipment?',
          vn: 'Việc dán keo trước khi lắp là thủ công hay kèm thiết bị?',
          ru: 'Нанесение клея перед сборкой — вручную или с оборудованием?'
        },
        a: {
          cn: '小批量可以手动涂胶后上机压合；批量稳定的话建议配涂胶机，涂胶量均匀、接头强度也更一致。我们把涂胶环节编进工位布局，需要的话连涂胶机一起配。',
          mic: 'For small batches, glue manually then press; for steady batches we recommend adding a glue applicator — more even glue spread and more consistent joint strength. We build the gluing step into the station layout and can supply the applicator together with the machine.',
          vn: 'Lô nhỏ có thể dán keo thủ công rồi đưa lên máy ép; chạy lô ổn định nên kèm máy phủ keo, lượng keo đều và độ bền mối nối cũng đồng đều hơn. Chúng tôi đưa công đoạn dán keo vào bố trí trạm, cần thì kèm máy phủ keo luôn.',
          ru: 'Для малых партий можно наносить клей вручную и затем прессовать; при стабильных партиях рекомендуем аппликатор — расход клея равномернее и прочность соединений стабильнее. Мы встроим операцию склейки в компоновку поста и при необходимости поставим аппликатор вместе со станком.'
        }
      },
      {
        q: {
          cn: '和整条门扇生产线怎么衔接？',
          mic: 'How does it connect to a full door production line?',
          vn: 'Nó kết nối thế nào với dây chuyền sản xuất cửa hoàn chỉnh?',
          ru: 'Как он стыкуется с полной линией производства дверей?'
        },
        a: {
          cn: '典型流程是：开料 → 铣型/开槽 → 涂胶 → 门框组合机压合 → 定型陈放 → 砂光 → 贴面或油漆。组合机前面接涂胶工位，后面接陈放架与砂光段。我们要做整线的话，会把组合机的节拍和前后工位一起排，保证不堵工序。',
          mic: 'The typical flow: ripping → profiling/grooving → gluing → door frame assembly press → curing rest → sanding → facing or painting. The assembly machine takes the gluing station before it and the curing racks and sanding section after it. When we plan a full line, we pace the assembly machine together with upstream and downstream stations so nothing bottlenecks.',
          vn: 'Quy trình điển hình: xẻ liệu → phay rãnh → dán keo → máy ghép khung ép → tĩnh chờ định hình → chà bóng → dán bề mặt hoặc sơn. Máy ghép khung nhận trạm dán keo phía trước, kệ tĩnh chờ và đoạn chà bóng phía sau. Nếu làm trọn dây chuyền, chúng tôi sẽ sắp nhịp máy ghép cùng các trạm trước sau, tránh nghẽn công đoạn.',
          ru: 'Типовая цепочка: раскрой → профилирование/фрезеровка → нанесение клея → пресс сборки коробок → технологическая выдержка → шлифовка → облицовка или окраска. Перед станком — пост склейки, после — стеллажи выдержки и участок шлифовки. Планируя полную линию, мы согласуем такт сборочного пресса с соседними постами, чтобы нигде не было затора.'
        }
      }
    ],
    models: [
      {
        id: 'mh2210-20260325',
        model: 'MH2210',
        cn: '门框组合机',
        mic: 'Door Frame Assembly Machine',
        vn: 'Máy ghép khung cửa',
        ru: 'Станок для сборки дверных коробок',
        images: [
          '/door-frame-machine/door-frame_MH2210_20260325_blue-white/door-frame_MH2210_20260325_blue-white_up_001.webp'
        ],
        specs: [
          { keyCn: '最大组合尺寸', keyMic: 'Max. Combination Size', keyVn: 'Kích thước ghép tối đa', valueCn: '1220×2440mm', valueMic: '1220×2440mm', valueRu: '1220 × 2440 мм', keyRu: 'Максимальный размер заготовки' },
          { keyCn: '液压电机功率', keyMic: 'Hydraulic Motor Power', keyVn: 'Công suất động cơ thủy lực', valueCn: '2.2kW', valueMic: '2.2kW', valueRu: '2,2 кВт', keyRu: 'Мощность гидравлического двигателя' },
          { keyCn: '重量', keyMic: 'Weight', keyVn: 'Trọng lượng', valueCn: '约2000kg', valueMic: 'Approx. 2000kg', valueVn: 'Khoảng 2000kg', valueRu: 'ок. 2000 кг', keyRu: 'Масса' },
          { keyCn: '正压油缸', keyMic: 'Front Pressing Cylinders', keyVn: 'Xi-lanh ép thuận', valueCn: '4条', valueMic: '4 Pcs', valueVn: '4 thanh', valueRu: '4 шт.', keyRu: 'Цилиндры прямого прессования' },
          { keyCn: '侧压油缸', keyMic: 'Side Pressing Cylinders', keyVn: 'Xi-lanh ép ngang', valueCn: '3条', valueMic: '3 Pcs', valueVn: '3 thanh', valueRu: '3 шт.', keyRu: 'Цилиндры бокового прессования' },
          { keyCn: '单面或双面', keyMic: 'Single/Double Sided', keyVn: 'Một mặt hoặc hai mặt', valueCn: '双面', valueMic: 'Double-sided', valueVn: 'Hai mặt', valueRu: 'Двусторонний', keyRu: 'Односторонний / двусторонний' },
          { keyCn: '压料架', keyMic: 'Material Pressing Frame', keyVn: 'Khung ép', valueCn: '有', valueMic: 'Included', valueVn: 'Có', valueRu: 'В комплекте', keyRu: 'Прижимная рама' }
        ],
        features: []
      }
    ]
  },
  {
    id: 'parts',
    cn: '零件',
    mic: 'Parts',
    vn: 'Phụ tùng',
    ru: 'Запчасти',
    descCn: '各类机械零件和配件，高品质原厂零部件。',
    descMic: 'Various mechanical parts and accessories, high-quality OEM components.',
    descVn: 'Các loại phụ tùng và linh kiện máy móc, chất lượng cao theo tiêu chuẩn nhà sản xuất.',
    descRu: 'Различные механические детали и комплектующие, высококачественные оригинальные запчасти.',
    icon: '🔩',
    color: "url('/parts-bg.webp')",
    intro: [
      {
        cn: '设备用久了，易损件和备件的供应速度直接决定停机时间。我们供应自家全系列设备的原厂零件：油缸密封件、导轨滑块、锯片垫套、输送辊、电气元件与专用小件。零件按机型编码，报机型和零件名即可快速匹配。',
        mic: 'When a machine ages, how fast you get wear parts and spares directly decides downtime. We supply original parts for our full machine range: cylinder seals, guide rails and sliders, saw spacers, conveyor rollers, electrical components and dedicated small parts. Parts are coded by machine model — just quote the model and part name for a fast match.',
        vn: 'Máy dùng lâu, tốc độ cung cấp vật tư hao mòn và phụ tùng quyết định trực tiếp thời gian dừng máy. Chúng tôi cung cấp phụ tùng chính hãng cho toàn bộ dòng máy: gioăng xi lanh, ray trượt, vòng đệm lưỡi cưa, con lăn băng tải, linh kiện điện và các chi tiết nhỏ chuyên dụng. Phụ tùng mã hóa theo model máy, chỉ cần báo model và tên chi tiết là khớp nhanh.',
        ru: 'Когда станок стареет, скорость поставки изнашиваемых деталей и запчастей напрямую определяет простой. Мы поставляем оригинальные детали ко всему парку нашего оборудования: уплотнения цилиндров, направляющие и каретки, распорные втулки пил, рольганги, электрику и специализированную мелочёвку. Запчасти закодированы по модели станка — для быстрого подбора достаточно назвать модель и наименование детали.'
      },
      {
        cn: '订零件前建议先做一轮易损件盘点：油缸密封件的更换周期、输送辊磨损情况、电气元件的老化程度。一次性把常备件订齐，比停机后等件划算得多。不确定零件名的话，拍设备铭牌和零件照片发给我们，我们帮您对号。',
        mic: 'Before ordering parts, it pays to run an audit of wear items: the replacement cycle of cylinder seals, the wear state of conveyor rollers, the aging of electrical components. Ordering common spares in one batch is far cheaper than waiting for parts after a breakdown. If you are unsure of a part name, photograph the machine nameplate and the part and send them over — we will match it for you.',
        vn: 'Trước khi đặt phụ tùng nên rà soát một vòng vật tư hao mòn: chu kỳ thay gioăng xi lanh, mức mòn con lăn, mức độ lão hóa linh kiện điện. Đặt đủ vật tư thường dùng một lần luôn rẻ hơn chờ phụ tùng khi máy dừng. Không rõ tên chi tiết thì chụp tem máy và ảnh chi tiết gửi chúng tôi, chúng tôi giúp đối chiếu.',
        ru: 'Перед заказом запчастей стоит провести ревизию изнашиваемых позиций: цикл замены уплотнений цилиндров, износ рольгангов, старение электрики. Закупить ходовые запчасти одной партией куда выгоднее, чем ждать деталь после поломки. Если не уверены в названии детали — сфотографируйте шильдик станка и саму деталь и пришлите нам, мы поможем с подбором.'
      }
    ],
    highlights: [
      {
        cn: '原厂零件，按机型编码，匹配不返工',
        mic: 'Original parts coded by machine model — right first time',
        vn: 'Phụ tùng chính hãng, mã hóa theo model, khớp đúng không phải làm lại',
        ru: 'Оригинальные запчасти с кодировкой по модели — подбор с первого раза'
      },
      {
        cn: '覆盖油压、机械、电气三大类易损件',
        mic: 'Covers hydraulic, mechanical and electrical wear parts',
        vn: 'Bao phủ ba nhóm vật tư hao mòn: thủy lực, cơ khí, điện',
        ru: 'Охватывает изнашиваемые детали трёх групп: гидравлика, механика, электрика'
      },
      {
        cn: '常用件有备货，急件可加急发运',
        mic: 'Common parts in stock; urgent items can be expedited',
        vn: 'Vật tư thông dụng có sẵn kho, hàng gấp có thể xuất khẩn',
        ru: 'Ходовые позиции на складе, срочные отправляются вне очереди'
      },
      {
        cn: '大修与换件支持远程指导',
        mic: 'Remote guidance available for overhauls and part replacement',
        vn: 'Hỗ trợ hướng dẫn từ xa cho đại tu và thay phụ tùng',
        ru: 'Дистанционное сопровождение капремонта и замены деталей'
      },
      {
        cn: '老机型零件持续供应，不因停产断件',
        mic: 'Parts for older models keep being supplied — no cutoff after model retirement',
        vn: 'Phụ tùng máy đời cũ vẫn cung cấp liên tục, không gián đoạn khi ngừng model',
        ru: 'Запчасти для снятых с производства моделей продолжают поставляться — обрыва нет'
      }
    ],
    selection: [
      {
        cn: '设备机型（铭牌型号）与出厂年份',
        mic: 'Machine model (nameplate) and year of manufacture',
        vn: 'Model máy (tem nhãn) và năm sản xuất',
        ru: 'Модель станка (шильдик) и год выпуска'
      },
      {
        cn: '所需零件名称或照片，能提供损坏件实物更佳',
        mic: 'Part name or photo; the failed part itself is even better',
        vn: 'Tên hoặc ảnh phụ tùng, có sẵn chi tiết hỏng càng tốt',
        ru: 'Название или фото детали; лучше всего — сама изношенная деталь'
      },
      {
        cn: '零件数量与期望交期',
        mic: 'Quantity and expected delivery time',
        vn: 'Số lượng và thời gian giao mong muốn',
        ru: 'Количество и желаемый срок поставки'
      },
      {
        cn: '是否需要随件提供更换指导或工装',
        mic: 'Whether replacement guidance or tooling is needed with the parts',
        vn: 'Có cần kèm hướng dẫn thay thế hoặc dụng cụ chuyên dụng không',
        ru: 'Нужны ли с деталями инструкция по замене или оснастка'
      }
    ],
    faq: [
      {
        q: {
          cn: '不是从你们厂买的机器，零件能配吗？',
          mic: 'I bought my machine elsewhere — can you match parts for it?',
          vn: 'Máy không phải mua từ nhà máy anh, có thể khớp phụ tùng không?',
          ru: 'Станок куплен не у вас — можно ли подобрать к нему детали?'
        },
        a: {
          cn: '通用件（密封件、轴承、输送辊、常规电气件）大概率能配，专用件要看结构。提供铭牌照片和零件实物照片，我们先判断能不能配再报价，配不了也会说明原因。',
          mic: 'Generic parts (seals, bearings, conveyor rollers, common electricals) can usually be matched; dedicated parts depend on the structure. Send the nameplate photo and part photos — we will confirm feasibility before quoting, and if we cannot match it, we will say so and why.',
          vn: 'Phụ tùng thông dụng (gioăng, vòng bi, con lăn, linh kiện điện thông thường) phần lớn khớp được, chi tiết chuyên dụng tùy kết cấu. Gửi ảnh tem nhãn và ảnh phụ tùng, chúng tôi xác nhận khớp được rồi mới báo giá; không khớp được sẽ nói rõ lý do.',
          ru: 'Унифицированные детали (уплотнения, подшипники, ролики, распространённая электрика) обычно подобрать можно; специализированные — зависит от конструкции. Пришлите фото шильдика и фото детали — мы сначала подтвердим возможность подбора, потом выставим счёт; если нельзя — объясним почему.'
        }
      },
      {
        q: {
          cn: '零件多久能到？',
          mic: 'How fast do parts arrive?',
          vn: 'Phụ tùng bao lâu thì tới?',
          ru: 'Как быстро приходят запчасти?'
        },
        a: {
          cn: '常用件有备货，确认订单后 2-3 天内发运；需要加工的专用件按件评估，一般 7-15 天。海运用空运还是海运由您定，急停机件建议空运。下订单时告诉我们目的地和时限，我们给准确的发运计划。',
          mic: 'Stocked common parts ship within 2-3 days of order confirmation; machined dedicated parts are assessed per item, typically 7-15 days. Air or sea freight is your call — for a breakdown, we recommend air. Tell us the destination and deadline when ordering and we will give you a concrete shipping plan.',
          vn: 'Vật tư thông dụng có kho, 2-3 ngày sau khi xác nhận đơn là xuất hàng; chi tiết phải gia công đánh giá theo từng loại, thường 7-15 ngày. Gửi hàng bằng đường bay hay đường biển do anh quyết, máy đang dừng gấp thì khuyên gửi đường bay. Khi đặt đơn cho biết điểm đến và thời hạn, chúng tôi sẽ có kế hoạch xuất hàng cụ thể.',
          ru: 'Ходовые позиции со склада отгружаются в течение 2–3 дней после подтверждения заказа; детали под обработку оцениваются поштучно, обычно 7–15 дней. Авиа или море — на ваше решение; при простое станка рекомендуем авиа. При заказе укажите пункт назначения и срок — мы дадим конкретный план отгрузки.'
        }
      },
      {
        q: {
          cn: '能不能给我列一份易损件备件清单？',
          mic: 'Can you give me a recommended wear-parts spare list?',
          vn: 'Có thể cho tôi một danh sách vật tư hao mòn nên dự phòng không?',
          ru: 'Можно получить рекомендуемый список изнашиваемых запчастей?'
        },
        a: {
          cn: '可以。按您的机型和使用强度，我们出一份年度备件清单：油缸密封件一套、易磨导条、输送辊若干、常用电气件（接触器、接近开关、继电器）。报机型和年产量，清单按实际工况给，不做通用模板。',
          mic: 'Yes. Based on your machine model and duty intensity, we produce an annual spare list: one set of cylinder seals, wear-prone guide strips, several conveyor rollers, and common electricals (contactors, proximity switches, relays). Quote the model and annual output — the list is built to your actual duty, not a generic template.',
          vn: 'Được. Theo model máy và cường độ sử dụng của anh, chúng tôi xuất danh sách dự phòng năm: một bộ gioăng xi lanh, thanh dẫn dễ mòn, vài con lăn băng tải, linh kiện điện thông dụng (contactor, công tắc tiệm cận, rơ le). Báo model và sản lượng năm, danh sách lập theo thực tế vận hành, không dùng mẫu chung.',
          ru: 'Да. По вашей модели и интенсивности эксплуатации мы подготовим годовой список запчастей: комплект уплотнений цилиндров, изнашиваемые направляющие планки, несколько роликов, распространённая электрика (контакторы, датчики приближения, реле). Назовите модель и годовой выпуск — список составим под фактический режим работы, без шаблона.'
        }
      }
    ],
    models: [
      {
        id: 'xiao-you-gang-50-dao-tao-20260507',
        model: 'Small Cylinder 50 Guide Sleeve',
        cn: '油缸导套',
        mic: 'Oil Cylinder Guide Sleeve',
        vn: 'Bạc dẫn hướng xi-lanh',
        ru: 'Запчасти',
        images: [
          '/parts/oil-cylinder-guide-sleeve_small-cylinder-50_20260507_metallic/oil-cylinder-guide-sleeve_small-cylinder-50_20260507_metallic_up_001.webp'
        ],
        specs: [],
        features: []
      },
      {
        id: 'dai-jiao-ban-20260508',
        model: '56',
        cn: '链条',
        mic: 'Chain',
        vn: 'Xích',
        ru: 'Запчасти',
        images: [
          '/parts/chain_with-rubber-pad_20260508_metallic-white/chain_with-rubber-pad_20260508_metallic-white (1)_up_001.webp'
        ],
        specs: [
          { keyCn: '产品名称', keyMic: 'Product Name', keyVn: 'Tên sản phẩm', valueCn: '链条', valueMic: 'Chain', valueVn: 'Xích', valueRu: 'Цепь', keyRu: 'Наименование изделия' },
          { keyCn: '型号', keyMic: 'Model', keyVn: 'Mẫu / Model', valueCn: '带胶板', valueMic: 'With Rubber Pad', valueVn: 'Có tấm keo', valueRu: 'С резиновой накладкой', keyRu: 'Модель' },
          { keyCn: '颜色', keyMic: 'Color', keyVn: 'Màu sắc', valueCn: '金属白', valueMic: 'Metallic White', valueVn: 'Trắng kim loại', valueRu: 'Металлик белый', keyRu: 'Цвет' },
          { keyCn: '数量', keyMic: 'Quantity', keyVn: 'Số lượng', valueCn: '56节', valueMic: '56 Sections', valueVn: '56 đốt', valueRu: '56 звеньев', keyRu: 'Количество' }
        ],
        features: []
      }
    ]
  },
  {
    id: 'other',
    cn: '其他',
    mic: 'Other Products',
    vn: 'Khác',
    ru: 'Прочее',
    descCn: '更多木工机械设备，满足您的多样化需求。',
    descMic: 'More woodworking machinery to meet your diverse needs.',
    descVn: 'Nhiều loại máy móc gỗ khác đáp ứng nhu cầu đa dạng của bạn.',
    descRu: 'Дополнительное деревообрабатывающее оборудование для удовлетворения ваших разнообразных потребностей.',
    icon: '📦',
    color: "url('/other-bg.webp')",
    intro: [
      {
        cn: '一个完整的板式或实木车间，除了热压、冷压、开料、拼板这些主工序，还需要推板机、抓板机、圆盘锯、四边锯等辅助设备把工位串起来。这个分类收录这些「配角」设备——单看不起眼，配齐了整条线的自动化程度就上一个台阶。',
        mic: 'A complete panel or solid-wood shop needs more than the main processes of pressing, breakdown and splicing — auxiliary machines like pushers, panel grabbers, circular saws and four-side saws are what link the stations together. This category collects those supporting machines: unremarkable on their own, but completing them lifts the whole line\'s automation a level.',
        vn: 'Một xưởng ván hay gỗ tròn hoàn chỉnh, ngoài các công đoạn chính như ép nóng, ép lạnh, xẻ liệu, ghép ván, còn cần các thiết bị hỗ trợ như máy đẩy, máy gắp ván, cưa đĩa, cưa bốn cạnh để nối các trạm lại. Danh mục này gom các máy «vai phụ» ấy — nhìn riêng thì bình thường, nhưng đủ bộ thì mức tự động hóa cả dây chuyền nâng lên một bậc.',
        ru: 'Полноценный цех плитных или массивных изделий требует не только главных переделов — прессования, раскроя, сращивания, — но и вспомогательных машин: толкателей, захватов, дисковых и четырёхсторонних пил, которые связывают посты в единую цепочку. Эта категория собирает такие «машины второго плана»: по отдельности они незаметны, но в комплекте поднимают автоматизацию всей линии на ступень.'
      },
      {
        cn: '这里每一台设备都按「它解决哪个工位的问题」来选型：推板机解决逐张分离上料，抓板机解决大板搬运，圆盘锯和四边锯解决截断与修边。不确定您的线缺哪一环，把工艺流程图或车间平面图发给我们，我们帮您把缺口找出来。',
        mic: 'Every machine here is chosen by the station problem it solves: pushers for sheet-by-sheet infeed separation, panel grabbers for moving large panels, circular and four-side saws for cutoff and edge trimming. If you are not sure which link your line is missing, send us the process flow or a workshop floor plan and we will find the gaps.',
        vn: 'Mỗi máy ở đây được chọn theo «vấn đề trạm nào nó giải quyết»: máy đẩy giải quyết tách từng tấm cấp liệu, máy gắp ván giải quyết bốc ván lớn, cưa đĩa và cưa bốn cạnh giải quyết cắt ngang và xẻ bi. Chưa rõ dây chuyền của anh thiếu khâu nào, gửi sơ đồ quy trình hoặc mặt bằng xưởng, chúng tôi giúp anh tìm ra khoảng trống.',
        ru: 'Каждая машина здесь подбирается по тому, какую задачу поста она решает: толкатель — поштучное разделение при подаче, захват — перемещение больших плит, дисковая и четырёхсторонняя пила — торцовку и обрезку кромки. Если не уверены, какого звена не хватает вашей линии, пришлите технологическую схему или план цеха — мы найдём пробелы.'
      }
    ],
    highlights: [
      {
        cn: '补齐主设备之间的搬运与截断环节，工位无缝衔接',
        mic: 'Fills the handling and cutoff gaps between main machines, so stations connect seamlessly',
        vn: 'Lấp khoảng trống vận chuyển và cắt ngang giữa các máy chính, các trạm nối liền mạch',
        ru: 'Закрывает пробелы транспортировки и торцовки между основными станками — посты стыкуются без разрывов'
      },
      {
        cn: '与主设备共用联锁信号，整线一个节拍跑',
        mic: 'Shares interlock signals with the main machines — the whole line runs on one rhythm',
        vn: 'Dùng chung tín hiệu liên động với máy chính, cả dây chuyền chạy một nhịp',
        ru: 'Общие сигналы блокировки с основными станками — вся линия работает в одном такте'
      },
      {
        cn: '推板机、抓板机、圆盘锯、四边锯按车间布局组合选配',
        mic: 'Pushers, grabbers, circular and four-side saws selected to your shop layout',
        vn: 'Máy đẩy, máy gắp, cưa đĩa, cưa bốn cạnh được chọn theo bố trí xưởng',
        ru: 'Толкатели, захваты, дисковые и четырёхсторонние пилы подбираются под планировку цеха'
      },
      {
        cn: '结构经过整线配套验证，装机即与上下游对齐',
        mic: 'Designs proven in complete-line projects — aligned with upstream and downstream on day one',
        vn: 'Cấu tạo đã qua kiểm chứng trong dự án dây chuyền trọn, lắp là khớp trước sau',
        ru: 'Конструкции проверены в комплектных проектах линий — сразу состыкованы с соседним оборудованием'
      },
      {
        cn: '单机可买，整线配套优先排产',
        mic: 'Buy as single machines; complete-line orders get priority scheduling',
        vn: 'Mua lẻ máy đơn được, đặt cả dây chuyền được ưu tiên xếp sản xuất',
        ru: 'Можно купить по одной машине; комплектные заказы линии — в приоритете производства'
      }
    ],
    selection: [
      {
        cn: '车间现有设备清单与工艺流程',
        mic: 'Current equipment list and process flow',
        vn: 'Danh sách thiết bị hiện có của xưởng và quy trình công nghệ',
        ru: 'Список имеющегося оборудования и технологическая схема'
      },
      {
        cn: '需要补位的环节（上料/搬运/截断/修边）',
        mic: 'Which links need filling (feeding / handling / cutoff / edge trimming)',
        vn: 'Khâu cần bổ sung (cấp liệu/vận chuyển/cắt ngang/xẻ bi)',
        ru: 'Какие звенья нужно закрыть (подача / транспортировка / торцовка / обрезка)'
      },
      {
        cn: '板材规格与单班吞吐量',
        mic: 'Panel specs and throughput per shift',
        vn: 'Quy cách ván và năng lực xử lý mỗi ca',
        ru: 'Размеры плит и пропускная способность за смену'
      },
      {
        cn: '车间平面尺寸与设备摆放约束',
        mic: 'Workshop floor dimensions and machine placement constraints',
        vn: 'Kích thước mặt bằng xưởng và ràng buộc vị trí đặt máy',
        ru: 'Размеры цеха и ограничения на размещение оборудования'
      }
    ],
    faq: [
      {
        q: {
          cn: '我已有主设备，只买一两台辅助机能配得上吗？',
          mic: 'I already have the main machines — will one or two auxiliaries still fit?',
          vn: 'Tôi đã có máy chính, mua một hai máy phụ liệu có khớp được không?',
          ru: 'Основные станки уже есть — впишутся ли одна-две вспомогательные машины?'
        },
        a: {
          cn: '能。辅助机的价值就在与现役设备对接：推板机对您的升降平台高度、抓板机对您的垛板规格、锯的进出料高度对您现役线。提供现役设备的关键接口尺寸，我们按您的线改接口尺寸出机，不要求推倒重来。',
          mic: 'Yes. The whole value of auxiliaries is interfacing with your existing machines: pusher matched to your lifting platform height, grabber to your pallet specs, saw infeed/outfeed heights to your current line. Give us the key interface dimensions of your existing equipment and we will build the machine to them — no need to start over.',
          vn: 'Được. Giá trị của máy phụ là ghép nối với thiết bị đang dùng: máy đẩy khớp chiều cao bục nâng của anh, máy gắp theo quy cách chồng ván, chiều cao进出 của cưa khớp dây hiện có. Cung cấp kích thước giao diện then chốt của thiết bị hiện hành, chúng tôi chế máy theo kích thước đó, không cần đập đi làm lại.',
          ru: 'Да. Ценность вспомогательных машин именно в стыковке с вашим парком: толкатель подгоняется под высоту вашего подъёмного стола, захват — под ваш формат штабелей, высоты подачи пилы — под действующую линию. Дайте ключевые стыковочные размеры имеющегося оборудования — мы изготовим машину под них, ничего ломать не придётся.'
        }
      },
      {
        q: {
          cn: '这些辅助机有型号参数页吗？',
          mic: 'Do these auxiliaries have spec pages?',
          vn: 'Các máy phụ này có trang thông số riêng không?',
          ru: 'У этих вспомогательных машин есть страницы с характеристиками?'
        },
        a: {
          cn: '推板机、抓板机等常用机型有独立型号页，规格参数公开；少数按订单定制的机型参数依项目而变，页面列出的是基准配置。在型号页找不到的设备，直接在联系页说明需求，我们按工况出配置。',
          mic: 'Common models like pushers and grabbers have their own model pages with published specs; a few project-customized machines vary by order, and pages show the baseline configuration. For anything without a model page, describe your need on the contact page and we will configure it to your duty.',
          vn: 'Các máy thông dụng như máy đẩy, máy gắp có trang model riêng với thông số công khai; một ít máy tùy biến theo đơn hàng thì thông số thay đổi theo dự án, trang web nêu cấu hình cơ bản. Máy nào không có trang model, anh cứ nêu nhu cầu ở trang liên hệ, chúng tôi cấu hình theo điều kiện vận hành.',
          ru: 'У ходовых моделей — толкателей, захватов — есть собственные страницы с опубликованными характеристиками; у части машин, дорабатываемых под заказ, параметры меняются от проекта к проекту, на страницах указана базовая комплектация. Для машин без страницы модели опишите потребность на странице контактов — мы составим комплектацию под ваш режим.'
        }
      }
    ],
    models: [
      {
        id: "mj105m-20260328",
        model: "MJ105M",
        cn: "母榫机",
        mic: "Mortise Machine",
        vn: "Máy làm mộng",
        ru: "Долбёжный станок",
        images: [
          "/mortise-machine/mortise_MJ105M_20260328_blue-white/mortise_MJ105M_20260328_blue-white_1_up_001.webp",
          "/mortise-machine/mortise_MJ105M_20260328_blue-white/mortise_MJ105M_20260328_blue-white_4_up_001.webp"
        ],
        specs: [
          { keyCn: "台面尺寸", keyMic: "Table Size",  keyVn: 'Kích thước mặt bàn', keyRu: 'Размер стола', valueCn: "800×1000mm", valueMic: "800×1000mm" },
          { keyCn: "槽宽", keyMic: "Groove Width",  keyRu: 'Ширина паза', valueCn: "25mm", valueMic: "25mm" },
          { keyCn: "槽长", keyMic: "Groove Length",  keyRu: 'Длина паза', valueCn: "800mm", valueMic: "800mm" },
          { keyCn: "燕尾槽调节范围", keyMic: "Dovetail Groove Adjustment Range", valueCn: "10mm-200mm", valueMic: "10mm-200mm" },
          { keyCn: "前拖把电机", keyMic: "Front Drag Motor", valueCn: "3kW方电机，带锯片夹，电机横置", valueMic: "3kW square motor with saw blade clamp, motor mounted horizontally" },
          { keyCn: "后拖把电机", keyMic: "Rear Drag Motor", valueCn: "3kW电机，配高速皮带及可装镂刀的主轴", valueMic: "3kW motor with high-speed belt and spindle for router bits" },
          { keyCn: "电机调节方式", keyMic: "Motor Adjustment Method", valueCn: "上下前后丝杆调节", valueMic: "Up/down/front/back lead screw adjustment" },
          { keyCn: "配置", keyMic: "Configuration", valueCn: "可装送料器的方座", valueMic: "Square base for material feeder installation" },
          { keyCn: "定位", keyMic: "Positioning", valueCn: "配铝合金定位", valueMic: "Aluminum alloy positioning guide" }
        ],
        features: []
      },
      {
        id: "mx5115-20260429",
        model: "MX5115",
        cn: "立式铣床",
        mic: "Vertical Milling Machine",
        vn: "Máy phay đứng",
        ru: "Фрезерный станок",
        images: [
          "/vertical-milling/vertical-milling_MX5115vertical-milling_20260429_blue-white/vertical-milling_MX5115vertical-milling_20260429_blue-white (12)_up_001.webp",
          "/vertical-milling/vertical-milling_MX5115vertical-milling_20260429_blue-white/vertical-milling_MX5115vertical-milling_20260429_blue-white (13)_up_001.webp",
          "/vertical-milling/vertical-milling_MX5115vertical-milling_20260429_blue-white/vertical-milling_MX5115vertical-milling_20260429_blue-white (30)_up_001.webp"
        ],
        specs: [
          { keyCn: "工作台尺寸", keyMic: "Table Size",  keyVn: 'Kích thước bàn làm việc', keyRu: 'Размер рабочего стола', valueCn: "640×580mm", valueMic: "640×580mm" },
          { keyCn: "工作台升降行程", keyMic: "Table Lifting Stroke",  keyRu: 'Ход подъёма стола', valueCn: "100mm", valueMic: "100mm" },
          { keyCn: "工作台倾斜角度", keyMic: "Table Tilting Angle",  keyRu: 'Угол наклона стола', valueCn: "45°", valueMic: "45°" },
          { keyCn: "最大铣削厚度", keyMic: "Max Milling Thickness", valueCn: "50mm", valueMic: "50mm" },
          { keyCn: "刀夹直径", keyMic: "Tool Holder Diameter", valueCn: "12.7mm", valueMic: "12.7mm" },
          { keyCn: "主轴转速", keyMic: "Spindle Speed",  keyVn: 'Tốc độ trục chính', keyRu: 'Частота вращения шпинделя', valueCn: "18000r/min", valueMic: "18000r/min" },
          { keyCn: "安装功率", keyMic: "Installed Power", valueCn: "3kW", valueMic: "3kW" },
          { keyCn: "外形尺寸", keyMic: "Overall Dimensions",  keyVn: 'Kích thước tổng thể', keyRu: 'Габаритные размеры', valueCn: "1000×600×900mm", valueMic: "1000×600×900mm" },
          { keyCn: "重量", keyMic: "Weight",  keyVn: 'Trọng lượng', keyRu: 'Масса', valueCn: "约170kg", valueMic: "Approx. 170kg" }
        ],
        features: []
      },
      {
        id: "mj153-20250516",
        model: "MJ153",
        cn: "单片锯",
        mic: "Single Blade Saw",
        vn: "Máy cưa đơn",
        ru: "Однопильный станок",
        images: [
          "/other/other_single-blade-saw_MJ153_20250516_grey-white/single-blade-saw_MJ153_20250516_grey-white_up_001.webp"
        ],
        specs: [
          { keyCn: "锯片直径", keyMic: "Blade Diameter",  keyRu: 'Диаметр пилы', valueCn: "305mm", valueMic: "305mm" },
          { keyCn: "最大加工厚度", keyMic: "Max Processing Thickness",  keyRu: 'Максимальная толщина обработки', valueCn: "85mm", valueMic: "85mm" },
          { keyCn: "锯切宽度", keyMic: "Cutting Width",  keyRu: 'Ширина реза', valueCn: "360mm", valueMic: "360mm" },
          { keyCn: "主轴转速", keyMic: "Spindle Speed",  keyVn: 'Tốc độ trục chính', keyRu: 'Частота вращения шпинделя', valueCn: "3700r/min", valueMic: "3700r/min" },
          { keyCn: "主轴直径", keyMic: "Spindle Diameter",  keyVn: 'Đường kính trục chính', keyRu: 'Диаметр шпинделя', valueCn: "25.4mm", valueMic: "25.4mm" },
          { keyCn: "送料速度", keyMic: "Feeding Speed",  keyVn: 'Tốc độ cấp liệu', keyRu: 'Скорость подачи', valueCn: "12-32m/min", valueMic: "12-32m/min" },
          { keyCn: "送料电机功率", keyMic: "Feeding Motor Power",  keyVn: 'Công suất động cơ cấp liệu', keyRu: 'Мощность двигателя подачи', valueCn: "0.75kW", valueMic: "0.75kW" },
          { keyCn: "主电机功率", keyMic: "Main Motor Power",  keyVn: 'Công suất động cơ chính', keyRu: 'Мощность главного двигателя', valueCn: "7.5kW", valueMic: "7.5kW" },
          { keyCn: "总功率", keyMic: "Total Power",  keyVn: 'Tổng công suất', keyRu: 'Общая мощность', valueCn: "8.25kW", valueMic: "8.25kW" },
          { keyCn: "工作台尺寸", keyMic: "Table Size",  keyVn: 'Kích thước bàn làm việc', keyRu: 'Размер рабочего стола', valueCn: "1500×950mm", valueMic: "1500×950mm" },
          { keyCn: "外形尺寸", keyMic: "Overall Dimensions",  keyVn: 'Kích thước tổng thể', keyRu: 'Габаритные размеры', valueCn: "1600×1050×1500mm", valueMic: "1600×1050×1500mm" },
          { keyCn: "重量", keyMic: "Weight",  keyVn: 'Trọng lượng', keyRu: 'Масса', valueCn: "约750kg", valueMic: "Approx. 750kg" }
        ],
        features: []
      },
      {
        id: 'ldx022',
        model: 'LDX022',
        cn: '磨齿机',
        mic: 'Saw Blade Sharpener',
        vn: 'Máy mài lưỡi cưa',
        ru: 'Станок для заточки пил',
        images: [
          '/other/saw-blade-sharpener_LDX022_20261015_steel-grey/saw-blade-sharpener_LDX022_20261015_steel-grey_up(2)_001.webp',
          '/other/saw-blade-sharpener_LDX022_20261015_steel-grey/saw-blade-sharpener_LDX022_20261015_steel-grey_up(1)_001.webp',
          '/other/saw-blade-sharpener_LDX022_20261015_steel-grey/saw-blade-sharpener_LDX022_20261015_steel-grey_up(2)_001.webp',
          '/other/saw-blade-sharpener_LDX022_20261015_steel-grey/saw-blade-sharpener_LDX022_20261015_steel-grey_up_001.webp'
        ],
        specs: [
          { keyCn: '加工锯条厚度', keyMic: 'Blade Thickness', keyVn: 'Độ dày lưỡi cưa', valueCn: '0.6~3mm', valueMic: '0.6–3 mm', valueVn: '0,6–3 mm', valueRu: '0,6–3 мм', keyRu: 'Толщина полотна' },
          { keyCn: '锯条宽度', keyMic: 'Blade Width', keyVn: 'Chiều rộng lưỡi cưa', valueCn: '27~100mm', valueMic: '27–100 mm', valueVn: '27–100 mm', valueRu: '27–100 мм', keyRu: 'Ширина полотна' },
          { keyCn: '工作速度', keyMic: 'Working Speed', keyVn: 'Tốc độ làm việc', valueCn: '最大18齿/分', valueMic: 'Max. 18 teeth/min', valueVn: 'Tối đa 18 răng/phút', valueRu: 'Макс. 18 зубьев/мин', keyRu: 'Скорость работы' },
          { keyCn: '砂轮尺寸', keyMic: 'Grinding Wheel Size', keyVn: 'Kích thước đá mài', valueCn: 'φ125mm×32mm', valueMic: 'φ125 × 32 mm', valueVn: 'φ125 × 32 mm', valueRu: 'φ125 × 32 мм', keyRu: 'Размер шлифовального круга' },
          { keyCn: '砂轮线速度', keyMic: 'Grinding Wheel Linear Speed', keyVn: 'Tốc độ đường tính đá mài', valueCn: '26m/s', valueMic: '26 m/s', valueVn: '26 m/s', valueRu: '26 м/с', keyRu: 'Линейная скорость круга' },
          { keyCn: '冷却液水泵流量', keyMic: 'Coolant Pump Flow Rate', keyVn: 'Lưu lượng bơm nước làm mát', valueCn: '50L/min', valueMic: '50 L/min', valueVn: '50 L/phút', valueRu: '50 л/мин', keyRu: 'Расход охлаждающего насоса' },
          { keyCn: '冷却油缸容积', keyMic: 'Coolant Tank Capacity', keyVn: 'Dung tích bình dầu làm mát', valueCn: '50L', valueMic: '50 L', valueVn: '50 L', valueRu: '50 л', keyRu: 'Объём бака СОЖ' },
          { keyCn: '总功率', keyMic: 'Total Power', keyVn: 'Tổng công suất', valueCn: '1.8kW', valueMic: '1.8 kW', valueVn: '1,8 kW', valueRu: '1,8 кВт', keyRu: 'Общая мощность' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', valueCn: '三相380V', valueMic: '3-phase 380V', valueVn: '3 pha 380V', valueRu: '3 фазы 380 В', keyRu: 'Напряжение' },
          { keyCn: '机械重量约', keyMic: 'Machine Weight (approx.)', keyVn: 'Trọng lượng máy (khoảng)', valueCn: '300KG', valueMic: '300 kg', valueVn: '300 kg', valueRu: '300 кг', keyRu: 'Вес станка (прибл.)' },
          { keyCn: '机械尺寸约', keyMic: 'Machine Dimensions (approx.)', keyVn: 'Kích thước máy (khoảng)', valueCn: '800×800×1380mm', valueMic: '800×800×1380 mm', valueVn: '800×800×1380 mm', valueRu: '800×800×1380 мм', keyRu: 'Габариты станка (прибл.)' }
        ],
        features: []
      },
      {
        id: 'mc3026',
        model: 'MC3026',
        cn: '车床',
        mic: 'Wood Lathe',
        vn: 'Máy tiện gỗ',
        ru: 'Токарный станок по дереву',
        images: [
          '/other/wood-lathe_MC3026_20210707_green-white/wood-lathe_MC3026_20210707_green-white_up(1)_001.webp',
          '/other/wood-lathe_MC3026_20210707_green-white/wood-lathe_MC3026_20210707_green-white_up(2)_001.webp'
        ],
        specs: [
          { keyCn: '导轨', keyMic: 'Guide Rail', keyVn: 'Ray dẫn hướng', valueCn: '铸件轨道', valueMic: 'Cast Iron Rail', valueVn: 'Ray đúc', valueRu: 'Чугунная направляющая', keyRu: 'Направляющая' },
          { keyCn: '最大加工长度', keyMic: 'Max. Turning Length', keyVn: 'Chiều dài gia công tối đa', valueCn: '1500mm', valueMic: '1500mm', valueVn: '1500mm', valueRu: '1500 мм', keyRu: 'Макс. длина обработки' },
          { keyCn: '最大加工直径', keyMic: 'Max. Turning Diameter', keyVn: 'Đường kính gia công tối đa', valueCn: '260mm', valueMic: '260mm', valueVn: '260mm', valueRu: '260 мм', keyRu: 'Макс. диаметр обработки' },
          { keyCn: '刀架', keyMic: 'Tool Rest', keyVn: 'Bộ gốc dao', valueCn: '单刀架（不含刀具）', valueMic: 'Single Tool Rest (excl. tools)', valueVn: 'Một gốc dao (không kèm dao)', valueRu: 'Однопозиционные каретки (без резцов)', keyRu: 'Каретка резцедержателя' },
          { keyCn: '中心圈', keyMic: 'Steady Rest', keyVn: 'Chống tâm', valueCn: '不含', valueMic: 'Not included', valueVn: 'Không bao gồm', valueRu: 'Не входит', keyRu: 'Цанговый суппорт' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', valueCn: '380V 50Hz 3相', valueMic: '380V 50Hz 3-phase', valueVn: '380V 50Hz 3 pha', valueRu: '380 В, 50 Гц, 3 фазы', keyRu: 'Напряжение' },
          { keyCn: '外形尺寸约', keyMic: 'Overall Dimensions (approx.)', keyVn: 'Kích thước tổng thể (khoảng)', valueCn: '约2700×850×1500mm', valueMic: 'Approx. 2700×850×1500mm', valueVn: 'Khoảng 2700×850×1500 mm', valueRu: 'Около 2700 × 850 × 1500 мм', keyRu: 'Габариты (прибл.)' },
          { keyCn: '重量约', keyMic: 'Weight (approx.)', keyVn: 'Trọng lượng (khoảng)', valueCn: '约430kg', valueMic: 'Approx. 430kg', valueVn: 'Khoảng 430 kg', valueRu: 'Около 430 кг', keyRu: 'Вес (прибл.)' },
          { keyCn: '随机附件', keyMic: 'Standard Accessories', keyVn: 'Phụ kiện đi kèm', valueCn: '靠模直角支架2个、扳手', valueMic: '2 pcs right-angle steady-rest brackets, wrench', valueVn: '2 giá đỡ góc vuông, cẩn vặt', valueRu: '2 кронштейна угловых упоров, гаечный ключ', keyRu: 'Стандартные принадлежности' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '2.2kW×4', valueMic: '2.2kW×4', valueVn: '2,2kW×4', valueRu: '2,2 кВт × 4', keyRu: 'Мощность' }
        ],
        features: []
      },
      {
        id: 'md2108b',
        model: 'MD2108B',
        cn: '出榫机',
        mic: 'Tenon Cutting Machine',
        vn: 'Máy cưa tạo tenon',
        ru: 'Станок для нарезки шипов',
        images: [
          '/other/tenon-cutting_MD2108B_20250214_blue-white/tenon-cutting_MD2108B_20250214_blue-white_up(1)_001.webp',
          '/other/tenon-cutting_MD2108B_20250214_blue-white/tenon-cutting_MD2108B_20250214_blue-white_up(2)_001.webp'
        ],
        specs: [
          { keyCn: '结构形式', keyMic: 'Structure', keyVn: 'Cấu trúc', valueCn: '单轨重型', valueMic: 'Single Rail Heavy Duty', valueVn: 'Rail đơn kiểu nặng', valueRu: 'Однорельсовый тяжёлый тип', keyRu: 'Конструкция' },
          { keyCn: '锯片数量', keyMic: 'Number of Blades', keyVn: 'Số lưỡi cưa', valueCn: '五碟', valueMic: '5 Discs', valueVn: '5 đĩa', valueRu: '5 дисков', keyRu: 'Количество пил' },
          { keyCn: '导轨长度', keyMic: 'Guide Rail Length', keyVn: 'Chiều dài rail dẫn hướng', valueCn: '1900mm', valueMic: '1900mm', valueVn: '1900mm', valueRu: '1900мм', keyRu: 'Длина направляющей' },
          { keyCn: '推台尺寸', keyMic: 'Push Table Size', keyVn: 'Kích thước bàn đẩy', valueCn: '1000×600mm', valueMic: '1000×600mm', valueVn: '1000×600mm', valueRu: '1000×600мм', keyRu: 'Размер каретки' },
          { keyCn: '最大榫头长度', keyMic: 'Max Tenon Length', keyVn: 'Chiều dài tenon tối đa', valueCn: '80mm', valueMic: '80mm', valueVn: '80mm', valueRu: '80мм', keyRu: 'Макс. длина шипа' },
          { keyCn: '齿接高度', keyMic: 'Tooth Joint Height', keyVn: 'Chiều cao khớp răng', valueCn: '110mm', valueMic: '110mm', valueVn: '110mm', valueRu: '110мм', keyRu: 'Высота зубчатого соединения' },
          { keyCn: '最大锯片直径', keyMic: 'Max Blade Diameter', keyVn: 'Đường kính lưỡi cưa tối đa', valueCn: '250mm', valueMic: '250mm', valueVn: '250mm', valueRu: '250мм', keyRu: 'Макс. диаметр пилы' },
          { keyCn: '主轴直径', keyMic: 'Spindle Diameter', keyVn: 'Đường kính trục chính', valueCn: '30mm', valueMic: '30mm', valueVn: '30mm', valueRu: '30мм', keyRu: 'Диаметр шпинделя' },
          { keyCn: '主轴转速', keyMic: 'Spindle Speed', keyVn: 'Tốc độ trục chính', valueCn: '6000r/min', valueMic: '6000r/min', valueVn: '6000 vòng/phút', valueRu: '6000 об/мин', keyRu: 'Частота вращения шпинделя' },
          { keyCn: '电机功率', keyMic: 'Motor Power', keyVn: 'Công suất động cơ', valueCn: '9.2kW', valueMic: '9.2kW', valueVn: '9,2 kW', valueRu: '9,2 кВт', keyRu: 'Мощность двигателя' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', valueCn: '380V 50Hz 3PH', valueMic: '380V 50Hz 3PH', valueVn: '380V 50Hz 3 pha', valueRu: '380 В, 50 Гц, 3 фазы', keyRu: 'Напряжение' },
          { keyCn: '外形尺寸约', keyMic: 'Overall Dimensions (approx.)', keyVn: 'Kích thước tổng thể (khoảng)', valueCn: '约1900×1000×1400mm', valueMic: '1900×1000×1400mm', valueVn: '1900×1000×1400 mm', valueRu: '1900×1000×1400 мм', keyRu: 'Габариты (прибл.)' },
          { keyCn: '重量约', keyMic: 'Weight (approx.)', keyVn: 'Trọng lượng (khoảng)', valueCn: '约400kg', valueMic: '400kg', valueVn: '400 kg', valueRu: '400 кг', keyRu: 'Вес (прибл.)' }
        ],
        features: []
      }
    ]
  },
]

// 根据系列ID获取产品系列
export function getSeriesById(seriesId: string): ProductSeries | undefined {
  return productSeries.find(s => s.id === seriesId)
}

// 根据系列ID和型号ID获取产品型号
export function getModelById(seriesId: string, modelId: string): ProductModel | undefined {
  const series = getSeriesById(seriesId)
  if (!series) return undefined
  return series.models.find(m => m.id === modelId)
}

// 获取所有产品型号（扁平化，用于搜索等场景）
export function getAllModels(): { series: ProductSeries; model: ProductModel }[] {
  const result: { series: ProductSeries; model: ProductModel }[] = []
  for (const series of productSeries) {
    for (const model of series.models) {
      result.push({ series, model })
    }
  }
  return result
}