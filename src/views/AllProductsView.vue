<template>
  <div class="all-products-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="container">
        <span class="tag">{{ t('产品展示', 'Products',  t('产品展示', 'Products', 'Sản phẩm', 'Продукция'),  t('产品展示', 'Products', 'Sản phẩm', 'Продукция')) }}</span>
        <h1>{{ t('所有产品', 'All Products',  t('所有产品', 'All Products', 'Tất cả sản phẩm', 'Вся продукция'),  t('所有产品', 'All Products', 'Tất cả sản phẩm', 'Вся продукция')) }}</h1>
        <p>{{ t('专业木工机械，满足多样化生产需求', 'Professional woodworking machinery for diverse production needs',  t('专业木工机械，满足多样化生产需求', 'Professional woodworking machinery for diverse production needs', 'Máy móc gỗ chuyên nghiệp cho nhiều nhu cầu sản xuất đa dạng', 'Профессиональные деревообрабатывающие станки для разнообразных производственных задач'),  t('专业木工机械，满足多样化生产需求', 'Professional woodworking machinery for diverse production needs', 'Máy móc gỗ chuyên nghiệp cho nhiều nhu cầu sản xuất đa dạng', 'Профессиональные деревообрабатывающие станки для разнообразных производственных задач')) }}</p>
        <router-link :to="`/${lang}/products/series`" class="btn btn-primary series-btn">
          {{ t('查看产品系列 →', 'View Product Series →',  t('查看产品系列 →', 'View Product Series →', 'Xem dòng sản phẩm →', 'Смотреть серию →'),  t('查看产品系列 →', 'View Product Series →', 'Xem dòng sản phẩm →', 'Смотреть серию →')) }}
        </router-link>
      </div>
    </section>

    <!-- Section 2: All Products -->
    <section class="section-products">
      <div class="container">
        <!-- Search Bar -->
        <div class="search-bar">
          <select v-model="selectedSeries" class="search-select">
            <option value="">{{ t('所有系列', 'All Series',  t('所有系列', 'All Series', 'Tất cả dòng', 'Все серии'),  t('所有系列', 'All Series', 'Tất cả dòng', 'Все серии')) }}</option>
            <option v-for="s in seriesList" :key="s.id" :value="s.id">{{ t(s.cn, s.mic, s.vn, s.ru) }}</option>
          </select>
          <input
            v-model="keyword"
            type="text"
            class="search-input"
            :placeholder="t('输入产品型号或参数搜索', 'Search by model or specs',  t('输入产品型号或参数搜索', 'Search by model or specs', 'Tìm theo mẫu hoặc thông số', 'Поиск по модели или характеристикам'),  t('输入产品型号或参数搜索', 'Search by model or specs', 'Tìm theo mẫu hoặc thông số', 'Поиск по модели или характеристикам'))"
          />
        </div>

        <!-- Products Grid -->
        <div class="products-grid">
          <router-link
            v-for="p in displayedProducts"
            :key="p.id"
            :to="`/${lang}/products/` + p.id"
            class="product-card"
          >
            <div class="product-image">
              <img v-if="p.image" :src="p.image" :alt="p.model" class="product-img" loading="lazy" />
              <span v-else class="image-icon">{{ p.icon }}</span>
            </div>
            <div class="product-info">
              <h3>{{ p.model.replace(/立铣$/, '') }}</h3>
              <p>{{ t(p.seriesCn, p.seriesMic, p.seriesVn, p.seriesRu) }}</p>
            </div>
          </router-link>
        </div>

        <div v-if="displayedProducts.length === 0" class="empty-state">
          {{ t('未找到符合条件的产品', 'No products found',  t('未找到符合条件的产品', 'No products found', 'Không tìm thấy sản phẩm phù hợp', 'Товары не найдены'),  t('未找到符合条件的产品', 'No products found', 'Không tìm thấy sản phẩm phù hợp', 'Товары не найдены')) }}
        </div>

        <!-- Infinite scroll sentinel -->
        <div ref="sentinel" class="sentinel"></div>
        <div v-if="loading" class="loading-indicator">{{ t('加载中...', 'Loading...',  t('加载中...', 'Loading...', 'Đang tải...', 'Загрузка...'),  t('加载中...', 'Loading...', 'Đang tải...', 'Загрузка...')) }}</div>
        <div v-if="!hasMore && displayedProducts.length > 0" class="end-indicator">{{ t('没有更多了', 'No more products',  t('没有更多了', 'No more products', 'Đã hết sản phẩm', 'Больше товаров нет'),  t('没有更多了', 'No more products', 'Đã hết sản phẩm', 'Больше товаров нет')) }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useLang } from '@/composables/useLang'
import { getAllModels } from '@/data/products'
const { t, tm, lang } = useLang()

const BATCH_SIZE = 12
const INITIAL_COUNT = 24

const allProducts = computed(() => {
  return getAllModels().filter(item => item.model.images?.length).map(item => ({
    id: `${item.series.id}/${item.model.id}`,
    model: item.model.model,
    seriesCn: item.series.cn,
    seriesMic: item.series.mic,
    seriesVn: item.series.vn,
    seriesRu: item.series.ru,
    seriesId: item.series.id,
    icon: item.series.icon,
    image: item.model.images?.[0],
    specs: item.model.specs || []
  }))
})

