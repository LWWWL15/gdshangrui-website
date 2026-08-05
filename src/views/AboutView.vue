<template>
  <div class="about-page">
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <span class="tag">{{ t('关于上锐', 'About Shang Rui', 'Về Shang Rui', 'О Shang Rui') }}</span>
        <h1>{{ t('关于上锐机械', 'About Shang Rui Machinery', 'Về Shang Rui Machinery', 'О компании Shang Rui Machinery') }}</h1>
        <p>{{ t('自2013年创业以来，专注于木工机械的定制、制造和出口', 'Since 2013, we have consistently focused on customization, manufacturing and export of woodworking machinery', 'Từ năm 2013, chúng tôi tập trung vào tùy chỉnh, sản xuất và xuất khẩu máy móc gỗ', 'С 2013 года мы неизменно специализируемся на индивидуальном проектировании, производстве и экспорте деревообрабатывающих станков') }}</p>      </div>
    </section>

    <!-- Company Intro -->
    <section class="section section-intro">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2>{{ t('确实的实绩与信任', 'Proven Track Record & Trust', 'Kết quả thực tế và niềm tin', 'Подтверждённые результаты и доверие') }}</h2>
            <p>{{ t('上锐机械自2013年创业以来，一直专注于木工机械的定制、制造和出口。目前，我们已向越南、沙特、印尼、韩国等20多个国家出口产品，拥有1000多家客户。', 'Founded in 2013, Shang Rui Machinery has consistently focused on customization, manufacturing and export of woodworking machinery. We now have export experience to 20+ countries including Vietnam, Saudi Arabia, Indonesia, South Korea, and serve 1000+ customers worldwide.', 'Năm 2013, Shang Rui Machinery được thành lập và tập trung vào tùy chỉnh, sản xuất và xuất khẩu máy móc gỗ. Chúng tôi hiện có kinh nghiệm xuất khẩu sang 20+ quốc gia bao gồm Việt Nam, Ả Rập Xê Út, Indonesia, Hàn Quốc, và phục vụ hơn 1000 khách hàng trên toàn cầu.', 'С момента основания в 2013 году Shang Rui Machinery неизменно специализируется на индивидуальном проектировании, производстве и экспорте деревообрабатывающих станков. Сегодня мы экспортируем продукцию в более чем 20 стран, включая Вьетнам, Саудовскую Аравию, Индонезию, Республику Корея, и обслуживаем свыше 1 000 клиентов по всему миру.') }}</p>
            <p>{{ t('在严格的质量管理下制造每一件产品，我们已获得CE认证和ISO-9001认证，提供符合国际标准的产品。', 'We manufacture each product under strict quality control. We hold CE and ISO-9001 certifications, delivering products that comply with international standards.', 'Chúng tôi sản xuất từng sản phẩm dưới sự kiểm soát chất lượng nghiêm ngặt. Chúng tôi có chứng nhận CE và ISO-9001, cung cấp sản phẩm tuân thủ các tiêu chuẩn quốc tế.', 'Каждое изделие изготавливается при строгом контроле качества. Мы имеем сертификаты CE и ISO-9001, что подтверждает соответствие нашей продукции международным стандартам.') }}</p>
            <div class="about-stats">
              <div class="about-stat">
                <span class="num">2013</span>
                <span class="label">{{ t('创业年份', 'Founded', 'Năm thành lập', 'Год основания') }}</span>
              </div>
              <div class="about-stat">
                <span class="num">20+</span>
                <span class="label">{{ t('出口国家', 'Export Countries', 'Quốc gia xuất khẩu', 'Стран экспорта') }}</span>
              </div>
              <div class="about-stat">
                <span class="num">1000+</span>
                <span class="label">{{ t('合作客户', 'Customers', 'Khách hàng', 'Клиентов') }}</span>
              </div>
            </div>
          </div>
          <div class="about-values">
            <div class="value-card" v-for="v in values" :key="v.icon">
              <span class="value-icon">{{ v.icon }}</span>
              <div>
                <h4>{{ t(v.cn, v.mic, v.vn, v.ru) }}</h4>
                <p>{{ t(v.descCn, v.descMic, v.vnDesc, v.descRu) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section-gray section-certs">
      <div class="container">
        <h2 style="margin-bottom: 48px;">{{ t('资质认证', 'Certifications', t('资质认证', 'Certifications', 'Chứng nhận', 'Сертификаты')) }}</h2>
        <div class="cert-grid">
          <div class="cert-card card" v-for="c in certs" :key="c.name">
            <div class="cert-placeholder">{{ c.icon }}</div>
            <h4>{{ t(c.name, c.name, c.vn, c.ru) }}</h4>
            <p>{{ t(c.descCn, c.descMic, c.vnDesc, c.descRu) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Factory -->
    <section class="section section-factory">
      <div class="container">
        <h2 style="margin-bottom: 48px;">{{ t('生产基地', 'Production Base', t('生产基地', 'Production Base', 'Cơ sở sản xuất', 'Производственная база')) }}</h2>
        <div class="factory-grid">
          <div class="factory-img-placeholder" :class="{ 'has-img': i === 1 || i === 2 }" v-for="i in 4" :key="i">
            <img v-if="i === 1" src="/factory-photo-1.webp" :alt="t('工厂照片 1', 'Factory Photo 1', t('工厂照片 1', 'Factory Photo 1', 'Ảnh nhà máy 1', 'Фотография завода 1'))" loading="lazy" />
            <img v-else-if="i === 2" src="/factory-photo-3.webp" :alt="t('工厂照片 2', 'Factory Photo 2', t('工厂照片 2', 'Factory Photo 2', 'Ảnh nhà máy 2', 'Фотография завода 2'))" loading="lazy" />
            <img v-else-if="i === 3" src="/factory-photo-2.webp" :alt="t('工厂照片 3', 'Factory Photo 3', t('工厂照片 3', 'Factory Photo 3', 'Ảnh nhà máy 3', 'Фотография завода 3'))" loading="lazy" />
            <img v-else-if="i === 4" src="/factory-photo-4.webp" :alt="t('工厂照片 4', 'Factory Photo 4', t('工厂照片 4', 'Factory Photo 4', 'Ảnh nhà máy 4', 'Фотография завода 4'))" loading="lazy" />
            <template v-else>
              <span>🏭</span>
              <p>{{ t('工厂照片', 'Factory Photo', t('工厂照片', 'Factory Photo', 'Ảnh nhà máy', 'Фотография завода')) }} {{ i }}</p>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section class="section-gray section-contact">
      <div class="container">
        <h2 style="margin-bottom: 48px;">{{ t('联系我们', 'Contact', t('联系我们', 'Contact Us', 'Liên hệ', 'Связаться с нами')) }}</h2>
        <div class="location-card card">
          <div class="location-info">
            <div class="location-item">
              <span class="location-icon">📍</span>
              <div>
                <h4>{{ t('地址', 'Address', t('地址', 'Address', 'Địa chỉ', 'Адрес')) }}</h4>
                <a href="https://maps.apple.com/place?address=%E4%B8%AD%E5%9B%BD%E5%B9%BF%E4%B8%9C%E7%9C%81%E4%BD%9B%E5%B1%B1%E5%B8%82%E9%A1%BA%E5%BE%B7%E5%8C%BA%E4%BC%A6%E6%95%99%E8%A1%97%E9%81%93%E6%96%B0%E5%A1%98%E5%B7%A5%E4%B8%9A%E5%8C%BA%E4%B8%96%E9%BE%99%E5%A4%A7%E9%81%936%E5%8F%B7&coordinate=22.869534,113.186873&name=%E4%B8%8A%E9%94%90%E6%9C%A8%E5%B7%A5%E6%9C%BA%E6%A2%B0%E5%8E%82&place-id=H2710I3F926803D8CEB&map=explore" target="_blank" rel="noopener">{{ t('中国广东省佛山市顺德区伦教街道新塘工业区世龙大道６号', 'No.6, Shilong Avenue, Shunde New Town Industrial Zone, Lunqiao Town, Shunde District, Foshan City, Guangdong Province, China', t('中国广东省佛山市顺德区伦教街道新塘工业区世龙大道6号', 'No.6, Shilong Avenue, Shunde New Town Industrial Zone, Lunqiao Town, Shunde District, Foshan City, Guangdong Province, China', 'Số 6, Đại lộ Shilong, Khu công nghiệp Xintang, Phường Lunjiao, Quận Shunde, Thành phố Foshan, Quảng Đông, Trung Quốc', 'Шилун Дадао, д. 6, Промышленная зона Синьтан, посёлок Луньцзяо, район Шуньдэ, город Фошань, провинция Гуандун, Китай')) }}</a>
              </div>
            </div>
            <div class="location-item">
              <span class="location-icon">📞</span>
              <div>
                <h4>{{ t('电话 / WhatsApp', 'Phone / WhatsApp', t('电话 / WhatsApp', 'Phone / WhatsApp', 'Điện thoại / WhatsApp', 'Телефон / WhatsApp')) }}</h4>
                <a href="tel:+8613929151908">+86 139-2915-1908</a>
              </div>
            </div>
            <div class="location-item">
              <span class="location-icon">✉️</span>
              <div>
                <h4>{{ t('邮箱', 'Email', t('邮箱', 'Email', 'Email', 'Электронная почта')) }}</h4>
                <a href="mailto:caya15@qq.com">caya15@qq.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'
const { t, tm } = useLang()

const certs = [
  { icon: '📋', name: 'CE Certificate', descCn: '符合欧盟机械安全指令', descMic: 'Compliant with EU Machinery Safety Directive', vn: 'Chứng nhận CE', vnDesc: 'Phù hợp với Chỉ thị An toàn Máy móc EU', ru: 'Сертификат CE', descRu: 'Соответствие Директиве ЕС по безопасности машин и оборудования' },
  { icon: '🏆', name: 'ISO 9001', descCn: '质量管理体系认证', descMic: 'Quality Management System Certification', vn: 'ISO 9001', vnDesc: 'Chứng nhận Hệ thống Quản lý Chất lượng', ru: 'ISO 9001', descRu: 'Сертификация системы менеджмента качества' },
  { icon: '✅', name: 'TUV Factory Audit', descCn: 'TUV验厂认证', descMic: 'TUV Factory Audit Certification', vn: 'Kiểm tra Nhà máy TUV', vnDesc: 'Chứng nhận Kiểm tra Nhà máy TUV', ru: 'Аудит завода TUV', descRu: 'Сертификация аудита завода TUV' },
  { icon: '📜', name: 'Product Certificate', descCn: '产品合格证书', descMic: 'Product qualification certificate', vn: 'Chứng nhận Sản phẩm', vnDesc: 'Giấy chứng nhận Đủ điều kiện Sản phẩm', ru: 'Сертификат продукции', descRu: 'Сертификат соответствия продукции' },
]

const values = [
  { icon: '🎯', cn: '品质第一' ,mic: 'Quality First', descCn: '严格的质量管理体系。每件产品出货前都进行了使用测试并至少三道工序质检。', descMic: 'Strict quality control system. Each product undergoes usage testing and at least three quality checks before delivery.', vn: 'Chất Lượng Là Ưu Tiên Số Một', vnDesc: 'Hệ thống quản lý chất lượng nghiêm ngặt. Mỗi sản phẩm đều được kiểm tra sử dụng và ít nhất ba quy trình kiểm tra chất lượng trước khi xuất hàng.', ru: 'Качество прежде всего', descRu: 'Строгая система управления качеством. Каждое изделие проходит эксплуатационные испытания и не менее трёх этапов контроля качества перед отгрузкой.' },
  { icon: '🔬', cn: '持续创新' ,mic: 'Innovation', descCn: '持续投入研发,不断优化产品性能和用户体验。', descMic: 'Continuous R&D investment to improve product performance.', vn: 'Đổi Mới Liên Tục', vnDesc: 'Không ngừng đầu tư R&D, cải thiện hiệu suất sản phẩm và trải nghiệm người dùng.', ru: 'Постоянные инновации', descRu: 'Постоянные инвестиции в НИОКР для улучшения характеристик продукции и пользовательского опыта.' },
  { icon: '🤝', cn: '诚实合作' ,mic: 'Integrity', descCn: '以诚实为基础,建立长期稳定的合作关系。', descMic: 'Building long-term partnerships based on integrity and trust.', vn: 'Hợp Tác Trung Thực', vnDesc: 'Dựa trên sự trung thực, xây dựng mối quan hệ hợp tác ổn định lâu dài.', ru: 'Честное сотрудничество', descRu: 'Построение долгосрочных и стабильных партнёрских отношений на основе честности.' },
  { icon: '🌐', cn: '全球视野' ,mic: 'Global Vision', descCn: '理解全球市场需求,提供符合国际标准的产品和服务。', descMic: 'Understanding global market needs with internationally compliant products.', vn: 'Tầm Nhìn Toàn Cầu', vnDesc: 'Hiểu rõ nhu cầu thị trường quốc tế, cung cấp sản phẩm và dịch vụ đạt tiêu chuẩn quốc tế.', ru: 'Глобальное видение', descRu: 'Понимание потребностей мирового рынка и поставка продукции и услуг, соответствующих международным стандартам.' },
]
</script>

<style lang="scss" scoped>
.page-hero {
  position: relative;
  padding: 160px 0 80px;
  background: $c-bg-dark;
  overflow: hidden;

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('/about-hero-bg.webp');
    background-size: cover;
    background-position: center;

    @media (max-width: $bp-sm) {
      background-position: center 30%;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%);
    }
  }

  .container {
    position: relative;
    z-index: 1;
  }

  h1 { color: white; margin-bottom: $s-md; text-shadow: 0 2px 8px rgba(0,0,0,0.3); }
  p { color: rgba(255,255,255,0.9); font-size: $fs-lg; text-shadow: 0 1px 4px rgba(0,0,0,0.2); }
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $s-4xl;
  align-items: start;
  @media (max-width: $bp-lg) { grid-template-columns: 1fr; }
  @media (max-width: $bp-sm) { gap: $s-md; }
}

.section-intro {
  padding-top: $s-lg;
  @media (max-width: $bp-sm) {
    padding-top: $s-lg;
    padding-bottom: $s-lg;
  }
}

.about-content {
  h2 { margin-bottom: $s-lg; color: $c-accent; }
  p { color: #333333; line-height: 1.9; margin-bottom: $s-md; }
}

.about-stats {
  display: flex;
  gap: $s-2xl;
  margin-top: $s-2xl;
  padding-top: $s-2xl;
  border-top: 1px solid #e0e0e0;
  flex-wrap: wrap;

  @media (max-width: $bp-sm) {
    margin-top: $s-md;
    padding-top: $s-md;
    gap: $s-lg;
  }

  .num { display: block; font-size: $fs-2xl; font-weight: $fw-extrabold; color: $c-accent; }
  .label { font-size: $fs-xs; color: #666666; margin-top: 4px; }
}

.about-values {
  display: flex;
  flex-direction: column;
  gap: $s-md;
}

.section-certs {
  @media (max-width: $bp-sm) {
    padding-top: $s-lg;
    padding-bottom: $s-lg;
  }
}

.section-factory {
  @media (max-width: $bp-sm) {
    padding-top: $s-lg;
    padding-bottom: $s-lg;
  }
}

.section-contact {
  @media (max-width: $bp-sm) {
    padding-top: $s-lg;
    padding-bottom: $s-lg;
  }
}

.value-card {
  padding: $s-lg;
  border: 1px solid #e0e0e0;
  border-radius: $r-lg;
  display: flex;
  gap: $s-md;
  align-items: flex-start;
  transition: all $t-base;
  &:hover { border-color: $c-accent; box-shadow: $shadow-blue; }

  .value-icon { font-size: 24px; flex-shrink: 0; }
  h4 { font-size: $fs-base; margin-bottom: 4px; color: $c-accent; }
  p { font-size: $fs-sm; color: #333333; line-height: 1.6; }
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $s-lg;
  @media (max-width: $bp-lg) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: $bp-sm) { grid-template-columns: 1fr; }
}

.cert-card {
  padding: $s-xl;
  text-align: center;
  .cert-placeholder { font-size: 48px; margin-bottom: $s-md; }
  h4 { font-size: $fs-base; margin-bottom: $s-sm; color: $c-accent; }
  p { font-size: $fs-sm; color: #333333; line-height: 1.6; }
}

.factory-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $s-md;
  @media (max-width: $bp-lg) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: $bp-sm) { grid-template-columns: repeat(2, 1fr); max-width: 400px; margin: 0 auto; }
}

.factory-img-placeholder {
  aspect-ratio: 3 / 2;
  background: $c-bg-tertiary;
  border: 2px dashed $c-border;
  border-radius: $r-lg;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $s-sm;
  overflow: hidden;
  span { font-size: 40px; }
  p { font-size: $fs-sm; color: $c-text-muted; }

  &.has-img {
    border-style: solid;
    background: #f0f0f0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $r-lg - 2px;
  }
}

.location-card { padding: $s-2xl; }

.location-info {
  display: flex;
  flex-direction: column;
  gap: $s-xl;
}

.location-item {
  display: flex;
  gap: $s-md;
  align-items: flex-start;

  .location-icon { font-size: 24px; flex-shrink: 0; }
  h4 { font-size: $fs-sm; font-weight: $fw-semibold; margin-bottom: 4px; color: $c-accent; }
  p, a { font-size: $fs-sm; color: #333333; line-height: 1.7; }
  a { text-decoration: underline; text-underline-offset: 2px; }
  a:hover { color: $c-accent-hover; }
}
</style>
