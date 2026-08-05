<template>
  <div class="product-detail-page">
    <!-- Marquee Banner -->
    <div
      class="ticker-banner"
      aria-label="滚动公告"
    >
      <div class="ticker-track">
        <span
          v-for="n in 5"
          :key="n"
          class="ticker-item"
        >
          {{ t('所有产品出厂前均可提供试机视频和图片，也支持寄样品试机，如有需要请提前联系', 'All products can provide trial machine videos and photos before delivery. We also support sending samples for trial testing. Please contact us in advance if needed.', 'Tất cả sản phẩm có thể cung cấp video và hình ảnh chạy thử trước khi giao hàng. Chúng tôi cũng hỗ trợ gửi mẫu để chạy thử. Vui lòng liên hệ trước nếu cần.', 'Перед отгрузкой по любой модели может быть предоставлено видео и фото пробного запуска; также возможна отправка образцов для тестирования — при необходимости просим связаться с нами заранее.') }}
          <span class="dot">●</span>
        </span>
      </div>
    </div>

    <section class="page-hero" :style="{ background: heroBackground }">
      <div class="container">
        <nav class="breadcrumb">
          <router-link :to="`/${lang}/products`">{{ t('产品', 'Products', 'Sản phẩm', 'Продукция') }}</router-link>
          <span class="separator">/</span>
          <router-link :to="`/${lang}/products/${seriesId}`">{{ t(series?.cn, series?.mic,  series?.vn,  series?.ru) }}</router-link>
          <span class="separator">/</span>
          <span class="current">{{ t(model?.model, model?.mic,  model?.vn,  model?.ru) }}</span>
        </nav>
        <h1>{{ model?.model?.replace(/立铣$/, '') }}</h1>
        <p v-if="model?.cn || model?.mic" class="model-title">{{ t(model?.cn, model?.mic,  model?.vn,  model?.ru) }}</p>
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
                <img :src="img" :alt="`Thumbnail ${idx + 1}`" loading="lazy" />
              </button>
            </div>
          </div>

          <!-- 产品信息（右侧） -->
          <div class="product-info">
            <!-- 产品参数 -->
            <div v-if="model?.specs && model.specs.length > 0" class="specs-section">
              <h2>{{ t('技术参数', 'Technical Specifications', 'Thông số kỹ thuật', 'Технические характеристики') }}</h2>
              <table class="specs-table">
                <tr v-for="spec in model.specs" :key="spec.keyCn">
                  <td class="spec-key">{{ t(spec.keyCn, spec.keyMic,  spec.keyVn,  spec.keyRu) }}</td>
                  <td class="spec-value">{{ t(spec.valueCn, spec.valueMic,  spec.valueVn,  spec.valueRu) }}</td>
                </tr>
              </table>
            </div>

            <!-- 复制链接 + 复制参数按钮（在规格有内容时显示） -->
            <div v-if="model?.specs && model.specs.length > 0" class="copy-link-wrap">
              <button class="btn btn-copy-link" @click="copyLink" :class="{ copied }">
                <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ copied ? t('链接已复制', 'Link Copied', 'Đã sao chép liên kết', 'Ссылка скопирована') : t('复制产品链接', 'Copy Product Link', 'Sao chép liên kết sản phẩm', 'Скопировать ссылку на товар') }}
              </button>
              <button class="btn btn-copy-link" @click="copySpecs" :class="{ copied: specsCopied }">
                <svg v-if="!specsCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ specsCopied ? t('参数已复制', 'Specs Copied', 'Đã sao chép thông số', 'Характеристики скопированы') : t('复制产品参数', 'Copy Product Specs', 'Sao chép thông số sản phẩm', 'Скопировать характеристики товара') }}
              </button>
            </div>

            <!-- 待补充提示 -->
            <div v-else class="specs-placeholder">
              <p>{{ t('产品参数待补充，请联系我们获取详细信息。', 'Specifications to be updated. Please contact us for details.', 'Thông số sản phẩm đang được cập nhật. Vui lòng liên hệ với chúng tôi để biết chi tiết.', 'Технические характеристики уточняются. Пожалуйста, свяжитесь с нами для получения подробной информации.') }}</p>
            </div>

            <!-- 产品特点 -->
            <div v-if="model?.features && model.features.length > 0" class="features-section">
              <h2>{{ t('产品特点', 'Features', 'Tính năng', 'Особенности') }}</h2>
              <ul class="features-list">
                <li v-for="(feature, idx) in model.features" :key="idx">
                  {{ t(feature.cn, feature.mic,  feature.vn,  feature.vn ?? feature.ru) }}
                </li>
              </ul>
            </div>

            <!-- 询价按钮 -->
            <div class="cta-buttons">
              <router-link :to="`/${lang}/contact`" class="btn btn-primary btn-lg">
                {{ t('立即询价', 'Get a Quote', 'Nhận báo giá', 'Запросить цену') }}
              </router-link>
              <a :href="`https://wa.me/8613929151908?text=${whatsappText}`" target="_blank" class="btn btn-whatsapp btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.363z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- 同系列其他型号 -->
        <div v-if="otherModels.length > 0" class="other-models">
          <h2>{{ t('同系列其他型号', 'Other Models in This Series', 'Các mẫu khác trong dòng này', 'Другие модели в этой серии') }}</h2>
          <div class="models-row">
            <router-link
              v-for="m in otherModels"
              :key="m.id"
              :to="`/${lang}/products/${seriesId}/${m.id}`"
              class="other-model-card"
              :class="{ active: m.id === modelId }"
            >
              <span class="model-name">{{ m.model.replace(/立铣$/, '') }}</span>
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
const isZh = computed(() => lang.value === 'cn')
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
  const seriesName = series.value?.mic || ''
  return encodeURIComponent(`Hi, I'm interested in ${modelName} ${seriesName}. Please send me more details.`)
})

