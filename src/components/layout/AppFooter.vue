<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="https://maps.apple.com/place?address=%E4%B8%AD%E5%9B%BD%E5%B9%BF%E4%B8%9C%E7%9C%81%E4%BD%9B%E5%B1%B1%E5%B8%82%E9%A1%BA%E5%BE%B7%E5%8C%BA%E4%BC%A6%E6%95%99%E8%A1%97%E9%81%93%E6%96%B0%E5%A1%98%E5%B7%A5%E4%B8%9A%E5%8C%BA%E4%B8%96%E9%BE%99%E5%A4%A7%E9%81%936%E5%8F%B7&coordinate=22.869534,113.186873&name=%E4%B8%8A%E9%94%90%E6%9C%A8%E5%B7%A5%E6%9C%BA%E6%A2%B0%E5%8E%82&place-id=H2710I3F926803D8CEB&map=explore" target="_blank" class="footer-logo">{{ t('佛山市顺德区上锐机械有限公司', 'FOSHAN SHUNDE SHANGRUI MACHINERY CO.,LTD') }}</a>
          <p class="footer-desc">{{ t('自2013年 | ISO9001 | CE', 'Since 2013 | ISO9001 | CE') }}</p>
          <!-- 公司logo - 电脑端显示 -->
          <img src="/SHANGRUIJX.png" alt="Shangrui Logo" class="brand-logo desktop-only" />
        </div>

        <!-- Nav -->
        <div class="footer-col">
          <h4>{{ t('导航', 'Navigation') }}</h4>
          <router-link v-for="item in navItems" :key="item.path" :to="item.path">{{ t(item.zh, item.en) }}</router-link>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4>{{ t('联系我们', 'Contact') }}</h4>
          <a href="tel:+8613929151908">+86 139-2915-1908</a>
          <a href="mailto:caya15@qq.com">caya15@qq.com</a>
          <a href="https://wa.me/8613929151908" target="_blank">WhatsApp</a>
          <!-- 公司logo - 手机端显示 -->
          <img src="/SHANGRUIJX.png" alt="Shangrui Logo" class="brand-logo mobile-only" />
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ year }} Shang Rui Machinery. All rights reserved.</p>
        <div class="lang-switch">
          <button class="lang-btn" :class="{ active: lang === 'zh' }" @click="setLang('zh')">中文</button>
          <button class="lang-btn" :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'

const { lang, setLang, t } = useLang()
const year = new Date().getFullYear()

const navItems = [
  { zh: '首页', en: 'Home', path: '/' },
  { zh: '关于我们', en: 'About', path: '/about' },
  { zh: '产品展示', en: 'Products', path: '/products' },
  { zh: '案例', en: 'Cases', path: '/cases' },
  { zh: '联系我们', en: 'Contact', path: '/contact' },
]
</script>

<style lang="scss" scoped>
.footer { background: $c-accent; color: #ffffff; }

.footer-main { padding: $s-xl 0 $s-lg; }

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: $s-3xl;

  @media (max-width: $bp-lg) { grid-template-columns: 1fr 1fr; gap: $s-2xl; }
  @media (max-width: $bp-md) {
    grid-template-columns: 1fr 1fr;
    gap: $s-xl;

    .footer-brand {
      grid-column: 1 / -1;
    }
  }
  @media (max-width: $bp-sm) {
    grid-template-columns: 1fr 1fr;
    gap: $s-lg;

    .footer-brand {
      grid-column: 1 / -1;
    }
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: $bp-md) {
    justify-content: flex-start;
  }

  .footer-logo {
    font-size: $fs-base;
    font-weight: $fw-extrabold;
    color: #ffffff;
    letter-spacing: 0.05em;
    margin-bottom: $s-md;
    text-decoration: underline;

    @media (min-width: $bp-md) {
      font-size: $fs-xl;
    }
  }
}

.footer-desc {
  font-size: $fs-sm;
  line-height: 1.8;
  color: rgba(255,255,255,0.8);
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: $s-sm;

  h4 {
    font-size: $fs-xs;
    font-weight: $fw-semibold;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ffffff;
    margin-bottom: $s-sm;
  }

  a {
    font-size: $fs-sm;
    color: rgba(255,255,255,0.8);
    transition: color $t-fast;
    text-decoration: none;
    &:hover { color: #ffffff; }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.2);
  padding: $s-lg 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $bp-md) { flex-direction: column; gap: $s-md; }
  }

  p { font-size: $fs-xs; color: rgba(255,255,255,0.7); }
}

.lang-switch { display: flex; gap: 4px; }

// 公司logo样式
.brand-logo {
  height: auto;
  margin-top: $s-md;
}

.desktop-only {
  display: flex;
  justify-content: flex-start;
  max-width: 400px;
  @media (max-width: $bp-md) { display: none; }

  img { width: 100%; height: auto; }
}

.mobile-only {
  display: none;
  @media (max-width: $bp-md) {
    display: block;
    margin-top: auto;
    max-width: 160px;
  }
}
</style>
