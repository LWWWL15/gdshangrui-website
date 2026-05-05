<template>
  <div class="product-detail-page">
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/products">{{ t('产品', 'Products') }}</router-link>
          <span class="separator">/</span>
          <router-link :to="`/products/${seriesId}`">{{ t(series?.zh, series?.en) }}</router-link>
          <span class="separator">/</span>
          <span class="current">{{ model?.model }}</span>
        </nav>
        <h1>{{ model?.model }}</h1>
        <p v-if="model?.zh || model?.en" class="model-title">{{ t(model?.zh, model?.en) }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="detail-grid">
          <!-- 产品图片 + 缩略图（左侧） -->
          <div class="product-image-wrap">
            <div class="product-image" :style="{ background: series?.color }">
              <span v-if="!currentImage" class="placeholder-icon">{{ series?.icon }}</span>
              <template v-else>
                <img :src="currentImage" :alt="model?.model" />
                <!-- 左右箭头 -->
                <template v-if="images.length > 1">
                  <button class="img-nav-btn img-prev" @click="prevImage" aria-label="Previous image">&lt;</button>
                  <button class="img-nav-btn img-next" @click="nextImage" aria-label="Next image">&gt;</button>
                </template>
              </template>
            </div>
            <!-- 缩略图条（在图片下方） -->
            <div v-if="images.length > 1" class="image-thumbnails">
              <button
                v-for="(img, idx) in images"
                :key="idx"
                class="thumb-btn"
                :class="{ active: idx === imageIndex }"
                @click="imageIndex = idx"
              >
                <img :src="img" :alt="`Thumbnail ${idx + 1}`" />
              </button>
            </div>
          </div>

          <!-- 产品信息（右侧） -->
          <div class="product-info">
            <!-- 产品参数 -->
            <div v-if="model?.specs && model.specs.length > 0" class="specs-section">
              <h2>{{ t('技术参数', 'Technical Specifications') }}</h2>
              <table class="specs-table">
                <tr v-for="spec in model.specs" :key="spec.keyZh">
                  <td class="spec-key">{{ t(spec.keyZh, spec.keyEn) }}</td>
                  <td class="spec-value">{{ isZh ? spec.valueZh : spec.valueEn }}</td>
                </tr>
              </table>
            </div>

            <!-- 待补充提示 -->
            <div v-else class="specs-placeholder">
              <p>{{ t('产品参数待补充，请联系我们获取详细信息。', 'Specifications to be updated. Please contact us for details.') }}</p>
            </div>

            <!-- 产品特点 -->
            <div v-if="model?.features && model.features.length > 0" class="features-section">
              <h2>{{ t('产品特点', 'Features') }}</h2>
              <ul class="features-list">
                <li v-for="(feature, idx) in model.features" :key="idx">
                  {{ t(feature.zh, feature.en) }}
                </li>
              </ul>
            </div>

            <!-- 询价按钮 -->
            <div class="cta-buttons">
              <router-link to="/contact" class="btn btn-primary btn-lg">
                {{ t('立即询价', 'Get a Quote') }}
              </router-link>
              <a :href="`https://wa.me/8613929151908?text=${whatsappText}`" target="_blank" class="btn btn-whatsapp btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.363z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- 同系列其他型号 -->
        <div v-if="otherModels.length > 0" class="other-models">
          <h2>{{ t('同系列其他型号', 'Other Models in This Series') }}</h2>
          <div class="models-row">
            <router-link
              v-for="m in otherModels"
              :key="m.id"
              :to="`/products/${seriesId}/${m.id}`"
              class="other-model-card"
              :class="{ active: m.id === modelId }"
            >
              <span class="model-name">{{ m.model }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang'
import { getSeriesById, getModelById } from '@/data/products'

const { t, lang } = useLang()
const isZh = computed(() => lang.value === 'zh')
const route = useRoute()

const seriesId = computed(() => route.params.seriesId as string)
const modelId = computed(() => route.params.modelId as string)

const series = computed(() => getSeriesById(seriesId.value))
const model = computed(() => getModelById(seriesId.value, modelId.value))
const images = computed(() => model.value?.images || [])
const currentImage = computed(() => images.value[imageIndex.value] || null)
const imageIndex = ref(0)
watch(modelId, () => { imageIndex.value = 0 })

const prevImage = () => {
  if (imageIndex.value > 0) imageIndex.value--
}
const nextImage = () => {
  if (imageIndex.value < images.value.length - 1) imageIndex.value++
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// 同系列其他型号
const otherModels = computed(() => {
  if (!series.value) return []
  return series.value.models.filter(m => m.id !== modelId.value)
})

// WhatsApp 询价文本
const whatsappText = computed(() => {
  const modelName = model.value?.model || ''
  const seriesName = series.value?.en || ''
  return encodeURIComponent(`Hi, I'm interested in ${modelName} ${seriesName}. Please send me more details.`)
})
</script>

<style lang="scss" scoped>
@use 'sass:color';

.page-hero {
  padding: 140px 0 60px;
  background: $c-bg-secondary;

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }

  .breadcrumb {
    font-size: $fs-sm;
    margin-bottom: $s-md;

    a {
      color: $c-text-muted;
      text-decoration: none;
      transition: color $t-fast;

      &:hover { color: $c-accent; }
    }

    .separator {
      margin: 0 $s-sm;
      color: $c-text-muted;
    }

    .current {
      color: $c-text-primary;
      font-weight: $fw-semibold;
    }
  }

  h1 {
    color: $c-accent;
    font-weight: $fw-bold;
    margin-bottom: $s-xs;
  }

  .model-title {
    color: $c-text-secondary;
    font-size: $fs-lg;
  }
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $s-3xl;
  align-items: start;

  @media (max-width: $bp-md) {
    grid-template-columns: 1fr;
  }
}

.product-image-wrap {
  display: flex;
  flex-direction: column;
}

.product-image {
  aspect-ratio: 1 / 1;
  border-radius: $r-xl;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #f5f5f5;
  }

  .placeholder-icon {
    font-size: 120px;
  }
}

.img-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 2;
  transition: background $t-fast;

  &:hover { background: rgba(0, 0, 0, 0.7); }

  &.img-prev { left: $s-md; }
  &.img-next { right: $s-md; }
}

