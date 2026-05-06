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
          <div class="social-icons">
            <a href="https://www.facebook.com/share/18GTu5J7ia/?mibextid=wwXIfr" target="_blank" rel="noopener" class="social-icon fb" :aria-label="t('Facebook', 'Facebook')">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/shangruijx?igsh=Z2YxYnRuN3ljYnBj&utm_source=qr" target="_blank" rel="noopener" class="social-icon ig" :aria-label="t('Instagram', 'Instagram')">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@shangrui-machinery?si=StEF7rJoldH0kP0K" target="_blank" rel="noopener" class="social-icon yt" :aria-label="t('YouTube', 'YouTube')">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
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

.social-icons {
  display: flex;
  gap: 6px;
  margin-top: 4px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: white;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  &.fb { background: #1877F2; }
  &.ig { background: linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%); }
  &.yt { background: #FF0000; }
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
