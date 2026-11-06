<template>
  <div class="series-page">
    <section class="page-hero" :style="series?.color ? { background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), ${series.color} center / cover no-repeat` } : {}">
      <div class="container">
        <router-link :to="`/${lang}/products`" class="back-link">← {{ t('返回产品列表', 'Back to Products', 'Quay lại danh sách sản phẩm', 'Вернуться к списку продукции') }}</router-link>
        <h1>{{ t(series?.cn, series?.mic, series?.vn, series?.ru) }}</h1>
        <p class="series-desc">{{ t(series?.descCn, series?.descMic,  series?.descVn,  series?.descRu) }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- 工位/定位叙述 -->
        <div v-if="series?.intro && series.intro.length > 0" class="series-intro">
          <p v-for="(para, idx) in series.intro" :key="idx" class="intro-para">
            {{ t(para.cn, para.mic, para.vn, para.ru) }}
          </p>
        </div>

        <!-- 卖点 -->
        <div v-if="series?.highlights && series.highlights.length > 0" class="highlights">
          <h2 class="block-title">{{ t('产品特点', 'Key Features', 'Đặc điểm', 'Особенности') }}</h2>
          <ul class="highlights-list">
            <li v-for="(item, idx) in series.highlights" :key="idx">
              <span class="hl-dot" aria-hidden="true"></span>
              <span>{{ t(item.cn, item.mic, item.vn, item.ru) }}</span>
            </li>
          </ul>
        </div>

        <!-- 有型号的系列 -->
        <div v-if="series?.models && series.models.length > 0" class="models-grid">
          <router-link
            v-for="model in series.models"
            :key="model.id"
            :to="`/${lang}/products/${seriesId}/${model.id}`"
            class="model-card card"
          >
            <div class="model-image" :style="{ background: series?.color }">
              <span v-if="!model.images?.length" class="placeholder-icon">{{ series?.icon }}</span>
              <img v-else :src="model.images[0]" :alt="model.model" loading="lazy" />
            </div>
            <div class="model-info">
              <h3 class="model-name">{{ model.model }}</h3>
              <p v-if="model.cn || model.mic" class="model-title">{{ t(model.cn, model.mic,  model.vn,  model.ru) }}</p>
              <span class="view-detail">{{ t('查看详情 →', 'View Details →',  t('查看详情 →', 'View Details →', 'Xem chi tiết →', 'Подробнее →'),  t('查看详情 →', 'View Details →', 'Xem chi tiết →', 'Подробнее →')) }}</span>
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
              <h3>{{ t(series?.cn, series?.mic, series?.vn, series?.ru) }}</h3>
              <p>{{ t(series?.descCn, series?.descMic,  series?.descVn,  series?.descRu) }}</p>
              <router-link :to="`/${lang}/contact`" class="btn btn-primary">
                {{ t('联系我们获取详情', 'Contact Us for Details', 'Liên hệ với chúng tôi để biết chi tiết', 'Свяжитесь с нами для подробностей') }}
              </router-link>
            </div>
          </div>
        </div>

        <!-- 选型需提供的资料 -->
        <div v-if="series?.selection && series.selection.length > 0" class="selection-box">
          <h2 class="block-title">
            {{ t('询价前请提供以下资料', 'Please Provide the Following for Quotation', 'Vui lòng cung cấp thông tin sau để nhận báo giá', 'Что указать для запроса цены') }}
          </h2>
          <ol class="selection-list">
            <li v-for="(item, idx) in series.selection" :key="idx">
              {{ t(item.cn, item.mic, item.vn, item.ru) }}
            </li>
          </ol>
        </div>

        <!-- 常见问题 -->
        <div v-if="series?.faq && series.faq.length > 0" class="faq-block">
          <h2 class="block-title">{{ t('常见问题', 'FAQ', 'Câu hỏi thường gặp', 'Частые вопросы') }}</h2>
          <div class="faq-list">
            <details v-for="(item, idx) in series.faq" :key="idx" class="faq-item">
              <summary>{{ t(item.q.cn, item.q.mic, item.q.vn, item.q.ru) }}</summary>
              <p>{{ t(item.a.cn, item.a.mic, item.a.vn, item.a.ru) }}</p>
            </details>
          </div>
        </div>

        <!-- 快速询价 -->
        <div class="cta-section">
          <router-link :to="`/${lang}/contact`" class="btn btn-outline-dark btn-lg">
            {{ t('询价此系列产品', 'Get Quote for This Series', 'Nhận báo giá cho dòng sản phẩm này', 'Запросить цену на эту серию') }}
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

const { t, tm, lang } = useLang()
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

// ---- 扩展内容块（工位叙述 / 卖点 / 选型资料 / FAQ）----

.block-title {
  font-size: $fs-xl;
  font-weight: $fw-bold;
  color: $c-text-primary;
  margin-bottom: $s-lg;
}

.series-intro {
  max-width: 900px;
  margin-bottom: $s-2xl;

  .intro-para {
    color: $c-text-secondary;
    line-height: 1.9;
    font-size: $fs-base;
    margin-bottom: $s-md;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.highlights {
  margin-bottom: $s-3xl;
}

.highlights-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: $s-md $s-xl;

  @media (max-width: $bp-sm) {
    grid-template-columns: 1fr;
    gap: $s-sm;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: $s-sm;
    color: $c-text-secondary;
    line-height: 1.7;
    font-size: $fs-sm;
  }

  .hl-dot {
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    margin-top: 8px;
    border-radius: $r-full;
    background: $c-accent;
  }
}

.selection-box {
  background: $c-bg-secondary;
  border: 1px solid $c-border;
  border-radius: $r-md;
  padding: $s-xl;
  margin-bottom: $s-3xl;

  @media (max-width: $bp-sm) {
    padding: $s-lg;
  }
}

.selection-list {
  list-style: none;
  counter-reset: selection;

  li {
    counter-increment: selection;
    display: flex;
    align-items: flex-start;
    gap: $s-sm;
    color: $c-text-secondary;
    line-height: 1.7;
    font-size: $fs-sm;
    margin-bottom: $s-xs;

    &::before {
      content: counter(selection);
      flex-shrink: 0;
      width: 22px;
      height: 22px;
      border-radius: $r-full;
      background: $c-accent;
      color: #fff;
      font-size: $fs-xs;
      font-weight: $fw-bold;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.faq-block {
  max-width: 900px;
  margin-bottom: $s-3xl;
}

.faq-item {
  border-bottom: 1px solid $c-border;
  padding: $s-md 0;

  &:first-child {
    border-top: 1px solid $c-border;
  }

  summary {
    cursor: pointer;
    font-size: $fs-base;
    font-weight: $fw-semibold;
    color: $c-text-primary;
    list-style: none;
    display: flex;
    align-items: center;
    gap: $s-sm;
    transition: color $t-fast;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: '+';
      margin-left: auto;
      color: $c-accent;
      font-size: $fs-xl;
      font-weight: $fw-regular;
      line-height: 1;
    }

    &:hover {
      color: $c-accent;
    }
  }

  &[open] summary::after {
    content: '−';
  }

  p {
    color: $c-text-secondary;
    line-height: 1.8;
    font-size: $fs-sm;
    margin-top: $s-sm;
    padding-left: $s-lg;
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
