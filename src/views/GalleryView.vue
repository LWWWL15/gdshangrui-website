import { useHead } from '@unhead/vue'
<template>
  <div class="gallery-view">
    <!-- Page header -->
    <section class="gallery-header">
      <div class="container">
        <h1>{{ t('出货现场', 'Delivery in Action', t('出货現場', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок'), t('出货現場', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок')) }}</h1>
        <p class="gallery-subtitle">{{ t('记录每一台设备的交付瞬间', 'Capturing every equipment delivery moment', t('记录每一台设备的交付瞬间', 'Capturing every equipment delivery moment', 'Lưu lại mỗi khoảnh khắc giao hàng thiết bị', 'Фиксируем каждый момент поставки оборудования'), t('记录每一台设备的交付瞬间', 'Capturing every equipment delivery moment', 'Lưu lại mỗi khoảnh khắc giao hàng thiết bị', 'Фиксируем каждый момент поставки оборудования')) }}</p>
        <p v-if="loadedCount > 0" class="gallery-count">{{ t('已加载 :count 张，共 :total 张', 'Loaded :count of :total photos', t('已加载 :count 张，共 :total 张', 'Loaded :count of :total photos', 'Đã tải :count trên :total ảnh', 'Загружено :count из :total фото'), t('已加载 :count 张，共 :total 张', 'Loaded :count of :total photos', 'Đã tải :count trên :total ảnh', 'Загружено :count из :total фото')).replace(':count', String(loadedCount)).replace(':total', String(totalCount)) }}</p>
      </div>
    </section>

    <!-- Masonry grid: lazy load with IntersectionObserver -->
    <section class="gallery-section">
      <div class="container">
        <div ref="gridEl" class="masonry-grid">
          <div
            v-for="(img, idx) in visibleImages"
            :key="img.src"
            class="masonry-item"
          >
            <img
              :data-src="img.src"
              :alt="img.alt"
              :class="['gallery-photo', { 'is-loaded': img.loaded }]"
              :src="img.loaded ? img.src : (img.placeholder || 'data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=')"
              @load="onImgLoad(idx)"
            />
            <div v-if="img.loaded" class="photo-overlay">
              <span class="photo-date">{{ img.date }}</span>
              <span class="photo-machine">{{ img.machine }}</span>
            </div>
          </div>
        </div>

        <div v-if="loading" class="gallery-loading">
          {{ t('加载中...', 'Loading...', t('加载中...', 'Loading...', 'Đang tải...', 'Загрузка...'), t('加载中...', 'Loading...', 'Đang tải...', 'Загрузка...')) }}
        </div>

        <div v-if="!hasMore && loadedCount > 0" class="gallery-end">
          {{ t('已经到底了', 'End of gallery', t('已经到底了', 'End of gallery', 'Đã đến cuối', 'Конец галереи'), t('已经到底了', 'End of gallery', 'Đã đến cuối', 'Конец галереи')) }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLang } from '@/composables/useLang'
const { t } = useLang()

// ===== Config =====
const PAGE_SIZE = 48
// Filename parser: 2026-01-15_MH3848X120T_xxx.jpg
//   group 1: YYYY-MM-DD
//   group 2: machine name (e.g. MH3848X120T or MH3248x50T)
const FILENAME_RE = /^(\d{4}-\d{2}-\d{2})_(.+?)(?:[_-].*)?\.(?:jpe?g|png|webp)$/i

// ===== State =====
// allImages: { src, alt, date, machine, loaded }[]
const allImages = ref([])
const visibleCount = ref(PAGE_SIZE)
const loadedCount = ref(0)
const loading = ref(false)
const gridEl = ref<HTMLElement | null>(null)

// Pre-parse the image manifest
async function loadManifest() {
  try {
    const r = await fetch('/gallery-manifest.json', { cache: 'no-store' })
    if (!r.ok) throw new Error('manifest not found')
    const data: { files: string[] } = await r.json()
    allImages.value = data.files.map((rel) => {
      const m = rel.match(FILENAME_RE)
      const date = m ? m[1] : ''
      const machine = m ? m[2] : ''
      return {
        src: '/' + rel.replace(/^\/+/, ''),
        alt: machine ? `${machine} - ${date}` : rel,
        date,
        machine,
        loaded: false,
      }
    })
  } catch (e) {
    console.warn('Gallery manifest not available yet:', e)
    allImages.value = []
  }
}

