<template>
  <div class="contact-page">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('联系我们', 'Contact Us') }}</span>
        <h1>{{ t('取得联系', 'Get In Touch') }}</h1>
        <p>{{ t('欢迎询价，我们将在24小时内回复', 'Welcome to inquire. We will reply within 24 hours.') }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Info -->
          <div class="contact-info">
            <h2>{{ t('联系方式', 'Contact Info') }}</h2>
            <p>{{ t('通过以下方式联系我们，获取产品报价和技术支持。', 'Contact us through the following channels for product quotes and technical support.') }}</p>

            <div class="info-list">
              <div class="info-item" v-for="item in contactItems" :key="item.icon">
                <div class="info-icon">{{ item.icon }}</div>
                <div>
                  <h4>{{ t(item.labelZh, item.labelEn) }}</h4>
                  <a v-if="item.href" :href="item.href" target="_blank">{{ item.value }}</a>
                  <p v-else>{{ t(item.valueZh, item.valueEn) }}</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h4>{{ t('关注我们', 'Follow Us') }}</h4>
              <div class="social-icons">
                <a href="https://www.facebook.com/share/18GTu5J7ia/?mibextid=wwXIfr" target="_blank" rel="noopener" class="social-btn facebook" :aria-label="t('Facebook主页', 'Facebook Page')">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/shangruijx?igsh=Z2YxYnRuN3ljYnBj&utm_source=qr" target="_blank" rel="noopener" class="social-btn instagram" :aria-label="t('Instagram主页', 'Instagram Page')">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="https://youtube.com/@shangrui-machinery?si=StEF7rJoldH0kP0K" target="_blank" rel="noopener" class="social-btn youtube" :aria-label="t('YouTube主页', 'YouTube Page')">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Form -->
          <form class="contact-form card" @submit.prevent="handleSubmit">
            <h3>{{ t('发送询盘', 'Send Inquiry') }}</h3>
            <div class="form-group">
              <label>{{ t('姓名', 'Name') }} *</label>
              <input v-model="form.name" type="text" :placeholder="t('您的姓名', 'Your name')" required />
            </div>
            <div class="form-group">
              <label>{{ t('邮箱', 'Email') }} *</label>
              <input v-model="form.email" type="email" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label>{{ t('感兴趣的产品', 'Product of Interest') }}</label>
              <select v-model="form.product">
                <option value="">{{ t('请选择', 'Please select') }}</option>
                <option v-for="p in productOptions" :key="p.en" :value="p.en">{{ t(p.zh, p.en) }}</option>
              </select>
            </div>
            <div class="form-group">
              <label>{{ t('留言', 'Message') }} *</label>
              <textarea v-model="form.message" rows="5" :placeholder="t('请描述您的需求...', 'Please describe your requirements...')" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;" :disabled="sending">
              {{ sending ? t('发送中...', 'Sending...') : t('发送询盘', 'Send Inquiry') }}
            </button>
            <p v-if="status" class="form-status" :class="status.type">{{ status.msg }}</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const form = reactive({ name: '', email: '', product: '', message: '' })
const sending = ref(false)
const status = ref<{ type: string; msg: string } | null>(null)

const contactItems = [
  { icon: '📞', labelZh: '电话 / WhatsApp', labelEn: 'Phone / WhatsApp', value: '+86 139-2915-1908', href: 'https://wa.me/8613929151908' },
  { icon: '✉️', labelZh: '邮箱', labelEn: 'Email', value: 'caya15@qq.com', href: 'mailto:caya15@qq.com' },
  { icon: '✉️', labelZh: '邮箱', labelEn: 'Email', value: 'shangruijx@gmail.com', href: 'mailto:shangruijx@gmail.com' },
  { icon: '📍', labelZh: '地址', labelEn: 'Address', valueZh: '广东省 佛山市 顺德区 伦教街道 广东省佛山市顺德区伦教新塘工业区世龙大道6号上锐机械', valueEn: 'No.6, Shilong Ave, Shunde New Town Industrial Zone, Lunqiao, Shunde, Foshan, Guangdong, China', href: '' },
]

const productOptions = [
  { zh: '冷压机', en: 'Cold Press' },
  { zh: '热压机', en: 'Hot Press' },
  { zh: '多片锯', en: 'Multi-blade Saw' },
  { zh: '四面刨', en: 'Four-side Planer' },
  { zh: '升降平台', en: 'Lifting Platform' },
  { zh: '其他', en: 'Other' },
]

const handleSubmit = async () => {
  sending.value = true
  status.value = null
  try {
    await emailjs.send('service_e5zylo8', 'template_bss3iza', {
      from_name: form.name,
      from_email: form.email,
      subject: form.product ? `Product Inquiry: ${form.product}` : 'General Inquiry',
      message: form.message,
    }, 'DiimmdKWVXVktDpPb')
    status.value = { type: 'success', msg: t('✅ 询盘已发送！我们将在24小时内回复。', '✅ Inquiry sent! We will reply within 24 hours.') }
    form.name = ''; form.email = ''; form.product = ''; form.message = ''
  } catch {
    status.value = { type: 'error', msg: t('❌ 发送失败，请直接发邮件至 caya15@qq.com', '❌ Failed to send. Please email caya15@qq.com directly.') }
  } finally {
    sending.value = false
  }
}
</script>

<style lang="scss" scoped>
.page-hero {
  padding: 160px 0 80px;
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/contact-get-in-touch-bg.webp) center / cover no-repeat, $c-bg-dark;
  .tag { margin-bottom: $s-md; }
  h1 { color: white; margin-bottom: $s-md; }
  p { color: rgba(255,255,255,0.6); font-size: $fs-lg; }

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }
}

