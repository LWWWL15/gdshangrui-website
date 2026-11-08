<template>
  <div class="cert-page">
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <span class="tag">{{ t('资质认证', 'Certifications', 'Chứng nhận', 'Сертификация') }}</span>
        <h1>{{ t('CE 认证与 ISO 9001 质量管理体系', 'CE Certification & ISO 9001 Quality Management', 'Chứng nhận CE và hệ thống quản lý chất lượng ISO 9001', 'Сертификация CE и система менеджмента качества ISO 9001') }}</h1>
        <p>{{ t('上锐机械的产品已通过欧盟 CE 认证与 ISO 9001:2015 质量管理体系认证，证书可查可验。', 'Shang Rui Machinery products hold CE certification and ISO 9001:2015 quality management certification. Both certificates are verifiable.', 'Sản phẩm Shang Rui Machinery đã đạt chứng nhận CE và hệ thống quản lý chất lượng ISO 9001:2015, có thể tra cứu và kiểm chứng.', 'Продукция Shang Rui Machinery имеет сертификаты CE и системы менеджмента качества ISO 9001:2015 с возможностью проверки.') }}</p>
      </div>
    </section>

    <!-- 认证主体 -->
    <section class="section">
      <div class="container">
        <div class="cert-holder">
          <h2>{{ t('认证主体', 'Certificate Holder', 'Chủ thể được chứng nhận', 'Обладатель сертификата') }}</h2>
          <dl class="holder-table">
            <div class="row">
              <dt>{{ t('企业名称', 'Legal Name', 'Tên pháp lý', 'Юридическое наименование') }}</dt>
              <dd>{{ t('佛山市顺德区上锐机械有限公司', 'Foshan Shunde Shangrui Machinery Co., Ltd.', 'Công ty TNHH Máy móc Shang Rui, Phường Lunjiao, Quận Shunde, Triều Châu', 'Foshan Shunde Shangrui Machinery Co., Ltd.') }}</dd>
            </div>
            <div class="row">
              <dt>{{ t('中文名称', 'Chinese Name', 'Tên tiếng Trung', 'Наименование на китайском') }}</dt>
              <dd>佛山市顺德区上锐机械有限公司</dd>
            </div>
            <div class="row">
              <dt>{{ t('注册地址', 'Registered Address', 'Địa chỉ đăng ký', 'Зарегистрированный адрес') }}</dt>
              <dd>{{ t('中国广东省佛山市顺德区伦教街道新塘工业区世龙大道6号', 'No. 6 Shelong Avenue, Xintang Industrial Zone, Lunjiao Town, Shunde District, Foshan, Guangdong, China', 'Số 6 đường Thế Long, khu công nghiệp Tân Đường, thị trấn Lunjiao, quận Shunde, Triều Châu, Quảng Đông, Trung Quốc', 'Китай, провинция Гуандун, город Фошань, район Шуньдэ, посёлок Луньцзяо, промышленная зона Сяньтан, улица Шэлун, 6') }}</dd>
            </div>
            <div class="row">
              <dt>{{ t('生产地址', 'Manufacturing Address', 'Địa chỉ sản xuất', 'Производственный адрес') }}</dt>
              <dd>{{ t('中国广东省佛山市顺德区伦教街道新塘工业区世龙大道6号', 'No. 6 Shelong Avenue, Xintang Industrial Zone, Lunjiao Town, Shunde District, Foshan, Guangdong, China', 'Số 6 đường Thế Long, khu công nghiệp Tân Đường, thị trấn Lunjiao, quận Shunde, Triều Châu, Quảng Đông, Trung Quốc', 'Китай, провинция Гуандун, город Фошань, район Шуньдэ, посёлок Луньцзяо, промышленная зона Сяньтан, улица Шэлун, 6') }}</dd>
            </div>
            <div class="row">
              <dt>{{ t('联系方式', 'Contact', 'Liên hệ', 'Контакты') }}</dt>
              <dd><a href="tel:+8613929151908">+86 139-2915-1908</a>（电话 / WhatsApp）</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- ISO 9001 -->
    <section class="section section-alt">
      <div class="container">
        <div class="cert-block">
          <div class="cert-info">
            <h2>ISO 9001:2015</h2>
            <p class="cert-sub">{{ t('质量管理体系认证', 'Quality Management System Certification', 'Chứng nhận hệ thống quản lý chất lượng', 'Сертификация системы менеджмента качества') }}</p>
            <dl class="cert-table">
              <div class="row">
                <dt>{{ t('证书编号', 'Certificate No.', 'Số chứng nhận', 'Номер сертификата') }}</dt>
                <dd>21002Q118085R0M</dd>
              </div>
              <div class="row">
                <dt>{{ t('认证标准', 'Standard', 'Tiêu chuẩn', 'Стандарт') }}</dt>
                <dd>GB/T19001-2016 idt ISO 9001:2015</dd>
              </div>
              <div class="row">
                <dt>{{ t('认证范围', 'Scope', 'Phạm vi', 'Область сертификации') }}</dt>
                <dd>{{ t('非标机械设备制造', 'Manufacture of non-standard machinery equipment', 'Sản xuất thiết bị máy móc không tiêu chuẩn', 'Производство нестандартного машиностроительного оборудования') }}</dd>
              </div>
              <div class="row">
                <dt>{{ t('认证机构', 'Certification Body', 'Cơ quan chứng nhận', 'Сертифицирующий орган') }}</dt>
                <dd>中讯认证促进中心（Beijing Zhongxuan Certification & Promotion Center）</dd>
              </div>
            </dl>
          </div>
          <div class="cert-image">
            <img src="/cert-iso9001.jpg" :alt="t('上锐机械 ISO 9001 质量管理体系认证证书', 'Shang Rui Machinery ISO 9001 quality management system certificate', 'Chứng nhận hệ thống quản lý chất lượng ISO 9001 của Shang Rui Machinery', 'Сертификат системы менеджмента качества ISO 9001 Shang Rui Machinery')" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- CE -->
    <section class="section">
      <div class="container">
        <div class="cert-block">
          <div class="cert-info">
            <h2>CE</h2>
            <p class="cert-sub">{{ t('欧盟符合性证书', 'EU Conformity Certificate', 'Giấy chứng nhận phù hợp EU', 'Сертификат соответствия ЕС') }}</p>
            <dl class="cert-table">
              <div class="row">
                <dt>{{ t('认证机构', 'Notified Body', 'Cơ quan thông báo', 'Уполномоченный орган') }}</dt>
                <dd>STS Inspection &amp; Certification Limited（UK）</dd>
              </div>
              <div class="row">
                <dt>{{ t('证书编号', 'Certificate No.', 'Số chứng nhận', 'Номера сертификатов') }}</dt>
                <dd>CE2020101806 / CE2020101807 / CE20210607045</dd>
              </div>
              <div class="row">
                <dt>{{ t('适用标准', 'Standards Applied', 'Tiêu chuẩn áp dụng', 'Применённые стандарты') }}</dt>
                <dd>EN 1217:2000+A1:2009、EN 1259:2009+A1:2014、EN 12369:2010+A1:2014</dd>
              </div>
              <div class="row">
                <dt>{{ t('认证产品', 'Certified Products', 'Sản phẩm được chứng nhận', 'Сертифицированная продукция') }}</dt>
                <dd>{{ t('胶合板多层热压机、胶合板多层冷压机、板式多片锯、拼板机、门框组合机、液压升降平台', 'Multi-layer hot presses for plywood, multi-layer cold presses for plywood, multi-blade saws, finger joint presses, door frame assembly machines, hydraulic lifting platforms', 'Máy ép nóng nhiều lớp cho ván ép, máy ép lạnh nhiều lớp cho ván ép, máy cưa đa lưỡi, máy ghép ván, máy ráp khung cửa, bàn nâng thủy lực', 'Многослойные горячие прессы для фанеры, многослойные холодные прессы для фанеры, многопильные станки, прессы для сращивания, станки сборки дверных коробок, гидравлические подъёмные столы') }}</dd>
              </div>
            </dl>
            <p class="cert-note">{{ t('如需证书原件用于清关或投标，请通过上方联系方式索取，我们将提供扫描件与原件核验。', 'If you need the original certificates for customs clearance or tendering, contact us above — we will provide scans and originals for verification.', 'Nếu cần bản gốc chứng nhận để làm thủ tục hải quan hoặc đấu thầu, vui lòng liên hệ — chúng tôi sẽ cung cấp bản scan và bản gốc để kiểm chứng.', 'Если вам нужны оригиналы сертификатов для таможенного оформления или участия в тендере, свяжитесь с нами — мы предоставим сканы и оригиналы для проверки.') }}</p>
          </div>
          <div class="cert-image">
            <img src="/cert-ce.jpg" :alt="t('上锐机械 CE 认证证书', 'Shang Rui Machinery CE certificate', 'Chứng nhận CE của Shang Rui Machinery', 'Сертификаты CE Shang Rui Machinery')" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- 认证产品范围 -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title">{{ t('CE 认证覆盖的产品系列', 'CE Certified Product Series', 'Các dòng sản phẩm được chứng nhận CE', 'Серии сертифицированной продукции CE') }}</h2>
        <div class="cert-series">
          <div class="series-item" v-for="s in certifiedSeries" :key="s.cn">
            <span class="series-icon">{{ s.icon }}</span>
            <h4>{{ t(s.cn, s.mic, s.vn, s.ru) }}</h4>
            <p>{{ t(s.descCn, s.descMic, s.descVn, s.descRu) }}</p>
          </div>
        </div>
        <p class="cert-note center">
          {{ t('需要其他型号的 CE 证书，或需要针对特定工况单独出具符合性文件，请联系我们。', 'If you need a CE certificate for a model not listed here, or a conformity document for a specific configuration, please contact us.', 'Nếu cần chứng nhận CE cho mã máy khác, hoặc tài liệu phù hợp cho cấu hình cụ thể, vui lòng liên hệ với chúng tôi.', 'Если вам нужен сертификат CE для другой модели или документ о соответствии для конкретной комплектации, свяжитесь с нами.') }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'
const { t } = useLang()

// CE 证书上明确列出的产品系列（不是全部产品都有 CE）
const certifiedSeries = [
  {
    icon: '🔥', cn: '热压机', mic: 'Hot Press', vn: 'Máy ép nóng',
    ru: 'Горячий пресс',
    descCn: '胶合板多层热压机，用于免漆板、生态板、覆膜板贴面',
    descMic: 'Multi-layer hot presses for plywood, melamine and film-faced panels',
    descVn: 'Máy ép nóng nhiều lớp cho ván ép, melamine và ván phủ film',
    descRu: 'Многослойные горячие прессы для фанеры, меламина и плёнки',
  },
  {
    icon: '❄️', cn: '冷压机', mic: 'Cold Press', vn: 'Máy ép lạnh',
    ru: 'Холодный пресс',
    descCn: '胶合板多层冷压机，用于单板与免漆板冷压成型',
    descMic: 'Multi-layer cold presses for plywood, veneer and melamine board',
    descVn: 'Máy ép lạnh nhiều lớp cho ván ép, ván lạnh và ván ép',
    descRu: 'Многослойные холодные прессы для фанеры, шпона и меламина',
  },
  {
    icon: '🪚', cn: '板式多片锯', mic: 'Multi-Blade Saw', vn: 'Máy cưa đa lưỡi',
    ru: 'Многопильный станок',
    descCn: '原木与板材多片锯，一次进给完成多道切割',
    descMic: 'Multi-blade saws for logs and panels, multiple cuts per pass',
    descVn: 'Máy cưa đa lưỡi cho gỗ tròn và ván, nhiều lưỡi cắt trong một lần',
    descRu: 'Многопильные станки для брёвен и плит, несколько резов за проход',
  },
  {
    icon: '🧩', cn: '拼板机', mic: 'Splicing Machine', vn: 'Máy ghép ván',
    ru: 'Пресс для сращивания',
    descCn: '短料与木皮连续拼接机，用于胶合板与生态板生产',
    descMic: 'Finger joint presses for plywood and melamine board production',
    descVn: 'Máy ghép ván cho sản xuất ván ép và ván melamine',
    descRu: 'Прессы для сращивания шпона при производстве фанеры',
  },
  {
    icon: '🚪', cn: '门框组合机', mic: 'Door Frame Assembly', vn: 'Máy ráp khung cửa',
    ru: 'Станок сборки дверных коробок',
    descCn: '木门与橱柜门框组装压合机，前后与侧向同时加压',
    descMic: 'Door frame assembly machines for wooden and cabinet doors',
    descVn: 'Máy ráp khung cửa gỗ và cửa tủ, ép trước và bên cùng lúc',
    descRu: 'Станки для сборки дверных коробок с одновременным прижимом',
  },
  {
    icon: '⬆️', cn: '液压升降平台', mic: 'Hydraulic Lifting Platform', vn: 'Bàn nâng thủy lực',
    ru: 'Гидравлический подъёмный стол',
    descCn: '板材上下料液压升降台，配合整线使用',
    descMic: 'Hydraulic lifting platforms for panel handling in production lines',
    descVn: 'Bàn nâng thủy lực nâng hạ tấm ván trong dây chuyền',
    descRu: 'Гидравлические подъёмные столы для загрузки плит',
  },
]
</script>

<style lang="scss" scoped>
.cert-page { background: $c-bg-primary; }

.page-hero {
  padding: 120px 0 64px;
  position: relative;
  overflow: hidden;
  background: $c-bg-secondary;

  .hero-bg {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(26,111,212,.08), rgba(26,111,212,.02));
  }
  .container { position: relative; }

  .tag {
    display: inline-block; font-size: $fs-sm; font-weight: $fw-semibold;
    color: $c-accent; background: rgba(26,111,212,.08);
    padding: 4px 14px; border-radius: 100px; margin-bottom: $s-md;
  }
  h1 { font-size: $fs-4xl; color: $c-text-primary; margin-bottom: $s-md; }
  p { font-size: $fs-lg; color: $c-text-secondary; max-width: 720px; line-height: 1.7; }
}

