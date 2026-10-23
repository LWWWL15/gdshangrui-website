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

export interface ProductSeries {
  id: string
  cn: string
  mic: string
  vn?: string
  descCn: string
  descMic: string
  descVn?: string
  icon: string
  color: string
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
    models: [

      {
        id: 'mh3848x120t-20260205',
        model: 'MH3848X120T',
        cn: '热压机',
        mic: 'Hot Press',
        vn: 'Máy ép nóng',
        ru: 'Горячий пресс',
        images: [
          '/热压机/热压机_MH3848X120T_20260205_绿白/热压机_MH3848X120T_20260205_绿白_up(2)_001.webp',
          '/热压机/热压机_MH3848X120T_20260205_绿白/热压机_MH3848X120T_20260205_绿白_up (2)_001.webp',
          '/热压机/热压机_MH3848X120T_20260205_绿白/热压机_MH3848X120T_20260205_绿白_up (3)_001.webp',
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
          '/热压机/热压机_MH3848x120T_20260428_黑黄白/热压机_MH3848x120T_20260428_黑黄白 (3)_up_001.webp',
          '/热压机/热压机_MH3848x120T_20260428_黑黄白/热压机_MH3848x120T_20260428_黑黄白 (1)_up_001.webp',
          '/热压机/热压机_MH3848x120T_20260428_黑黄白/热压机_MH3848x120T_20260428_黑黄白 (7)_up_001.webp',
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
          '/热压机/热压机_MH3848x120T_20240810_红蓝白/热压机_MH3848x120T_20240810_红蓝白_up_001.webp'
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
          '/热压机/热压机_MH3848x160T_20260618_黑黄白/热压机_MH3848x160T_20260618_黑黄白_up (1)_001.webp',
          '/热压机/热压机_MH3848x160T_20260618_黑黄白/热压机_MH3848x160T_20260618_黑黄白_up (4)_001.webp',
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
          '/热压机/热压机_MH3848x160T_20261008_蓝白/热压机_MH3848x160T_20261008_蓝白_up (1)_001.webp',
          '/热压机/热压机_MH3848x160T_20261008_蓝白/热压机_MH3848x160T_20261008_蓝白_up (2)_001.webp',
          '/热压机/热压机_MH3848x160T_20261008_蓝白/热压机_MH3848x160T_20261008_蓝白_up(3)_001.webp'
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
    models: [
      {
        id: 'mh3248-50t-20260207',
        model: 'MH3248x50T',
        cn: '冷压机',
        mic: 'Cold Press',
        vn: 'Máy ép lạnh',
        ru: 'Холодный пресс',
        images: [
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_1_up_001.webp',
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_1_up_002.webp',
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_2_up_001.webp',
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_2_up_002.webp',
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_3_up_001.webp',
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
          '/冷压机/冷压机_MH3248x200T_20251020_黄白/冷压机_MH3248x200T_20251020_黄白_1_up_001.webp',
          '/冷压机/冷压机_MH3248x200T_20251020_黄白/冷压机_MH3248x200T_20251020_黄白_2_up_001.webp',
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
          '/冷压机/冷压机_MH3248x100T_20260425_黑黄白/冷压机_MH3248x100T_20260425_黑黄白 _up(4)_001.webp',
          '/冷压机/冷压机_MH3248x100T_20260425_黑黄白/冷压机_MH3248x100T_20260425_黑黄白 _up(5)_001.webp',
          '/冷压机/冷压机_MH3248x100T_20260425_黑黄白/冷压机_MH3248x100T_20260425_黑黄白_up (3)_001.webp',
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
          '/冷压机/冷压机_MH3248x100T_20260509_黄白/冷压机_MH3248x100T_20260509_黄白 (1)_up_001.webp',
          '/冷压机/冷压机_MH3248x100T_20260509_黄白/冷压机_MH3248x100T_20260509_黄白 (3)_up_001.webp',
          '/冷压机/冷压机_MH3248x100T_20260509_黄白/冷压机_MH3248x100T_20260509_黄白 (4)_up_001.webp',
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
          '/冷压机/冷压机_MH3248x30T_20260429_黄绿白/冷压机_MH3248x30T_20260429_黄绿白_1_up_001.webp',
          '/冷压机/冷压机_MH3248x30T_20260429_黄绿白/冷压机_MH3248x30T_20260429_黄绿白_2_up_001.webp',
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
          '/冷压机/冷压机_MH3248x50T_20260604_黄白/冷压机_MH3248x50T_20260604_黄白 (4)_up_001.webp',
          '/冷压机/冷压机_MH3248x50T_20260604_黄白/冷压机_MH3248x50T_20260604_黄白 (2)_up_001.webp',
          '/冷压机/冷压机_MH3248x50T_20260604_黄白/冷压机_MH3248x50T_20260604_黄白 (1)_up_001.webp',
          '/冷压机/冷压机_MH3248x50T_20260604_黄白/冷压机_MH3248x50T_20260604_黄白 (6)_up_001.webp',
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
          '/冷压机/冷压机_MH3248x50T_20260414_黄白/冷压机_MH3248x50T_20260414_黄白 (1)_up_001.webp',
          '/冷压机/冷压机_MH3248x50T_20260414_黄白/冷压机_MH3248x50T_20260414_黄白 (1)_up_002.webp',
          '/冷压机/冷压机_MH3248x50T_20260414_黄白/冷压机_MH3248x50T_20260414_黄白 (1)_up_003.webp',
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
          '/冷压机/冷压机_MH3248x150Tx3_20190123_黄白/冷压机_MH3248x150Tx3_20190123_黄白_up(2)_001.webp',
          '/冷压机/冷压机_MH3248x150Tx3_20190123_黄白/冷压机_MH3248x150Tx3_20190123_黄白_up(1)_001.webp',
          '/冷压机/冷压机_MH3248x150Tx3_20190123_黄白/冷压机_MH3248x150Tx3_20190123_黄白_up(1)_002.webp',
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
          '/冷压机/冷压机_MH3248x60T_20261013_绿白/冷压机_MH3248x60T_20261013_绿白_up(2)_001.webp',
          '/冷压机/冷压机_MH3248x60T_20261013_绿白/冷压机_MH3248x60T_20261013_绿白_up(3)_001.webp'
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
    models: [
      {
        id: 'mj1300-xd5-20240716',
        model: 'MJ1300-XD5',
        cn: '多片锯',
        mic: 'Multi-blade Saw',
        vn: 'Máy cưa đa lưỡi',
        ru: 'Многопильный станок',
        images: [
          '/多片锯/多片锯_MJ1300-XD5_20240716_蓝白/多片锯_MJ1300-XD5_20240716_蓝白_up_001.webp'
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
          '/多片锯/多片锯_MJ1300-XD3_20201109_蓝白/多片锯_MJ1300-XD3_20201109_蓝白_up(1)_001.webp',
          '/多片锯/多片锯_MJ1300-XD3_20201109_蓝白/多片锯_MJ1300-XD3_20201109_蓝白_up(2)_001.webp'
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
    models: []
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
    models: [
      {
        id: 'mh1325-20260608',
        model: 'MH1325',
        cn: '拼板机',
        mic: 'Splicing Machine',
        vn: 'Máy ghép gỗ',
        ru: 'Пресс для сращивания',
        images: [
          '/拼板机/拼板机_MH1325_20260608_黄白/拼板机_MH1325_20260608_黄白 (3)_up_001.webp',
          '/拼板机/拼板机_MH1325_20260608_黄白/拼板机_MH1325_20260608_黄白 (1)_up_002.webp',
          '/拼板机/拼板机_MH1325_20260608_黄白/拼板机_MH1325_20260608_黄白 (1)_up_001.webp',
          '/拼板机/拼板机_MH1325_20260608_黄白/拼板机_MH1325_20260608_黄白 (2)_up_001.webp',
          '/拼板机/拼板机_MH1325_20260608_黄白/拼板机_MH1325_20260608_黄白 (2)_up_002.webp'
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
          '/拼板机/拼板机_MH1325_20260610_黄白/拼板机_MH1325_20260610_黄白 (1)_up_001.webp',
          '/拼板机/拼板机_MH1325_20260610_黄白/拼板机_MH1325_20260610_黄白 (2)_up_001.webp'
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
    models: [
      {
        id: 'mh2210-20260325',
        model: 'MH2210',
        cn: '门框组合机',
        mic: 'Door Frame Assembly Machine',
        vn: 'Máy ghép khung cửa',
        ru: 'Станок для сборки дверных коробок',
        images: [
          '/门框组合机/门框组合机_MH2210_20260325_蓝白/门框组合机_MH2210_20260325_蓝白_up_001.webp'
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
    models: [
      {
        id: 'xiao-you-gang-50-dao-tao-20260507',
        model: 'Small Cylinder 50 Guide Sleeve',
        cn: '油缸导套',
        mic: 'Oil Cylinder Guide Sleeve',
        vn: 'Bạc dẫn hướng xi-lanh',
        ru: 'Запчасти',
        images: [
          '/零件/油缸导套_小油缸50导套_20260507_金属色/油缸导套_小油缸50导套_20260507_金属色_up_001.webp'
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
          '/零件/链条_带胶板_20260508_金属白/链条_带胶板_20260508_金属白 (1)_up_001.webp'
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
    models: [
      {
        id: "mj105m-20260328",
        model: "MJ105M",
        cn: "母榫机",
        mic: "Mortise Machine",
        vn: "Máy làm mộng",
        ru: 'Прочее',
        images: [
          "/母榫机/母榫机_MJ105M_20260328_蓝白/母榫机_MJ105M_20260328_蓝白_1_up_001.webp",
          "/母榫机/母榫机_MJ105M_20260328_蓝白/母榫机_MJ105M_20260328_蓝白_4_up_001.webp"
        ],
        specs: [
          { keyCn: "台面尺寸", keyMic: "Table Size", valueCn: "800×1000mm", valueMic: "800×1000mm" },
          { keyCn: "槽宽", keyMic: "Groove Width", valueCn: "25mm", valueMic: "25mm" },
          { keyCn: "槽长", keyMic: "Groove Length", valueCn: "800mm", valueMic: "800mm" },
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
        images: [
          "/立式铣床/立式铣床_MX5115立铣_20260429_蓝白/立式铣床_MX5115立铣_20260429_蓝白 (12)_up_001.webp",
          "/立式铣床/立式铣床_MX5115立铣_20260429_蓝白/立式铣床_MX5115立铣_20260429_蓝白 (13)_up_001.webp",
          "/立式铣床/立式铣床_MX5115立铣_20260429_蓝白/立式铣床_MX5115立铣_20260429_蓝白 (30)_up_001.webp"
        ],
        specs: [
          { keyCn: "工作台尺寸", keyMic: "Table Size", valueCn: "640×580mm", valueMic: "640×580mm" },
          { keyCn: "工作台升降行程", keyMic: "Table Lifting Stroke", valueCn: "100mm", valueMic: "100mm" },
          { keyCn: "工作台倾斜角度", keyMic: "Table Tilting Angle", valueCn: "45°", valueMic: "45°" },
          { keyCn: "最大铣削厚度", keyMic: "Max Milling Thickness", valueCn: "50mm", valueMic: "50mm" },
          { keyCn: "刀夹直径", keyMic: "Tool Holder Diameter", valueCn: "12.7mm", valueMic: "12.7mm" },
          { keyCn: "主轴转速", keyMic: "Spindle Speed", valueCn: "18000r/min", valueMic: "18000r/min" },
          { keyCn: "安装功率", keyMic: "Installed Power", valueCn: "3kW", valueMic: "3kW" },
          { keyCn: "外形尺寸", keyMic: "Overall Dimensions", valueCn: "1000×600×900mm", valueMic: "1000×600×900mm" },
          { keyCn: "重量", keyMic: "Weight", valueCn: "约170kg", valueMic: "Approx. 170kg" }
        ],
        features: []
      },
      {
        id: "mj153-20250516",
        model: "MJ153",
        cn: "单片锯",
        mic: "Single Blade Saw",
        vn: "Máy cưa đơn",
        images: [
          "/其他/其他_单片锯_MJ153_20250516_灰白/单片锯_MJ153_20250516_灰白_up_001.webp"
        ],
        specs: [
          { keyCn: "锯片直径", keyMic: "Blade Diameter", valueCn: "305mm", valueMic: "305mm" },
          { keyCn: "最大加工厚度", keyMic: "Max Processing Thickness", valueCn: "85mm", valueMic: "85mm" },
          { keyCn: "锯切宽度", keyMic: "Cutting Width", valueCn: "360mm", valueMic: "360mm" },
          { keyCn: "主轴转速", keyMic: "Spindle Speed", valueCn: "3700r/min", valueMic: "3700r/min" },
          { keyCn: "主轴直径", keyMic: "Spindle Diameter", valueCn: "25.4mm", valueMic: "25.4mm" },
          { keyCn: "送料速度", keyMic: "Feeding Speed", valueCn: "12-32m/min", valueMic: "12-32m/min" },
          { keyCn: "送料电机功率", keyMic: "Feeding Motor Power", valueCn: "0.75kW", valueMic: "0.75kW" },
          { keyCn: "主电机功率", keyMic: "Main Motor Power", valueCn: "7.5kW", valueMic: "7.5kW" },
          { keyCn: "总功率", keyMic: "Total Power", valueCn: "8.25kW", valueMic: "8.25kW" },
          { keyCn: "工作台尺寸", keyMic: "Table Size", valueCn: "1500×950mm", valueMic: "1500×950mm" },
          { keyCn: "外形尺寸", keyMic: "Overall Dimensions", valueCn: "1600×1050×1500mm", valueMic: "1600×1050×1500mm" },
          { keyCn: "重量", keyMic: "Weight", valueCn: "约750kg", valueMic: "Approx. 750kg" }
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
          '/其他/磨齿机_LDX022_20261015_钢铁灰/磨齿机_LDX022_20261015_钢铁灰 _up(2)_001.webp',
          '/其他/磨齿机_LDX022_20261015_钢铁灰/磨齿机_LDX022_20261015_钢铁灰_up(1)_001.webp',
          '/其他/磨齿机_LDX022_20261015_钢铁灰/磨齿机_LDX022_20261015_钢铁灰_up(2)_001.webp',
          '/其他/磨齿机_LDX022_20261015_钢铁灰/磨齿机_LDX022_20261015_钢铁灰_up_001.webp'
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
          '/其他/车床_MC3026_20210707_绿白/车床_MC3026_20210707_绿白_up(2)_001.webp',
          '/其他/车床_MC3026_20210707_绿白/车床_MC3026_20210707_绿白_up(1)_001.webp'
        ],
        specs: [
          { keyCn: '导轨长度', keyMic: 'Guide Rail Length', keyVn: 'Chiều dài ray dẫn hướng', valueCn: '1900mm', valueMic: '1900mm', valueVn: '1900mm', valueRu: '1900 мм', keyRu: 'Длина направляющей рейки' },
          { keyCn: '推台尺寸', keyMic: 'Carriage Table Size', keyVn: 'Kích thước bàn đẩy', valueCn: '1000×600mm', valueMic: '1000×600mm', valueVn: '1000×600 mm', valueRu: '1000 × 600 мм', keyRu: 'Размер каретки' },
          { keyCn: '最大榫头长度', keyMic: 'Max. Tenon Length', keyVn: 'Chiều dài đống tối đa', valueCn: '80mm', valueMic: '80mm', valueVn: '80mm', valueRu: '80 мм', keyRu: 'Максимальная длина шипа' },
          { keyCn: '齿接高度', keyMic: 'Tooth Joint Height', keyVn: 'Chiều cao khớp răng', valueCn: '110mm', valueMic: '110mm', valueVn: '110mm', valueRu: '110 мм', keyRu: 'Высота зубчатого соединения' },
          { keyCn: '最大锯片直径', keyMic: 'Max. Blade Diameter', keyVn: 'Đường kính lưỡi cưa tối đa', valueCn: '250mm', valueMic: '250mm', valueVn: '250mm', valueRu: '250 мм', keyRu: 'Максимальный диаметр пилы' },
          { keyCn: '主轴直径', keyMic: 'Spindle Diameter', keyVn: 'Đường kính trục chính', valueCn: '30mm', valueMic: '30mm', valueVn: '30mm', valueRu: '30 мм', keyRu: 'Диаметр шпинделя' },
          { keyCn: '主轴转速', keyMic: 'Spindle Speed', keyVn: 'Tốc độ trục chính', valueCn: '6000r/min', valueMic: '6000r/min', valueVn: '6000 vòng/phút', valueRu: '6000 об/мин', keyRu: 'Скорость шпинделя' },
          { keyCn: '功率', keyMic: 'Power', keyVn: 'Công suất', valueCn: '9.2kW', valueMic: '9.2kW', valueVn: '9,2kW', valueRu: '9,2 кВт', keyRu: 'Мощность' },
          { keyCn: '电压', keyMic: 'Voltage', keyVn: 'Điện áp', valueCn: '380V 50Hz 三相', valueMic: '380V 50Hz 3-phase', valueVn: '380V 50Hz 3 pha', valueRu: '380 В, 50 Гц, 3 фазы', keyRu: 'Напряжение' },
          { keyCn: '外形尺寸约', keyMic: 'Overall Dimensions (approx.)', keyVn: 'Kích thước tổng thể (khoảng)', valueCn: '约1900×1000×1400mm', valueMic: 'Approx. 1900×1000×1400mm', valueVn: 'Khoảng 1900×1000×1400 mm', valueRu: 'Около 1900 × 1000 × 1400 мм', keyRu: 'Габариты (прибл.)' },
          { keyCn: '重量约', keyMic: 'Weight (approx.)', keyVn: 'Trọng lượng (khoảng)', valueCn: '约400kg', valueMic: 'Approx. 400kg', valueVn: 'Khoảng 400 kg', valueRu: 'Около 400 кг', keyRu: 'Вес (прибл.)' }
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