.section { padding-top: $s-lg; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: $s-3xl;
  align-items: start;
  @media (max-width: $bp-lg) { grid-template-columns: 1fr; }
}

.contact-info {
  h2 { margin-bottom: $s-md; }
  > p { color: $c-text-secondary; margin-bottom: $s-2xl; line-height: 1.8; }
}

.info-list { display: flex; flex-direction: column; gap: $s-lg; }

.info-item {
  display: flex;
  gap: $s-md;
  align-items: flex-start;

  .info-icon {
    width: 44px; height: 44px;
    display: flex; align-items: center; justify-content: center;
    background: $c-bg-secondary;
    border: 1px solid $c-border;
    border-radius: $r-md;
    font-size: 20px;
    flex-shrink: 0;
  }

  h4 { font-size: $fs-sm; font-weight: $fw-semibold; margin-bottom: 4px; }
  a, p { font-size: $fs-sm; color: $c-text-secondary; line-height: 1.7; }
  a:hover { color: $c-accent; }
}

.contact-form {
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
  }

  textarea { resize: vertical; min-height: 120px; }
}

.form-status {
  margin-top: $s-md;
  font-size: $fs-sm;
  text-align: center;
  padding: $s-sm;
  border-radius: $r-md;
  &.success { color: $c-success; background: rgba(56,161,105,0.1); }
  &.error { color: $c-error; background: rgba(229,62,62,0.1); }
}

.social-links {
  margin-top: $s-2xl;
  padding-top: $s-2xl;
  border-top: 1px solid $c-border;

  h4 {
    font-size: $fs-sm;
    font-weight: $fw-semibold;
    color: $c-text-secondary;
    margin-bottom: $s-md;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
}

.social-icons {
  display: flex;
  gap: $s-md;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: $s-sm;
  padding: 10px 18px;
  border-radius: $r-md;
  font-size: $fs-sm;
  font-weight: $fw-medium;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
    opacity: 0.92;
  }

  &.facebook {
    background: #1877F2;
  }

  &.instagram {
    background: linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%);
  }

  &.youtube {
    background: #FF0000;
  }
}
</style>
