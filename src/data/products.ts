// 产品数据定义
// 后续可替换为 API 获取

export interface ProductModel {
  id: string
  model: string // 型号
  zh?: string   // 中文名称（可选）
  en?: string   // 英文名称（可选）
  image?: string // 单张图片（已废弃，请使用 images）
  images?: string[] // 多张图片数组
  specs?: {     // 产品参数（待补充）
    keyZh: string
    keyEn: string
    valueZh: string
    valueEn: string
  }[]
  features?: {  // 产品特点（待补充）
    zh: string
    en: string
  }[]
}

export interface ProductSeries {
  id: string
  zh: string
  en: string
  descZh: string
  descEn: string
  icon: string
  color: string
  models: ProductModel[]
}

// 产品系列数据
export const productSeries: ProductSeries[] = [
  {
    id: 'hot-press',
    zh: '热压机',
    en: 'Hot Press',
    descZh: '高温热压，适用于贴面板、胶合板、密度板等产品的生产，加热均匀，效率高。',
    descEn: 'High-temperature pressing for veneered panels, plywood and MDF production with uniform heating.',
    icon: '🔶',
    color: 'linear-gradient(135deg, #7b3f00, #c8a84b)',
    models: [
    ]
  },
  {
    id: 'cold-press',
    zh: '冷压机',
    en: 'Cold Press',
    descZh: '适用于木材、板材的冷压成型，压力均匀稳定，操作简便，广泛用于家具、门板等生产。',
    descEn: 'For cold pressing wood and panels with uniform and stable pressure. Widely used in furniture and door panel production.',
    icon: '⬛',
    color: 'url(/cold-press-bg.webp)',
    models: [
      {
        id: 'mh3248-50t-20260207',
        model: 'MH3248x50T',
        zh: '冷压机',
        en: 'Cold Press',
        images: [
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_1_up_001.webp',
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_1_up_002.webp',
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_2_up_001.webp',
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_2_up_002.webp',
          '/冷压机/冷压机_MH3248x50T_20260207_黄白/冷压机_MH3248x50T_20260207_黄白_3_up_001.webp',
        ],
        specs: [
          { keyZh: '工作台尺寸', keyEn: 'Table Size', valueZh: '2500x1300mm', valueEn: '2500x1300mm' },
          { keyZh: '行程高度', keyEn: 'Stroke Height', valueZh: '1300mm', valueEn: '1300mm' },
          { keyZh: '最大压力', keyEn: 'Max Pressure', valueZh: '50T', valueEn: '50T' },
          { keyZh: '油缸直径及数量', keyEn: 'Cylinder Diameter & Qty', valueZh: 'D125/90mm x 2PCS', valueEn: 'D125/90mm x 2PCS' },
          { keyZh: '液压电机功率', keyEn: 'Hydraulic Motor Power', valueZh: '4KW', valueEn: '4KW' },
          { keyZh: '电压', keyEn: 'Voltage', valueZh: '380V 60HZ 3PH', valueEn: '380V 60HZ 3PH' },
          { keyZh: '下工作台', keyEn: 'Lower Table', valueZh: '三排气缸升降滚轮', valueEn: 'Triple-row cylinder lifting rollers' },
          { keyZh: '载重', keyEn: 'Load Capacity', valueZh: '1000KG', valueEn: '1000KG' },
          { keyZh: '台面每边气缸数量', keyEn: 'Cylinders Per Side', valueZh: '3条', valueEn: '3 pcs' },
          { keyZh: '气缸内径', keyEn: 'Cylinder Bore', valueZh: '100mm', valueEn: '100mm' },
          { keyZh: '气缸行程', keyEn: 'Cylinder Stroke', valueZh: '20mm', valueEn: '20mm' },
          { keyZh: '滚轮升起最高', keyEn: 'Max Roller Lift', valueZh: '15mm', valueEn: '15mm' },
          { keyZh: '滚轮直径', keyEn: 'Roller Diameter', valueZh: '50mm', valueEn: '50mm' },
          { keyZh: '滚轮长度', keyEn: 'Roller Length', valueZh: '90mm', valueEn: '90mm' },
          { keyZh: '滚轮中心间距', keyEn: 'Roller Center Distance', valueZh: '150mm', valueEn: '150mm' },
          { keyZh: '每排滚轮数量', keyEn: 'Rollers Per Row', valueZh: '10个', valueEn: '10 pcs' },
        ],
        features: []
      },
      {
        id: 'mh3248x200t',
        model: 'MH3248x200T',
        zh: '冷压机',
        en: 'Cold Press',
        images: [
          '/冷压机/冷压机_MH3248x200T_20251020_黄白/冷压机_MH3248x200T_20251020_黄白_1_up_001.webp',
          '/冷压机/冷压机_MH3248x200T_20251020_黄白/冷压机_MH3248x200T_20251020_黄白_2_up_001.webp',
        ],
        specs: [
          { keyZh: '工作台尺寸', keyEn: 'Table Size', valueZh: '4200×1250mm', valueEn: '4200×1250mm' },
          { keyZh: '开距', keyEn: 'Opening Distance', valueZh: '1000mm', valueEn: '1000mm' },
          { keyZh: '最大压力', keyEn: 'Max Pressure', valueZh: '200T', valueEn: '200T' },
          { keyZh: '规格', keyEn: 'Specification', valueZh: '分四段', valueEn: '4 Sections' },
          { keyZh: '缸数', keyEn: 'Cylinder Quantity', valueZh: '4支120缸', valueEn: '4 x D120mm Cylinders' },
          { keyZh: '功率', keyEn: 'Power', valueZh: '7.5kW', valueEn: '7.5kW' },
        ],
        features: []
      },
      {
        id: 'mh3248-100t',
        model: 'MH3248*100T',
        zh: '冷压机',
        en: 'Cold Press',
        images: [
          '/冷压机/冷压机_MH3248100T_20260425_黑黄白/冷压机_MH3248100T_20260425_黑黄白 _up(4)_001.webp',
          '/冷压机/冷压机_MH3248100T_20260425_黑黄白/冷压机_MH3248100T_20260425_黑黄白 _up(5)_001.webp',
          '/冷压机/冷压机_MH3248100T_20260425_黑黄白/冷压机_MH3248100T_20260425_黑黄白_up (3)_001.webp',
        ],
        specs: [
          { keyZh: '台面尺寸', keyEn: 'Table Size', valueZh: '3200×1600mm', valueEn: '3200×1600mm' },
          { keyZh: '油缸数量', keyEn: 'Cylinder Quantity', valueZh: '6支', valueEn: '6 PCS' },
          { keyZh: '最大压力', keyEn: 'Max Pressure', valueZh: '100T', valueEn: '100T' },
          { keyZh: '机器重量', keyEn: 'Machine Weight', valueZh: '4600kg', valueEn: '4600kg' },
          { keyZh: '功率', keyEn: 'Power', valueZh: '5.5kW', valueEn: '5.5kW' },
          { keyZh: '最大加工高度', keyEn: 'Max Processing Height', valueZh: '1000mm', valueEn: '1000mm' },
        ],
        features: []
      },
    ]
  },
  {
    id: 'multi-blade-saw',
    zh: '多片锯',
    en: 'Multi-blade Saw',
    descZh: '一次性多片切割，大幅提高生产效率，切割精度高，适用于实木、板材的纵向开料。',
    descEn: 'Multiple blade cutting in one pass for high efficiency. Suitable for solid wood and panel longitudinal cutting.',
    icon: '⚙️',
    color: 'linear-gradient(135deg, #1a4a2e, #2d9e5f)',
    models: [
    ]
  },
  {
    id: 'lifting-platform',
    zh: '升降平台',
    en: 'Lifting Platform',
    descZh: '液压升降，承重能力强，操作安全便捷，广泛用于木工生产线的物料搬运与高度调节。',
    descEn: 'Hydraulic lifting with strong load capacity. Safe and easy to operate for material handling in woodworking production lines.',
    icon: '🔧',
    color: 'url(/lifting-platform-bg.webp)',
    models: []
  },
  {
    id: 'splicing-machine',
    zh: '拼板机',
    en: 'Splicing Machine',
    descZh: '高效拼板设备，适用于木板拼接，拼接牢固平整。',
    descEn: 'Efficient splicing equipment for wood board splicing with strong and flat joints.',
    icon: '📐',
    color: 'linear-gradient(135deg, #3d1a6b, #8b5cf6)',
    models: []
  },
  {
    id: 'door-frame-machine',
    zh: '门框组合机',
    en: 'Door Frame Assembly Machine',
    descZh: '专业门框生产设备，高效组装，精度高。',
    descEn: 'Professional door frame production equipment with high efficiency and precision.',
    icon: '🚪',
    color: "url('/door-frame-bg.webp')",
    models: [
      {
        id: 'mh2210',
        model: 'MH2210',
        zh: '框架组合机',
        en: 'Door Frame Machine',
        images: [
          '/门框组合机/框架组合机_MH2210_20260325_蓝白/框架组合机_MH2210_20260325_蓝白_up_001.webp'
        ],
        specs: [
          { keyZh: '最大组合尺寸', keyEn: 'Max Combination Size', valueZh: '1220×2440mm', valueEn: '1220×2440mm' },
          { keyZh: '液压电机功率', keyEn: 'Hydraulic Motor Power', valueZh: '2.2kW', valueEn: '2.2kW' },
          { keyZh: '重量', keyEn: 'Weight', valueZh: '约2000kg', valueEn: 'Approx. 2000kg' },
          { keyZh: '正压油缸', keyEn: 'Front Pressure Cylinders', valueZh: '4条', valueEn: '4 pcs' },
          { keyZh: '侧压油缸', keyEn: 'Side Pressure Cylinders', valueZh: '3条', valueEn: '3 pcs' },
          { keyZh: '单面或双面', keyEn: 'Single or Double Side', valueZh: '双面', valueEn: 'Double side' },
          { keyZh: '压料架', keyEn: 'Material Pressing Rack', valueZh: '有', valueEn: 'Included' }
        ],
        features: []
      }
    ]
  },
  {
    id: 'other',
    zh: '其他',
    en: 'Other Products',
    descZh: '更多木工机械设备，满足您的多样化需求。',
    descEn: 'More woodworking machinery to meet your diverse needs.',
    icon: '📦',
    color: 'linear-gradient(135deg, #4a4a4a, #8e8e8e)',
    models: []
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
