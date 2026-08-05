<template>
  <div class="case-detail-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('博客', 'Blog', tm('blogDetail.blogTag', 'Blog')) }}</span>
        <h1>{{ t(caseData.titleCn, caseData.titleMic, caseData.titleMic, caseData.titleRu) }}</h1>
        <p>{{ t(caseData.descCn, caseData.descMic, caseData.descMic, caseData.descRu) }}</p>
      </div>
    </section>

    <div class="container">
      <div class="case-layout">
        <!-- Main Article -->
        <article class="case-article">
          <!-- Case Header Info -->
          <div class="article-meta">
            <span class="meta-region">{{ getRouteLang() === 'ru' ? caseData.regionRu : caseData.region }}</span>
            <span class="meta-product">{{ t('产品', 'Product', tm('blogDetail.product', 'Product'), tm('blogDetail.product', 'Product')) }}: {{ t(caseData.productCn, caseData.productMic, caseData.productMic, caseData.productMic) }}</span>
            <span class="meta-date">{{ caseData.date }}</span>
          </div>

          <!-- Featured Image -->
          <div class="article-featured-img" :style="{ background: caseData.color }">
            <span class="article-icon">{{ caseData.icon }}</span>
          </div>

          <!-- Article Body -->
          <div class="article-body" id="article-body">
            <h2 id="project-background">{{ t('项目背景', 'Project Background', tm('blogDetail.projectBackground', 'Project Background')) }}</h2>
            <p>{{ t(caseData.contentCn, caseData.contentMic, caseData.contentMic, caseData.contentRu) }}</p>

            <h2 id="solution">{{ t('解决方案', 'Solution', tm('blogDetail.solution', 'Solution'), tm('blogDetail.solution', 'Solution')) }}</h2>
            <p>{{ t(caseData.solutionCn, caseData.solutionMic, caseData.solutionMic, caseData.solutionRu) }}</p>

            <h2 id="results">{{ t('实施结果', 'Results', tm('blogDetail.results', 'Results'), tm('blogDetail.results', 'Results')) }}</h2>
            <p>{{ t(caseData.resultsCn, caseData.resultsMic, caseData.resultsMic, caseData.resultsRu) }}</p>

            <h2 id="customer-feedback">{{ t('客户反馈', 'Customer Feedback', tm('blogDetail.customerFeedback', 'Customer Feedback'), tm('blogDetail.customerFeedback', 'Customer Feedback')) }}</h2>
            <blockquote class="article-quote">
              <p>"{{ t(caseData.feedbackCn, caseData.feedbackMic, caseData.feedbackMic, caseData.feedbackRu) }}"</p>
              <cite>— {{ getRouteLang() === 'ru' ? caseData.customerNameRu : caseData.customerName }}</cite>
            </blockquote>
          </div>

                    <!-- Share Link Button -->
          <div class="share-section">
            <button class="btn btn-share" @click="copyShareLink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/>
              </svg>
              {{ t('复制链接', 'Copy Link', tm('blogDetail.copyLink', 'Copy Link')) }}
            </button>
            <span v-if="copySuccess" class="share-tip success">
              {{ t('✅ 链接已复制！', '✅ Link Copied!', tm('blogDetail.linkCopied', '✅ Link Copied!')) }}
            </span>
          </div>

          <!-- Send Inquiry Form -->
          <form class="contact-form card" @submit.prevent="handleInquiry">
            <h3>{{ t('发送询盘', 'Send Inquiry', tm('blogDetail.sendInquiry', 'Send Inquiry')) }}</h3>
            <div class="form-group">
              <label>{{ t('姓名', 'Name', tm('blogDetail.name', 'Name')) }} *</label>
              <input v-model="inquiryForm.name" type="text" :placeholder="t('您的姓名', 'Your name', tm('blogDetail.namePlaceholder', 'Your name'))" required />
            </div>
            <div class="form-group">
              <label>{{ t('邮箱', 'Email', tm('blogDetail.email', 'Email')) }} *</label>
              <input v-model="inquiryForm.email" type="email" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label>{{ t('感兴趣的产品', 'Product of Interest', tm('blogDetail.productInterest', 'Product of Interest')) }}</label>
              <input type="text" :value="t(caseData.productCn, caseData.productMic, caseData.productMic, caseData.productMic)" readonly />
            </div>
            <div class="form-group">
              <label>{{ t('留言', 'Message', tm('blogDetail.message', 'Message')) }} *</label>
              <textarea v-model="inquiryForm.message" rows="5" :placeholder="t('请描述您的需求...', 'Please describe your requirements...', tm('blogDetail.messagePlaceholder', 'Please describe your requirements...'))" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;" :disabled="sending">
              {{ sending ? t('发送中...', 'Sending...', tm('blogDetail.sending', 'Sending...')) : t('发送询盘', 'Send Inquiry', tm('blogDetail.sendInquiryBtn', 'Send Inquiry')) }}
            </button>
            <p v-if="inquiryStatus" class="form-status" :class="inquiryStatus.type">{{ inquiryStatus.msg }}</p>
          </form>

          <!-- Navigation -->
          <div class="article-nav">
            <router-link v-if="prevCase" :to="`/${lang}/blog/` + prevCase.slug" class="nav-link nav-prev">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              <span>{{ t('上一篇', 'Previous', tm('blogDetail.previous', 'Previous')) }}</span>
            </router-link>
            <span v-else class="nav-placeholder"></span>

            <router-link v-if="nextCase" :to="`/${lang}/blog/` + nextCase.slug" class="nav-link nav-next">
              <span>{{ t('下一篇', 'Next', tm('blogDetail.next', 'Next')) }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
            <span v-else class="nav-placeholder"></span>
          </div>
        </article>

        <!-- Sidebar Navigation -->
        <aside class="case-sidebar">
          <div class="sidebar-card">
            <h4>{{ t('博客信息', 'Blog Information', tm('blogDetail.blogInfo', 'Blog Information')) }}</h4>
            <div class="sidebar-info">
              <div class="info-item">
                <span class="info-label">{{ t('国家/地区', 'Country/Region', tm('blogDetail.countryRegion', 'Country/Region')) }}</span>
                <span class="info-value">{{ caseData.region }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">{{ t('产品类型', 'Product Type', tm('blogDetail.productType', 'Product Type')) }}</span>
                <span class="info-value">{{ t(caseData.productCn, caseData.productMic, caseData.productMic, caseData.productMic) }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">{{ t('合作时间', 'Date', tm('blogDetail.cooperationDate', 'Date')) }}</span>
                <span class="info-value">{{ caseData.date }}</span>
              </div>
            </div>
          </div>

          <div class="sidebar-card">
            <h4>{{ t('相关产品', 'Related Products', tm('blogDetail.relatedProducts', 'Related Products')) }}</h4>
            <router-link :to="`/${lang}/products/` + caseData.productId" class="sidebar-product-link">
              <span>{{ t(caseData.productCn, caseData.productMic, caseData.productMic, caseData.productMic) }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Table of Contents -->
          <div class="sidebar-card toc-card">
            <h4>{{ t('文章目录', 'Table of Contents', tm('blogDetail.tableOfContents', 'Table of Contents')) }}</h4>
            <nav class="toc-nav">
              <a href="#project-background" class="toc-link">{{ t('项目背景', 'Project Background', tm('blogDetail.tocBackground', 'Project Background')) }}</a>
              <a href="#solution" class="toc-link">{{ t('解决方案', 'Solution', tm('blogDetail.tocSolution', 'Solution')) }}</a>
              <a href="#results" class="toc-link">{{ t('实施结果', 'Results', tm('blogDetail.tocResults', 'Results')) }}</a>
              <a href="#customer-feedback" class="toc-link">{{ t('客户反馈', 'Customer Feedback', tm('blogDetail.tocFeedback', 'Customer Feedback')) }}</a>
            </nav>
          </div>

          <div class="sidebar-card">
            <h4>{{ t('联系方式', 'Contact Us', tm('blogDetail.contactUs', 'Contact Us')) }}</h4>
            <p class="sidebar-contact-text">{{ t('对此博客感兴趣？联系我们获取更多信息', 'Interested in this blog post? Contact us for more information', tm('blogDetail.interested', 'Interested in this blog post? Contact us for more information')) }}</p>
            <div class="social-icons">
              <a href="https://www.facebook.com/share/1BREpu7DUr/?mibextid=wwXIfr" target="_blank" rel="noopener" class="social-icon fb" :aria-label="t('Facebook', 'Facebook', tm('blogDetail.facebook', 'Facebook'))">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/shangruijx?igsh=Z2YxYnRuN3ljYnBj&utm_source=qr" target="_blank" rel="noopener" class="social-icon ig" :aria-label="t('Instagram', 'Instagram', tm('blogDetail.instagram', 'Instagram'))">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@shangrui-machinery?si=StEF7rJoldH0kP0K" target="_blank" rel="noopener" class="social-icon yt" :aria-label="t('YouTube', 'YouTube', tm('blogDetail.youtube', 'YouTube'))">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <router-link :to="`/${lang}/contact`" class="btn btn-primary btn-sm" style="width:100%; text-align:center;">
              {{ t('立即联系', 'Contact Now', tm('blogDetail.contactNow', 'Contact Now')) }}
            </router-link>
          </div>
        </aside>
      </div>
    </div>

    <!-- Recommended Articles -->
    <section class="section recommended-section">
      <div class="container">
        <h2 class="section-title">{{ t('推荐文章', 'Recommended Articles', tm('blogDetail.recommended', 'Recommended Articles')) }}</h2>
        <div class="recommended-grid">
          <router-link v-for="c in recommendedCases" :key="c.id" :to="`/${lang}/blog/` + c.slug" class="card case-card">
            <div class="case-img" :style="{ background: c.color }">
              <span class="case-region">{{ c.region }}</span>
              <span class="case-icon">{{ c.icon }}</span>
            </div>
            <div class="case-body">
              <span class="tag">{{ t(c.productCn, c.productMic, c.productMic, c.productMic) }}</span>
              <h3>{{ t(c.titleCn, c.titleMic, c.titleMic, c.titleRu) }}</h3>
              <p>{{ t(c.descCn, c.descMic) }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTranslations } from '@/composables/useTranslations'

const { t, tm, lang } = useTranslations()
const route = useRoute()
const caseSlug = computed(() => route.params.slug as string)

const allCases = [
  {
    id: 1, slug: 'vietnam-furniture-factory-cold-press', region: 'Vietnam', icon: '\u2B25', productCn: '冷压机', productMic: 'Cold Press',
    titleCn: '越南家具厂冷压生产线', titleMic: 'Vietnam Furniture Factory Cold Press Line',
    descCn: '为越南某大型家具制造商提供10台冷压机，用于板材压合生产线，显著提升产能。',
    descMic: 'Supplied 10 cold press machines to a large Vietnamese furniture manufacturer, significantly improving production capacity.',
    contentCn: '越南某大型家具制造商由于原有生产线设备老旧，生产效率低下，急需升级设备以满足不断增长的订单需求。在经过多方比较后，他们选择了我们的冷压机设备。',
    contentMic: 'A large Vietnamese furniture manufacturer needed to upgrade their equipment due to aging production lines and low efficiency. After comparing multiple suppliers, they chose our cold press machines.',
    solutionCn: '我们提供了10台高性能冷压机，配备先进的液压系统和精密控制模块，能够实现板材的均匀压合。同时，我们的技术团队赴现场进行了设备安装调试和操作培训。',
    solutionMic: 'We supplied 10 high-performance cold press machines with advanced hydraulic systems and precision control modules. Our technical team also conducted on-site installation, debugging, and operator training.',
    resultsCn: '设备投产后，客户的生产效率提升了40%，产品次品率下降了60%。客户对我们的设备质量和服务表示非常满意。',
    resultsMic: 'After the machines were put into operation, customer production efficiency increased by 40% and defect rate decreased by 60%. The customer was very satisfied with our equipment quality and service.',
    feedbackCn: '上锐的设备质量非常好，服务也很专业。设备投入使用后，我们的产能大幅提升，真的帮了我们大忙。',
    feedbackMic: 'Shang Rui\'s equipment quality is excellent and their service is very professional. After the machines were put into operation, our production capacity increased significantly.',
    titleRu: 'Линия холодного прессования для вьетнамской мебельной фабрики',
    descRu: 'Поставлены 10 холодных прессов для крупного вьетнамского производителя мебели, что значительно увеличило производственные мощности.',
    contentRu: 'Крупный вьетнамский производитель мебели столкнулся с необходимостью модернизации оборудования из-за устаревших производственных линий и низкой эффективности. После сравнения нескольких поставщиков был сделан выбор в пользу наших холодных прессов.',
    solutionRu: 'Мы поставили 10 высокопроизводительных холодных прессов с современной гидравлической системой и прецизионными модулями управления для равномерного прессования плит. Наша техническая команда также провела монтаж, пусконаладку и обучение операторов на месте.',
    resultsRu: 'После ввода оборудования в эксплуатацию эффективность производства заказчика выросла на 40%, а процент брака снизился на 60%. Заказчик остался очень доволен качеством оборудования и сервисом.',
    feedbackRu: 'Оборудование Shang Rui отличается превосходным качеством, а сервис — высоким профессионализмом. После запуска машин наши производственные мощности значительно выросли.',
    customerNameRu: 'Вьетнамский производитель мебели',
    regionRu: 'Вьетнам',
    customerName: '越南某家具制造商', date: '2024-03', productId: 'cold-press',
    color: 'linear-gradient(135deg, #1a2744, #1a6fd4)'
  },
  {
    id: 2, slug: 'saudi-arabia-door-manufacturer-hot-press', region: 'Saudi Arabia', icon: '\uD83C\uDD76', productCn: '热压机', productMic: 'Hot Press',
    titleCn: '沙特木门生产商热压设备', titleMic: 'Saudi Arabia Door Manufacturer Hot Press',
    descCn: '为沙特木门生产商定制热压机组，满足当地高温环境下的稳定生产需求。',
    descMic: 'Custom hot press units for a Saudi door manufacturer, meeting stable production needs in high-temperature environments.',
    contentCn: '沙特阿拉伯一家大型木门生产商在高温环境下面临设备稳定性挑战。传统热压机在高温条件下性能下降严重，无法满足生产需求。',
    contentMic: 'A major door manufacturer in Saudi Arabia faced equipment stability challenges in high-temperature conditions. Traditional hot press machines experienced severe performance degradation in hot climates.',
    solutionCn: '我们专门为中东地区的高温环境设计了定制化热压机组，采用特殊的散热系统和耐高温材料，确保设备在50°C以上环境温度下仍能稳定运行。',
    solutionMic: 'We designed custom hot press units specifically for the Middle East high-temperature environment, using special cooling systems and heat-resistant materials to ensure stable operation even above 50°C.',
    resultsCn: '设备在沙特当地高温环境下运行稳定，帮助客户实现了全年不间断生产，产能提升了35%。',
    resultsMic: 'The equipment operates stably in Saudi Arabia\'s high-temperature environment, helping the customer achieve uninterrupted production year-round with a 35% increase in capacity.',
    feedbackCn: '在如此高温的环境下，设备还能保持稳定运行，上锐的技术实力令人钦佩。',
    feedbackMic: 'The equipment maintains stable operation in such high temperatures. We are impressed with Shang Rui\'s technical capabilities.',
    titleRu: 'Термопрессовое оборудование для саудовского производителя дверей',
    descRu: 'Изготовлены термопрессовые установки для саудовского производителя дверей с учётом стабильной работы в условиях высоких температур.',
    contentRu: 'Крупный производитель дверей в Саудовской Аравии столкнулся с проблемами стабильности оборудования в условиях высоких температур. Традиционные термопрессы значительно теряли производительность в жарком климате.',
    solutionRu: 'Мы разработали термопрессовые установки специально для среды с высокими температурами на Ближнем Востоке, используя специальные системы охлаждения и термостойкие материалы, обеспечивающие стабильную работу при температуре окружающей среды выше 50°C.',
    resultsRu: 'Оборудование стабильно работает в условиях высоких температур Саудовской Аравии, помогая заказчику обеспечить круглогодичное непрерывное производство с ростом мощности на 35%.',
    feedbackRu: 'В условиях такой высокой температуры оборудование сохраняет стабильную работу — технические возможности Shang Rui впечатляют.',
    customerNameRu: 'Саудовский производитель дверей',
    regionRu: 'Саудовская Аравия',
    customerName: '沙特某木门生产商', date: '2024-05', productId: 'hot-press',
    color: 'linear-gradient(135deg, #7b3f00, #c8a84b)'
  },
  {
    id: 3, slug: 'nigeria-timber-processing-multi-blade-saw', region: 'Nigeria', icon: '\u2699', productCn: '多片锯', productMic: 'Multi-blade Saw',
    titleCn: '尼日利亚木材加工厂', titleMic: 'Nigeria Timber Processing Factory',
    descCn: '向尼日利亚木材加工厂出口多片锯设备，帮助客户实现高效开料生产。',
    descMic: 'Exported multi-blade saw equipment to a Nigerian timber processing factory for efficient cutting production.',
    contentCn: '尼日利亚一家木材加工厂希望提升原木开料效率，传统的单片锯设备效率低下，无法满足市场需求。',
    contentMic: 'A Nigerian timber processing factory wanted to improve log cutting efficiency. Traditional single-blade saw equipment was too inefficient to meet market demand.',
    solutionCn: '我们提供了高效多片锯设备，可同时进行多片板材切割，大大提升了开料效率。同时设备配备了自动送料系统，降低了人工成本。',
    solutionMic: 'We supplied high-efficiency multi-blade saw equipment that can cut multiple panels simultaneously, greatly improving cutting efficiency. The equipment also features an automatic feeding system to reduce labor costs.',
    resultsCn: '客户的生产效率提升了200%，人工成本降低了50%，投资回报周期仅为8个月。',
    resultsMic: 'Customer production efficiency increased by 200% and labor costs decreased by 50%, with a payback period of only 8 months.',
    feedbackCn: '设备运行稳定，效率远超预期。上锐的售后服务也很及时，非常推荐。',
    feedbackMic: 'The equipment runs stably and efficiency far exceeds expectations. Shang Rui\'s after-sales service is also very prompt. Highly recommended.',
    titleRu: 'Нигерийский деревообрабатывающий завод',
    descRu: 'Экспортировано многопильное оборудование на нигерийский деревообрабатывающий завод для эффективного раскроя.',
    contentRu: 'Нигерийский деревообрабатывающий завод стремился повысить эффективность раскроя брёвен. Традиционное однопильное оборудование было слишком неэффективным для удовлетворения рыночного спроса.',
    solutionRu: 'Мы поставили высокоэффективное многопильное оборудование, позволяющее одновременно резать несколько плит, что значительно повысило производительность раскроя. Оборудование также оснащено автоматической системой подачи для снижения затрат на рабочую силу.',
    resultsRu: 'Эффективность производства заказчика выросла на 200%, затраты на рабочую силу снизились на 50%, а срок окупаемости инвестиций составил всего 8 месяцев.',
    feedbackRu: 'Оборудование работает стабильно, а эффективность значительно превосходит ожидания. Послепродажное обслуживание Shang Rui также очень оперативное. Настоятельно рекомендуем.',
    customerNameRu: 'Нигерийский деревообрабатывающий завод',
    regionRu: 'Нигерия',
    customerName: '尼日利亚某木材加工厂', date: '2023-11', productId: 'multi-blade-saw',
    color: 'linear-gradient(135deg, #1a4a2e, #2d9e5f)'
  },
  {
    id: 4, slug: 'pakistan-flooring-four-side-planer', region: 'Pakistan', icon: '\uD83D\uDCC0', productCn: '四面刨', productMic: 'Four-side Planer',
    titleCn: '巴基斯坦地板生产线', titleMic: 'Pakistan Flooring Production Line',
    descCn: '为巴基斯坦地板制造商提供四面刨生产线，产品精度达到国际标准。',
    descMic: 'Provided four-side planer production line for a Pakistani flooring manufacturer meeting international standards.',
    contentCn: '巴基斯坦一家地板制造商需要提升产品精度，以满足出口欧美市场的严格质量要求。',
    contentMic: 'A Pakistani flooring manufacturer needed to improve product accuracy to meet strict quality requirements for export to European and American markets.',
    solutionCn: '我们提供了高精度四面刨生产线，加工精度达到±0.05mm，完全满足国际标准。同时配备了在线质量检测系统。',
    solutionMic: 'We supplied a high-precision four-side planer production line with processing accuracy of ±0.05mm, fully meeting international standards. An online quality inspection system was also installed.',
    resultsCn: '产品精度大幅提升，成功通过了欧美市场的质量认证，出口订单增加了60%。',
    resultsMic: 'Product accuracy significantly improved, successfully passing quality certification for European and American markets, with export orders increasing by 60%.',
    feedbackCn: '产品精度完全达到国际标准，帮助我们打开了欧美市场。',
    feedbackMic: 'Product accuracy fully meets international standards, helping us penetrate European and American markets.',
    titleRu: 'Линия по производству напольных покрытий в Пакистане',
    descRu: 'Линия четырёхстороннего строгания поставлена пакистанскому производителю напольных покрытий и соответствует международным стандартам точности.',
    contentRu: 'Пакистанский производитель напольных покрытий нуждался в повышении точности продукции для соответствия строгим требованиям качества при экспорте на рынки Европы и США.',
    solutionRu: 'Мы поставили высокоточную линию четырёхстороннего строгания с точностью обработки ±0,05 мм, полностью соответствующую международным стандартам. Также была установлена система онлайн-контроля качества.',
    resultsRu: 'Точность продукции значительно повысилась, успешно пройдена сертификация для европейского и американского рынков, экспортные заказы выросли на 60%.',
    feedbackRu: 'Точность продукции полностью соответствует международным стандартам, что помогло нам выйти на рынки Европы и США.',
    customerNameRu: 'Пакистанский производитель напольных покрытий',
    regionRu: 'Пакистан',
    customerName: '巴基斯坦某地板制造商', date: '2024-01', productId: 'four-side-planer',
    color: 'linear-gradient(135deg, #3d1a6b, #8b5cf6)'
  },
  {
    id: 5, slug: 'malaysia-panel-factory-lifting-system', region: 'Malaysia', icon: '\uD83D\uDD27', productCn: '升降平台', productMic: 'Lifting Platform',
    titleCn: '马来西亚板材工厂升降系统', titleMic: 'Malaysia Panel Factory Lifting System',
    descCn: '为马来西亚板材工厂配套升降平台系统，优化生产线物料流转效率。',
    descMic: 'Supplied lifting platform systems for a Malaysian panel factory to optimize material flow efficiency.',
    contentCn: '马来西亚一家大型板材工厂在生产过程中需要频繁转运重型板材，人工搬运效率低且存在安全隐患。',
    contentMic: 'A large Malaysian panel factory needed to frequently transport heavy panels during production. Manual handling was inefficient and posed safety hazards.',
    solutionCn: '我们提供了一系列液压升降平台，与生产线无缝对接，实现了板材的自动化转运，大幅提升了物料流转效率。',
    solutionMic: 'We supplied a series of hydraulic lifting platforms that seamlessly integrated with the production line, achieving automated panel transport and greatly improving material flow efficiency.',
    resultsCn: '物料转运效率提升了180%，工伤事故率下降了90%，客户非常满意。',
    resultsMic: 'Material handling efficiency increased by 180% and workplace injury rate decreased by 90%. The customer was very satisfied.',
    feedbackCn: '升降系统运行稳定，大大减少了人工搬运的压力，安全性也提高了。',
    feedbackMic: 'The lifting system runs stably, greatly reducing the strain of manual handling and improving safety.',
    titleRu: 'Подъёмная система для малайзийского панельного завода',
    descRu: 'Подъёмные платформы поставлены малайзийскому панельному заводу для оптимизации материального потока на производственной линии.',
    contentRu: 'Крупному малайзийскому панельному заводу требовалось часто перемещать тяжёлые плиты в ходе производства. Ручная обработка была неэффективной и представляла угрозу безопасности.',
    solutionRu: 'Мы поставили серию гидравлических подъёмных платформ, бесшовно интегрированных с производственной линией, обеспечив автоматизированное перемещение плит и значительно повысив эффективность материального потока.',
    resultsRu: 'Эффективность перемещения материалов выросла на 180%, уровень производственного травматизма снизился на 90%, заказчик остался очень доволен.',
    feedbackRu: 'Подъёмная система работает стабильно, значительно снижая нагрузку при ручном перемещении и повышая безопасность.',
    customerNameRu: 'Малайзийский панельный завод',
    regionRu: 'Малайзия',
    customerName: '马来西亚某板材工厂', date: '2023-09', productId: 'lifting-platform',
    color: 'linear-gradient(135deg, #4a2000, #c87941)'
  },
  {
    id: 6, slug: 'indonesia-plywood-factory-cold-press', region: 'Indonesia', icon: '\u2B25', productCn: '冷压机', productMic: 'Cold Press',
    titleCn: '印尼胶合板厂整线设备', titleMic: 'Indonesia Plywood Factory Full Line',
    descCn: '为印尼胶合板工厂提供整线冷压设备，实现年产能大幅提升。',
    descMic: 'Full cold press line for an Indonesian plywood factory, achieving significant annual capacity increase.',
    contentCn: '印尼一家胶合板工厂计划扩建生产线，需要整套冷压设备来提升年产能。',
    contentMic: 'An Indonesian plywood factory planned to expand its production line and needed a complete set of cold press equipment to increase annual capacity.',
    solutionCn: '我们提供了完整的冷压生产线，包括多台大型冷压机、预压机和自动化控制系统，实现了从压合到出料的全自动化。',
    solutionMic: 'We supplied a complete cold press production line including multiple large cold presses, pre-presses, and automated control systems, achieving fully automated pressing and output.',
    resultsCn: '整线投产后，年产能从原来的30万立方米提升到60万立方米，实现了产能翻倍。',
    resultsMic: 'After the full line was put into operation, annual capacity increased from 300,000 cubic meters to 600,000 cubic meters, doubling production capacity.',
    feedbackCn: '整线设备运行良好，自动化程度高，帮我们实现了产能翻倍的目标。',
    feedbackMic: 'The full line equipment runs well with high automation, helping us achieve the goal of doubling capacity.',
    titleRu: 'Комплектная линия для индонезийского фанерного завода',
    descRu: 'Полная линия холодного прессования поставлена индонезийскому фанерному заводу, что позволило значительно увеличить годовую мощность.',
    contentRu: 'Индонезийский фанерный завод планировал расширить производственную линию и нуждался в комплекте холодного прессования для увеличения годовой мощности.',
    solutionRu: 'Мы поставили полную линию холодного прессования, включающую несколько крупных холодных прессов, подпрессовщики и системы автоматического управления, обеспечив полную автоматизацию от прессования до выдачи.',
    resultsRu: 'После ввода линии в эксплуатацию годовая мощность увеличилась с 300 000 до 600 000 кубометров, что означает удвоение объёмов производства.',
    feedbackRu: 'Оборудование линии работает хорошо, уровень автоматизации высокий, что помогло нам достичь цели удвоения мощности.',
    customerNameRu: 'Индонезийский фанерный завод',
    regionRu: 'Индонезия',
    customerName: '印尼某胶合板工厂', date: '2024-02', productId: 'cold-press',
    color: 'linear-gradient(135deg, #1a2744, #2d6fd4)'
  },
]

const caseData = computed(() => allCases.find(c => c.slug === caseSlug.value) || allCases[0])

// Previous / Next navigation
const currentIndex = computed(() => allCases.findIndex(c => c.slug === caseSlug.value))
const prevCase = computed(() => currentIndex.value > 0 ? allCases[currentIndex.value - 1] : null)
const nextCase = computed(() => currentIndex.value < allCases.length - 1 ? allCases[currentIndex.value + 1] : null)

// Recommended articles (excluding current)
const recommendedCases = computed(() =>
  allCases.filter(c => c.slug !== caseSlug.value).slice(0, 3)
)

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
    msg: t('✅ 询盘已发送！我们将在24小时内回复。', '✅ Inquiry sent! We will reply within 24 hours.', tm('blogDetail.inquirySent', '✅ Inquiry sent! We will reply within 24 hours.'))
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