.image-thumbnails {
  display: flex;
  gap: $s-sm;
  margin-top: $s-md;
  overflow-x: auto;
  padding-bottom: $s-xs;

  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: $c-border; border-radius: 2px; }
}

.thumb-btn {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: $r-md;
  overflow: hidden;
  border: 2px solid transparent;
  padding: 0;
  cursor: pointer;
  transition: border-color $t-fast;

  &.active { border-color: $c-accent; }
  &:hover { border-color: rgba($c-accent, 0.5); }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-info {
  h2 {
    font-size: $fs-xl;
    font-weight: $fw-bold;
    margin-bottom: $s-md;
    color: $c-text-primary;
  }
}

.specs-section {
  margin-bottom: $s-xl;
}

.specs-table {
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid $c-border;

    &:last-child { border-bottom: none; }
  }

  td {
    padding: $s-md 0;

    &.spec-key {
      color: $c-text-muted;
      width: 40%;
    }

    &.spec-value {
      color: $c-text-primary;
      font-weight: $fw-semibold;
    }
  }
}

.specs-placeholder {
  padding: $s-xl;
  background: $c-bg-secondary;
  border-radius: $r-lg;
  margin-bottom: $s-xl;

  p {
    color: $c-text-secondary;
    margin: 0;
  }
}

.features-section {
  margin-bottom: $s-xl;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: $s-lg;
    margin-bottom: $s-sm;
    color: $c-text-primary;
    line-height: 1.6;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: $c-accent;
      font-weight: $fw-bold;
    }
  }
}

.cta-buttons {
  display: flex;
  gap: $s-md;
  flex-wrap: wrap;

  .btn-whatsapp {
    background: #25D366;
    color: white;
    display: inline-flex;
    align-items: center;
    gap: $s-sm;

    &:hover {
      background: color.adjust(#25D366, $lightness: -10%);
    }
  }
}

.other-models {
  margin-top: $s-3xl;
  padding-top: $s-2xl;
  border-top: 1px solid $c-border;

  h2 {
    font-size: $fs-lg;
    font-weight: $fw-bold;
    margin-bottom: $s-lg;
  }
}

.models-row {
  display: flex;
  flex-wrap: wrap;
  gap: $s-sm;
}

.other-model-card {
  display: inline-block;
  padding: $s-sm $s-lg;
  background: $c-bg-secondary;
  border: 1px solid $c-border;
  border-radius: $r-sm;
  text-decoration: none;
  color: $c-text-primary;
  font-size: $fs-sm;
  transition: all $t-fast;

  &:hover {
    border-color: $c-accent;
    color: $c-accent;
  }

  &.active {
    background: $c-accent;
    border-color: $c-accent;
    color: white;
    pointer-events: none;
  }
}
</style>
