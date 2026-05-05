<template>
  <div class="home">
    <!-- Section 1: Hero Banner with Overlay Text -->
    <section class="hero-banner">
      <div class="hero-banner-bg"></div>
      <div class="hero-banner-content">
        <h1 class="hero-banner-title">{{ t('您的上上之选！', 'Your Great Pick!') }}</h1>
        <p class="hero-banner-subtitle">ISO9001 | CE Certificate | OEM, ODM</p>
        <div class="hero-banner-cta">
          <router-link to="/contact" class="btn btn-primary btn-lg">
            GET QUOTE
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section 2: Certificates -->
    <section class="section-certificates">
      <div class="container">
        <div class="certificates-grid">
          <div class="cert-card">
            <img src="/cert-ce.jpg" alt="CE Certificate" class="cert-img" />
            <div class="cert-label" @click="lightboxImg = '/cert-ce.jpg'">CE Certification</div>
          </div>
          <div class="cert-card">
            <img src="/cert-iso9001.jpg" alt="ISO9001 Certificate" class="cert-img" />
            <div class="cert-label" @click="lightboxImg = '/cert-iso9001.jpg'">ISO9001</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certificate Lightbox -->
    <Teleport to="body">
      <div v-if="lightboxImg" class="lightbox" @click.self="lightboxImg = ''">
        <div class="lightbox-close" @click="lightboxImg = ''">×</div>
        <img :src="lightboxImg" alt="Certificate" class="lightbox-img" />
      </div>
    </Teleport>

    <!-- Section 3: Best Sellers -->
    <section class="section-bestsellers">
      <div class="container">
        <h2 class="section-title">{{ t('畅销产品', 'Best Sellers') }}</h2>
        <div class="bestsellers-wrapper">
          <button class="scroll-btn scroll-left" @click="scrollLeft" aria-label="Scroll left">‹</button>
          <div class="bestsellers-scroll" ref="scrollContainer">
            <router-link v-for="p in bestSellers" :key="p.id" :to="'/products/' + p.id" class="bestseller-card">
              <div class="bestseller-image">
                <img v-if="p.image" :src="p.image" :alt="p.model" class="bestseller-img" />
                <span v-else class="image-icon">{{ p.icon }}</span>
              </div>
              <div class="bestseller-info">
                <h3>{{ p.model }}</h3>
                <p>{{ t(p.seriesZh, p.seriesEn) }}</p>
              </div>
            </router-link>
          </div>
          <button class="scroll-btn scroll-right" @click="scrollRight" aria-label="Scroll right">›</button>
        </div>
      </div>
    </section>

    <!-- Hero with Quote (Original) -->
    <section class="hero">
      <div class="container hero-content">
        <div class="hero-quote">
          <p
            v-for="(line, idx) in heroLines"
            :key="idx"
            class="quote-text"
          >
            <template v-if="lang === 'zh'">{{ line.zhPrefix }}<span class="highlight-word-zh">{{ line.zhHighlight }}</span>{{ line.zhSuffix }}</template>
            <template v-else>{{ line.enPrefix }}<span class="highlight-word">{{ line.enHighlight }}</span>{{ line.enSuffix }}</template>
          </p>
        </div>
        <div class="hero-answer">
          <p>{{ t('我们能满足这些需求，是因为', 'We can meet those needs because') }}</p>
          <p class="highlight">{{ t('2013 年在中国成立了上锐机械工厂，', 'Shang Rui Machinery was founded in China in 2013,') }}</p>
          <p class="highlight">{{ t('一直专注于木工机械的定制、制造和出口，', 'consistently focusing on customization, manufacturing and export of woodworking machinery,') }}</p>
          <p class="highlight">{{ t('拥有多名超过十年最高超过三十年经验的员工，并拥有向越南、沙特、印尼、韩国等 20多个国家出口的经验。', 'with employees having 10+ to 30+ years of experience, and exporting to 20+ countries including Vietnam, Saudi Arabia, Indonesia, and South Korea.') }}</p>
        </div>
        <div class="hero-cta">
          <router-link to="/contact" class="btn btn-primary btn-lg">
            {{ t('联系我们', 'Contact Us') }}
          </router-link>
          <router-link to="/products" class="hero-link">
            {{ t('查看产品', 'View Products') }} →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Core Value -->
    <section class="section-value section-hide-mobile">
      <div class="container">
        <h2>{{ t('为什么选择我们', 'Why Choose Us') }}</h2>
        <div class="value-grid">
          <div class="value-item" v-for="v in values" :key="v.icon">
            <div class="value-icon">{{ v.icon }}</div>
            <h3>{{ t(v.zh, v.en) }}</h3>
            <p>{{ t(v.descZh, v.descEn) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Series -->
    <section class="section-series">
      <div class="container">
        <h2>{{ t('产品系列', 'Product Series') }}</h2>
        <div class="series-grid">
          <router-link v-for="s in productSeries.slice(0, 6)" :key="s.id" :to="'/products/' + s.id" class="series-card">
            <div class="series-card-image" :style="s.color.startsWith('url') ? { backgroundImage: s.color } : { background: s.color }">
              <span v-if="!s.color.startsWith('url')" class="series-card-icon">{{ s.icon }}</span>
            </div>
            <div class="series-card-info">
              <h3>{{ t(s.zh, s.en) }}</h3>
            </div>
          </router-link>
        </div>
        <div class="series-more">
          <router-link to="/products">{{ t('查看更多', 'View More') }} →</router-link>
        </div>
      </div>
    </section>

    <!-- Company History -->
    <section class="section-history section-hide-mobile">
      <div class="container">
        <h2>{{ t('自2013年创业以来', 'Since 2013') }}</h2>
        <div class="history-content">
          <p>{{ t('上锐机械自2013年创业以来，一直专注于木工机械的定制、制造和出口。', 'Since 2013, Shang Rui Machinery has consistently focused on customization, manufacturing and export of woodworking machinery.') }}</p>
          <p>{{ t('目前，我们已向越南、沙特、印尼、韩国等20多个国家出口产品，拥有1000多家客户。', 'We now have export experience to 20+ countries and serve 1000+ customers worldwide.') }}</p>
          <p>{{ t('在严格的质量管理下制造每一件产品，我们已获得CE认证和ISO-9001认证，提供符合国际标准的产品。', 'We manufacture each product under strict quality control, holding CE and ISO-9001 certifications to meet international standards.') }}</p>
        </div>
        <div class="history-stats">
          <div class="stat">
            <span class="stat-num">2013</span>
            <span class="stat-label">{{ t('创业年份', 'Founded') }}</span>
          </div>
          <div class="stat">
            <span class="stat-num">20+</span>
            <span class="stat-label">{{ t('出口国家', 'Countries') }}</span>
          </div>
          <div class="stat">
            <span class="stat-num">1000+</span>
            <span class="stat-label">{{ t('合作客户', 'Customers') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-cta">
      <div class="container">
        <h2>{{ t('我们支持您的挑战', 'We Support Your Challenges') }}</h2>
        <p>{{ t('从产品咨询到交期应对，我们以确实的实绩为您服务。', 'From product consultation to delivery, we respond with proven expertise.') }}</p>
        <router-link to="/contact" class="btn btn-primary btn-lg">{{ t('联系我们', 'Contact Us') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useLang } from '@/composables/useLang'
import { productSeries, getAllModels } from '@/data/products'
const { t, lang } = useLang()

// Best sellers scroll
const scrollContainer = ref<HTMLElement | null>(null)
const lightboxImg = ref('')
const scrollLeft = () => {
  if (scrollContainer.value) scrollContainer.value.scrollBy({ left: -320, behavior: 'smooth' })
}
const scrollRight = () => {
  if (scrollContainer.value) scrollContainer.value.scrollBy({ left: 320, behavior: 'smooth' })
}

// Best Sellers: 取所有型号产品
const bestSellers = computed(() => {
  const allModels = getAllModels()
  // 仅显示有实际上传图片的产品
  return allModels.filter(item => item.model.images?.length).map(item => ({
    id: `${item.series.id}/${item.model.id}`,
    model: item.model.model,
    seriesZh: item.series.zh,
    seriesEn: item.series.en,
    icon: item.series.icon,
    color: item.series.color,
    image: item.model.images?.[0]
  }))
})

const heroLines = computed(() => [
  {
    zhPrefix: '"我想',
    zhHighlight: '按时交货',
    zhSuffix: '"',
    enPrefix: '"I need to meet the ',
    enHighlight: 'deadline',
    enSuffix: '"'
  },
  {
    zhPrefix: '"我不想妥协',
    zhHighlight: '质量',
    zhSuffix: '"',
    enPrefix: '"I don\'t want to compromise on ',
    enHighlight: 'quality',
    enSuffix: '"'
  },
  {
    zhPrefix: '"我想',
    zhHighlight: '降低成本',
    zhSuffix: '"',
    enPrefix: '"I want to ',
    enHighlight: 'reduce costs',
    enSuffix: '"'
  }
])

const values = [
  { icon: '🎯', zh: '品质第一', en: 'Quality First', descZh: '严格的质量管理体系。每件产品出货前都进行全面检查。', descEn: 'Strict quality control with comprehensive testing before delivery.' },
  { icon: '🔬', zh: '持续创新', en: 'Innovation', descZh: '持续投入定制，不断优化产品性能。', descEn: 'Continuous customization investment to improve product performance.' },
  { icon: '🤝', zh: '诚实合作', en: 'Integrity', descZh: '以诚实为基础，建立长期稳定的合作关系。', descEn: 'Building long-term partnerships based on integrity.' },
  { icon: '🌐', zh: '全球视野', en: 'Global Vision', descZh: '理解全球市场需求，提供符合国际标准的产品。', descEn: 'Understanding global market needs with international standards.' },
]
</script>

<style lang="scss" scoped>
// ============================================
// Section 1: Hero Banner
// ============================================
.hero-banner {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: $bp-sm) {
    min-height: 280px;
    padding-top: 60px;
  }
}

.hero-banner-bg {
  position: absolute;
  inset: 0;
  background: #1a2744;
  background-image: url('/hero-banner-bg.jpg');
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%);
    pointer-events: none;
  }

  @media (max-width: $bp-sm) {
    background-size: cover;
    background-position: center 30%;
  }
}

.hero-banner-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: $s-3xl;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: 60vh;

  @media (max-width: $bp-sm) {
    padding: $s-xl $s-md $s-lg;
    min-height: 280px;
    justify-content: flex-end;
    align-items: center;
  }
}

.hero-banner-title {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: $fw-extrabold;
  color: #FF3333;
  margin-bottom: $s-md;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 6px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.5);

  @media (max-width: $bp-sm) {
    font-size: 28px;
    margin-bottom: $s-sm;
  }
}

