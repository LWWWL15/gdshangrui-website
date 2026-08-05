<template>
  <div class="ground-pressure-calculator">
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <h1>{{ t('地面承重计算器', 'Ground Pressure Calculator',  t('地面承重计算器', 'Ground Pressure Calculator', 'Máy tính áp suất mặt đất', 'Калькулятор давления на грунт'),  t('地面承重计算器', 'Ground Pressure Calculator', 'Máy tính áp suất mặt đất', 'Калькулятор давления на грунт')) }}</h1>
        <p class="subtitle">{{ t('根据产品尺寸与重量，计算对地面的压强', 'Calculate ground pressure based on product dimensions and weight',  t('根据产品尺寸与重量，计算对地面的压强', 'Calculate ground pressure based on product dimensions and weight', 'Tính áp suất mặt đất dựa trên kích thước và trọng lượng sản phẩm', 'Расчёт удельного давления на основание по габаритам и массе изделия'),  t('根据产品尺寸与重量，计算对地面的压强', 'Calculate ground pressure based on product dimensions and weight', 'Tính áp suất mặt đất dựa trên kích thước và trọng lượng sản phẩm', 'Расчёт удельного давления на основание по габаритам и массе изделия')) }}</p>
      </div>
    </section>

    <div class="container">
      <!-- Input Card -->
      <section class="calc-card">
        <div class="input-grid">
          <!-- Length -->
          <div class="input-group">
            <label>{{ t('占地长度 (mm)', 'Length (mm)',  t('占地长度 (mm)', 'Length (mm)', 'Chiều dài (mm)', 'Длина основания (мм)'),  t('占地长度 (mm)', 'Length (mm)', 'Chiều dài (mm)', 'Длина основания (мм)')) }}</label>
            <input
              type="number"
              v-model.number="length"
              :placeholder="t('例：1200', 'e.g. 1200',  t('长度 (mm)', 'Length (mm)', 'Chiều dài (mm)', 'Длина (мм)'),  t('长度 (mm)', 'Length (mm)', 'Chiều dài (mm)', 'Длина (мм)'))"
              min="1"
              step="1"
            />
          </div>

          <!-- Width -->
          <div class="input-group">
            <label>{{ t('占地宽度 (mm)', 'Width (mm)',  t('占地宽度 (mm)', 'Width (mm)', 'Chiều rộng (mm)', 'Ширина основания (мм)'),  t('占地宽度 (mm)', 'Width (mm)', 'Chiều rộng (mm)', 'Ширина основания (мм)')) }}</label>
            <input
              type="number"
              v-model.number="width"
              :placeholder="t('例：800', 'e.g. 800',  t('宽度 (mm)', 'Width (mm)', 'Chiều rộng (mm)', 'Ширина (мм)'),  t('宽度 (mm)', 'Width (mm)', 'Chiều rộng (mm)', 'Ширина (мм)'))"
              min="1"
              step="1"
            />
          </div>

          <!-- Weight -->
          <div class="input-group">
            <label>{{ t('重量 (kg)', 'Weight (kg)',  t('重量 (kg)', 'Weight (kg)', 'Trọng lượng (kg)', 'Масса (кг)'),  t('重量 (kg)', 'Weight (kg)', 'Trọng lượng (kg)', 'Масса (кг)')) }}</label>
            <input
              type="number"
              v-model.number="weight"
              :placeholder="t('例：5000', 'e.g. 5000',  t('例：5000', 'e.g. 5000', 'VD: 5000', 'напр.: 5000'),  t('例：5000', 'e.g. 5000', 'VD: 5000', 'напр.: 5000'))"
              min="1"
              step="1"
            />
          </div>
        </div>

        <!-- Result -->
        <div class="result-panel">
          <div class="result-label">{{ t('地面压强', 'Ground Pressure',  t('地面压强', 'Ground Pressure', 'Áp suất mặt đất', 'Давление на грунт'),  t('地面压强', 'Ground Pressure', 'Áp suất mặt đất', 'Давление на грунт')) }}</div>
          <div class="result-value" :class="{ active: pressure > 0 }">
            <template v-if="pressure > 0">
              {{ formatPressure(pressure) }}
            </template>
            <template v-else>
              <span class="placeholder">{{ t('—', '—') }}</span>
            </template>
          </div>
          <div class="result-unit">kg/m²</div>
        </div>

        <!-- Formula note -->
        <div class="formula-note">
          {{ t('公式：重量 (kg) ÷ [长 (mm) × 宽 (mm) ÷ 1,000,000] = 压强 (kg/m²)', 'Formula: Weight (kg) ÷ [Length (mm) × Width (mm) ÷ 1,000,000] = Pressure (kg/m²)', t('公式：重量 (kg) ÷ [长 (mm) × 宽 (mm) ÷ 1,000,000] = 压强 (kg/m²)', 'Formula: Weight (kg) ÷ [Length (mm) × Width (mm) ÷ 1,000,000] = Pressure (kg/m²)', 'Công thức: Trọng lượng (kg) ÷ [Dài (mm) × Rộng (mm) ÷ 1.000.000] = Áp suất (kg/m²)', 'Формула: Масса (кг) ÷ [Длина (мм) × Ширина (мм) ÷ 1 000 000] = Давление (кг/м²)')) }}
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLang } from '@/composables/useLang'

