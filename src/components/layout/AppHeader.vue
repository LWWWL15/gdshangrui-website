<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <!-- Mobile Logo -->
      <a class="mobile-logo" @click="handleBrandClick">
        <img src="/商标2-white.png" alt="" class="mobile-logo-img" />
        <span>SHANG RUI</span>
      </a>

      <!-- Logo -->
      <a @click="handleBrandClick" class="logo">
        <img src="/商标2-white.png" alt="" class="logo-img" />
        <span class="logo-text">SHANG RUI</span>
      </a>

      <!-- Social Icons -->
      <div class="header-social-icons">
        <a href="https://www.facebook.com/share/18GTu5J7ia/?mibextid=wwXIfr" target="_blank" rel="noopener" class="header-social-icon fb" :aria-label="'Facebook'">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://www.instagram.com/shangruijx?igsh=Z2YxYnRuN3ljYnBj&utm_source=qr" target="_blank" rel="noopener" class="header-social-icon ig" :aria-label="'Instagram'">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://youtube.com/@shangrui-machinery?si=StEF7rJoldH0kP0K" target="_blank" rel="noopener" class="header-social-icon yt" :aria-label="'YouTube'">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
      </div>

      <!-- Desktop Nav -->
      <nav class="nav-desktop">
        <template v-for="item in navItems" :key="item.path || item.zh">
          <!-- Dropdown -->
          <div v-if="item.children" class="nav-dropdown" @mouseenter="hoverDropdown = item.zh" @mouseleave="hoverDropdown = null">
            <span class="nav-link nav-dropdown-toggle" :class="{ 'nav-link--active': route.path.startsWith('/tools') }">
              {{ t(item.zh, item.en) }}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:4px;vertical-align:middle"><path d="M6 9l6 6 6-6"/></svg>
            </span>
            <div v-show="hoverDropdown === item.zh" class="nav-dropdown-menu">
              <router-link v-for="child in item.children" :key="child.path" :to="child.path" class="nav-dropdown-item" active-class="nav-dropdown-item--active">
                {{ t(child.zh, child.en) }}
              </router-link>
            </div>
          </div>
          <!-- Regular link -->
          <router-link v-else :to="item.path!" class="nav-link" active-class="nav-link--active">
            {{ t(item.zh, item.en) }}
          </router-link>
        </template>
      </nav>

      <!-- Right: Lang + CTA -->
      <div class="header-right">
        <div class="lang-switch">
          <button class="lang-btn" :class="{ active: lang === 'zh' }" @click="setLang('zh')">中文</button>
          <button class="lang-btn" :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
        </div>
        <router-link to="/contact" class="btn btn-outline-white btn-sm">
          {{ t('联系我们', 'Contact') }}
        </router-link>
      </div>

      <!-- Mobile hamburger -->
      <button class="hamburger" @click="mobileOpen = true" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Drawer Overlay -->
  <Transition name="fade">
    <div v-if="mobileOpen" class="drawer-overlay" @click="mobileOpen = false"></div>
  </Transition>

  <!-- Drawer -->
  <Transition name="slide-right">
    <div v-if="mobileOpen" class="drawer">
      <div class="drawer-header">
        <span class="drawer-logo">SHANG RUI</span>
        <button class="drawer-close" @click="mobileOpen = false">✕</button>
      </div>

      <!-- Lang switch in drawer -->
      <div class="drawer-lang">
        <button class="lang-btn" :class="{ active: lang === 'zh' }" @click="setLang('zh')">中文</button>
        <button class="lang-btn" :class="{ active: lang === 'en' }" @click="setLang('en')">English</button>
      </div>

      <nav class="drawer-nav">
        <template v-for="item in navItems" :key="item.path || item.zh">
          <!-- Dropdown items in drawer -->
          <template v-if="item.children">
            <div class="drawer-dropdown-header">{{ t(item.zh, item.en) }}</div>
            <router-link v-for="child in item.children" :key="child.path" :to="child.path" class="drawer-link drawer-link--child" active-class="drawer-link--active" @click="mobileOpen = false">
              <span>{{ t(child.zh, child.en) }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </template>
          <!-- Regular link -->
          <router-link v-else :to="item.path!" class="drawer-link" active-class="drawer-link--active" @click="mobileOpen = false">
            <span>{{ t(item.zh, item.en) }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </template>
      </nav>

      <div class="drawer-footer">
        <router-link to="/contact" class="btn btn-outline-white" style="width:100%;" @click="mobileOpen = false">
          {{ t('联系我们', 'Contact Us') }}
        </router-link>
        <div class="drawer-contact">
          <a href="tel:+8613929151908">+86 139-2915-1908</a>
          <a href="mailto:caya15@qq.com">caya15@qq.com</a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLang } from '@/composables/useLang'

const { lang, setLang, t } = useLang()
const isScrolled = ref(false)
const mobileOpen = ref(false)
const hoverDropdown = ref<string | null>(null)
const router = useRouter()
const route = useRoute()

const navItems: Array<{zh:string;en:string;path?:string;children?:Array<{zh:string;en:string;path:string}>}> = [
  { zh: '首页', en: 'Home', path: '/' },
  { zh: '关于我们', en: 'About', path: '/about' },
  { zh: '产品展示', en: 'Products', path: '/products' },
  { zh: '案例', en: 'Cases', path: '/cases' },
  { zh: '工具', en: 'Tools', path: '/tools' },
  { zh: '联系我们', en: 'Contact', path: '/contact' },
]

const handleBrandClick = () => {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: $s-md 0;
  transition: all $t-base;
  background: $c-accent;
  border-bottom: 1px solid rgba(255,255,255,0.1);

  &.scrolled {
    padding: $s-sm 0;
    background: $c-accent;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    box-shadow: 0 4px 20px rgba(26,111,212,0.3);
  }
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $s-lg;
  position: relative;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: #ffffff;
    border-radius: 1px;
    transition: all $t-base;
    margin-left: auto;
  }
  @media (max-width: $bp-lg) { display: flex; }
}