.hero-banner-subtitle {
  font-size: clamp(18px, 2vw, 26px);
  font-weight: $fw-medium;
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4);

  @media (max-width: $bp-sm) {
    font-size: 14px;
    letter-spacing: 0.06em;
    margin-bottom: $s-lg;
  }
}

.hero-banner-cta {
  display: flex;
  justify-content: flex-start;
  gap: $s-lg;
  flex-wrap: wrap;

  @media (max-width: $bp-sm) {
    gap: $s-md;

    .btn {
      padding: $s-sm $s-lg;
      font-size: $fs-sm;
    }
  }
}

// ============================================
// Section 2: Certificates
// ============================================
.section-certificates {
  padding: $s-xs 0;
  background: #ffffff;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $s-xl;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
    gap: $s-sm;
  }
}

.cert-card {
  aspect-ratio: 16/9;
  border-radius: $r-lg;
  overflow: hidden;
  box-shadow: $shadow-md;
  transition: transform $t-base, box-shadow $t-base;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-lg;
  }

  @media (max-width: $bp-sm) {
    aspect-ratio: 3/2;
  }
}

.cert-img {
  width: 100%;
  flex: 1;
  object-fit: contain;
  display: block;
  background: #f5f5f5;
}

.cert-label {
  text-align: center;
  padding: $s-sm;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  color: $c-accent;
  background: #ffffff;
  cursor: pointer;
  transition: color $t-fast;
  text-decoration: underline;

  &:hover {
    color: $c-accent-hover;
  }
}