const { t, tm } = useLang()

const length = ref<number | null>(null)   // mm
const width = ref<number | null>(null)    // mm
const weight = ref<number | null>(null)   // kg

// 面积 (m²) = 长(mm) × 宽(mm) / 1,000,000
const area = computed(() => {
  if (length.value && width.value && length.value > 0 && width.value > 0) {
    return (length.value * width.value) / 1_000_000
  }
  return 0
})

// 压强 (kg/m²) = 重量(kg) / 面积(m²)
const pressure = computed(() => {
  if (weight.value && weight.value > 0 && area.value > 0) {
    return weight.value / area.value
  }
  return 0
})

function formatPressure(val: number): string {
  if (val >= 10000) {
    return val.toLocaleString('en-US', { maximumFractionDigits: 0 })
  } else if (val >= 100) {
    return val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  } else {
    return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
}
</script>

<style lang="scss" scoped>
.ground-pressure-calculator {
  min-height: 100vh;
  background: $c-bg-primary;
  padding-bottom: $s-sm;
}

.hero {
  background: $c-accent;
  color: #ffffff;
  padding: $s-2xl 0 $s-xl;
  padding-top: calc($s-2xl + 60px);
  text-align: center;

  h1 { font-size: $fs-2xl; font-weight: $fw-extrabold; margin-bottom: $s-sm; color: white; }
  .subtitle { font-size: $fs-base; opacity: 0.85; text-align: center; }
}

.calc-card {
  background: #ffffff;
  border-radius: $r-xl;
  padding: $s-2xl;
  margin: $s-xl 0;
  box-shadow: $shadow-md;
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $s-xl;
  margin-bottom: $s-2xl;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: $s-sm;

  label {
    font-size: $fs-sm;
    font-weight: $fw-bold;
    color: $c-text-secondary;
  }

  input {
    padding: $s-md $s-lg;
    border: 1.5px solid $c-border;
    border-radius: $r-md;
    font-size: $fs-lg;
    color: $c-text-primary;
    background: $c-bg-primary;
    outline: none;
    transition: border-color $t-fast;
    width: 100%;

    &:focus { border-color: $c-accent; }

    &::placeholder { color: $c-text-muted; font-size: $fs-sm; }
  }
}

.result-panel {
  display: flex;
  align-items: baseline;
  gap: $s-md;
  background: $c-bg-primary;
  border-radius: $r-lg;
  padding: $s-xl $s-2xl;
  margin-bottom: $s-xl;
  border: 2px solid $c-border;
  flex-wrap: wrap;
}

.result-label {
  font-size: $fs-base;
  font-weight: $fw-bold;
  color: $c-text-secondary;
}

.result-value {
  font-size: $fs-2xl;
  font-weight: $fw-extrabold;
  color: $c-text-muted;
  transition: color $t-base;

  &.active {
    color: $c-accent;
  }

  .placeholder { opacity: 0.4; }
}

.result-unit {
  font-size: $fs-base;
  color: $c-text-secondary;
}

.formula-note {
  font-size: $fs-sm;
  color: $c-text-muted;
  text-align: center;
  padding-top: $s-md;
  border-top: 1px solid $c-border;
  line-height: 1.6;
}
</style>
