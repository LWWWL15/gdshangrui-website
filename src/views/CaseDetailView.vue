<template>
  <div class="case-detail-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('客户案例', 'Case Study') }}</span>
        <h1>{{ t(caseData.titleZh, caseData.titleEn) }}</h1>
        <p>{{ t(caseData.descZh, caseData.descEn) }}</p>
      </div>
    </section>

    <div class="container">
      <div class="case-layout">
        <!-- Main Article -->
        <article class="case-article">
          <!-- Case Header Info -->
          <div class="article-meta">
            <span class="meta-region">{{ caseData.region }}</span>
            <span class="meta-product">{{ t('产品', 'Product') }}: {{ t(caseData.productZh, caseData.productEn) }}</span>
            <span class="meta-date">{{ caseData.date }}</span>
          </div>

          <!-- Featured Image -->
          <div class="article-featured-img" :style="{ background: caseData.color }">
            <span class="article-icon">{{ caseData.icon }}</span>
          </div>

          <!-- Article Body -->
          <div class="article-body">
            <h2>{{ t('项目背景', 'Project Background') }}</h2>
            <p>{{ t(caseData.contentZh, caseData.contentEn) }}</p>

            <h2>{{ t('解决方案', 'Solution') }}</h2>
            <p>{{ t(caseData.solutionZh, caseData.solutionEn) }}</p>

            <h2>{{ t('实施结果', 'Results') }}</h2>
            <p>{{ t(caseData.resultsZh, caseData.resultsEn) }}</p>

            <h2>{{ t('客户反馈', 'Customer Feedback') }}</h2>
            <blockquote class="article-quote">
              <p>"{{ t(caseData.feedbackZh, caseData.feedbackEn) }}"</p>
              <cite>— {{ caseData.customerName }}</cite>
            </blockquote>
          </div>

          <!-- Send Inquiry Form -->
          <form class="contact-form card" @submit.prevent="handleInquiry">
            <h3>{{ t('发送询盘', 'Send Inquiry') }}</h3>
            <div class="form-group">
              <label>{{ t('姓名', 'Name') }} *</label>
              <input v-model="inquiryForm.name" type="text" :placeholder="t('您的姓名', 'Your name')" required />
            </div>
            <div class="form-group">
              <label>{{ t('邮箱', 'Email') }} *</label>
              <input v-model="inquiryForm.email" type="email" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label>{{ t('感兴趣的产品', 'Product of Interest') }}</label>
              <input type="text" :value="t(caseData.productZh, caseData.productEn)" readonly />
            </div>
            <div class="form-group">
              <label>{{ t('留言', 'Message') }} *</label>
              <textarea v-model="inquiryForm.message" rows="5" :placeholder="t('请描述您的需求...', 'Please describe your requirements...')" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;" :disabled="sending">
              {{ sending ? t('发送中...', 'Sending...') : t('发送询盘', 'Send Inquiry') }}
            </button>
            <p v-if="inquiryStatus" class="form-status" :class="inquiryStatus.type">{{ inquiryStatus.msg }}</p>
          </form>

          <!-- Navigation -->
          <div class="article-nav">
            <router-link to="/cases" class="back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              {{ t('返回案例列表', 'Back to Cases') }}
            </router-link>
          </div>
        </article>

        <!-- Sidebar Navigation -->
        <aside class="case-sidebar">
          <div class="sidebar-card">
            <h4>{{ t('案例信息', 'Case Information') }}</h4>
            <div class="sidebar-info">
              <div class="info-item">
                <span class="info-label">{{ t('国家/地区', 'Country/Region') }}</span>
                <span class="info-value">{{ caseData.region }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">{{ t('产品类型', 'Product Type') }}</span>
                <span class="info-value">{{ t(caseData.productZh, caseData.productEn) }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">{{ t('合作时间', 'Date') }}</span>
                <span class="info-value">{{ caseData.date }}</span>
              </div>
            </div>
          </div>

          <div class="sidebar-card">
            <h4>{{ t('相关产品', 'Related Products') }}</h4>
            <router-link :to="'/products/' + caseData.productId" class="sidebar-product-link">
              <span>{{ t(caseData.productZh, caseData.productEn) }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <div class="sidebar-card">
            <h4>{{ t('联系方式', 'Contact Us') }}</h4>
            <p class="sidebar-contact-text">{{ t('对此案例感兴趣？联系我们获取更多信息', 'Interested in this case? Contact us for more information') }}</p>
            <router-link to="/contact" class="btn btn-primary btn-sm" style="width:100%; text-align:center;">
              {{ t('立即联系', 'Contact Now') }}
            </router-link>
          </div>
        </aside>
      </div>
    </div>

    <!-- CTA -->
    <section class="section-dark">
      <div class="container" style="text-align:center;">
        <h2 style="color:white; margin-bottom:16px;">{{ t('想要类似解决方案？', 'Want a Similar Solution?') }}</h2>
        <p style="color:rgba(255,255,255,0.6); margin-bottom:32px; font-size:18px;">{{ t('联系我们，获取专属定制方案', 'Contact us for a customized solution') }}</p>
        <router-link to="/contact" class="btn btn-primary btn-lg">{{ t('立即联系', 'Contact Now') }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang'

const { t } = useLang()
const route = useRoute()
const caseId = Number(route.params.id)

const allCases = [
  {
    id: 1, region: 'Vietnam', icon: '\u2B25', productZh: '冷压机', productEn: 'Cold Press',
    titleZh: '越南家具厂冷压生产线', titleEn: 'Vietnam Furniture Factory Cold Press Line',
    descZh: '为越南某大型家具制造商提供10台冷压机，用于板材压合生产线，显著提升产能。',
    descEn: 'Supplied 10 cold press machines to a large Vietnamese furniture manufacturer, significantly improving production capacity.',
    contentZh: '越南某大型家具制造商由于原有生产线设备老旧，生产效率低下，急需升级设备以满足不断增长的订单需求。在经过多方比较后，他们选择了我们的冷压机设备。',
    contentEn: 'A large Vietnamese furniture manufacturer needed to upgrade their equipment due to aging production lines and low efficiency. After comparing multiple suppliers, they chose our cold press machines.',
    solutionZh: '我们提供了10台高性能冷压机，配备先进的液压系统和精密控制模块，能够实现板材的均匀压合。同时，我们的技术团队赴现场进行了设备安装调试和操作培训。',
    solutionEn: 'We supplied 10 high-performance cold press machines with advanced hydraulic systems and precision control modules. Our technical team also conducted on-site installation, debugging, and operator training.',
    resultsZh: '设备投产后，客户的生产效率提升了40%，产品次品率下降了60%。客户对我们的设备质量和服务表示非常满意。',
    resultsEn: 'After the machines were put into operation, customer production efficiency increased by 40% and defect rate decreased by 60%. The customer was very satisfied with our equipment quality and service.',
    feedbackZh: '上锐的设备质量非常好，服务也很专业。设备投入使用后，我们的产能大幅提升，真的帮了我们大忙。',
    feedbackEn: 'Shang Rui\'s equipment quality is excellent and their service is very professional. After the machines were put into operation, our production capacity increased significantly.',
    customerName: '越南某家具制造商', date: '2024-03', productId: 'cold-press',
    color: 'linear-gradient(135deg, #1a2744, #1a6fd4)'
  },
  {
    id: 2, region: 'Saudi Arabia', icon: '\uD83C\uDD76', productZh: '热压机', productEn: 'Hot Press',
    titleZh: '沙特木门生产商热压设备', titleEn: 'Saudi Arabia Door Manufacturer Hot Press',
    descZh: '为沙特木门生产商定制热压机组，满足当地高温环境下的稳定生产需求。',
    descEn: 'Custom hot press units for a Saudi door manufacturer, meeting stable production needs in high-temperature environments.',
    contentZh: '沙特阿拉伯一家大型木门生产商在高温环境下面临设备稳定性挑战。传统热压机在高温条件下性能下降严重，无法满足生产需求。',
    contentEn: 'A major door manufacturer in Saudi Arabia faced equipment stability challenges in high-temperature conditions. Traditional hot press machines experienced severe performance degradation in hot climates.',
    solutionZh: '我们专门为中东地区的高温环境设计了定制化热压机组，采用特殊的散热系统和耐高温材料，确保设备在50°C以上环境温度下仍能稳定运行。',
    solutionEn: 'We designed custom hot press units specifically for the Middle East high-temperature environment, using special cooling systems and heat-resistant materials to ensure stable operation even above 50°C.',
    resultsZh: '设备在沙特当地高温环境下运行稳定，帮助客户实现了全年不间断生产，产能提升了35%。',
    resultsEn: 'The equipment operates stably in Saudi Arabia\'s high-temperature environment, helping the customer achieve uninterrupted production year-round with a 35% increase in capacity.',
    feedbackZh: '在如此高温的环境下，设备还能保持稳定运行，上锐的技术实力令人钦佩。',
    feedbackEn: 'The equipment maintains stable operation in such high temperatures. We are impressed with Shang Rui\'s technical capabilities.',
    customerName: '沙特某木门生产商', date: '2024-05', productId: 'hot-press',
    color: 'linear-gradient(135deg, #7b3f00, #c8a84b)'
  },
  {
    id: 3, region: 'Nigeria', icon: '\u2699', productZh: '多片锯', productEn: 'Multi-blade Saw',
    titleZh: '尼日利亚木材加工厂', titleEn: 'Nigeria Timber Processing Factory',
    descZh: '向尼日利亚木材加工厂出口多片锯设备，帮助客户实现高效开料生产。',
    descEn: 'Exported multi-blade saw equipment to a Nigerian timber processing factory for efficient cutting production.',
    contentZh: '尼日利亚一家木材加工厂希望提升原木开料效率，传统的单片锯设备效率低下，无法满足市场需求。',
    contentEn: 'A Nigerian timber processing factory wanted to improve log cutting efficiency. Traditional single-blade saw equipment was too inefficient to meet market demand.',
    solutionZh: '我们提供了高效多片锯设备，可同时进行多片板材切割，大大提升了开料效率。同时设备配备了自动送料系统，降低了人工成本。',
    solutionEn: 'We supplied high-efficiency multi-blade saw equipment that can cut multiple panels simultaneously, greatly improving cutting efficiency. The equipment also features an automatic feeding system to reduce labor costs.',
    resultsZh: '客户的生产效率提升了200%，人工成本降低了50%，投资回报周期仅为8个月。',
    resultsEn: 'Customer production efficiency increased by 200% and labor costs decreased by 50%, with a payback period of only 8 months.',
    feedbackZh: '设备运行稳定，效率远超预期。上锐的售后服务也很及时，非常推荐。',
    feedbackEn: 'The equipment runs stably and efficiency far exceeds expectations. Shang Rui\'s after-sales service is also very prompt. Highly recommended.',
    customerName: '尼日利亚某木材加工厂', date: '2023-11', productId: 'multi-blade-saw',
    color: 'linear-gradient(135deg, #1a4a2e, #2d9e5f)'
  },
  {
    id: 4, region: 'Pakistan', icon: '\uD83D\uDCC0', productZh: '四面刨', productEn: 'Four-side Planer',
    titleZh: '巴基斯坦地板生产线', titleEn: 'Pakistan Flooring Production Line',
    descZh: '为巴基斯坦地板制造商提供四面刨生产线，产品精度达到国际标准。',
    descEn: 'Provided four-side planer production line for a Pakistani flooring manufacturer meeting international standards.',
    contentZh: '巴基斯坦一家地板制造商需要提升产品精度，以满足出口欧美市场的严格质量要求。',
    contentEn: 'A Pakistani flooring manufacturer needed to improve product accuracy to meet strict quality requirements for export to European and American markets.',
    solutionZh: '我们提供了高精度四面刨生产线，加工精度达到±0.05mm，完全满足国际标准。同时配备了在线质量检测系统。',
    solutionEn: 'We supplied a high-precision four-side planer production line with processing accuracy of ±0.05mm, fully meeting international standards. An online quality inspection system was also installed.',
    resultsZh: '产品精度大幅提升，成功通过了欧美市场的质量认证，出口订单增加了60%。',
    resultsEn: 'Product accuracy significantly improved, successfully passing quality certification for European and American markets, with export orders increasing by 60%.',
    feedbackZh: '产品精度完全达到国际标准，帮助我们打开了欧美市场。',
    feedbackEn: 'Product accuracy fully meets international standards, helping us penetrate European and American markets.',
    customerName: '巴基斯坦某地板制造商', date: '2024-01', productId: 'four-side-planer',
    color: 'linear-gradient(135deg, #3d1a6b, #8b5cf6)'
  },
  {
    id: 5, region: 'Malaysia', icon: '\uD83D\uDD27', productZh: '升降平台', productEn: 'Lifting Platform',
    titleZh: '马来西亚板材工厂升降系统', titleEn: 'Malaysia Panel Factory Lifting System',
    descZh: '为马来西亚板材工厂配套升降平台系统，优化生产线物料流转效率。',
    descEn: 'Supplied lifting platform systems for a Malaysian panel factory to optimize material flow efficiency.',
    contentZh: '马来西亚一家大型板材工厂在生产过程中需要频繁转运重型板材，人工搬运效率低且存在安全隐患。',
    contentEn: 'A large Malaysian panel factory needed to frequently transport heavy panels during production. Manual handling was inefficient and posed safety hazards.',
    solutionZh: '我们提供了一系列液压升降平台，与生产线无缝对接，实现了板材的自动化转运，大幅提升了物料流转效率。',
    solutionEn: 'We supplied a series of hydraulic lifting platforms that seamlessly integrated with the production line, achieving automated panel transport and greatly improving material flow efficiency.',
    resultsZh: '物料转运效率提升了180%，工伤事故率下降了90%，客户非常满意。',
    resultsEn: 'Material handling efficiency increased by 180% and workplace injury rate decreased by 90%. The customer was very satisfied.',
    feedbackZh: '升降系统运行稳定，大大减少了人工搬运的压力，安全性也提高了。',
    feedbackEn: 'The lifting system runs stably, greatly reducing the strain of manual handling and improving safety.',
    customerName: '马来西亚某板材工厂', date: '2023-09', productId: 'lifting-platform',
    color: 'linear-gradient(135deg, #4a2000, #c87941)'
  },
  {
    id: 6, region: 'Indonesia', icon: '\u2B25', productZh: '冷压机', productEn: 'Cold Press',
    titleZh: '印尼胶合板厂整线设备', titleEn: 'Indonesia Plywood Factory Full Line',
    descZh: '为印尼胶合板工厂提供整线冷压设备，实现年产能大幅提升。',
    descEn: 'Full cold press line for an Indonesian plywood factory, achieving significant annual capacity increase.',
    contentZh: '印尼一家胶合板工厂计划扩建生产线，需要整套冷压设备来提升年产能。',
    contentEn: 'An Indonesian plywood factory planned to expand its production line and needed a complete set of cold press equipment to increase annual capacity.',
    solutionZh: '我们提供了完整的冷压生产线，包括多台大型冷压机、预压机和自动化控制系统，实现了从压合到出料的全自动化。',
    solutionEn: 'We supplied a complete cold press production line including multiple large cold presses, pre-presses, and automated control systems, achieving fully automated pressing and output.',
    resultsZh: '整线投产后，年产能从原来的30万立方米提升到60万立方米，实现了产能翻倍。',
    resultsEn: 'After the full line was put into operation, annual capacity increased from 300,000 cubic meters to 600,000 cubic meters, doubling production capacity.',
    feedbackZh: '整线设备运行良好，自动化程度高，帮我们实现了产能翻倍的目标。',
    feedbackEn: 'The full line equipment runs well with high automation, helping us achieve the goal of doubling capacity.',
    customerName: '印尼某胶合板工厂', date: '2024-02', productId: 'cold-press',
    color: 'linear-gradient(135deg, #1a2744, #2d6fd4)'
  },
]

const caseData = allCases.find(c => c.id === caseId) || allCases[0]

// Inquiry form
const sending = ref(false)
const inquiryStatus = ref<{ type: string; msg: string } | null>(null)
const inquiryForm = reactive({ name: '', email: '', message: '' })

async function handleInquiry() {
  if (!inquiryForm.name || !inquiryForm.email || !inquiryForm.message) return
  sending.value = true
  inquiryStatus.value = null
  await new Promise(r => setTimeout(r, 1000))
  inquiryStatus.value = {
    type: 'success',
    msg: t('✅ 询盘已发送！我们将在24小时内回复。', '✅ Inquiry sent! We will reply within 24 hours.')
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
  padding: $s-xl $s-2xl;
  border-top: 1px solid rgba(0,0,0,0.06);
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
  margin-bottom: $s-lg;
}
</style>