// ============================================
// Certificate Lightbox
// ============================================
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $s-2xl;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 24px;
  font-size: 32px;
  color: rgba(255,255,255,0.8);
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $r-full;
  transition: all $t-fast;

  &:hover {
    color: #ffffff;
    background: rgba(255,255,255,0.15);
  }
}

.lightbox-img {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: $r-lg;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
}

// ============================================
// Section 3: Best Sellers
// ============================================
.section-bestsellers {
  padding: $s-2xl 0;
  background: $c-bg-dark;

  @media (max-width: $bp-sm) {
    padding: $s-lg 0 $s-md;
  }
}

.section-title {
  text-align: center;
  font-size: clamp(28px, 3vw, 40px);
  color: $c-accent;
  margin-bottom: $s-2xl;

  @media (max-width: $bp-sm) {
    margin-bottom: $s-sm;
    font-size: $fs-xl;
  }
}

.bestsellers-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: $s-md;
}

.bestsellers-scroll {
  display: flex;
  gap: $s-lg;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: $s-md 0;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar { display: none; }
}

.bestseller-card {
  flex-shrink: 0;
  width: 280px;
  background: #ffffff;
  border-radius: $r-lg;
  overflow: hidden;
  box-shadow: $shadow-sm;
  transition: transform $t-base, box-shadow $t-base;
  cursor: pointer;
  text-decoration: none;
  height: auto;
  min-height: 240px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: $shadow-md;
  }

  @media (max-width: $bp-sm) {
    width: 200px;
    min-height: 230px;
  }
}

