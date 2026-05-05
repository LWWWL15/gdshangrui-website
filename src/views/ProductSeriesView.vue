<template>
  <div class="series-page">
    <section class="page-hero" :style="series?.color ? { background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), ${series.color} center / cover no-repeat` } : {}">
      <div class="container">
        <router-link to="/products" class="back-link">← {{ t('返回产品列表', 'Back to Products') }}</router-link>
        <h1>{{ t(series?.zh, series?.en) }}</h1>
        <p class="series-desc">{{ t(series?.descZh, series?.descEn) }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- 有型号的系列 -->
        <div v-if="series?.models && series.models.length > 0" class="models-grid">
          <router-link
            v-for="model in series.models"
            :key="model.id"
            :to="`/products/${seriesId}/${model.id}`"
            class="model-card card"
          >
            <div class="model-image" :style="{ background: series?.color }">
              <span v-if="!model.images?.length" class="placeholder-icon">{{ series?.icon }}</span>
              <img v-else :src="model.images[0]" :alt="model.model" />
            </div>
            <div class="model-info">
              <h3 class="model-name">{{ model.model }}</h3>
              <p v-if="model.zh || model.en" class="model-title">{{ t(model.zh, model.en) }}</p>
              <span class="view-detail">{{ t('查看详情 →', 'View Details →') }}</span>
            </div>
          </router-link>
        </div>

        <!-- 无型号的系列 -->
        <div v-else class="no-models">
          <div class="placeholder-card card">
            <div class="placeholder-visual" :style="{ background: series?.color }">
              <span class="placeholder-icon-large">{{ series?.icon }}</span>
            </div>
            <div class="placeholder-info">
              <h3>{{ t(series?.zh, series?.en) }}</h3>
              <p>{{ t(series?.descZh, series?.descEn) }}</p>
              <router-link to="/contact" class="btn btn-primary">
                {{ t('联系我们获取详情', 'Contact Us for Details') }}
              </router-link>
            </div>
          </div>
        </div>

        <!-- 快速询价 -->
        <div class="cta-section">
          <router-link to="/contact" class="btn btn-outline-dark btn-lg">
            {{ t('询价此系列产品', 'Get Quote for This Series') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang'
import { getSeriesById } from '@/data/products'

const { t } = useLang()
const route = useRoute()

const seriesId = computed(() => route.params.seriesId as string)
const series = computed(() => getSeriesById(seriesId.value))
</script>

<style lang="scss" scoped>
.page-hero {
  padding: 140px 0 60px;
  background: $c-bg-secondary;

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }

  .back-link {
    color: white;
    font-size: $fs-sm;
    display: inline-block;
    margin-bottom: $s-md;
    transition: color $t-fast;

    &:hover { color: $c-accent-hover; }
  }

  h1 {
    color: white;
    font-weight: $fw-bold;
    margin-bottom: $s-sm;
  }

  .series-desc {
    color: rgba(255,255,255,0.8);
    font-size: $fs-lg;
    max-width: 600px;
  }
}

.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $s-xl;
  margin-bottom: $s-3xl;

  @media (max-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
    gap: $s-sm;
  }
}

.model-card {
  text-decoration: none;
  color: inherit;
  transition: transform $t-normal, box-shadow $t-normal;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);

    .view-detail { color: $c-accent; }
  }
}

.model-image {
  height: 0;
  padding-bottom: 100%; /* 1:1 正方形 */
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .placeholder-icon {
    font-size: 64px;
  }
}

.model-info {
  padding: $s-lg;

  @media (max-width: $bp-sm) {
    padding: $s-sm;
  }

  .model-name {
    font-size: $fs-xl;
    font-weight: $fw-bold;
    color: $c-text-primary;
    margin-bottom: $s-xs;

    @media (max-width: $bp-sm) {
      font-size: $fs-sm;
    }
  }

  .model-title {
    font-size: $fs-sm;
    color: $c-text-secondary;
    margin-bottom: $s-sm;

    @media (max-width: $bp-sm) {
      font-size: $fs-xs;
      margin-bottom: $s-xs;
    }
  }

  .view-detail {
    font-size: $fs-sm;
    font-weight: $fw-semibold;
    color: $c-text-muted;
    transition: color $t-fast;

    @media (max-width: $bp-sm) {
      display: none;
    }
  }
}

.no-models {
  margin-bottom: $s-3xl;
}

.placeholder-card {
  display: grid;
  grid-template-columns: 300px 1fr;

  @media (max-width: $bp-md) {
    grid-template-columns: 1fr;
  }
}

.placeholder-visual {
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .placeholder-icon-large {
    font-size: 96px;
  }
}

.placeholder-info {
  padding: $s-2xl;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: $fs-2xl;
    font-weight: $fw-bold;
    margin-bottom: $s-md;
    color: $c-text-primary;
  }

  p {
    color: $c-text-secondary;
    line-height: 1.8;
    margin-bottom: $s-xl;
  }
}

.cta-section {
  text-align: center;
  padding-top: $s-xl;
  border-top: 1px solid $c-border;
}
</style>
