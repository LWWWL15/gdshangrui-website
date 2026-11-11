<template>
  <div class="case-detail-page">
    <!-- 文章不存在（数据已清空或链接过期）-->
    <section v-if="!caseData" class="page-hero">
      <div class="container">
        <span class="tag">{{ t('博客', 'Blog', tm('blogDetail.blogTag', 'Blog'), tm('blogDetail.blogTag', 'Blog')) }}</span>
        <h1>{{ t('文章不存在', 'Article not found', tm('blogDetail.notFound', 'Article not found'), tm('blogDetail.notFound', 'Article not found')) }}</h1>
        <p>{{ t('该文章已下线或链接有误。', 'This article is no longer available or the link is incorrect.', tm('blogDetail.notFoundDesc', 'This article is no longer available or the link is incorrect.'), tm('blogDetail.notFoundDesc', 'This article is no longer available or the link is incorrect.')) }}</p>
        <router-link :to="`/${lang}/blog`" class="btn btn-primary" style="margin-top:24px; display:inline-block;">{{ t('返回博客', 'Back to Blog', tm('blogDetail.backToBlog', 'Back to Blog'), tm('blogDetail.backToBlog', 'Back to Blog')) }}</router-link>
      </div>
    </section>

    <template v-else>
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('博客', 'Blog', tm('blogDetail.blogTag', 'Blog'), tm('blogDetail.blogTag', 'Blog')) }}</span>
        <h1>{{ t(caseData.titleCn, caseData.titleMic, caseData.titleVn || caseData.titleMic, caseData.titleRu) }}</h1>
        <p>{{ t(caseData.descCn, caseData.descMic, caseData.descVn || caseData.descMic, caseData.descRu) }}</p>
      </div>
    </section>

    <div class="container">
      <div class="case-layout">
        <!-- Main Article -->
        <article class="case-article">
          <!-- Case Header Info -->
          <div class="article-meta">
            <span class="meta-region">{{ regionOf(caseData) }}</span>
            <span class="meta-product">{{ t('产品', 'Product', tm('blogDetail.product', 'Product'), tm('blogDetail.product', 'Product')) }}: {{ productOf(caseData) }}</span>
            <span class="meta-date">{{ caseData.date }}</span>
          </div>

          <!-- Featured Image -->
          <div class="article-featured-img" :style="{ background: caseData.color }">
            <span class="article-icon">{{ caseData.icon }}</span>
          </div>

          <!-- Article Body -->
          <div class="article-body" id="article-body">
            <h2 id="project-background">{{ t('项目背景', 'Project Background', tm('blogDetail.projectBackground', 'Project Background'), tm('blogDetail.projectBackground', 'Project Background')) }}</h2>
            <p v-html="linkify(t(caseData.contentCn, caseData.contentMic, caseData.contentVn || caseData.contentMic, caseData.contentRu))"></p>

            <h2 id="solution">{{ t('解决方案', 'Solution', tm('blogDetail.solution', 'Solution'), tm('blogDetail.solution', 'Solution')) }}</h2>
            <p v-html="linkify(t(caseData.solutionCn, caseData.solutionMic, caseData.solutionVn || caseData.solutionMic, caseData.solutionRu))"></p>

            <h2 id="results">{{ t('实施结果', 'Results', tm('blogDetail.results', 'Results'), tm('blogDetail.results', 'Results')) }}</h2>
            <p v-html="linkify(t(caseData.resultsCn, caseData.resultsMic, caseData.resultsVn || caseData.resultsMic, caseData.resultsRu))"></p>

            <h2 id="customer-feedback">{{ t('客户反馈', 'Customer Feedback', tm('blogDetail.customerFeedback', 'Customer Feedback'), tm('blogDetail.customerFeedback', 'Customer Feedback')) }}</h2>
            <blockquote class="article-quote">
              <p>"{{ t(caseData.feedbackCn, caseData.feedbackMic, caseData.feedbackVn || caseData.feedbackMic, caseData.feedbackRu) }}"</p>
              <cite>— {{ customerOf(caseData) }}</cite>
            </blockquote>
          </div>

                    <!-- Share Link Button -->
          <div class="share-section">
            <button class="btn btn-share" @click="copyShareLink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/>
              </svg>
              {{ t('复制链接', 'Copy Link', tm('blogDetail.copyLink', 'Copy Link'), tm('blogDetail.copyLink', 'Copy Link')) }}
            </button>
            <span v-if="copySuccess" class="share-tip success">
              {{ t('✅ 链接已复制！', '✅ Link Copied!', tm('blogDetail.linkCopied', '✅ Link Copied!'), tm('blogDetail.linkCopied', '✅ Link Copied!')) }}
            </span>
          </div>

          <!-- Send Inquiry Form -->
          <form class="contact-form card" @submit.prevent="handleInquiry">
            <h3>{{ t('发送询盘', 'Send Inquiry', tm('blogDetail.sendInquiry', 'Send Inquiry'), tm('blogDetail.sendInquiry', 'Send Inquiry')) }}</h3>
            <div class="form-group">
              <label>{{ t('姓名', 'Name', tm('blogDetail.name', 'Name'), tm('blogDetail.name', 'Name')) }} *</label>
              <input v-model="inquiryForm.name" type="text" :placeholder="t('您的姓名', 'Your name', tm('blogDetail.namePlaceholder', 'Your name'), tm('blogDetail.namePlaceholder', 'Your name'))" required />
            </div>
            <div class="form-group">
              <label>{{ t('邮箱', 'Email', tm('blogDetail.email', 'Email'), tm('blogDetail.email', 'Email')) }} *</label>
              <input v-model="inquiryForm.email" type="email" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label>{{ t('感兴趣的产品', 'Product of Interest', tm('blogDetail.productInterest', 'Product of Interest'), tm('blogDetail.productInterest', 'Product of Interest')) }}</label>
              <input type="text" :value="productOf(caseData)" readonly />
            </div>
            <div class="form-group">
              <label>{{ t('留言', 'Message', tm('blogDetail.message', 'Message'), tm('blogDetail.message', 'Message')) }} *</label>
              <textarea v-model="inquiryForm.message" rows="5" :placeholder="t('请描述您的需求...', 'Please describe your requirements...', tm('blogDetail.messagePlaceholder', 'Please describe your requirements...'), tm('blogDetail.messagePlaceholder', 'Please describe your requirements...'))" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;" :disabled="sending">
              {{ sending ? t('发送中...', 'Sending...', tm('blogDetail.sending', 'Sending...'), tm('blogDetail.sending', 'Sending...')) : t('发送询盘', 'Send Inquiry', tm('blogDetail.sendInquiryBtn', 'Send Inquiry'), tm('blogDetail.sendInquiryBtn', 'Send Inquiry')) }}
            </button>
            <p v-if="inquiryStatus" class="form-status" :class="inquiryStatus.type">{{ inquiryStatus.msg }}</p>
          </form>

          <!-- Navigation -->
          <div class="article-nav">
            <router-link v-if="prevCase" :to="`/${lang}/blog/` + prevCase.slug" class="nav-link nav-prev">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              <span>{{ t('上一篇', 'Previous', tm('blogDetail.previous', 'Previous'), tm('blogDetail.previous', 'Previous')) }}</span>
            </router-link>
            <span v-else class="nav-placeholder"></span>

            <router-link v-if="nextCase" :to="`/${lang}/blog/` + nextCase.slug" class="nav-link nav-next">
              <span>{{ t('下一篇', 'Next', tm('blogDetail.next', 'Next'), tm('blogDetail.next', 'Next')) }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
            <span v-else class="nav-placeholder"></span>
          </div>
        </article>

        <!-- Sidebar Navigation -->
        <aside class="case-sidebar">
          <div class="sidebar-card">
            <h4>{{ t('博客信息', 'Blog Information', tm('blogDetail.blogInfo', 'Blog Information'), tm('blogDetail.blogInfo', 'Blog Information')) }}</h4>
            <div class="sidebar-info">
              <div class="info-item">
                <span class="info-label">{{ t('国家/地区', 'Country/Region', tm('blogDetail.countryRegion', 'Country/Region'), tm('blogDetail.countryRegion', 'Country/Region')) }}</span>
                <span class="info-value">{{ regionOf(caseData) }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">{{ t('产品类型', 'Product Type', tm('blogDetail.productType', 'Product Type'), tm('blogDetail.productType', 'Product Type')) }}</span>
                <span class="info-value">{{ productOf(caseData) }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">{{ t('合作时间', 'Date', tm('blogDetail.cooperationDate', 'Date'), tm('blogDetail.cooperationDate', 'Date')) }}</span>
                <span class="info-value">{{ caseData.date }}</span>
              </div>
            </div>
          </div>

          <div class="sidebar-card">
            <h4>{{ t('相关产品', 'Related Products', tm('blogDetail.relatedProducts', 'Related Products'), tm('blogDetail.relatedProducts', 'Related Products')) }}</h4>
            <router-link :to="caseData.productSeries ? (caseData.productSeries === caseData.productId ? `/${lang}/products/${caseData.productSeries}` : `/${lang}/products/${caseData.productSeries}/${caseData.productId}`) : `/${lang}/products/${caseData.productId}`" class="sidebar-product-link">
              <span>{{ productOf(caseData) }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Table of Contents -->
          <div class="sidebar-card toc-card">
            <h4>{{ t('文章目录', 'Table of Contents', tm('blogDetail.tableOfContents', 'Table of Contents'), tm('blogDetail.tableOfContents', 'Table of Contents')) }}</h4>
            <nav class="toc-nav">
              <a href="#project-background" class="toc-link">{{ t('项目背景', 'Project Background', tm('blogDetail.tocBackground', 'Project Background'), tm('blogDetail.tocBackground', 'Project Background')) }}</a>
              <a href="#solution" class="toc-link">{{ t('解决方案', 'Solution', tm('blogDetail.tocSolution', 'Solution'), tm('blogDetail.tocSolution', 'Solution')) }}</a>
              <a href="#results" class="toc-link">{{ t('实施结果', 'Results', tm('blogDetail.tocResults', 'Results'), tm('blogDetail.tocResults', 'Results')) }}</a>
              <a href="#customer-feedback" class="toc-link">{{ t('客户反馈', 'Customer Feedback', tm('blogDetail.tocFeedback', 'Customer Feedback'), tm('blogDetail.tocFeedback', 'Customer Feedback')) }}</a>
            </nav>
          </div>

          <div class="sidebar-card">
            <h4>{{ t('联系方式', 'Contact Us', tm('blogDetail.contactUs', 'Contact Us'), tm('blogDetail.contactUs', 'Contact Us')) }}</h4>
            <p class="sidebar-contact-text">{{ t('对此博客感兴趣？联系我们获取更多信息', 'Interested in this blog post? Contact us for more information', tm('blogDetail.interested', 'Interested in this blog post? Contact us for more information'), tm('blogDetail.interested', 'Interested in this blog post? Contact us for more information')) }}</p>
            <div class="social-icons">
              <a href="https://www.facebook.com/share/1BREpu7DUr/?mibextid=wwXIfr" target="_blank" rel="noopener" class="social-icon fb" :aria-label="t('Facebook', 'Facebook', tm('blogDetail.facebook', 'Facebook'), tm('blogDetail.facebook', 'Facebook'))">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/shangruijx?igsh=Z2YxYnRuN3ljYnBj&utm_source=qr" target="_blank" rel="noopener" class="social-icon ig" :aria-label="t('Instagram', 'Instagram', tm('blogDetail.instagram', 'Instagram'), tm('blogDetail.instagram', 'Instagram'))">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@shangrui-machinery?si=StEF7rJoldH0kP0K" target="_blank" rel="noopener" class="social-icon yt" :aria-label="t('YouTube', 'YouTube', tm('blogDetail.youtube', 'YouTube'), tm('blogDetail.youtube', 'YouTube'))">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <router-link :to="`/${lang}/contact`" class="btn btn-primary btn-sm" style="width:100%; text-align:center;">
              {{ t('立即联系', 'Contact Now', tm('blogDetail.contactNow', 'Contact Now'), tm('blogDetail.contactNow', 'Contact Now')) }}
            </router-link>
          </div>
        </aside>
      </div>
    </div>

    <!-- Recommended Articles -->
    <section class="section recommended-section">
      <div class="container">
        <h2 class="section-title">{{ t('相关文章', 'Related Articles', tm('blogDetail.recommended', 'Recommended Articles'), tm('blogDetail.recommended', 'Recommended Articles')) }}</h2>
        <div class="recommended-grid">
          <router-link v-for="c in recommendedCases" :key="c.id" :to="`/${lang}/blog/` + c.slug" class="card case-card">
            <div class="case-img" :style="{ background: c.color }">
              <span class="case-region">{{ regionOf(c) }}</span>
              <span class="case-icon">{{ c.icon }}</span>
            </div>
            <div class="case-body">
              <span class="tag">{{ productOf(c) }}</span>
              <h3>{{ t(c.titleCn, c.titleMic, c.titleVn || c.titleMic, c.titleRu) }}</h3>
              <p>{{ t(c.descCn, c.descMic, c.descVn || c.descMic, c.descRu) }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    </template>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTranslations } from '@/composables/useTranslations'

const { t, tm, lang } = useTranslations()
const route = useRoute()
const caseSlug = computed(() => route.params.slug as string)

// Route-level language（避免 SSR 时 composable 时序问题）
function getRouteLang(): 'cn' | 'mic' | 'vn' | 'ru' {
  const l = route.params.lang as string
  if (l === 'cn') return 'cn'
  if (l === 'vn') return 'vn'
  if (l === 'ru') return 'ru'
  return 'mic'
}

// 文章数据：从 src/data/articles.ts 读取（内容来自主人提供的真实素材，不编造）
import { blogArticles } from '@/data/articles'
const allCases = blogArticles

// 地区标签 / 产品标签的四语取值。
// 之前：meta-region 只判 ru（mic/vn 显示中文「🇨🇳 广东佛山」），
//       productCn/productMic 没有 vn/ru 字段（vn/ru 显示英文），
//       「相关文章」区 title 的 vn 位误填 titleMic、desc 只传 2 参（vn/ru 全英文）。
// 2026-11-11 统一修正。
function regionOf(c: any): string {
  const l = getRouteLang()
  if (l === 'cn') return c.region
  if (l === 'vn') return c.regionVn || c.region
  if (l === 'ru') return c.regionRu || c.region
  return c.regionMic || c.region
}

function productOf(c: any): string {
  const l = getRouteLang()
  if (l === 'cn') return c.productCn
  if (l === 'vn') return c.productVn || c.productMic
  if (l === 'ru') return c.productRu || c.productMic
  return c.productMic
}

// 客户署名：cn 用法定中文名，其余语言用英文注册名（站内 CertificationView 口径一致）
function customerOf(c: any): string {
  if (getRouteLang() === 'cn') return c.customerName
  return c.customerNameRu || c.customerName
}

const caseData = computed(() => allCases.find(c => c.slug === caseSlug.value) || null)

// Previous / Next navigation
const currentIndex = computed(() => allCases.findIndex(c => c.slug === caseSlug.value))
const prevCase = computed(() => currentIndex.value > 0 ? allCases[currentIndex.value - 1] : null)
const nextCase = computed(() => currentIndex.value < allCases.length - 1 ? allCases[currentIndex.value + 1] : null)

// ===== A. 正文自动内链（维基百科式：正文提到站内产品就链过去）=====
// 关键词 → 站内链接映射。只链真实存在的产品页，一篇文章内每个关键词只链第一次出现。
import { productSeries } from '@/data/products'
const linkTargets: { kw: string[]; path: string }[] = []
for (const series of productSeries) {
  if (series.id === 'parts') continue
  // 系列页链接（系列名 + 该系列型号的共名前缀，如 MH3248x50T → MH3248）
  const kws = [series.cn, series.mic, series.vn, series.ru].filter(Boolean) as string[]
  linkTargets.push({ kw: kws, path: `/products/${series.id}` })
  // 型号页链接（系列页下第一台）
  const first = series.models[0]
  if (first) {
    const model = first.model.replace(/\s/g, '')
    linkTargets.push({ kw: [model], path: `/products/${series.id}/${first.id}` })
    // 型号共名前缀（字母开头+数字段，如 MH3248x50T → MH3248）：链到型号页
    const m = model.match(/^([A-Za-z]+\d{3,4})/)
    if (m && m[1] !== model) linkTargets.push({ kw: [m[1]], path: `/products/${series.id}/${first.id}` })
  }
}
function linkify(text: string): string {
  let out = text
  const used = new Set<string>()
  for (const { kw, path } of linkTargets) {
    for (const k of kw) {
      if (!k || k.length < 3 || used.has(k)) continue
      const esc = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const re = new RegExp(`(?<![\\w>])(${esc})(?![\\w<])`)
      if (re.test(out)) {
        out = out.replace(re, `<a href="/${lang.value}${path}" class="inline-link">$1</a>`)
        used.add(k)
        break // 这组关键词链过一个就停，避免同一目标重复链
      }
    }
  }
  return out
}

// Recommended articles：同产品的优先，不足再按最新补齐，排除当前文章
const recommendedCases = computed(() => {
  if (!caseData.value) return []
  const cur = caseData.value
  const others = allCases.filter(c => c.slug !== cur.slug)
  const same = others.filter(c => c.productId === cur.productId)
  const rest = others.filter(c => c.productId !== cur.productId)
  return [...same, ...rest].slice(0, 3)
})

// Inquiry form
const sending = ref(false)
const copySuccess = ref(false)
const inquiryStatus = ref<{ type: string; msg: string } | null>(null)
const inquiryForm = reactive({ name: '', email: '', message: '' })

async function copyShareLink() {
  try {
    await navigator.clipboard.writeText(window.location.href)
    copySuccess.value = true
    setTimeout(() => { copySuccess.value = false }, 2000)
  } catch {
    // fallback: silently fail
  }
}

async function handleInquiry() {
  if (!inquiryForm.name || !inquiryForm.email || !inquiryForm.message) return
  sending.value = true
  inquiryStatus.value = null
  await new Promise(r => setTimeout(r, 1000))
  inquiryStatus.value = {
    type: 'success',
    msg: t('✅ 询盘已发送！我们将在24小时内回复。', '✅ Inquiry sent! We will reply within 24 hours.', tm('blogDetail.inquirySent', '✅ Inquiry sent! We will reply within 24 hours.'), tm('blogDetail.inquirySent', '✅ Inquiry sent! We will reply within 24 hours.'))
  }
  inquiryForm.name = ''; inquiryForm.email = ''; inquiryForm.message = ''
  sending.value = false
}
</script>

<style lang="scss" scoped>
.case-detail-page {
  min-height: 100vh;
  background: $c-bg-primary;
}

.page-hero {
  padding: 160px 0 80px;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/cases-hero.webp') center 30% / cover no-repeat;
  .tag { margin-bottom: $s-md; }
  h1 { color: white; margin-bottom: $s-md; max-width: 800px; }
  p { color: rgba(255,255,255,0.6); font-size: $fs-lg; max-width: 700px; }

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }
}

.case-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: $s-2xl;
  padding: $s-2xl 0;

  @media (max-width: $bp-lg) {
    grid-template-columns: 1fr;
  }
}

.case-article {
  background: white;
  border-radius: $r-xl;
  overflow: hidden;
  box-shadow: $shadow-md;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: $s-lg;
  padding: $s-lg;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  flex-wrap: wrap;

  .meta-region { font-weight: $fw-semibold; color: $c-accent; }
  .meta-product { color: $c-text-secondary; font-size: $fs-sm; }
  .meta-date { color: $c-text-secondary; font-size: $fs-sm; margin-left: auto; }
}

.article-featured-img {
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  .article-icon { font-size: 80px; }
}

.article-body {
  padding: $s-2xl;

  h2 {
    font-size: $fs-xl;
    color: $c-text-primary;
    margin: $s-2xl 0 $s-md;
    &:first-child { margin-top: 0; }
  }

  p {
    color: $c-text-secondary;
    line-height: 1.8;
    font-size: $fs-base;
    margin-bottom: $s-md;
  }

  :deep(.inline-link) {
    color: $c-accent;
    text-decoration: none;
    border-bottom: 1px dashed rgba($c-accent, 0.5);
    transition: border-color $t-fast, color $t-fast;

    &:hover {
      color: darken($c-accent, 10%);
      border-bottom-color: $c-accent;
    }
  }
}

.article-quote {
  background: $c-bg-secondary;
  border-left: 4px solid $c-accent;
  padding: $s-lg $s-xl;
  border-radius: 0 $r-lg $r-lg 0;
  margin: $s-xl 0;

  p {
    font-size: $fs-lg;
    font-style: italic;
    color: $c-text-primary;
    margin-bottom: $s-sm;
  }

  cite {
    color: $c-text-secondary;
    font-size: $fs-sm;
  }
}

.article-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $s-xl $s-2xl;
  border-top: 1px solid rgba(0,0,0,0.06);
}

.nav-placeholder {
  flex: 1;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: $s-sm;
  color: $c-accent;
  text-decoration: none;
  font-weight: $fw-medium;
  padding: $s-sm $s-md;
  border-radius: $r-md;
  transition: background 0.2s ease;

  &:hover { background: $c-bg-secondary; }
  // Next arrow SVG already points right by default
}

.back-link {
  color: $c-text-secondary;
  text-decoration: none;
  font-size: $fs-sm;
  padding: $s-sm $s-md;
  border-radius: $r-md;
  transition: background 0.2s ease;

  &:hover { background: $c-bg-secondary; color: $c-accent; }
}

.share-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: $s-md;
  margin: 0 $s-2xl $s-lg;
}