.bestseller-image {
  width: 100%;
  height: 180px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: none;
}

.bestseller-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-icon {
  font-size: 48px;
}

.bestseller-info {
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

.scroll-btn {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: $r-full;
  border: none;
  background: #ffffff;
  color: $c-accent;
  font-size: 24px;
  cursor: pointer;
  box-shadow: $shadow-md;
  transition: all $t-fast;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: $c-accent;
    color: #ffffff;
    transform: scale(1.1);
  }

  @media (max-width: $bp-sm) {
    display: none;
  }
}

// ============================================
// Section: Product Series
// ============================================
.section-series {
  padding: $s-2xl 0;
  background: #f5f5f5;

  h2 {
    text-align: center;
    margin-bottom: $s-2xl;
    font-size: clamp(28px, 3vw, 40px);
    color: $c-accent;
  }
}

.series-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $s-xl;
  margin-bottom: $s-xl;

  @media (max-width: $bp-md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $bp-sm) {
    grid-template-columns: repeat(2, 1fr);
    gap: $s-md;
  }
}

.series-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: $r-lg;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform $t-normal, box-shadow $t-normal;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
}

.series-card-image {
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;

  @media (max-width: $bp-sm) {
    aspect-ratio: auto;
    height: 120px;
  }
}

.series-card-icon {
  font-size: 64px;

  @media (max-width: $bp-sm) {
    font-size: 48px;
  }
}

.series-card-info {
  padding: $s-md;
  text-align: center;

  h3 {
    font-size: $fs-base;
    font-weight: $fw-semibold;
    color: $c-text-primary;
    margin: 0;
  }
}

.series-list {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto $s-lg;
  gap: 0;
}

.series-item {
  display: flex;
  align-items: center;
  gap: $s-md;
  padding: $s-md $s-lg;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  text-decoration: none;
  font-size: $fs-base;
  font-weight: $fw-semibold;
  color: $c-text-primary;
  transition: all $t-fast;

  &:first-child { border-radius: $r-lg $r-lg 0 0; }
  &:last-child { border-radius: 0 0 $r-lg $r-lg; border-bottom: none; }
  &:hover { background: #f0f5ff; color: $c-accent; transform: translateX(4px); }

  .series-icon { font-size: 24px; flex-shrink: 0; }
  span:not(.series-arrow) { flex: 1; min-width: 0; }
  .series-arrow { font-size: $fs-xl; color: $c-text-muted; transition: color $t-fast; flex-shrink: 0; margin-left: auto; }
  &:hover .series-arrow { color: $c-accent; }
}

.series-more {
  text-align: center;

  a {
    font-size: $fs-sm;
    font-weight: $fw-medium;
    color: $c-accent;
    text-decoration: none;
    transition: color $t-fast;
    &:hover { color: $c-accent-hover; }
  }
}

// ============================================
// Hero with Quote (Original)
// ============================================
.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding: 120px 0;
background-image: url('/hero-bg.webp');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  // 遮罩层
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(20,20,20,0.75) 50%, rgba(0,0,0,0.65) 100%);
    pointer-events: none;
  }

  // 手机端调整：减小 padding 和字体
  @media (max-width: $bp-sm) {
    min-height: auto;
    padding: 100px 0 40px;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-quote {
  margin-bottom: $s-2xl;

  @media (max-width: $bp-sm) { margin-bottom: $s-xl; }

  .quote-text {
    font-size: clamp(20px, 3.5vw, 36px);
    font-weight: $fw-extrabold;
    color: #ffffff;
    line-height: 1.4;
    margin-bottom: $s-sm;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);

    @media (max-width: $bp-sm) {
      font-size: 20px;
      margin-bottom: $s-sm;
      letter-spacing: 0.03em;
    }
  }

  .highlight-word {
    color: #FF6B35;
    font-weight: $fw-extrabold;
  }

  .highlight-word-zh {
    color: #FF6B35;
    font-weight: $fw-extrabold;
    letter-spacing: 0.05em;
  }
}

