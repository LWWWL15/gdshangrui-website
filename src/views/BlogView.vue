<template>
  <div class="cases-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('博客', 'Blog',  t('博客', 'Blog', 'Tin tức', 'Блог'),  t('博客', 'Blog', 'Tin tức', 'Блог')) }}</span>
        <h1>{{ t('行业动态', 'Industry Insights',  t('行业动态', 'Industry Insights', 'Thông tin ngành', 'Новости отрасли'),  t('行业动态', 'Industry Insights', 'Thông tin ngành', 'Новости отрасли')) }}</h1>
        <p>{{ t('了解上锐机械的最新动态与行业资讯', 'Stay updated with Shangrui Machinery news and industry trends',  t('了解上锐机械的最新动态与行业资讯', 'Stay updated with Shangrui Machinery news and industry trends', 'Cập nhật tin tức mới nhất và xu hướng ngành máy móc gỗ của Shang Rui', 'Будьте в курсе новостей Shang Rui Machinery и тенденций деревообрабатывающей отрасли'),  t('了解上锐机械的最新动态与行业资讯', 'Stay updated with Shangrui Machinery news and industry trends', 'Cập nhật tin tức mới nhất và xu hướng ngành máy móc gỗ của Shang Rui', 'Будьте в курсе новостей Shang Rui Machinery и тенденций деревообрабатывающей отрасли')) }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-if="cases.length" class="cases-grid">
          <router-link v-for="c in cases" :key="c.id" :to="`/${lang}/blog/` + c.slug" class="card case-card">
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

        <!-- 空状态：没有文章时给个说明，别留一片空白 -->
        <div v-else class="cases-empty">
          <h3>{{ t('暂无文章', 'No articles yet', t('暂无文章', 'No articles yet', 'Chưa có bài viết', 'Пока нет статей'), t('暂无文章', 'No articles yet', 'Chưa có bài viết', 'Пока нет статей')) }}</h3>
          <p>{{ t('我们正在准备行业资讯与案例，敬请期待。', 'We are preparing industry insights and case studies. Stay tuned.', t('我们正在准备行业资讯与案例，敬请期待。', 'We are preparing industry insights and case studies. Stay tuned.', 'Chúng tôi đang chuẩn bị thông tin ngành và tài liệu hồ sơ. Hãy đón chờ!', 'Мы готовим отраслевые материалы и кейсы. Следите за обновлениями!'), t('我们正在准备行业资讯与案例，敬请期待。', 'We are preparing industry insights and case studies. Stay tuned.', 'Chúng tôi đang chuẩn bị thông tin ngành và tài liệu hồ sơ. Hãy đón chờ!', 'Мы готовим отраслевые материалы и кейсы. Следите за обновлениями!')) }}</p>
          <router-link :to="`/${lang}/contact`" class="btn btn-primary">{{ t('联系我们', 'Contact Us', t('联系我们', 'Contact Us', 'Liên hệ với chúng tôi', 'Свяжитесь с нами'), t('联系我们', 'Contact Us', 'Liên hệ với chúng tôi', 'Свяжитесь с нами')) }}</router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-cta">
      <div class="container" style="text-align:center;">
        <h2 style="color:white; margin-bottom:16px;">{{ t('成为我们的合作伙伴', 'Become Our Partner',  t('成为我们的合作伙伴', 'Become Our Partner', 'Trở thành đối tác của chúng tôi', 'Станьте нашим партнёром'),  t('成为我们的合作伙伴', 'Become Our Partner', 'Trở thành đối tác của chúng tôi', 'Станьте нашим партнёром')) }}</h2>
        <p style="color:rgba(255,255,255,0.6); margin-bottom:32px; font-size:18px;">{{ t('联系我们，获取专属解决方案', 'Contact us for a customized solution',  t('联系我们，获取专属解决方案', 'Contact us for a customized solution', 'Liên hệ với chúng tôi để có giải pháp riêng', 'Свяжитесь с нами для индивидуального решения'),  t('联系我们，获取专属解决方案', 'Contact us for a customized solution', 'Liên hệ với chúng tôi để có giải pháp riêng', 'Свяжитесь с нами для индивидуального решения')) }}</p>
        <router-link :to="`/${lang}/contact`" class="btn btn-primary btn-lg">{{ t('立即联系', 'Contact Now',  t('立即联系', 'Contact Now', 'Liên hệ ngay', 'Связаться сейчас'),  t('立即联系', 'Contact Now', 'Liên hệ ngay', 'Связаться сейчас')) }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'
const { t, tm, lang } = useLang()

// 案例文章数据：从 src/data/articles.ts 读取（内容来自主人提供的真实素材，不编造）。
import { blogArticles } from '@/data/articles'
const cases = blogArticles

// 地区标签 / 产品标签的四语取值。
// 之前直接输出 c.region（中文「🇨🇳 广东佛山」）和 t(c.productCn, c.productMic)（无 vn/ru）
// → mic/vn/ru 页的博客卡片显示中文/英文。2026-11-11 修正。
function regionOf(c: any): string {
  if (lang.value === 'cn') return c.region
  if (lang.value === 'vn') return c.regionVn || c.region
  if (lang.value === 'ru') return c.regionRu || c.region
  return c.regionMic || c.region
}

function productOf(c: any): string {
  if (lang.value === 'cn') return c.productCn
  if (lang.value === 'vn') return c.productVn || c.productMic
  if (lang.value === 'ru') return c.productRu || c.productMic
  return c.productMic
}
</script>

<style lang="scss" scoped>
.page-hero {
  padding: 160px 0 80px;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/cases-hero.webp') center 30% / cover no-repeat;
  .tag { margin-bottom: $s-md; }
  h1 { color: white; margin-bottom: $s-md; }
  p { color: rgba(255,255,255,0.6); font-size: $fs-lg; }

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }
}

.section { padding-top: $s-lg; }

.section-cta {
  padding: $s-4xl 0;
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/contact-get-in-touch-bg.webp') center / cover no-repeat;
  color: $c-text-white;
  h2, h3, h4 { color: $c-text-white; }
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: $s-lg;
  @media (max-width: $bp-lg) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: $bp-sm) { grid-template-columns: 1fr; }
}

.cases-empty {
  text-align: center;
  padding: $s-3xl 0;
  h3 { margin-bottom: $s-sm; }
  p { color: $c-text-secondary; margin-bottom: $s-lg; }
}

.case-card {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    transform: translateY(-2px);
  }

  .case-img {
    height: 200px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: $s-md;
    position: relative;
  }

  .case-region {
    font-size: $fs-xs;
    font-weight: $fw-semibold;
    color: white;
    background: rgba(0,0,0,0.4);
    padding: 4px 10px;
    border-radius: $r-full;
  }

  .case-icon { font-size: 32px; }

  .case-body {
    padding: $s-lg;
    .tag { margin-bottom: $s-sm; }
    h3 { font-size: $fs-lg; margin-bottom: $s-sm; }
    p { color: $c-text-secondary; font-size: $fs-sm; line-height: 1.7; }
  }
}
</style>
