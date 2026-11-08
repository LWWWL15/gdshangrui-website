<template>
  <div class="not-found-page">
    <section class="page-hero">
      <div class="container">
        <div class="not-found-content">
          <div class="error-code">404</div>
          <h1>{{ t('页面未找到', 'Page Not Found',  t('页面未找到', 'Page Not Found', 'Không tìm thấy trang', 'Страница не найдена'),  t('页面未找到', 'Page Not Found', 'Không tìm thấy trang', 'Страница не найдена')) }}</h1>
          <p class="error-desc">
            {{ t('抱歉，您访问的页面不存在或已被移除。', 'Sorry, the page you are looking for does not exist or has been removed.', t('抱歉，您访问的页面不存在或已被移除。', 'Sorry, the page you are looking for does not exist or has been removed.', 'Xin lỗi, trang bạn truy cập không tồn tại hoặc đã bị xóa.', 'К сожалению, запрашиваемая страница не существует или была удалена.')) }}
          </p>
          <p class="error-desc">
            {{ t('您可以返回首页，或浏览我们的产品系列：热压机、冷压机、多片锯、拼板机。', 'You can return to the home page, or browse our product series: hot press, cold press, multi-blade saw and splicing machine.', t('您可以返回首页，或浏览我们的产品系列：热压机、冷压机、多片锯、拼板机。', 'You can return to the home page, or browse our product series: hot press, cold press, multi-blade saw and splicing machine.', 'Bạn có thể trở về trang chủ hoặc xem các dòng sản phẩm: máy ép nóng, máy ép lạnh, máy cưa đa lưỡi, máy ghép ván.', 'Вы можете вернуться на главную или посмотреть серии продукции: горячий пресс, холодный пресс, многопильный станок, линия сращивания.')) }}
          </p>
          <div class="error-actions">
            <router-link :to="'/' + lang + '/'" class="btn btn-primary btn-lg">
              {{ t('返回首页', 'Back to Home',  t('返回首页', 'Back to Home', 'Về trang chủ', 'Вернуться на главную'),  t('返回首页', 'Back to Home', 'Về trang chủ', 'Вернуться на главную')) }}
            </router-link>
            <router-link :to="'/' + lang + '/products'" class="btn btn-outline btn-lg">
              {{ t('浏览产品', 'Browse Products',  t('浏览产品', 'Browse Products', 'Xem sản phẩm', 'Смотреть продукцию'),  t('浏览产品', 'Browse Products', 'Xem sản phẩm', 'Смотреть продукцию')) }}
            </router-link>
            <router-link :to="'/' + lang + '/contact'" class="btn btn-outline btn-lg">
              {{ t('联系我们', 'Contact Us',  t('联系我们', 'Contact Us', 'Liên hệ', 'Связаться с нами'),  t('联系我们', 'Contact Us', 'Liên hệ', 'Связаться с нами')) }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useLang } from '@/composables/useLang'
const { t, tm, lang } = useLang()

// 404 页必须 noindex：这是 Google 判定「不存在」页面的标准做法。
// 之前这页没有 noindex，且会 5 秒后自动跳首页 —— 两者都会让 Google
// 把 404 当成「重复首页」或「重定向页」处理，浪费抓取预算。
useHead({
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})
</script>

<style lang="scss" scoped>
@use 'sass:color';

.not-found-page {
  background: $c-bg-primary;
}

.page-hero {
  padding: 120px 0 48px;
  background: white;

  @media (max-width: $bp-sm) {
    padding: 80px 0 24px;
  }
}

.not-found-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.error-code {
  font-size: 120px;
  font-weight: $fw-extrabold;
  color: rgba($c-accent, 0.1);
  line-height: 1;
  margin-bottom: $s-lg;
  letter-spacing: -0.02em;

  @media (max-width: $bp-sm) {
    font-size: 80px;
  }
}

h1 {
  font-size: $fs-3xl;
  color: $c-text-primary;
  margin-bottom: $s-md;

  @media (max-width: $bp-sm) {
    font-size: $fs-2xl;
  }
}

.error-desc {
  font-size: $fs-lg;
  color: $c-text-secondary;
  line-height: 1.6;
  margin-bottom: $s-sm;

  @media (max-width: $bp-sm) {
    font-size: $fs-base;
  }
}

.error-actions {
  display: flex;
  gap: $s-md;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: $s-xl;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: $s-sm;
  padding: $s-lg $s-2xl;
  font-size: $fs-base;
  font-weight: $fw-semibold;
  border-radius: $r-sm;
  transition: all $t-fast;
  white-space: nowrap;
  background: transparent;
  color: $c-accent;
  border: 1.5px solid $c-accent;
  text-decoration: none;

  &:hover {
    background: $c-accent;
    color: white;
  }
}
</style>