.btn-share {
  display: inline-flex;
  align-items: center;
  gap: $s-sm;
  padding: $s-sm $s-lg;
  background: $c-bg-secondary;
  color: $c-text-primary;
  border: 1px solid $c-border;
  border-radius: $r-md;
  font-size: $fs-sm;
  font-weight: $fw-medium;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: $c-accent;
    color: white;
    border-color: $c-accent;
  }
}

.share-tip {
  font-size: $fs-sm;
  font-weight: $fw-medium;
  &.success { color: $c-accent; }
}

.contact-form {
  margin: 0 $s-2xl;
  padding: $s-2xl;
  h3 { font-size: $fs-xl; margin-bottom: $s-2xl; }
}

.form-group {
  margin-bottom: $s-lg;

  label { display: block; font-size: $fs-sm; font-weight: $fw-medium; margin-bottom: $s-sm; color: $c-text-secondary; }

  input, textarea, select {
    width: 100%;
    padding: $s-md;
    font-size: $fs-base;
    background: $c-bg-secondary;
    border: 1px solid $c-border;
    border-radius: $r-md;
    transition: border-color $t-fast;
    color: $c-text-primary;
    font-family: inherit;

    &::placeholder { color: $c-text-muted; }
    &:focus { border-color: $c-accent; outline: none; }
    &[readonly] { background: $c-bg-tertiary; cursor: not-allowed; opacity: 0.7; }
  }

  textarea { resize: vertical; min-height: 120px; }
}