const heroBackground = computed(() => {
  return ''
})

// BreadcrumbList Schema
const breadcrumbSchema = computed(() => {
  if (!series.value || !model.value) return null
  const langPrefix = isZh.value ? '/cn' : '/mic'
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://gdshangrui.com'
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isZh.value ? '首页' : 'Home',
        item: `${origin}${langPrefix}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isZh.value ? '产品' : 'Products',
        item: `${origin}${langPrefix}/products`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isZh.value ? series.value.cn : series.value.mic,
        item: `${origin}${langPrefix}/products/${seriesId.value}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: model.value.model,
        item: typeof window !== 'undefined' ? window.location.href : `${origin}${langPrefix}/products/${seriesId.value}/${modelId.value}`,
      },
    ],
  }
})

// Product Schema
const productSchema = computed(() => {
  if (!series.value || !model.value) return null
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://gdshangrui.com'
  const specs: Record<string, string> = {}
  if (model.value.specs) {
    model.value.specs.forEach(spec => {
      specs[isZh.value ? spec.keyCn : spec.keyMic] = isZh.value ? spec.valueCn : spec.valueMic
    })
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: model.value.model,
    description: isZh.value ? series.value.descCn : series.value.descMic,
    image: images.value[0] || undefined,
    brand: {
      '@type': 'Brand',
      name: 'SHANGRUIJX',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Foshan Shunde SHANGRUI Machinery Co., Ltd.',
      url: origin,
    },
    countryOfOrigin: 'CN',
    ...(Object.keys(specs).length > 0 ? { additionalProperty: Object.entries(specs).map(([key, value]) => ({ '@type': 'PropertyValue', name: key, value })) } : {}),
  }
})

import { useHead } from '@unhead/vue'
useHead({
  script: [
    ...(breadcrumbSchema.value ? [{ type: 'application/ld+json', children: JSON.stringify(breadcrumbSchema.value) }] : []),
    ...(productSchema.value ? [{ type: 'application/ld+json', children: JSON.stringify(productSchema.value) }] : []),
  ],
})

// 复制链接
const copied = ref(false)
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Fallback for older browsers
    const input = document.createElement('input')
    input.value = window.location.href
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

// 复制产品参数（中英文自适应）
const specsCopied = ref(false)
const copySpecs = async () => {
  if (!model.value?.specs) return
  const lines = model.value.specs.map(spec => {
    const key = isZh.value ? spec.keyCn : spec.keyMic
    const value = isZh.value ? spec.valueCn : spec.valueMic
    return `${key}: ${value}`
  })
  const text = lines.join('\n')
  try {
    await navigator.clipboard.writeText(text)
    specsCopied.value = true
    setTimeout(() => { specsCopied.value = false }, 2000)
  } catch {
    // Fallback for older browsers
    const input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    specsCopied.value = true
    setTimeout(() => { specsCopied.value = false }, 2000)
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:color';

.ticker-banner {
  background: #ffffff;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: 80px;
}

.ticker-track {
  display: flex;
  align-items: center;
  height: 100%;
  will-change: transform;
  animation: ticker 16s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
}

.ticker-item {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  font-weight: bold;
  color: #000000;
  font-size: 20px;
  white-space: nowrap;
  padding: 0 24px;

  &:first-child {
    padding-left: 0;
  }

  .dot {
    color: #000000;
    font-size: 10px;
    opacity: 0.5;
    margin-left: 24px;
  }
}

@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-16.6667%); }
}

.section {
  padding-top: $s-xl;
}

.page-hero {
  padding: 40px 0 0;
  background: white;

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

.copy-link-wrap {
  margin-bottom: $s-xl;
  display: flex;
  gap: $s-sm;
  flex-wrap: wrap;
}

.btn-copy-link {
  display: inline-flex;
  align-items: center;
  gap: $s-sm;
  padding: $s-sm $s-lg;
  background: $c-bg-secondary;
  border: 1px solid $c-border;
  border-radius: $r-md;
  color: $c-text-secondary;
  font-size: $fs-sm;
  cursor: pointer;
  transition: all $t-fast;

  &:hover {
    border-color: $c-accent;
    color: $c-accent;
  }

  &.copied {
    background: rgba($c-accent, 0.1);
    border-color: $c-accent;
    color: $c-accent;
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
