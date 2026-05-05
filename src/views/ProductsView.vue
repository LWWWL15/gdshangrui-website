<template>
  <div class="products-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('产品展示', 'Products') }}</span>
        <h1>{{ t('主要产品系列', 'Our Product Lines') }}</h1>
        <p>{{ t('专业木工机械，满足多样化生产需求', 'Professional woodworking machinery for diverse production needs') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="series-grid">
          <router-link
            v-for="series in productSeries"
            :key="series.id"
            :to="`/products/${series.id}`"
            class="series-card card"
          >
            <div class="series-visual" :style="series.color.startsWith('url') ? { backgroundImage: series.color } : { background: series.color }">
              <span v-if="!series.color.startsWith('url')" class="series-icon">{{ series.icon }}</span>
            </div>
            <div class="series-info">
              <h3>{{ t(series.zh, series.en) }}</h3>
              <p class="series-desc">{{ t(series.descZh, series.descEn) }}</p>
              <div class="series-models">
                <span class="model-count">{{ series.models.length }} {{ t('个型号', 'Models') }}</span>
              </div>
              <span class="view-more">{{ t('查看详情 →', 'View Details →') }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'
import { productSeries } from '@/data/products'
const { t } = useLang()
</script>

<style lang="scss" scoped>
.page-hero {
  padding: 160px 0 80px;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/products-hero.webp') center 18% / cover no-repeat;
  .tag { margin-bottom: $s-md; }
  h1 { color: white; margin-bottom: $s-md; }
  p { color: rgba(255,255,255,0.6); font-size: $fs-lg; }

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }
}

.series-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: $s-xl;
}

.series-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform $t-normal, box-shadow $t-normal;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);

    .view-more { color: $c-accent; }
  }
}

.series-visual {
  aspect-ratio: 3 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-position: center;
}

.series-icon {
  font-size: 64px;
}

.series-info {
  padding: $s-xl;
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: $fs-xl;
    font-weight: $fw-bold;
    margin-bottom: $s-sm;
    color: $c-text-primary;
  }
}

.series-desc {
  color: $c-text-secondary;
  font-size: $fs-sm;
  line-height: 1.6;
  margin-bottom: $s-md;
  flex: 1;
}

.series-models {
  margin-bottom: $s-md;
}

.model-count {
  display: inline-block;
  background: $c-bg-secondary;
  border: 1px solid $c-border;
  border-radius: $r-full;
  padding: 4px 12px;
  font-size: $fs-xs;
  color: $c-text-muted;
}

.view-more {
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  color: $c-text-secondary;
  transition: color $t-fast;
}
</style>