.mobile-logo {
  display: none;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: $fw-extrabold;
  color: #ffffff;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: color $t-fast;
  text-decoration: none;
  &:hover { color: rgba(255,255,255,0.85); }

  &-img { width: 28px; height: 28px; border-radius: 4px; object-fit: cover; }

  @media (max-width: $bp-lg) { display: flex; }
}

.logo {
  display: flex;
  align-items: center;
  gap: $s-sm;
  text-decoration: none;
  cursor: pointer;
  transition: opacity $t-fast;

  &:hover { opacity: 0.85; }

  &-img { width: 42px; height: 42px; border-radius: 4px; object-fit: cover; }

  &-text {
    font-size: $fs-xl;
    font-weight: $fw-extrabold;
    color: #ffffff;
    letter-spacing: 0.05em;
  }

  @media (max-width: $bp-lg) { display: none; }
}

.nav-desktop {
  display: flex;
  align-items: center;
  gap: $s-xl;
  @media (max-width: $bp-lg) { display: none; }
}

.nav-link {
  font-size: $fs-sm;
  font-weight: $fw-medium;
  color: #ffffff;
  transition: color $t-fast;
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0;
    width: 0; height: 2px;
    background: rgba(255,255,255,0.6);
    border-radius: 1px;
    transition: width $t-base;
  }

  &:hover, &--active {
    color: #ffffff;
    &::after { width: 100%; }
  }
}

.nav-dropdown {
  position: relative;

  &-toggle {
    cursor: pointer;
    user-select: none;
  }

  &-menu {
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    border-radius: $r-lg;
    box-shadow: $shadow-lg;
    min-width: 180px;
    overflow: hidden;
    z-index: 100;
    border: 1px solid rgba(0,0,0,0.06);
  }

  &-item {
    display: block;
    padding: $s-sm $s-lg;
    font-size: $fs-sm;
    color: $c-text-primary;
    text-decoration: none;
    transition: all $t-fast;
    white-space: nowrap;

    &:hover, &--active {
      background: rgba(26,111,212,0.08);
      color: $c-accent;
    }
  }
}

