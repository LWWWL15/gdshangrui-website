// 工具中心清单 + 计算器 FAQ —— 单一数据源
//
// 2026-11-10 第 7 轮新增。
// 背景：ToolsView.vue 里两个工具卡片的四语文案是硬编码在模板中的，
//      JSON-LD 也需要同一份文案（工具名 + 说明 + 路径）。
//      两处各写一份 = 改一语文案漏改另一处的隐患（哥飞 2025-01-06 血泪案例）。
//      → 抽到这里，模板与 schema 共用，文字逐字一致。
//
// ⚠️ FAQ 的每一条都必须与工具自身的算法一致（见 src/views/PressureCalculatorView.vue
//    与 GroundPressureCalculator.vue 的计算逻辑），不写没依据的话。

export interface ToolItem {
  /** 站内路径（不含语言前缀） */
  path: string
  icon: string
  /** 工具名（四语） */
  cn: string
  mic: string
  vn: string
  ru: string
  /** 一句话说明（四语） */
  descCn: string
  descMic: string
  descVn: string
  descRu: string
}

export const toolItems: ToolItem[] = [
  {
    path: '/tools/ground-pressure-calculator',
    icon: '⚖️',
    cn: '地面承重计算器',
    mic: 'Ground Pressure Calculator',
    vn: 'Máy tính áp suất mặt đất',
    ru: 'Калькулятор давления на грунт',
    descCn: '根据产品尺寸与重量，计算对地面的压强',
    descMic: 'Calculate ground pressure based on product dimensions and weight',
    descVn: 'Tính áp suất mặt đất dựa trên kích thước và trọng lượng sản phẩm',
    descRu: 'Расчёт удельного давления на основание по габаритам и массе изделия',
  },
  {
    path: '/tools/pressure-calculator',
    icon: '🔧',
    cn: '压力换算表',
    mic: 'Pressure Calculator',
    vn: 'Bảng chuyển đổi áp suất',
    ru: 'Таблица перевода давления',
    descCn: '根据油缸规格与数量，自动换算工作压力',
    descMic: 'Calculate total working pressure based on cylinder specs',
    descVn: 'Tự động chuyển đổi áp suất làm việc dựa trên thông số và số lượng xi-lanh',
    descRu: 'Автоматический расчёт рабочего давления по характеристикам и количеству цилиндров',
  },
]

/** 按语言取工具名 */
export function toolName(tool: ToolItem, lang: 'cn' | 'mic' | 'vn' | 'ru'): string {
  if (lang === 'cn') return tool.cn
  if (lang === 'vn') return tool.vn
  if (lang === 'ru') return tool.ru
  return tool.mic
}

/** 按语言取工具说明 */
export function toolDesc(tool: ToolItem, lang: 'cn' | 'mic' | 'vn' | 'ru'): string {
  if (lang === 'cn') return tool.descCn
  if (lang === 'vn') return tool.descVn
  if (lang === 'ru') return tool.descRu
  return tool.descMic
}

// ============================================================
// 计算器 FAQ
// ============================================================

export interface FaqItem {
  cn: string
  mic: string
  vn: string
  ru: string
}

export interface FaqEntry {
  q: FaqItem
  a: FaqItem
}

/**
 * 压力换算表 FAQ —— 全部依据 PressureCalculatorView.vue 的真实算法：
 *   · boreArea = (π × 内径² / 4) / 100   （cm²）
 *   · maxForceAtRated = 20 × boreArea × 数量 / 100   （吨，额定 20 MPa）
 *   · 图表力值 = 100 × 压强(MPa) × 面积(m²)
 */