.hero-answer {
  margin-bottom: $s-2xl;
  padding: $s-lg $s-xl;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  border-left: 3px solid rgba(255,255,255,0.8);
  border-radius: $r-sm;

  @media (max-width: $bp-sm) {
    margin-bottom: $s-xl;
    padding: $s-lg;
  }

  p {
    font-size: $fs-base;
    color: rgba(255,255,255,0.9);
    line-height: 1.7;
    margin-bottom: $s-xs;
    text-shadow: 0 1px 4px rgba(0,0,0,0.2);

    @media (max-width: $bp-sm) {
      font-size: $fs-sm;
      line-height: 1.7;
      margin-bottom: $s-xs;
    }

    &.highlight {
      color: #ffffff;
      font-weight: $fw-semibold;
    }
  }
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: $s-xl;

  @media (max-width: $bp-sm) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: $s-lg;

    .btn {
      padding: $s-md $s-xl;
      font-size: $fs-base;
    }
  }
}

.hero-link {
  font-size: $fs-lg;
  font-weight: $fw-semibold;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  transition: all $t-fast;
  letter-spacing: 0.02em;
  white-space: nowrap;

  @media (max-width: $bp-sm) {
    font-size: $fs-lg;
  }

  &:hover { color: white; letter-spacing: 0.05em; }
}

.section-value {
  padding: $s-2xl 0;
  background: #ffffff;

  h2 {
    text-align: center;
    margin-bottom: $s-3xl;
    font-size: clamp(28px, 3vw, 40px);
    color: $c-accent;
  }

  .value-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $s-lg;
    @media (max-width: $bp-lg) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: $bp-sm) { grid-template-columns: repeat(4, 1fr); gap: 20px; }
  }
}

.value-item {
  padding: $s-2xl;
  text-align: center;

  .value-icon { font-size: 40px; margin-bottom: $s-md; }
  h3 { font-size: $fs-lg; margin-bottom: $s-sm; color: $c-accent; }
  p { font-size: $fs-sm; color: #333333; line-height: 1.8;

    @media (max-width: $bp-sm) { display: none; }
  }
}

.section-history {
  padding: $s-2xl 0;
  background: #ffffff;

  h2 {
    text-align: center;
    margin-bottom: $s-3xl;
    font-size: clamp(28px, 3vw, 40px);
    color: #1a2744;
  }

  .history-content {
    margin: 0 auto $s-3xl;

    p {
      font-size: $fs-lg;
      color: #333333;
      line-height: 2;
      margin-bottom: $s-lg;
    }
  }

  .history-stats {
    display: flex;
    justify-content: center;
    gap: $s-3xl;
    flex-wrap: wrap;
    padding-top: $s-2xl;
    border-top: 1px solid #e0e0e0;
  }
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-num {
    font-size: $fs-3xl;
    font-weight: $fw-extrabold;
    color: $c-accent;
    line-height: 1;
  }

  &-label {
    font-size: $fs-xs;
    color: rgba(255,255,255,0.5);
    margin-top: $s-sm;
    letter-spacing: 0.05em;
  }
}

.section-cta {
  padding: $s-2xl 0;
  background: #f5f5f5;
  text-align: center;
  border-top: 1px solid #e0e0e0;

  @media (max-width: $bp-sm) {
    padding: $s-lg 0;
  }

  h2 {
    color: #1a2744;
    margin-bottom: $s-md;
    font-size: clamp(28px, 3vw, 40px);
  }

  p {
    color: #333333;
    font-size: $fs-lg;
    margin-bottom: $s-2xl;
  }
}
</style>