const seriesList = computed(() => {
  const seen = new Set<string>()
  return allProducts.value.filter(p => {
    if (seen.has(p.seriesId)) return false
    seen.add(p.seriesId)
    return true
  }).map(p => ({
    id: p.seriesId,
    cn: p.seriesCn,
    mic: p.seriesMic,
    vn: p.seriesVn,
    ru: p.seriesRu
  }))
})

const selectedSeries = ref('')
const keyword = ref('')

const filteredAll = computed(() => {
  return allProducts.value.filter(p => {
    const matchSeries = !selectedSeries.value || p.seriesId === selectedSeries.value
    const kw = keyword.value.trim().toLowerCase()
    const matchKw = !kw || (
      p.model.toLowerCase().includes(kw) ||
      p.seriesCn.toLowerCase().includes(kw) ||
      p.seriesMic.toLowerCase().includes(kw) ||
      p.specs.some(spec =>
        spec.keyCn.toLowerCase().includes(kw) ||
        spec.keyMic.toLowerCase().includes(kw) ||
        spec.valueCn.toLowerCase().includes(kw) ||
        spec.valueMic.toLowerCase().includes(kw)
      )
    )
    return matchSeries && matchKw
  })
})

const displayedCount = ref(INITIAL_COUNT)
const loading = ref(false)

const displayedProducts = computed(() => {
  return filteredAll.value.slice(0, displayedCount.value)
})

const hasMore = computed(() => {
  return displayedCount.value < filteredAll.value.length
})

const sentinel = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

const loadMore = () => {
  if (loading.value || !hasMore.value) return
  loading.value = true
  setTimeout(() => {
    displayedCount.value = Math.min(displayedCount.value + BATCH_SIZE, filteredAll.value.length)
    loading.value = false
  }, 300)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMore()
      }
    },
    { threshold: 0.1 }
  )
  if (sentinel.value) {
    observer.observe(sentinel.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style lang="scss" scoped>
.all-products-page {
  min-height: 100vh;
}

.page-hero {
  position: relative;
  padding: 150px 0 70px;
  background: $c-bg-dark;
  overflow: hidden;

  @media (max-width: $bp-sm) {
    padding: 75px 0 35px;
  }
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('/products-hero.webp');
  background-size: cover;
  background-position: center 18%;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    pointer-events: none;
  }
}

.container {
  position: relative;
  z-index: 1;

  .tag { margin-bottom: $s-md; }
  h1 { color: white; margin-bottom: $s-md; }
  p { color: rgba(255,255,255,0.7); font-size: $fs-lg; max-width: 600px; }
}

.series-btn {
  display: inline-flex;
  align-items: center;
  gap: $s-sm;
  background: $c-accent;
  color: #ffffff;
  padding: $s-md $s-xl;
  border-radius: $r-md;
  font-size: $fs-base;
  font-weight: $fw-semibold;
  text-decoration: none;
  transition: all $t-base;
  border: 2px solid transparent;
  margin-top: $s-lg;

  &:hover {
    background: darken($c-accent, 8%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(26, 111, 212, 0.35);
    color: #ffffff;
  }

  &:active {
    transform: translateY(0);
  }
}

.section-products {
  padding: $s-xl 0 $s-2xl;
  background: $c-bg-dark;
}

.search-bar {
  display: flex;
  gap: $s-md;
  margin-bottom: $s-xl;
  flex-wrap: wrap;

  @media (max-width: $bp-sm) {
    flex-direction: column;
  }
}

.search-select,
.search-input {
  padding: $s-sm $s-md;
  border-radius: $r-md;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: #333333;
  font-size: $fs-base;
  outline: none;
  transition: border-color $t-fast;

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    border-color: $c-accent;
  }
}

.search-select {
  cursor: pointer;
  min-width: 160px;

  option {
    background: $c-bg-dark;
    color: #333333;
  }

  @media (max-width: $bp-sm) {
    width: 100%;
  }
}

.search-input {
  flex: 1;
  min-width: 200px;

  @media (max-width: $bp-sm) {
    width: 100%;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: $s-xl;

  @media (max-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
    gap: $s-md;
  }
}

.product-card {
  background: #ffffff;
  border-radius: $r-lg;
  overflow: hidden;
  box-shadow: $shadow-sm;
  transition: transform $t-base, box-shadow $t-base;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-md;
  }
}

.product-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: none;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-icon {
  font-size: 48px;
}

.product-info {
  padding: $s-md;

  h3 {
    font-size: $fs-base;
    font-weight: $fw-semibold;
    color: $c-accent;
    margin-bottom: $s-xs;
  }

  p {
    font-size: $fs-xs;
    color: $c-text-secondary;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

.sentinel {
  height: 1px;
  margin-top: $s-lg;
}

.loading-indicator,
.end-indicator,
.empty-state {
  text-align: center;
  padding: $s-xl;
  color: rgba(255, 255, 255, 0.6);
  font-size: $fs-sm;
}
</style>