export const pressureCalculatorFaq: FaqEntry[] = [
  {
    q: {
      cn: '这个压力换算表怎么用？',
      mic: 'How do I use this pressure calculator?',
      vn: 'Cách dùng bảng chuyển đổi áp suất này như thế nào?',
      ru: 'Как пользоваться этим калькулятором давления?',
    },
    a: {
      cn: '输入工件面积和目标压强，可查对应的工作台压力；反过来，已知压力和工件面积，也能查对应的压强。',
      mic: 'Enter the workpiece area and the target pressure to find the matching table pressure. Conversely, with a known pressure and area you can find the pressure per unit area.',
      vn: 'Nhập diện tích phôi và áp suất mục tiêu để tra áp lực bàn tương ứng; ngược lại, biết áp lực và diện tích phôi thì tra được áp suất.',
      ru: 'Введите площадь заготовки и целевое удельное давление, чтобы найти усилие стола. И наоборот: зная усилие и площадь, получите удельное давление.',
    },
  },
  {
    q: {
      cn: '油缸规格里的「125/90 mm」是什么意思？',
      mic: 'What does the cylinder spec like 125/90 mm mean?',
      vn: 'Thông số xi-lanh kiểu 125/90 mm nghĩa là gì?',
      ru: 'Что означает характеристика цилиндра вида 125/90 мм?',
    },
    a: {
      cn: '前一个数字是油缸内径，后一个是活塞杆直径，单位都是毫米。缸径越大，同样压强下能推出的力越大。',
      mic: 'The first number is the cylinder bore diameter, the second is the piston rod diameter, both in millimetres. A larger bore produces more force at the same pressure.',
      vn: 'Số trước là đường kính trong xi-lanh, số sau là đường kính thanh piston, đơn vị mm. Xi-lanh lớn hơn thì lực ép lớn hơn ở cùng áp suất.',
      ru: 'Первое число — внутренний диаметр цилиндра, второе — диаметр штока, оба в миллиметрах. Чем больше диаметр, тем больше усилие при том же давлении.',
    },
  },
  {
    q: {
      cn: '「最大总压力」是按什么算的？',
      mic: 'How is the maximum total force calculated?',
      vn: '«Lực tối đa» được tính như thế nào?',
      ru: 'Как рассчитывается максимальное суммарное усилие?',
    },
    a: {
      cn: '按额定 20 MPa 计算：最大总压力(吨) ≈ 油缸活塞面积(平方厘米) × 20 ÷ 100 × 油缸数量。油缸数量越多，总推力越大。',
      mic: 'It is based on a rated 20 MPa: max total force (tons) ≈ piston area (cm²) × 20 ÷ 100 × number of cylinders. More cylinders mean more total pushing force.',
      vn: 'Tính theo áp suất định mức 20 MPa: lực tổng tối đa (tấn) ≈ diện tích piston (cm²) × 20 ÷ 100 × số xi-lanh. Càng nhiều xi-lanh thì lực tổng càng lớn.',
      ru: 'Считается от номинальных 20 МПа: максимальное суммарное усилие (т) ≈ площадь поршня (см²) × 20 ÷ 100 × количество цилиндров. Больше цилиндров — больше суммарное усилие.',
    },
  },
  {
    q: {
      cn: '压强 (MPa) 和压力 (T) 怎么换算？',
      mic: 'How do I convert pressure in MPa to force in tons?',
      vn: 'Quy đổi áp suất (MPa) sang lực (T) như thế nào?',
      ru: 'Как перевести давление в МПа в усилие в тоннах?',
    },
    a: {
      cn: '压力(吨) ≈ 压强(MPa) × 工件面积(平方米) × 100。例如 1.0 MPa 压 15 平方米的工件，约合 1500 吨。',
      mic: 'Force (tons) ≈ pressure (MPa) × workpiece area (m²) × 100. For example, 1.0 MPa over a 15 m² panel works out at about 1500 tons.',
      vn: 'Lực (tấn) ≈ áp suất (MPa) × diện tích phôi (m²) × 100. Ví dụ 1,0 MPa trên phôi 15 m² cho khoảng 1500 tấn.',
      ru: 'Усилие (т) ≈ давление (МПа) × площадь заготовки (м²) × 100. Например, 1,0 МПа на заготовке 15 м² — это около 1500 тонн.',
    },
  },
]

/**
 * 地面承重计算器 FAQ —— 依据 GroundPressureCalculator.vue 的真实算法：
 *   面积(m²) = 长(mm) × 宽(mm) ÷ 1,000,000
 *   压强(kg/m²) = 重量(kg) ÷ 面积(m²)
 */