.form-status {
  margin-top: $s-md;
  font-size: $fs-sm;
  &.success { color: $c-accent; }
  &.error { color: $c-error; }
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: $s-sm;
  color: $c-accent;
  text-decoration: none;
  font-weight: $fw-medium;
  transition: gap 0.2s ease;

  &:hover { gap: $s-md; }
}

// Sidebar
.case-sidebar {
  display: flex;
  flex-direction: column;
  gap: $s-lg;

  @media (max-width: $bp-lg) {
    flex-direction: row;
    flex-wrap: wrap;
    > .sidebar-card { flex: 1; min-width: 260px; }
  }
}

.sidebar-card {
  background: white;
  border-radius: $r-xl;
  padding: $s-xl;
  box-shadow: $shadow-sm;

  h4 {
    font-size: $fs-base;
    color: $c-text-primary;
    margin-bottom: $s-lg;
    padding-bottom: $s-sm;
    border-bottom: 2px solid $c-accent;
  }
}

.sidebar-info {
  display: flex;
  flex-direction: column;
  gap: $s-md;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 2px;

  .info-label {
    font-size: $fs-xs;
    color: $c-text-secondary;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .info-value {
    font-size: $fs-sm;
    font-weight: $fw-medium;
    color: $c-text-primary;
  }
}

.sidebar-product-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $s-md;
  background: $c-bg-secondary;
  border-radius: $r-lg;
  text-decoration: none;
  color: $c-accent;
  font-weight: $fw-medium;
  font-size: $fs-sm;
  transition: background 0.2s ease;

  &:hover { background: darken($c-bg-secondary, 5%); }
}

