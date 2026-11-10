// 认证证书数据 —— 单一数据源（内容取自证书实物，不编造）
//
// 2026-11-10 第 7 轮新增。
// 背景：CertificationView.vue 里证书号、机构、标准、认证产品都硬编码在模板里，
//      JSON-LD 需要同一份数据。抽到这里，模板与 schema 共用 → 不会两处不一致。
//
// ⚠️ 数据来源：CE 证书与 ISO 证书实物上的编号/机构/标准，未做任何演绎。
//    认证产品范围以 CE 证书上明确列出的为准（不是全部产品都有 CE）。

export interface CertificateInfo {
  /** 证书名称，如 ISO 9001:2015 */
  name: string
  /** 证书编号 */
  identifier: string
  /** 认证机构 */
  issuedBy: string
  /** 适用标准 */
  standards?: string
  /** 认证范围（ISO 用，四语） */
  scope?: { cn: string; mic: string; vn: string; ru: string }
  /** 认证覆盖的产品（CE 用，四语） */
  covers?: { cn: string; mic: string; vn: string; ru: string }
  /** 证书图片路径 */
  image: string
  /** 图片 alt（四语） */
  alt: { cn: string; mic: string; vn: string; ru: string }
}

export const certificates: CertificateInfo[] = [
  {
    name: 'ISO 9001:2015',
    identifier: '21002Q118085R0M',
    issuedBy: '中讯认证促进中心（Beijing Zhongxuan Certification & Promotion Center）',
    standards: 'GB/T19001-2016 idt ISO 9001:2015',
    scope: {
      cn: '非标机械设备制造',
      mic: 'Manufacture of non-standard machinery equipment',
      vn: 'Sản xuất thiết bị máy móc không tiêu chuẩn',
      ru: 'Производство нестандартного машиностроительного оборудования',
    },
    image: '/cert-iso9001.jpg',
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
    issuedBy: 'STS Inspection & Certification Limited（UK）',
    standards: 'EN 1217:2000+A1:2009、EN 1259:2009+A1:2014、EN 12369:2010+A1:2014',
    covers: {
      cn: '胶合板多层热压机、胶合板多层冷压机、板式多片锯、拼板机、门框组合机、液压升降平台',
      mic: 'Multi-layer hot presses for plywood, multi-layer cold presses for plywood, multi-blade saws, finger joint presses, door frame assembly machines, hydraulic lifting platforms',
      vn: 'Máy ép nóng nhiều lớp cho ván ép, máy ép lạnh nhiều lớp cho ván ép, máy cưa đa lưỡi, máy ghép ván, máy ráp khung cửa, bàn nâng thủy lực',
      ru: 'Многослойные горячие прессы для фанеры, многослойные холодные прессы для фанеры, многопильные станки, прессы для сращивания, станки сборки дверных коробок, гидравлические подъёмные столы',
    },
    image: '/cert-ce.jpg',
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