export const groundPressureCalculatorFaq: FaqEntry[] = [
  {
    q: {
      cn: '这个计算器算的是什么？',
      mic: 'What does this calculator compute?',
      vn: 'Máy tính này tính cái gì?',
      ru: 'Что вычисляет этот калькулятор?',
    },
    a: {
      cn: '输入设备占地的长和宽以及整机重量，算出设备对地面的压强（kg/m²），用来判断车间地面是否需要加固。',
      mic: 'Enter the machine footprint and its total weight to get the ground pressure in kg/m², so you can tell whether the workshop floor needs reinforcing.',
      vn: 'Nhập kích thước chiều dài, chiều rộng mà máy chiếm trên sàn và trọng lượng tổng, để tính áp suất máy lên nền (kg/m²) và biết có cần gia cố nền hay không.',
      ru: 'Введите длину и ширину пятна, занимаемого станком на полу, и общую массу — получите удельное давление на пол (кг/м²) и сможете оценить, нужно ли усиливать основание.',
    },
  },
  {
    q: {
      cn: '计算公式是什么？',
      mic: 'What is the formula?',
      vn: 'Công thức tính là gì?',
      ru: 'Какая формула расчёта?',
    },
    a: {
      cn: '压强(kg/m²) = 重量(kg) ÷ [长(mm) × 宽(mm) ÷ 1,000,000]。长宽要填设备实际的接地尺寸，不是台面尺寸。',
      mic: 'Ground pressure (kg/m²) = weight (kg) ÷ [length (mm) × width (mm) ÷ 1,000,000]. Use the actual footprint of the machine, not the platen size.',
      vn: 'Áp suất (kg/m²) = Trọng lượng (kg) ÷ [Dài (mm) × Rộng (mm) ÷ 1.000.000]. Nhập kích thước tiếp xúc thực tế với nền, không phải kích thước bàn ép.',
      ru: 'Давление на пол (кг/м²) = Масса (кг) ÷ [Длина (мм) × Ширина (мм) ÷ 1 000 000]. Указывайте фактическое основание станка, а не размер плиты пресса.',
    },
  },
  {
    q: {
      cn: '需要填哪三个数据？',
      mic: 'Which three values do I need?',
      vn: 'Cần nhập ba số nào?',
      ru: 'Какие три значения нужно ввести?',
    },
    a: {
      cn: '设备占地的长度和宽度（毫米），以及设备总重量（千克）。三个数据齐了才能算出压强。',
      mic: 'The length and width of the machine footprint in millimetres, and the total machine weight in kilograms. All three are needed to get a result.',
      vn: 'Chiều dài và chiều rộng mà máy chiếm trên nền (mm) và tổng trọng lượng máy (kg). Cần đủ ba số mới tính được áp suất.',
      ru: 'Длина и ширина пятна станка в миллиметрах и общая масса станка в килограммах. Нужны все три значения, чтобы получить результат.',
    },
  },
  {
    q: {
      cn: '算出来的压强怎么用？',
      mic: 'How do I use the result?',
      vn: 'Dùng kết quả áp suất thế nào?',
      ru: 'Как использовать результат?',
    },
    a: {
      cn: '把压强与车间地面的承载能力对照：数值偏大说明地面承载不足，需要做加固或铺垫后再安装设备。',
      mic: 'Compare the figure with the load-bearing capacity of your workshop floor. A high number means the floor cannot take the load and needs reinforcing or a spreader base before the machine is installed.',
      vn: 'So sánh áp suất tính được với khả năng chịu tải của nền xưởng: nếu lớn hơn thì nền không đủ chịu, cần gia cố hoặc đổi bê tông trước khi lắp máy.',
      ru: 'Сравните полученное значение с несущей способностью пола цеха. Если оно велико, пол не выдержит нагрузки и до установки станка его нужно укрепить или залить.',
    },
  },
]

/** 按语言取 FAQ 问答 */
export function faqFor(faq: FaqEntry[], lang: 'cn' | 'mic' | 'vn' | 'ru'): { q: string; a: string }[] {
  return faq.map(item => ({
    q: item.q[lang] || item.q.mic,
    a: item.a[lang] || item.a.mic,
  }))
}