.sidebar-contact-text {
  color: $c-text-secondary;
  font-size: $fs-sm;
  line-height: 1.6;
  margin-bottom: $s-md;
}

.social-icons {
  display: flex;
  gap: 6px;
  margin-bottom: $s-md;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: white;
  opacity: 0.85;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }

  &.fb { background: #1877f2; }
  &.ig { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
  &.yt { background: #ff0000; }
}

// Table of Contents
.toc-card {
  .toc-nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .toc-link {
    display: block;
    padding: $s-sm $s-md;
    border-radius: $r-md;
    color: $c-text-secondary;
    text-decoration: none;
    font-size: $fs-sm;
    font-weight: $fw-medium;
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: $c-bg-secondary;
      color: $c-accent;
    }
  }
}

.recommended-section {
  background: $c-bg-secondary;
  padding: $s-2xl 0;
  border-top: 1px solid rgba(0,0,0,0.06);

  .section-title {
    text-align: center;
    margin-bottom: $s-xl;
    font-size: $fs-2xl;
  }

  .recommended-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $s-lg;
  }

  .case-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    background: white;
    border-radius: $r-lg;
    overflow: hidden;
    box-shadow: $shadow-sm;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: $shadow-md;
    }

    .case-img {
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      position: relative;
    }

    .case-region {
      position: absolute;
      top: $s-sm;
      left: $s-sm;
      background: rgba(0,0,0,0.5);
      color: white;
      padding: 2px 8px;
      border-radius: $r-sm;
      font-size: $fs-xs;
    }

    .case-icon {
      opacity: 0.8;
    }

    .case-body {
      padding: $s-md;

      .tag {
        font-size: $fs-xs;
        color: $c-accent;
        margin-bottom: $s-xs;
        display: block;
      }

      h3 {
        font-size: $fs-base;
        margin-bottom: $s-xs;
        line-height: 1.4;
      }

      p {
        font-size: $fs-sm;
        color: $c-text-secondary;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }

  @media (max-width: $bp-md) {
    .recommended-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
