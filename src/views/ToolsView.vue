<template>
  <div class="tools-view">
    <section class="page-hero">
      <div class="container">
        <span class="tag">{{ t('工具', 'Tools',  t('工具', 'Tools', 'Công cụ', 'Инструменты'),  t('工具', 'Tools', 'Công cụ', 'Инструменты')) }}</span>
        <h1>{{ t('实用工具集', 'Collection of useful tools',  t('实用工具集', 'Collection of useful tools', 'Bộ công cụ hữu ích', 'Набор полезных инструментов'),  t('实用工具集', 'Collection of useful tools', 'Bộ công cụ hữu ích', 'Набор полезных инструментов')) }}</h1>
        <p>{{ t('选择合适的工具快速完成计算', 'Choose the right tool to complete calculations quickly',  t('选择合适的工具快速完成计算', 'Choose the right tool to complete calculations quickly', 'Chọn công cụ phù hợp để hoàn thành tính toán nhanh chóng', 'Выберите подходящий инструмент для быстрого расчёта'),  t('选择合适的工具快速完成计算', 'Choose the right tool to complete calculations quickly', 'Chọn công cụ phù hợp để hoàn thành tính toán nhanh chóng', 'Выберите подходящий инструмент для быстрого расчёта')) }}</p>
      </div>
    </section>
    <div class="container">
      <div class="tools-grid">
        <router-link :to="`/${lang}/tools/ground-pressure-calculator`" class="tool-card">
          <span class="tool-icon">⚖️</span>
          <h3>{{ t('地面承重计算器', 'Ground Pressure Calculator',  t('地面承重计算器', 'Ground Pressure Calculator', 'Máy tính áp suất mặt đất', 'Калькулятор давления на грунт'),  t('地面承重计算器', 'Ground Pressure Calculator', 'Máy tính áp suất mặt đất', 'Калькулятор давления на грунт')) }}</h3>
          <p>{{ t('根据产品尺寸与重量，计算对地面的压强', 'Calculate ground pressure based on product dimensions and weight',  t('根据产品尺寸与重量，计算对地面的压强', 'Calculate ground pressure based on product dimensions and weight', 'Tính áp suất mặt đất dựa trên kích thước và trọng lượng sản phẩm', 'Расчёт удельного давления на основание по габаритам и массе изделия'),  t('根据产品尺寸与重量，计算对地面的压强', 'Calculate ground pressure based on product dimensions and weight', 'Tính áp suất mặt đất dựa trên kích thước và trọng lượng sản phẩm', 'Расчёт удельного давления на основание по габаритам и массе изделия')) }}</p>
        </router-link>
        <router-link :to="`/${lang}/tools/pressure-calculator`" class="tool-card">
          <span class="tool-icon">🔧</span>
          <h3>{{ t('压力换算表', 'Pressure Calculator',  t('压力换算表', 'Pressure Calculator', 'Bảng chuyển đổi áp suất', 'Таблица перевода давления'),  t('压力换算表', 'Pressure Calculator', 'Bảng chuyển đổi áp suất', 'Таблица перевода давления')) }}</h3>
          <p>{{ t('根据油缸规格与数量，自动换算工作压力', 'Calculate total working pressure based on cylinder specs',  t('根据油缸规格与数量，自动换算工作压力', 'Calculate total working pressure based on cylinder specs', 'Tự động chuyển đổi áp suất làm việc dựa trên thông số và số lượng xi-lanh', 'Автоматический расчёт рабочего давления по характеристикам и количеству цилиндров'),  t('根据油缸规格与数量，自动换算工作压力', 'Calculate total working pressure based on cylinder specs', 'Tự động chuyển đổi áp suất làm việc dựa trên thông số và số lượng xi-lanh', 'Автоматический расчёт рабочего давления по характеристикам и количеству цилиндров')) }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLang } from '@/composables/useLang'
const { t, tm, lang } = useLang()
</script>

<style lang="scss" scoped>
.tools-view {
  min-height: 100vh;
  background: $c-bg-primary;
  padding-bottom: $s-2xl;
}

.page-hero {
  padding: 160px 0 80px;
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/tools-hero-bg.webp) center / cover no-repeat, $c-bg-dark;
  .tag { margin-bottom: $s-md; }
  h1 { color: white; margin-bottom: $s-md; }
  p { color: rgba(255,255,255,0.6); font-size: $fs-lg; }

  @media (max-width: $bp-sm) {
    padding: 80px 0 40px;
  }
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: $s-xl;
  margin-top: $s-xl;
}

.tool-card {
  background: #ffffff;
  border-radius: $r-xl;
  padding: $s-xl;
  box-shadow: $shadow-md;
  text-decoration: none;
  color: inherit;
  transition: all $t-base;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-lg;
    border-color: $c-accent;
  }

  .tool-icon { font-size: 40px; display: block; margin-bottom: $s-md; }
  h3 { font-size: $fs-lg; font-weight: $fw-bold; color: $c-text-primary; margin-bottom: $s-sm; }
  p { font-size: $fs-sm; color: $c-text-secondary; margin: 0; }
}
</style>
