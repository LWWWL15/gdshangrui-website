<template>
  <div class="cases-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('博客', 'Blog',  t('博客', 'Blog', 'Tin tức', 'Блог'),  t('博客', 'Blog', 'Tin tức', 'Блог')) }}</span>
        <h1>{{ t('行业动态', 'Industry Insights',  t('行业动态', 'Industry Insights', 'Thông tin ngành', 'Новости отрасли'),  t('行业动态', 'Industry Insights', 'Thông tin ngành', 'Новости отрасли')) }}</h1>
        <p>{{ t('了解上锐机械的最新动态与行业资讯', 'Stay updated with Shangrui Machinery news and industry trends',  t('了解上锐机械的最新动态与行业资讯', 'Stay updated with Shangrui Machinery news and industry trends', 'Cập nhật tin tức mới nhất và xu hướng ngành máy móc gỗ của Shang Rui', 'Будьте в курсе новостей Shang Rui Machinery и тенденций деревообрабатывающей отрасли'),  t('了解上锐机械的最新动态与行业资讯', 'Stay updated with Shangrui Machinery news and industry trends', 'Cập nhật tin tức mới nhất và xu hướng ngành máy móc gỗ của Shang Rui', 'Будьте в курсе новостей Shang Rui Machinery и тенденций деревообрабатывающей отрасли')) }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cases-grid">
          <router-link v-for="c in cases" :key="c.id" :to="`/${lang}/blog/` + c.slug" class="card case-card">
            <div class="case-img" :style="{ background: c.color }">
              <span class="case-region">{{ c.region }}</span>
              <span class="case-icon">{{ c.icon }}</span>
            </div>
            <div class="case-body">
              <span class="tag">{{ t(c.productCn, c.productMic) }}</span>
              <h3>{{ t(c.titleCn, c.titleMic, c.titleMic, c.titleRu) }}</h3>
              <p>{{ t(c.descCn, c.descMic, c.descMic, c.descRu) }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-cta">
      <div class="container" style="text-align:center;">
        <h2 style="color:white; margin-bottom:16px;">{{ t('成为我们的合作伙伴', 'Become Our Partner',  t('成为我们的合作伙伴', 'Become Our Partner', 'Trở thành đối tác của chúng tôi', 'Станьте нашим партнёром'),  t('成为我们的合作伙伴', 'Become Our Partner', 'Trở thành đối tác của chúng tôi', 'Станьте нашим партнёром')) }}</h2>
        <p style="color:rgba(255,255,255,0.6); margin-bottom:32px; font-size:18px;">{{ t('联系我们，获取专属解决方案', 'Contact us for a customized solution',  t('联系我们，获取专属解决方案', 'Contact us for a customized solution', 'Liên hệ với chúng tôi để có giải pháp riêng', 'Свяжитесь с нами для индивидуального решения'),  t('联系我们，获取专属解决方案', 'Contact us for a customized solution', 'Liên hệ với chúng tôi để có giải pháp riêng', 'Свяжитесь с нами для индивидуального решения')) }}</p>
        <router-link to="/contact" class="btn btn-primary btn-lg">{{ t('立即联系', 'Contact Now',  t('立即联系', 'Contact Now', 'Liên hệ ngay', 'Связаться сейчас'),  t('立即联系', 'Contact Now', 'Liên hệ ngay', 'Связаться сейчас')) }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'
const { t, tm, lang } = useLang()

const cases = [
  { id: 1, slug: 'vietnam-furniture-factory-cold-press', region: '🇻🇳 Vietnam', icon: '⬛', productCn: '冷压机', productMic: 'Cold Press', titleCn: '越南家具厂冷压生产线', titleMic: 'Vietnam Furniture Factory Cold Press Line', descCn: '为越南某大型家具制造商提供10台冷压机，用于板材压合生产线，显著提升产能。', descMic: 'Supplied 10 cold press machines to a large Vietnamese furniture manufacturer, significantly improving production capacity.', color: 'linear-gradient(135deg, #1a2744, #1a6fd4)' },
  { id: 2, slug: 'saudi-arabia-door-manufacturer-hot-press', region: '🇸🇦 Saudi Arabia', icon: '🔶', productCn: '热压机', productMic: 'Hot Press', titleCn: '沙特木门生产商热压设备', titleMic: 'Saudi Arabia Door Manufacturer Hot Press', descCn: '为沙特木门生产商定制热压机组，满足当地高温环境下的稳定生产需求。', descMic: 'Custom hot press units for a Saudi door manufacturer, meeting stable production needs in high-temperature environments.', color: 'linear-gradient(135deg, #7b3f00, #c8a84b)' },
  { id: 3, slug: 'nigeria-timber-processing-multi-blade-saw', region: '🇳🇬 Nigeria', icon: '⚙️', productCn: '多片锯', productMic: 'Multi-blade Saw', titleCn: '尼日利亚木材加工厂', titleMic: 'Nigeria Timber Processing Factory', descCn: '向尼日利亚木材加工厂出口多片锯设备，帮助客户实现高效开料生产。', descMic: 'Exported multi-blade saw equipment to a Nigerian timber processing factory for efficient cutting production.', color: 'linear-gradient(135deg, #1a4a2e, #2d9e5f)' },
  { id: 4, slug: 'pakistan-flooring-four-side-planer', region: '🇵🇰 Pakistan', icon: '📐', productCn: '四面刨', productMic: 'Four-side Planer', titleCn: '巴基斯坦地板生产线', titleMic: 'Pakistan Flooring Production Line', descCn: '为巴基斯坦地板制造商提供四面刨生产线，产品精度达到国际标准。', descMic: 'Provided four-side planer production line for a Pakistani flooring manufacturer meeting international standards.', color: 'linear-gradient(135deg, #3d1a6b, #8b5cf6)' },
  { id: 5, slug: 'malaysia-panel-factory-lifting-system', region: '🇲🇾 Malaysia', icon: '🔧', productCn: '升降平台', productMic: 'Lifting Platform', titleCn: '马来西亚板材工厂升降系统', titleMic: 'Malaysia Panel Factory Lifting System', descCn: '为马来西亚板材工厂配套升降平台系统，优化生产线物料流转效率。', descMic: 'Supplied lifting platform systems for a Malaysian panel factory to optimize material flow efficiency.', color: 'linear-gradient(135deg, #4a2000, #c87941)' },
  { id: 6, slug: 'indonesia-plywood-factory-cold-press', region: '🇮🇩 Indonesia', icon: '⬛', productCn: '冷压机', productMic: 'Cold Press', titleCn: '印尼胶合板厂整线设备', titleMic: 'Indonesia Plywood Factory Full Line', descCn: '为印尼胶合板工厂提供整线冷压设备，实现年产能大幅提升。', descMic: 'Full cold press line for an Indonesian plywood factory, achieving significant annual capacity increase.', color: 'linear-gradient(135deg, #1a2744, #2d6fd4)' },
]
</script>

<style lang="scss" scoped>
.page-hero {
  padding: 160px 0 80px;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/cases-hero.webp') center 30% / cover no-repeat;
  .tag { margin-bottom: $s-md; }
  h1 { color: white; margin-bottom: $s-md; }
  p { color: rgba(255,255,255,0.6); font-size: $fs-lg; }

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }
}

.section { padding-top: $s-lg; }

.section-cta {
  padding: $s-4xl 0;
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/contact-get-in-touch-bg.webp') center / cover no-repeat;
  color: $c-text-white;
  h2, h3, h4 { color: $c-text-white; }
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $s-lg;
  @media (max-width: $bp-lg) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: $bp-sm) { grid-template-columns: 1fr; }
}

.case-card {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    transform: translateY(-2px);
  }

  .case-img {
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: $s-md;
    position: relative;
  }

  .case-region {
    font-size: $fs-xs;
    font-weight: $fw-semibold;
    color: white;
    background: rgba(0,0,0,0.4);
    padding: 4px 10px;
    border-radius: $r-full;
  }

  .case-icon { font-size: 32px; }

  .case-body {
    padding: $s-lg;
    .tag { margin-bottom: $s-sm; }
    h3 { font-size: $fs-lg; margin-bottom: $s-sm; }
    p { color: $c-text-secondary; font-size: $fs-sm; line-height: 1.7; }
  }
}
</style>
