<template>
  <div class="home">
    <!-- Section 1: Hero Banner with Overlay Text -->
    <section class="hero-banner">
      <div class="hero-banner-bg"></div>
      <div class="hero-banner-content">
        <h1 class="hero-banner-title">{{ t('您的上上之选！', 'Your Great Pick!', 'Bộ chọn tuyệt vời của bạn!', 'Ваш лучший выбор!') }}</h1>
        <p class="hero-banner-subtitle">{{ t('ISO9001 | CE 认证 | OEM, ODM', 'ISO9001 | CE Certificate | OEM, ODM', 'ISO9001 | Chứng nhận CE | OEM, ODM', 'ISO9001 | Сертификат CE | OEM, ODM') }}</p>
        <div class="hero-banner-cta">
          <router-link :to="`/${lang}/contact`" class="btn btn-primary btn-lg">
            {{ t('获得报价', 'GET QUOTE', 'ĐƯỢC BÁO GIÁ', 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section 2: Certificates -->
    <section class="section-certificates">
      <div class="container">
        <div class="certificates-grid">
          <div class="cert-card">
            <img src="/cert-ce.jpg" alt="CE Certificate" class="cert-img" loading="lazy" />
            <div class="cert-label" @click="lightboxImg = '/cert-ce.jpg'">{{ t('CE认证', 'CE Certification', 'Chứng nhận CE', 'Сертификат CE') }}</div>
          </div>
          <div class="cert-card">
            <img src="/cert-iso9001.jpg" alt="ISO9001 Certificate" class="cert-img" loading="lazy" />
            <div class="cert-label" @click="lightboxImg = '/cert-iso9001.jpg'">{{ t('ISO9001', 'ISO9001', 'ISO9001', 'ISO9001') }}</div>
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
        <h2 class="section-title">{{ t('畅销产品', 'Best Sellers', t('畅销产品', 'Best Sellers', 'Sản phẩm bán chạy', 'Бестселлеры'), t('畅销产品', 'Best Sellers', 'Sản phẩm bán chạy', 'Бестселлеры')) }}</h2>
        <div class="bestsellers-wrapper">
          <button class="scroll-btn scroll-left" @click="scrollLeft" aria-label="Scroll left">‹</button>
          <div class="bestsellers-scroll" ref="scrollContainer">
            <router-link v-for="p in bestSellers" :key="p.id" :to="`/${getRouteLang()}/products/` + p.id" class="bestseller-card">
              <div class="bestseller-image">
                <img v-if="p.image" :src="p.image" :alt="p.model" class="bestseller-img" loading="lazy" />
                <span v-else class="image-icon">{{ p.icon }}</span>
              </div>
              <div class="bestseller-info">
                <h3>{{ p.model.replace(/立铣$/, '') }}</h3>
                <p>{{ t(p.seriesCn, p.seriesMic, p.seriesVn, p.seriesRu) }}</p>
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
            <template v-if="getRouteLang() === 'cn'">{{ line.cnPrefix }}<span class="highlight-word-cn">{{ line.cnHighlight }}</span>{{ line.cnSuffix }}</template>
            <template v-else-if="getRouteLang() === 'vn'">{{ line.vnPrefix }}<span class="highlight-word">{{ line.vnHighlight }}</span>{{ line.vnSuffix }}</template>
            <template v-else-if="getRouteLang() === 'ru'">{{ line.ruPrefix }}<span class="highlight-word">{{ line.ruHighlight }}</span>{{ line.ruSuffix }}</template>
            <template v-else>{{ line.enPrefix }}<span class="highlight-word">{{ line.enHighlight }}</span>{{ line.enSuffix }}</template>
          </p>
        </div>
        <div class="hero-answer">
          <p>{{ t('我们能满足这些需求，是因为', 'We can meet those needs because', t('我们能满足这些需求，是因为', 'We can meet these needs because', 'Chúng tôi có thể đáp ứng những nhu cầu này vì', 'Мы способны удовлетворить эти потребности, потому что'), t('我们能满足这些需求，是因为', 'We can meet these needs because', 'Chúng tôi có thể đáp ứng những nhu cầu này vì', 'Мы способны удовлетворить эти потребности, потому что')) }}</p>
          <p class="highlight">{{ t('2013 年在中国成立了上锐机械工厂，', 'Shang Rui Machinery was founded in China in 2013,', t('2013 年在中国成立了上锐机械工厂，', 'We established Shang Rui Machinery factory in China in 2013,', 'Chúng tôi thành lập nhà máy Shang Rui Machinery tại Trung Quốc năm 2013,', 'в 2013 году в Китае был основан завод Shang Rui Machinery,'), t('2013 年在中国成立了上锐机械工厂，', 'We established Shang Rui Machinery factory in China in 2013,', 'Chúng tôi thành lập nhà máy Shang Rui Machinery tại Trung Quốc năm 2013,', 'в 2013 году в Китае был основан завод Shang Rui Machinery,')) }}</p>
          <p class="highlight">{{ t('一直专注于木工机械的定制、制造和出口，', 'consistently focusing on customization, manufacturing and export of woodworking machinery,', t('一直专注于木工机械的定制、制造和出口，', 'consistently focusing on customization, manufacturing and export of woodworking machinery,', 'liên tục tập trung vào tùy chỉnh, sản xuất và xuất khẩu máy móc gỗ,', 'непрерывно специализируясь на индивидуальном производстве, изготовлении и экспорте деревообрабатывающих станков,'), t('一直专注于木工机械的定制、制造和出口，', 'consistently focusing on customization, manufacturing and export of woodworking machinery,', 'liên tục tập trung vào tùy chỉnh, sản xuất và xuất khẩu máy móc gỗ,', 'непрерывно специализируясь на индивидуальном производстве, изготовлении и экспорте деревообрабатывающих станков,')) }}</p>
          <p class="highlight">{{ t('拥有多名超过十年最高超过三十年经验的员工，并拥有向越南、沙特、印尼、韩国等 20多个国家出口的经验。', 'with employees having 10+ to 30+ years of experience, and exporting to 20+ countries including Vietnam, Saudi Arabia, Indonesia, and South Korea.', t('拥有多名超过十年最高超过三十年经验的员工，并拥有向越南、沙特、印尼、韩国等 20多个国家出口的经验。', 'with team members having 10+ years of experience (some up to 30 years), and export experience to 20+ countries including Vietnam, Saudi Arabia, Indonesia, South Korea, and more.', 'đội ngũ nhân viên có hơn 10 năm kinh nghiệm (một số hơn 30 năm), và có kinh nghiệm xuất khẩu sang 20+ quốc gia bao gồm Việt Nam, Ả Rập Xê Út, Indonesia, Hàn Quốc và hơn nữa.', 'в нашей команде работают специалисты с более чем 10-летним (а некоторые — с более чем 30-летним) опытом; мы имеем опыт поставок в более чем 20 стран, включая Вьетнам, Саудовскую Аравию, Индонезию, Республику Корея и другие.'), t('拥有多名超过十年最高超过三十年经验的员工，并拥有向越南、沙特、印尼、韩国等 20多个国家出口的经验。', 'with team members having 10+ years of experience (some up to 30 years), and export experience to 20+ countries including Vietnam, Saudi Arabia, Indonesia, South Korea, and more.', 'đội ngũ nhân viên có hơn 10 năm kinh nghiệm (một số hơn 30 năm), và có kinh nghiệm xuất khẩu sang 20+ quốc gia bao gồm Việt Nam, Ả Rập Xê Út, Indonesia, Hàn Quốc và hơn nữa.', 'в нашей команде работают специалисты с более чем 10-летним (а некоторые — с более чем 30-летним) опытом; мы имеем опыт поставок в более чем 20 стран, включая Вьетнам, Саудовскую Аравию, Индонезию, Республику Корея и другие.')) }}</p>
        </div>
        <div class="hero-cta">
          <router-link :to="`/${getRouteLang()}/contact`" class="btn btn-primary btn-lg">
            {{ t('联系我们', 'Contact Us', t('联系我们', 'Contact Us', 'Liên hệ', 'Связаться с нами'), t('联系我们', 'Contact Us', 'Liên hệ', 'Связаться с нами')) }}
          </router-link>
          <router-link :to="`/${getRouteLang()}/products`" class="hero-link">
            {{ t('查看产品', 'View Products', t('查看产品', 'View Products', 'Xem sản phẩm', 'Смотреть продукцию'), t('查看产品', 'View Products', 'Xem sản phẩm', 'Смотреть продукцию')) }} →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Core Value -->
    <section class="section-value section-hide-mobile">
      <div class="container">
        <h2>{{ t('为什么选择上锐', 'Why Choose SHANGRUI', t('为什么选择上锐', 'Why Choose Shang Rui', 'Tại sao chọn Shang Rui', 'Почему выбирают Shang Rui'), t('为什么选择上锐', 'Why Choose Shang Rui', 'Tại sao chọn Shang Rui', 'Почему выбирают Shang Rui')) }}</h2>
        <div class="value-grid">
          <div class="value-item" v-for="v in values" :key="v.icon">
            <div class="value-icon">{{ v.icon }}</div>
            <h3>{{ t(v.cn, v.mic, v.vn, v.ru) }}</h3>
            <p>{{ t(v.descCn, v.descMic, v.vnDesc, v.descRu) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Series -->
    <section class="section-series">
      <div class="container">
        <h2>{{ t('产品系列', 'Product Series', t('产品系列', 'Product Series', 'Danh sách sản phẩm', 'Серии продукции'), t('产品系列', 'Product Series', 'Danh sách sản phẩm', 'Серии продукции')) }}</h2>
        <div class="series-grid">
          <router-link v-for="s in productSeries.slice(0, 6)" :key="s.id" :to="`/${getRouteLang()}/products/` + s.id" class="series-card">
            <div class="series-card-image" :style="s.color.startsWith('url') ? { backgroundImage: s.color } : { background: s.color }">
              <span v-if="!s.color.startsWith('url')" class="series-card-icon">{{ s.icon }}</span>
            </div>
            <div class="series-card-info">
              <h3>{{ t(s.cn, s.mic, s.vn, s.ru) }}</h3>
            </div>
          </router-link>
        </div>
        <div class="series-more">
          <router-link :to="`/${getRouteLang()}/products`">{{ t('查看更多', 'View More', t('查看更多', 'View More', 'Xem thêm', 'Подробнее'), t('查看更多', 'View More', 'Xem thêm', 'Подробнее')) }} →</router-link>
        </div>
      </div>
    </section>

    <!-- Company History -->
    <section class="section-history section-hide-mobile">
      <div class="container">
        <h2>{{ t('自2013年创业以来', 'Since 2013', t('自2013年创业以来', 'Since 2013', 'Từ năm 2013', 'С 2013 года'), t('自2013年创业以来', 'Since 2013', 'Từ năm 2013', 'С 2013 года')) }}</h2>
        <div class="history-content">
          <p>{{ t('上锐机械自2013年创业以来，一直专注于木工机械的定制、制造和出口。', 'Since 2013, Shang Rui Machinery has consistently focused on customization, manufacturing and export of woodworking machinery.', t('上锐机械自2013年创业以来，一直专注于木工机械的定制、制造和出口。', 'Since 2013, Shang Rui Machinery has consistently focused on customization, manufacturing and export of woodworking machinery.', 'Từ năm 2013, Shang Rui Machinery liên tục tập trung vào tùy chỉnh, sản xuất và xuất khẩu máy móc gỗ.', 'С момента основания в 2013 году Shang Rui Machinery неизменно специализируется на индивидуальном проектировании, производстве и экспорте деревообрабатывающих станков.'), t('上锐机械自2013年创业以来，一直专注于木工机械的定制、制造和出口。', 'Since 2013, Shang Rui Machinery has consistently focused on customization, manufacturing and export of woodworking machinery.', 'Từ năm 2013, Shang Rui Machinery liên tục tập trung vào tùy chỉnh, sản xuất và xuất khẩu máy móc gỗ.', 'С момента основания в 2013 году Shang Rui Machinery неизменно специализируется на индивидуальном проектировании, производстве и экспорте деревообрабатывающих станков.')) }}</p>
          <p>{{ t('目前，我们已向越南、沙特、印尼、韩国等20多个国家出口产品，拥有1000多家客户。', 'We now have export experience to 20+ countries and serve 1000+ customers worldwide.', t('目前，我们已向越南、沙特、印尼、韩国等20多个国家出口产品，拥有1000多家客户。', 'We now have export experience to 20+ countries and serve 1000+ customers worldwide.', 'Chúng tôi hiện có kinh nghiệm xuất khẩu sang 20+ quốc gia và phục vụ hơn 1000 khách hàng trên toàn cầu.', 'Сегодня мы экспортируем продукцию в более чем 20 стран и обслуживаем свыше 1 000 клиентов по всему миру.'), t('目前，我们已向越南、沙特、印尼、韩国等20多个国家出口产品，拥有1000多家客户。', 'We now have export experience to 20+ countries and serve 1000+ customers worldwide.', 'Chúng tôi hiện có kinh nghiệm xuất khẩu sang 20+ quốc gia và phục vụ hơn 1000 khách hàng trên toàn cầu.', 'Сегодня мы экспортируем продукцию в более чем 20 стран и обслуживаем свыше 1 000 клиентов по всему миру.')) }}</p>
          <p>{{ t('在严格的质量管理下制造每一件产品，我们已获得CE认证和ISO-9001认证，提供符合国际标准的产品。', 'We manufacture each product under strict quality control, holding CE and ISO-9001 certifications to meet international standards.', t('在严格的质量管理下制造每一件产品，我们已获得CE认证和ISO-9001认证，提供符合国际标准的产品。', 'We manufacture each product under strict quality control, holding CE and ISO-9001 certifications to meet international standards.', 'Chúng tôi sản xuất từng sản phẩm dưới sự kiểm soát chất lượng nghiêm ngặt, có chứng nhận CE và ISO-9001 để đáp ứng các tiêu chuẩn quốc tế.', 'Каждое изделие изготавливается при строгом контроле качества; мы имеем сертификаты CE и ISO-9001, что подтверждает соответствие нашей продукции международным стандартам.'), t('在严格的质量管理下制造每一件产品，我们已获得CE认证和ISO-9001认证，提供符合国际标准的产品。', 'We manufacture each product under strict quality control, holding CE and ISO-9001 certifications to meet international standards.', 'Chúng tôi sản xuất từng sản phẩm dưới sự kiểm soát chất lượng nghiêm ngặt, có chứng nhận CE và ISO-9001 để đáp ứng các tiêu chuẩn quốc tế.', 'Каждое изделие изготавливается при строгом контроле качества; мы имеем сертификаты CE и ISO-9001, что подтверждает соответствие нашей продукции международным стандартам.')) }}</p>
        </div>
        <div class="history-stats">
          <div class="stat">
            <span class="stat-num">2013</span>
            <span class="stat-label">{{ t('创业年份', 'Founded', t('创业年份', 'Founded', 'Năm thành lập', 'Год основания'), t('创业年份', 'Founded', 'Năm thành lập', 'Год основания')) }}</span>
          </div>
          <div class="stat">
            <span class="stat-num">20+</span>
            <span class="stat-label">{{ t('出口国家', 'Countries', t('出口国家', 'Countries', 'Quốc gia xuất khẩu', 'Стран экспорта'), t('出口国家', 'Countries', 'Quốc gia xuất khẩu', 'Стран экспорта')) }}</span>
          </div>
          <div class="stat">
            <span class="stat-num">1000+</span>
            <span class="stat-label">{{ t('合作客户', 'Customers', t('合作客户', 'Customers', 'Khách hàng', 'Клиентов'), t('合作客户', 'Customers', 'Khách hàng', 'Клиентов')) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-cta">
      <div class="container">
        <h2>{{ t('我们支持您的挑战', 'We Support Your Challenges', t('我们支持您的挑战', 'We Support Your Challenges', 'Chúng tôi hỗ trợ những thách thức của bạn', 'Мы поддерживаем ваши задачи'), t('我们支持您的挑战', 'We Support Your Challenges', 'Chúng tôi hỗ trợ những thách thức của bạn', 'Мы поддерживаем ваши задачи')) }}</h2>
        <p>{{ t('从产品咨询到交期应对，我们以确实的实绩为您服务。', 'From product consultation to delivery, we respond with proven expertise.', t('从产品咨询到交期应对，我们以确实的实绩为您服务。', 'From product consultation to delivery scheduling, we serve you with proven results.', 'Từ tư vấn sản phẩm đến lịch trình giao hàng, chúng tôi phục vụ bạn bằng kết quả thực tế.', 'От консультации по продукции до согласования сроков поставки — мы работаем для вас с подтверждённым результатом.'), t('从产品咨询到交期应对，我们以确实的实绩为您服务。', 'From product consultation to delivery scheduling, we serve you with proven results.', 'Từ tư vấn sản phẩm đến lịch trình giao hàng, chúng tôi phục vụ bạn bằng kết quả thực tế.', 'От консультации по продукции до согласования сроков поставки — мы работаем для вас с подтверждённым результатом.')) }}</p>
        <router-link :to="`/${getRouteLang()}/contact`" class="btn btn-primary btn-lg">{{ t('联系我们', 'Contact Us', t('联系我们', 'Contact Us', 'Liên hệ', 'Связаться с нами'), t('联系我们', 'Contact Us', 'Liên hệ', 'Связаться с нами')) }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang'
import { productSeries, getAllModels } from '@/data/products'
const { t, tm, lang } = useLang()
const route = useRoute()

// Local helper: derive lang string from route (matches LangLayout's pattern)
function getRouteLang(): 'cn' | 'mic' | 'vn' | 'ru' {
  return route.params.lang === 'cn' ? 'cn'
       : route.params.lang === 'vn' ? 'vn'
       : route.params.lang === 'ru' ? 'ru'
       : 'mic'
}

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
  // 仅显示有实际上传图片的产品，排除配件系列
  return allModels.filter(item => item.model.images?.length && item.series.id !== 'parts').map(item => ({
    id: `${item.series.id}/${item.model.id}`,
    model: item.model.model,
    seriesCn: item.series.cn,
    seriesMic: item.series.mic,
    seriesVn: item.series.vn,
    seriesRu: item.series.ru,
    icon: item.series.icon,
    color: item.series.color,
    image: item.model.images?.[0]
  }))
})

const heroLines = computed(() => [
  {
    cnPrefix: '"我想',
    cnHighlight: '按时交货',
    cnSuffix: '"',
    ruPrefix: '"Мне нужно ',
    ruHighlight: 'уложиться в срок',
    ruSuffix: '"',
    enPrefix: '"I need to meet the ',
    enHighlight: 'deadline',
    enSuffix: '"',
    vnPrefix: '"Tôi cần đáp ứng ',
    vnHighlight: 'thời hạn',
    vnSuffix: '"'
  },
  {
    cnPrefix: '"我不想妥协',
    cnHighlight: '质量',
    cnSuffix: '"',
    ruPrefix: '"Я не хочу идти на компромисс в ',
    ruHighlight: 'качестве',
    ruSuffix: '"',
    enPrefix: '"I don\'t want to compromise on ',
    enHighlight: 'quality',
    enSuffix: '"',
    vnPrefix: '"Tôi không muốn nhượng bộ về ',
    vnHighlight: 'chất lượng',
    vnSuffix: '"'
  },
  {
    cnPrefix: '"我想',
    cnHighlight: '降低成本',
    cnSuffix: '"',
    ruPrefix: '"Я хочу ',
    ruHighlight: 'снизить затраты',
    ruSuffix: '"',
    enPrefix: '"I want to ',
    enHighlight: 'reduce costs',
    enSuffix: '"',
    vnPrefix: '"Tôi muốn ',
    vnHighlight: 'giảm chi phí',
    vnSuffix: '"'
  }
])

const values = [
  { icon: '🎯', cn: '品质第一', mic: 'Quality First', descCn: '严格的质量管理体系。每件产品出货前都进行全面检查。', descMic: 'Strict quality control with comprehensive testing before delivery.', vn: 'Chất Lượng Là Ưu Tiên Số Một', vnDesc: 'Hệ thống quản lý chất lượng nghiêm ngặt. Mỗi sản phẩm đều được kiểm tra toàn diện trước khi xuất hàng.', ru: 'Качество прежде всего', descRu: 'Строгая система управления качеством. Каждый продукт проходит полную проверку перед отгрузкой.' },
  { icon: '🔬', cn: '持续创新', mic: 'Innovation', descCn: '持续投入定制，不断优化产品性能。', descMic: 'Continuous customization investment to improve product performance.', vn: 'Đổi Mới Liên Tục', vnDesc: 'Không ngừng đầu tư tùy chỉnh, cải thiện hiệu suất sản phẩm.', ru: 'Постоянные инновации', descRu: 'Постоянные инвестиции в кастомизацию для улучшения характеристик продукции.' },
  { icon: '🤝', cn: '诚实合作', mic: 'Integrity', descCn: '以诚实为基础，建立长期稳定的合作关系。', descMic: 'Building long-term partnerships based on integrity.', vn: 'Hợp Tác Trung Thực', vnDesc: 'Dựa trên sự trung thực, xây dựng mối quan hệ hợp tác ổn định lâu dài.', ru: 'Честное сотрудничество', descRu: 'Построение долгосрочных партнёрских отношений на основе честности.' },
  { icon: '🌐', cn: '全球视野', mic: 'Global Vision', descCn: '理解全球市场需求，提供符合国际标准的产品。', descMic: 'Understanding global market needs with international standards.', vn: 'Tầm Nhìn Toàn Cầu', vnDesc: 'Hiểu rõ nhu cầu thị trường quốc tế, cung cấp sản phẩm đạt tiêu chuẩn quốc tế.', ru: 'Глобальное видение', descRu: 'Понимание потребностей мирового рынка и поставка продукции, соответствующей международным стандартам.' },
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

  .highlight-word-cn {
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
    margin-bottom: $s-lg;
    font-size: clamp(28px, 3vw, 40px);
    color: $c-accent;
  }

  .value-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $s-lg;
    @media (min-width: 481px) and (max-width: $bp-lg) { gap: 8px; }
    @media (max-width: $bp-sm) { gap: 8px; }
  }
}

.value-item {
  padding: $s-2xl;
  text-align: center;

  @media (min-width: 481px) and (max-width: $bp-lg) {
    padding: 8px;
  }
  @media (max-width: $bp-sm) {
    padding: $s-md;
  }

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
  background-image: url(/contact-get-in-touch-bg.webp);
  background-size: cover;
  background-position: center;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(20,20,20,0.55) 50%, rgba(0,0,0,0.5) 100%);
    pointer-events: none;
  }

  > .container {
    position: relative;
    z-index: 1;
  }

  @media (max-width: $bp-sm) {
    padding: $s-lg 0;
  }

  h2 {
    color: #ffffff;
    margin-bottom: $s-md;
    font-size: clamp(28px, 3vw, 40px);
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  p {
    color: rgba(255,255,255,0.9);
    font-size: $fs-lg;
    margin-bottom: $s-2xl;
    text-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }
}
</style>
