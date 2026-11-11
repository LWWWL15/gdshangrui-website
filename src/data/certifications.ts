// 认证证书数据 —— 单一数据源（内容取自证书实物，不编造）
//
// 2026-11-10 第 7 轮新增。
// 背景：CertificationView.vue 里证书号、机构、标准、认证产品都硬编码在模板里，
//      JSON-LD 需要同一份数据。抽到这里，模板与 schema 共用 → 不会两处不一致。
//
// ⚠️ 数据来源：CE 证书与 ISO 证书实物上的编号/机构/标准，未做任何演绎。
//    认证产品范围以 CE 证书上明确列出的为准（不是全部产品都有 CE）。
//
// 2026-11-12 第 14 轮修正（证书实物核对后）：
//   ① ISO 证书号 21002Q118085R0M → 25024Q10808R0S
//      实物证据：证书图片「证书注册号：25024Q10808R0S」（中英文版一致），
//      英文版写 Certificate Registration No: 25024Q10808R0S；
//      颁证 2024-05-09 / 有效期至 2027-05-08。
//      外部佐证：启信宝工商公示「质量管理体系认证(ISO9001) 25024Q10808R0S 有效 2024-05-09~2027-05-08」。
//   ② ISO 认证机构 中讯认证促进中心 → 中球联合国际认证（北京）有限公司
//      实物证据：证书底部「中球联合国际认证（北京）有限公司」+ 英文
//      ZhongQiu United International Certification (Beijing) Co., Ltd.。
//   ③ 证书图片从「旧站营销横幅」换成「纯证书裁切 + WebP」，
//      横幅中间那段中文营销文案（含过时主张「成立于2009年」与站内不符的机型
//      MH3324）在 mic/vn/ru 页面属于「图片内中文」，文字类巡检查不到。
//   ⚠️ CE 覆盖范围（证书实物只有 热压机/冷压机/板式多片锯 三类，
//      页面正文与四语 description 写的是 6 类）属 TDH 冻结范围，
//      11-22 后连同 description 一起改，本轮不动。

export interface CertificateInfo {
  /** 证书名称，如 ISO 9001:2015 */
  name: string
  /** 证书编号 */
  identifier: string
  /** 认证机构（法定名，四语；cn 用证书上的中文名，其余语言用证书上的英文名） */
  issuedBy: { cn: string; mic: string; vn: string; ru: string }
  /** 适用标准 */
  standards?: string
  /** 认证范围（ISO 用，四语） */
  scope?: { cn: string; mic: string; vn: string; ru: string }
  /** 认证覆盖的产品（CE 用，四语） */
  covers?: { cn: string; mic: string; vn: string; ru: string }
  /** 证书图片路径（四语：中文站给中文正本，其余语言给英文正本，同一编号） */
  image: { cn: string; mic: string; vn: string; ru: string }
  /** 图片 alt（四语） */
  alt: { cn: string; mic: string; vn: string; ru: string }
}

export const certificates: CertificateInfo[] = [
  {
    name: 'ISO 9001:2015',
    identifier: '25024Q10808R0S',
    issuedBy: {
      cn: '中球联合国际认证（北京）有限公司',
      mic: 'ZhongQiu United International Certification (Beijing) Co., Ltd.',
      vn: 'ZhongQiu United International Certification (Beijing) Co., Ltd.',
      ru: 'ZhongQiu United International Certification (Beijing) Co., Ltd.',
    },
    standards: 'GB/T19001-2016 idt ISO 9001:2015',
    scope: {
      cn: '非标机械设备制造',
      mic: 'Manufacture of non-standard machinery equipment',
      vn: 'Sản xuất thiết bị máy móc không tiêu chuẩn',
      ru: 'Производство нестандартного машиностроительного оборудования',
    },
    image: {
      cn: '/cert-iso9001-cn.webp',
      mic: '/cert-iso9001-en.webp',
      vn: '/cert-iso9001-en.webp',
      ru: '/cert-iso9001-en.webp',
    },
    alt: {
      cn: '上锐机械 ISO 9001 质量管理体系认证证书',
      mic: 'Shang Rui Machinery ISO 9001 quality management system certificate',
      vn: 'Chứng nhận hệ thống quản lý chất lượng ISO 9001 của Shang Rui Machinery',
      ru: 'Сертификат системы менеджмента качества ISO 9001 Shang Rui Machinery',
    },
  },
  {
    name: 'CE',
    identifier: 'CE2020101806 / CE2020101807 / CE20210607045',
    issuedBy: {
      cn: 'STS Inspection & Certification Limited（UK）',
      mic: 'STS Inspection & Certification Limited（UK）',
      vn: 'STS Inspection & Certification Limited（UK）',
      ru: 'STS Inspection & Certification Limited（UK）',
    },
    standards: 'EN 1217:2000+A1:2009、EN 1259:2009+A1:2014、EN 12369:2010+A1:2014',
    covers: {
      cn: '胶合板多层热压机、胶合板多层冷压机、板式多片锯、拼板机、门框组合机、液压升降平台',
      mic: 'Multi-layer hot presses for plywood, multi-layer cold presses for plywood, multi-blade saws, finger joint presses, door frame assembly machines, hydraulic lifting platforms',
      vn: 'Máy ép nóng nhiều lớp cho ván ép, máy ép lạnh nhiều lớp cho ván ép, máy cưa đa lưỡi, máy ghép ván, máy ráp khung cửa, bàn nâng thủy lực',
      ru: 'Многослойные горячие прессы для фанеры, многослойные холодные прессы для фанеры, многопильные станки, прессы для сращивания, станки сборки дверных коробок, гидравлические подъёмные столы',
    },
    image: {
      cn: '/cert-ce.webp',
      mic: '/cert-ce.webp',
      vn: '/cert-ce.webp',
      ru: '/cert-ce.webp',
    },
    alt: {
      cn: '上锐机械 CE 认证证书',
      mic: 'Shang Rui Machinery CE certificate',
      vn: 'Chứng nhận CE của Shang Rui Machinery',
      ru: 'Сертификаты CE Shang Rui Machinery',
    },
  },
]

/** 认证主体（四语） */
export const certificateHolder = {
  cn: '佛山市顺德区上锐机械有限公司',
  mic: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
  vn: 'Công ty TNHH Máy móc Shang Rui, Phường Lunjiao, Quận Shunde, Triều Châu',
  ru: 'Foshan Shunde Shangrui Machinery Co., Ltd.',
}

/** 注册地址 / 生产地址（四语） */
export const certificateAddress = {
  cn: '中国广东省佛山市顺德区伦教街道新塘工业区世龙大道6号',
  mic: 'No. 6 Shelong Avenue, Xintang Industrial Zone, Lunjiao Town, Shunde District, Foshan, Guangdong, China',
  vn: 'Số 6 đường Thế Long, khu công nghiệp Tân Đường, thị trấn Lunjiao, quận Shunde, Triều Châu, Quảng Đông, Trung Quốc',
  ru: 'Китай, провинция Гуандун, город Фошань, район Шуньдэ, посёлок Луньцзяо, промышленная зона Сяньтан, улица Шэлун, 6',
}