.section { padding: 72px 0; }
.section-alt { background: $c-bg-secondary; }
.section-title { font-size: $fs-2xl; color: $c-text-primary; margin-bottom: $s-2xl; text-align: center; }

.cert-holder h2,
.cert-info h2 { font-size: $fs-2xl; color: $c-text-primary; margin-bottom: $s-lg; }

.holder-table, .cert-table {
  border-top: 1px solid rgba(0,0,0,.08);

  .row {
    display: grid; grid-template-columns: 200px 1fr; gap: $s-md;
    padding: $s-md 0; border-bottom: 1px solid rgba(0,0,0,.08);

    dt {
      font-weight: $fw-semibold; color: $c-text-secondary; font-size: $fs-sm;
    }
    dd { color: $c-text-primary; font-size: $fs-base; line-height: 1.7; }
  }
}

.cert-block {
  display: grid; grid-template-columns: 1.1fr .9fr; gap: $s-3xl; align-items: start;

  .cert-sub {
    font-size: $fs-base; color: $c-text-secondary; margin-bottom: $s-lg;
  }
  .cert-image img {
    width: 100%; border-radius: $r-md;
    box-shadow: 0 8px 28px rgba(0,0,0,.1); background: #fff;
  }
}

.cert-note {
  margin-top: $s-lg; font-size: $fs-sm; color: $c-text-muted; line-height: 1.8;
  &.center { text-align: center; max-width: 640px; margin-left: auto; margin-right: auto; }
}

.cert-series {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: $s-lg;

  .series-item {
    background: #fff; border-radius: $r-md; padding: $s-lg;
    border: 1px solid rgba(0,0,0,.06);

    .series-icon { font-size: 28px; display: block; margin-bottom: $s-sm; }
    h4 { font-size: $fs-lg; color: $c-text-primary; margin-bottom: $s-xs; }
    p { font-size: $fs-sm; color: $c-text-secondary; line-height: 1.7; }
  }
}

@media (max-width: $bp-lg) {
  .cert-block { grid-template-columns: 1fr; gap: $s-xl; }
  .cert-series { grid-template-columns: repeat(2, 1fr); }
  .holder-table .row, .cert-table .row { grid-template-columns: 1fr; gap: 4px; }
}
@media (max-width: $bp-sm) {
  .cert-series { grid-template-columns: 1fr; }
  .page-hero { padding: 80px 0 40px; }
  .page-hero h1 { font-size: $fs-2xl; }
}
</style>
