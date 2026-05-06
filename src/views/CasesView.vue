<template>
  <div class="cases-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('客户案例', 'Cases') }}</span>
        <h1>{{ t('合作案例', 'Our Cases') }}</h1>
        <p>{{ t('来自全球20余个国家的客户信赖', 'Trusted by clients from 20+ countries worldwide') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cases-grid">
          <router-link v-for="c in cases" :key="c.id" :to="'/cases/' + c.id" class="card case-card">
            <div class="case-img" :style="{ background: c.color }">
              <span class="case-region">{{ c.region }}</span>
              <span class="case-icon">{{ c.icon }}</span>
            </div>
            <div class="case-body">
              <span class="tag">{{ t(c.productZh, c.productEn) }}</span>
              <h3>{{ t(c.titleZh, c.titleEn) }}</h3>
              <p>{{ t(c.descZh, c.descEn) }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-dark">
      <div class="container" style="text-align:center;">
        <h2 style="color:white; margin-bottom:16px;">{{ t('成为我们的合作伙伴', 'Become Our Partner') }}</h2>
        <p style="color:rgba(255,255,255,0.6); margin-bottom:32px; font-size:18px;">{{ t('联系我们，获取专属解决方案', 'Contact us for a customized solution') }}</p>
        <router-link to="/contact" class="btn btn-primary btn-lg">{{ t('立即联系', 'Contact Now') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'
const { t } = useLang()

const cases = [
  { id: 1, region: '🇻🇳 Vietnam', icon: '⬛', productZh: '冷压机', productEn: 'Cold Press', titleZh: '越南家具厂冷压生产线', titleEn: 'Vietnam Furniture Factory Cold Press Line', descZh: '为越南某大型家具制造商提供10台冷压机，用于板材压合生产线，显著提升产能。', descEn: 'Supplied 10 cold press machines to a large Vietnamese furniture manufacturer, significantly improving production capacity.', color: 'linear-gradient(135deg, #1a2744, #1a6fd4)' },
  { id: 2, region: '🇸🇦 Saudi Arabia', icon: '🔶', productZh: '热压机', productEn: 'Hot Press', titleZh: '沙特木门生产商热压设备', titleEn: 'Saudi Arabia Door Manufacturer Hot Press', descZh: '为沙特木门生产商定制热压机组，满足当地高温环境下的稳定生产需求。', descEn: 'Custom hot press units for a Saudi door manufacturer, meeting stable production needs in high-temperature environments.', color: 'linear-gradient(135deg, #7b3f00, #c8a84b)' },
  { id: 3, region: '🇳🇬 Nigeria', icon: '⚙️', productZh: '多片锯', productEn: 'Multi-blade Saw', titleZh: '尼日利亚木材加工厂', titleEn: 'Nigeria Timber Processing Factory', descZh: '向尼日利亚木材加工厂出口多片锯设备，帮助客户实现高效开料生产。', descEn: 'Exported multi-blade saw equipment to a Nigerian timber processing factory for efficient cutting production.', color: 'linear-gradient(135deg, #1a4a2e, #2d9e5f)' },
  { id: 4, region: '🇵🇰 Pakistan', icon: '📐', productZh: '四面刨', productEn: 'Four-side Planer', titleZh: '巴基斯坦地板生产线', titleEn: 'Pakistan Flooring Production Line', descZh: '为巴基斯坦地板制造商提供四面刨生产线，产品精度达到国际标准。', descEn: 'Provided four-side planer production line for a Pakistani flooring manufacturer meeting international standards.', color: 'linear-gradient(135deg, #3d1a6b, #8b5cf6)' },
  { id: 5, region: '🇲🇾 Malaysia', icon: '🔧', productZh: '升降平台', productEn: 'Lifting Platform', titleZh: '马来西亚板材工厂升降系统', titleEn: 'Malaysia Panel Factory Lifting System', descZh: '为马来西亚板材工厂配套升降平台系统，优化生产线物料流转效率。', descEn: 'Supplied lifting platform systems for a Malaysian panel factory to optimize material flow efficiency.', color: 'linear-gradient(135deg, #4a2000, #c87941)' },
  { id: 6, region: '🇮🇩 Indonesia', icon: '⬛', productZh: '冷压机', productEn: 'Cold Press', titleZh: '印尼胶合板厂整线设备', titleEn: 'Indonesia Plywood Factory Full Line', descZh: '为印尼胶合板工厂提供整线冷压设备，实现年产能大幅提升。', descEn: 'Full cold press line for an Indonesian plywood factory, achieving significant annual capacity increase.', color: 'linear-gradient(135deg, #1a2744, #2d6fd4)' },
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
