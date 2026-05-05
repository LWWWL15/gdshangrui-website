<template>
  <div class="about-page">
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <span class="tag">{{ t('关于上锐', 'About Us') }}</span>
        <h1>{{ t('关于上锐机械', 'About Shang Rui Machinery') }}</h1>
        <p>{{ t('自2013年创业以来,专注于木工机械的定制、制造和出口', 'Since 2013, we have consistently focused on customization, manufacturing and export of woodworking machinery') }}</p>      </div>
    </section>

    <!-- Company Intro -->
    <section class="section section-intro">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2>{{ t('确实的实绩与信任', 'Proven Track Record & Trust') }}</h2>
            <p>{{ t('上锐机械自2013年创业以来,一直专注于木工机械的定制、制造和出口。目前,我们已向越南、沙特、印尼、韩国等20多个国家出口产品,拥有1000多家客户。', 'Founded in 2013, Shang Rui Machinery has consistently focused on customization, manufacturing and export of woodworking machinery. We now have export experience to 20+ countries including Vietnam, Saudi Arabia, Indonesia, South Korea, and serve 1000+ customers worldwide.') }}</p>
            <p>{{ t('在严格的质量管理下制造每一件产品,我们已获得CE认证和ISO-9001认证,提供符合国际标准的产品。', 'We manufacture each product under strict quality control. We hold CE and ISO-9001 certifications, delivering products that comply with international standards.') }}</p>
            <div class="about-stats">
              <div class="about-stat">
                <span class="num">2013</span>
                <span class="label">{{ t('创业年份', 'Founded') }}</span>
              </div>
              <div class="about-stat">
                <span class="num">20+</span>
                <span class="label">{{ t('出口国家', 'Export Countries') }}</span>
              </div>
              <div class="about-stat">
                <span class="num">1000+</span>
                <span class="label">{{ t('合作客户', 'Customers') }}</span>
              </div>
            </div>
          </div>
          <div class="about-values">
            <div class="value-card" v-for="v in values" :key="v.icon">
              <span class="value-icon">{{ v.icon }}</span>
              <div>
                <h4>{{ t(v.zh, v.en) }}</h4>
                <p>{{ t(v.descZh, v.descEn) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section-gray section-certs">
      <div class="container">
        <h2 style="margin-bottom: 48px;">{{ t('资质认证', 'Certifications') }}</h2>
        <div class="cert-grid">
          <div class="cert-card card" v-for="c in certs" :key="c.name">
            <div class="cert-placeholder">{{ c.icon }}</div>
            <h4>{{ c.name }}</h4>
            <p>{{ t(c.descZh, c.descEn) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Factory -->
    <section class="section section-factory">
      <div class="container">
        <h2 style="margin-bottom: 48px;">{{ t('生产基地', 'Production Base') }}</h2>
        <div class="factory-grid">
          <div class="factory-img-placeholder" :class="{ 'has-img': i === 1 || i === 2 }" v-for="i in 4" :key="i">
            <img v-if="i === 1" src="/factory-photo-1.webp" :alt="t('工厂照片 1', 'Factory Photo 1')" />
            <img v-else-if="i === 2" src="/factory-photo-2.webp" :alt="t('工厂照片 2', 'Factory Photo 2')" />
            <template v-else>
              <span>🏭</span>
              <p>{{ t('工厂照片', 'Factory Photo') }} {{ i }}</p>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Location -->
    <section class="section-gray section-contact">
      <div class="container">
        <h2 style="margin-bottom: 48px;">{{ t('联系我们', 'Contact') }}</h2>
        <div class="location-card card">
          <div class="location-info">
            <div class="location-item">
              <span class="location-icon">📍</span>
              <div>
                <h4>{{ t('地址', 'Address') }}</h4>
                <a href="https://maps.apple.com/place?address=%E4%B8%AD%E5%9B%BD%E5%B9%BF%E4%B8%9C%E7%9C%81%E4%BD%9B%E5%B1%B1%E5%B8%82%E9%A1%BA%E5%BE%B7%E5%8C%BA%E4%BC%A6%E6%95%99%E8%A1%97%E9%81%93%E6%96%B0%E5%A1%98%E5%B7%A5%E4%B8%9A%E5%8C%BA%E4%B8%96%E9%BE%99%E5%A4%A7%E9%81%936%E5%8F%B7&coordinate=22.869534,113.186873&name=%E4%B8%8A%E9%94%90%E6%9C%A8%E5%B7%A5%E6%9C%BA%E6%A2%B0%E5%8E%82&place-id=H2710I3F926803D8CEB&map=explore" target="_blank" rel="noopener">{{ t('中国广东省佛山市顺德区伦教街道新塘工业区世龙大道６号', 'No.6, Shilong Avenue, Shunde New Town Industrial Zone, Lunqiao Town, Shunde District, Foshan City, Guangdong Province, China') }}</a>
              </div>
            </div>
            <div class="location-item">
              <span class="location-icon">📞</span>
              <div>
                <h4>{{ t('电话 / WhatsApp', 'Phone / WhatsApp') }}</h4>
                <a href="tel:+8613929151908">+86 139-2915-1908</a>
              </div>
            </div>
            <div class="location-item">
              <span class="location-icon">✉️</span>
              <div>
                <h4>{{ t('邮箱', 'Email') }}</h4>
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
const { t } = useLang()

const certs = [
  { icon: '📋', name: 'CE Certificate', descZh: '符合欧盟机械安全指令', descEn: 'Compliant with EU Machinery Safety Directive' },
  { icon: '🏆', name: 'ISO 9001', descZh: '质量管理体系认证', descEn: 'Quality Management System Certification' },
  { icon: '✅', name: 'TUV Factory Audit', descZh: 'TUV验厂认证', descEn: 'TUV Factory Audit Certification' },
  { icon: '📜', name: 'Product Certificate', descZh: '产品合格证书', descEn: 'Product qualification certificate' },
]

const values = [
  { icon: '🎯', zh: '品质第一', en: 'Quality First', descZh: '严格的质量管理体系。每件产品出货前都进行了使用测试并至少三道工序质检。', descEn: 'Strict quality control system. Each product undergoes usage testing and at least three quality checks before delivery.' },
  { icon: '🔬', zh: '持续创新', en: 'Innovation', descZh: '持续投入研发,不断优化产品性能和用户体验。', descEn: 'Continuous R&D investment to improve product performance.' },
  { icon: '🤝', zh: '诚实合作', en: 'Integrity', descZh: '以诚实为基础,建立长期稳定的合作关系。', descEn: 'Building long-term partnerships based on integrity and trust.' },
  { icon: '🌐', zh: '全球视野', en: 'Global Vision', descZh: '理解全球市场需求,提供符合国际标准的产品和服务。', descEn: 'Understanding global market needs with internationally compliant products.' },
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
  @media (max-width: $bp-sm) { grid-template-columns: 1fr; }
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