.header-social-icons {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 16px;

  @media (max-width: $bp-lg) { display: none; }
}

.header-social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  color: #ffffff;
  transition: opacity 0.2s ease;
  text-decoration: none;
  flex-shrink: 0;

  svg { width: 16px; height: 16px; }

  &:hover { opacity: 0.8; }

  &.fb { background: #1877F2; }
  &.ig { background: linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%); }
  &.yt { background: #FF0000; }
}

.header-right {
  display: flex;
  align-items: center;
  gap: $s-md;
  @media (max-width: $bp-lg) { display: none; }
}

.lang-switch {
  display: flex;
  gap: 4px;

  .lang-btn {
    color: #ffffff;
    border-color: rgba(255,255,255,0.3);

    &.active {
      background: rgba(255,255,255,0.15);
      border-color: #ffffff;
    }

    &:hover {
      background: rgba(255,255,255,0.1);
    }
  }
}

.btn-sm { font-size: $fs-xs; padding: $s-sm $s-lg; }

// Drawer
.drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
}

.drawer {
  position: fixed;
  top: 0; right: 0; bottom: 0;
  z-index: 1200;
  width: 280px;
  background: $c-accent;
  border-left: 1px solid rgba(255,255,255,0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $s-lg;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.drawer-logo {
  font-size: $fs-sm;
  font-weight: $fw-extrabold;
  color: #ffffff;
  letter-spacing: 0.05em;
}

.drawer-close {
  width: 32px; height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: $fs-lg;
  border-radius: $r-md;
  transition: all $t-fast;
  background: none;
  border: none;
  cursor: pointer;
  &:hover { color: #ffffff; background: rgba(255,255,255,0.1); }
}

.drawer-lang {
  display: flex;
  gap: $s-sm;
  padding: $s-md $s-lg;
  border-bottom: 1px solid rgba(255,255,255,0.1);

  .lang-btn {
    color: #ffffff;
    border-color: rgba(255,255,255,0.3);

    &.active {
      background: rgba(255,255,255,0.15);
      border-color: #ffffff;
    }

    &:hover {
      background: rgba(255,255,255,0.1);
    }
  }
}

.drawer-nav { flex: 1; padding: $s-md 0; overflow-y: auto; }

.drawer-dropdown-header {
  padding: $s-sm $s-lg;
  font-size: $fs-xs;
  font-weight: $fw-bold;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: $s-sm;
}

.drawer-link--child {
  padding-left: $s-xl + $s-md;
  font-size: $fs-sm !important;
}

.drawer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $s-md $s-lg;
  color: #ffffff;
  font-size: $fs-base;
  font-weight: $fw-medium;
  border-right: 3px solid transparent;
  transition: all $t-fast;
  text-decoration: none;

  svg { opacity: 0; transition: opacity $t-fast; }

  &:hover, &--active {
    color: #ffffff;
    background: rgba(255,255,255,0.1);
    border-right-color: #ffffff;
    svg { opacity: 1; }
  }
}

.drawer-footer {
  padding: $s-lg;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  flex-direction: column;
  gap: $s-md;
}

.drawer-contact {
  display: flex;
  flex-direction: column;
  gap: $s-sm;
  a {
    font-size: $fs-xs;
    color: rgba(255,255,255,0.7);
    transition: color $t-fast;
    text-decoration: none;
    &:hover { color: #ffffff; }
  }
}

.fade-enter-active, .fade-leave-active { transition: opacity $t-base; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.slide-right-enter-active, .slide-right-leave-active { transition: transform 0.3s ease; }
.slide-right-enter-from, .slide-right-leave-to { transform: translateX(100%); }
</style>