const totalCount = computed(() => allImages.value.length)
const visibleImages = computed(() => allImages.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < allImages.value.length)

// IntersectionObserver to lazy-load images
let observer: IntersectionObserver | null = null
function setupObserver() {
  if (!gridEl.value) return
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const img = entry.target
        const idx = Number(img.dataset.idx)
        if (entry.isIntersecting) {
          // Trigger real src load
          const realSrc = img.dataset.src
          if (realSrc && !img.src.endsWith(realSrc)) {
            img.src = realSrc
          }
          if (!Number.isNaN(idx)) {
            const target = allImages.value[idx]
            if (target) target.loaded = true
          }
        }
      }
    },
    { rootMargin: '200px' }
  )
  // Re-observe all .gallery-photo
  if (gridEl.value) {
    gridEl.value.querySelectorAll('.gallery-photo').forEach((el) => observer?.observe(el))
  }
}

function onImgLoad(idx: number) {
  const target = allImages.value[idx]
  if (target) target.loaded = true
  loadedCount.value++
}

// Load more on scroll to bottom
function onScroll() {
  if (loading.value || !hasMore.value) return
  const scrollPos = window.innerHeight + window.scrollY
  const docHeight = document.documentElement.scrollHeight
  if (docHeight - scrollPos < 600) {
    loading.value = true
    setTimeout(() => {
      visibleCount.value = Math.min(visibleCount.value + PAGE_SIZE, allImages.value.length)
      loading.value = false
      // Re-observe new images
      setTimeout(setupObserver, 50)
    }, 200)
  }
}

onMounted(async () => {
  await loadManifest()
  // Re-shuffle (random order) for variety
  if (allImages.value.length > 0) {
    allImages.value = allImages.value
      .map((x) => [Math.random(), x])
      .sort((a, b) => a[0] - b[0])
      .map(([_, v]) => v)
    loadedCount.value = Math.min(visibleCount.value, allImages.value.length)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  setTimeout(setupObserver, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})

// SEO meta
const route = (window).useRoute && window.useRoute() || null
useHead?.({
  title: t('出货现场', 'Delivery in Action', t('出货現場', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок'), t('出货現場', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок')),
  meta: [
    { name: 'description', content: t('出货现场', 'Delivery in Action', t('出货现场', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок'), t('出货现场', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок')) },
  ],
})

</script>

<style lang="scss" scoped>
.gallery-view {
  background: $c-bg-dark;
  min-height: 100vh;
  padding-top: 80px;
}

.gallery-header {
  padding: $s-2xl 0 $s-xl;
  text-align: center;
  color: #ffffff;

  h1 {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: $fw-extrabold;
    margin-bottom: $s-md;
  }
  .gallery-subtitle {
    font-size: $fs-lg;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: $s-sm;
  }
  .gallery-count {
    font-size: $fs-sm;
    color: rgba(255, 255, 255, 0.55);
  }
}

.gallery-section {
  padding: $s-xl 0 $s-3xl;
  background: $c-bg-secondary;
  min-height: 60vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 $s-md;
}

// CSS columns: pure CSS masonry (no JS lib)
.masonry-grid {
  column-count: 4;
  column-gap: $s-md;

  @media (max-width: $bp-md) { column-count: 3; }
  @media (max-width: $bp-sm) { column-count: 2; }
  @media (max-width: 480px)  { column-count: 1; }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: $s-md;
  position: relative;
  border-radius: $r-md;
  overflow: hidden;
  box-shadow: $shadow-md;
  background: #1a1a1a;
}

.gallery-photo {
  display: block;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.4s ease;
  cursor: pointer;

  &.is-loaded {
    opacity: 1;
  }
}

.photo-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: $s-md;
  background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.78) 100%);
  color: #ffffff;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}

.masonry-item:hover .photo-overlay {
  opacity: 1;
}

.photo-date {
  font-size: $fs-base;
  font-weight: $fw-bold;
  margin-bottom: $s-xs;
}

.photo-machine {
  font-size: $fs-sm;
  color: rgba(255, 255, 255, 0.85);
}

.gallery-loading,
.gallery-end {
  text-align: center;
  padding: $s-2xl 0;
  color: $c-text-secondary;
  font-size: $fs-base;
}
</style>
