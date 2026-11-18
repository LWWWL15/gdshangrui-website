<template>
  <div class="gallery-view">
    <!-- Page header -->
    <section class="gallery-header">
      <div class="container">
        <h1>{{ t('出货现场', 'Delivery in Action', t('出货現場', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок'), t('出货現場', 'Delivery in Action', 'Hình ảnh xuất hàng', 'Фото отгрузок')) }}</h1>
        <p class="gallery-subtitle">{{ t('记录每一台设备的交付瞬间', 'Capturing every equipment delivery moment', t('记录每一台设备的交付瞬间', 'Capturing every equipment delivery moment', 'Lưu lại mỗi khoảnh khắc giao hàng thiết bị', 'Фиксируем каждый момент поставки оборудования'), t('记录每一台设备的交付瞬间', 'Capturing every equipment delivery moment', 'Lưu lại mỗi khoảnh khắc giao hàng thiết bị', 'Фиксируем каждый момент поставки оборудования')) }}</p>
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
// 图库清单：public/delivery/images.json（已随仓库提交，线上 /delivery/images.json 返回 200）
// 历史上这里写的是 /gallery-manifest.json —— 该文件在仓库里从来不存在，线上永远 404，
// 导致图库页一张图都加载不出来。清单实际在 /delivery/ 下，与图片同目录。
const MANIFEST_URL = '/delivery/images.json'
const IMAGE_BASE = '/delivery/'
const PAGE_SIZE = 48
// 清单里的文件名是原厂相机导出的原名，两种常见形态：
//   IMG20240320093124.webp      → IMG + YYYYMMDDHHMMSS
//   mmexport1785197483446.webp  → mmexport + 毫秒时间戳
// 另有 3d39b8a5....webp 这类哈希名，既无日期也无机型。
// 注意：文件名里没有机型信息，所以 alt 只能是「出货实拍 + 日期」这种通用描述，
// 绝不能从文件名反推机型（会变成编造参数）。
const IMG_TIMESTAMP_RE = /^IMG(\d{4})(\d{2})(\d{2})(\d{2})?(\d{2})?(\d{2})?/
const MMEXPORT_RE = /^mmexport(\d{13})/

// ===== State =====
// allImages: { src, alt, date, loaded }[]
const allImages = ref([])
const visibleCount = ref(PAGE_SIZE)
const loadedCount = ref(0)
const loading = ref(false)
const gridEl = ref<HTMLElement | null>(null)

// Pre-parse the image manifest
// 清单是一个扁平数组：["IMG20240320093124.webp", ...]
function parseShotDate(file: string): string {
  const img = file.match(IMG_TIMESTAMP_RE)
  if (img) {
    const [, y, mo, d] = img
    return `${y}-${mo}-${d}`
  }
  const mm = file.match(MMEXPORT_RE)
  if (mm) {
    const ms = Number(mm[1])
    const dt = new Date(ms)
    if (!Number.isNaN(dt.getTime())) {
      const p = (n: number) => String(n).padStart(2, '0')
      return `${dt.getFullYear()}-${p(dt.getMonth() + 1)}-${p(dt.getDate())}`
    }
  }
  return ''
}

async function loadManifest() {
  try {
    const r = await fetch(MANIFEST_URL, { cache: 'no-store' })
    if (!r.ok) throw new Error('manifest HTTP ' + r.status)
    const files: string[] = await r.json()
    if (!Array.isArray(files)) throw new Error('unexpected manifest shape')
    allImages.value = files.map((file) => {
      const date = parseShotDate(file)
      return {
        src: IMAGE_BASE + encodeURIComponent(file),
        // 文件名里没有机型信息 → alt 只能是通用描述，不能反推机型
        alt: date ? `${date} ${t('出货实拍', 'delivery photo', 'ảnh xuất hàng', 'фото отгрузки')}` : t('出货实拍', 'delivery photo', 'ảnh xuất hàng', 'фото отгрузки'),
        date,
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

// SEO meta 说明：
// 本组件不再单独 useHead —— Title/Description/canonical/hreflang/og 全部由
// LangLayout 统一管理（pageTitleMap / pageDescMap 里已有 '/gallery' 的四语条目）。
// 之前这里有一段 useHead，但它前面一行是 `(window).useRoute && ...`：
//   - SSR（Node 环境）里 window 未定义 → 抛 ReferenceError → 整个组件 setup 失败
//     → 预渲染出的 /gallery 四语页只剩页头页脚，正文、h1、图片全都没有
//   - 就算那行不抛错，这段 useHead 也会覆盖 LangLayout 生成的 title/description，
//     把「出货现场 | 上锐机械」压成「出货现场」，属于改动 TDH
// 所以这里整段删除：既修好 SSR 崩溃，又保证 Title/Description 与线上逐字节一致。

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
    color: #000000; // 浅色背景上改为黑色，保证可读
    margin-bottom: $s-sm;
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
  column-count: 7;
  column-gap: $s-sm;

  @media (max-width: $bp-lg) { column-count: 6; }
  @media (max-width: $bp-md) { column-count: 5; }
  @media (max-width: $bp-sm) { column-count: 3; }
  @media (max-width: 480px)  { column-count: 2; }
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
