<template>
  <div class="pressure-calculator">
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <h1>{{ t('压力换算表', 'Pressure Calculator',  t('压力换算表', 'Pressure Calculator', 'Bảng chuyển đổi áp suất', 'Таблица перевода давления'),  t('压力换算表', 'Pressure Calculator', 'Bảng chuyển đổi áp suất', 'Таблица перевода давления')) }}</h1>
        <p class="subtitle">{{ t('用法:已知工件面积和目标压强,可查对应工作台压力;已知压力和工件面积,可查对应压强。', 'Usage: Given workpiece area and target pressure, find the working table pressure; given pressure and workpiece area, find the pressure.', t('用法：已知工件面积和目标压强，可查对应工作台压力；已知压力和工件面积，可查对应压强。', 'Usage: Given workpiece area and target pressure, find the working table pressure; given pressure and workpiece area, find the pressure.', 'Cách dùng: Biết diện tích phôi và áp suất mục tiêu, tra áp lực bàn; biết áp lực và diện tích phôi, tra áp suất.', 'Использование: зная площадь заготовки и целевое удельное давление, найдите рабочее давление стола; зная давление и площадь заготовки, найдите удельное давление.')) }}</p>
      </div>
    </section>

    <div class="container">
      <!-- Mode Switcher -->
      <div class="mode-switcher">
        <button
          :class="{ active: mode === 'pressure' }"
          @click="mode = 'pressure'"
        >
          {{ t('查压力', 'Find Pressure',  t('查压力', 'Find Pressure', 'Tra áp lực', 'Найти давление'),  t('查压力', 'Find Pressure', 'Tra áp lực', 'Найти давление')) }}
        </button>
        <button
          :class="{ active: mode === 'mpa' }"
          @click="mode = 'mpa'"
        >
          {{ t('查压强', 'Find MPa',  t('查压强', 'Find MPa', 'Tra áp suất', 'Найти МПа'),  t('查压强', 'Find MPa', 'Tra áp suất', 'Найти МПа')) }}
        </button>
      </div>

      <!-- Controls -->
      <section class="controls-panel">
        <!-- Cylinder Spec -->
        <div class="control-group">
          <label>{{ t('油缸规格', 'Cylinder Spec',  t('油缸规格', 'Cylinder Spec', 'Thông số xi-lanh', 'Характеристики цилиндра'),  t('油缸规格', 'Cylinder Spec', 'Thông số xi-lanh', 'Характеристики цилиндра')) }}</label>
          <select v-model="selectedSpec">
            <option v-for="spec in specs" :key="spec.bore" :value="spec.bore">
              {{ spec.bore }}/{{ spec.rod }} mm
            </option>
          </select>
        </div>

        <!-- Cylinder Qty -->
        <div class="control-group">
          <label>{{ t('油缸数量', 'Cyl. Qty',  t('油缸数量', 'Cyl. Qty', 'Số lượng xi-lanh', 'Кол-во цилиндров'),  t('油缸数量', 'Cyl. Qty', 'Số lượng xi-lanh', 'Кол-во цилиндров')) }}</label>
          <input type="number" v-model.number="cylinderQty" min="1" max="20" step="1" />
        </div>

        <!-- Max Total Force Display -->
        <div class="control-group">
          <label>{{ t('最大总压力', 'MAX Pressure',  t('最大总压力', 'MAX Pressure', 'Áp lực tối đa', 'Макс. давление'),  t('最大总压力', 'MAX Pressure', 'Áp lực tối đa', 'Макс. давление')) }}</label>
          <div class="max-force-display">≈{{ Math.round(maxForceAtRated) }}T</div>
        </div>

        <!-- Area Center -->
        <div class="control-group range-group">
          <label>{{ t('工件面积 (m2)', 'Workpiece Area (m2)',  t('工件面积 (m²)', 'Workpiece Area (m²)', 'Diện tích phôi (m²)', 'Площадь заготовки (м²)'),  t('工件面积 (m²)', 'Workpiece Area (m²)', 'Diện tích phôi (m²)', 'Площадь заготовки (м²)')) }}</label>

          <!-- Dimension inputs -->
          <div class="dimension-inputs">
            <input
              type="number"
              v-model.number="length"
              :placeholder="t('长度 (mm)', 'Length (mm)',  t('长度 (mm)', 'Length (mm)', 'Chiều dài (mm)', 'Длина (мм)'),  t('长度 (mm)', 'Length (mm)', 'Chiều dài (mm)', 'Длина (мм)'))"
              min="0"
            />
            <span>×</span>
            <input
              type="number"
              v-model.number="width"
              :placeholder="t('宽度 (mm)', 'Width (mm)',  t('宽度 (mm)', 'Width (mm)', 'Chiều rộng (mm)', 'Ширина (мм)'),  t('宽度 (mm)', 'Width (mm)', 'Chiều rộng (mm)', 'Ширина (мм)'))"
              min="0"
            />
          </div>

          <!-- Slider -->
          <div class="range-row">
            <span class="range-label">{{ fmtArea(centerArea) }} m2</span>
            <input
              type="range"
              v-model.number="centerArea"
              @input="onSliderInput"
              :min="AREA_MIN"
              :max="AREA_MAX"
              step="2500"
            />
          </div>
          <span class="range-note">{{ t('显示范围', 'Range',  t('显示范围', 'Range', 'Phạm vi hiển thị', 'Диапазон отображения'),  t('显示范围', 'Range', 'Phạm vi hiển thị', 'Диапазон отображения')) }}: {{ fmtArea(actualAreaRange[0]) }} - {{ fmtArea(actualAreaRange[1]) }} m2</span>
        </div>

        <!-- Pressure MPa slider ("查压力" mode) -->
        <div v-if="mode === 'pressure'" class="control-group range-group">
          <label>{{ t('压强 (MPa)', 'Pressure (MPa)',  t('压强 (MPa)', 'Pressure (MPa)', 'Áp suất (MPa)', 'Давление (МПа)'),  t('压强 (MPa)', 'Pressure (MPa)', 'Áp suất (MPa)', 'Давление (МПа)')) }}</label>
          <div class="range-row">
            <span class="range-label">{{ pressureMPa.toFixed(1) }} MPa</span>
            <input type="range" v-model.number="pressureMPa" min="0.1" max="2.0" step="0.1" />
          </div>
          <div class="preset-buttons">
            <button @click="pressureMPa = 0.4" :class="{ active: pressureMPa === 0.4 }">
              0.4 MPa
            </button>
            <button @click="pressureMPa = 0.6" :class="{ active: pressureMPa === 0.6 }">
              0.6 MPa
            </button>
            <button @click="pressureMPa = 0.8" :class="{ active: pressureMPa === 0.8 }">
              0.8 MPa
            </button>
          </div>
        </div>

        <!-- Pressure in tons slider ("查压强" mode) -->
        <div v-if="mode === 'mpa'" class="control-group range-group">
          <label>{{ t('压力 (T)', 'Pressure (T)',  t('压力 (T)', 'Pressure (T)', 'Áp lực (T)', 'Усилие (т)'),  t('压力 (T)', 'Pressure (T)', 'Áp lực (T)', 'Усилие (т)')) }}</label>
          <div class="range-row">
            <span class="range-label">{{ pressureTons }} T</span>
            <input type="range" v-model.number="pressureTons" min="0" max="1000" step="10" />
          </div>
          <div class="preset-buttons">
            <button @click="pressureTons = 50" :class="{ active: pressureTons === 50 }">
              50 T
            </button>
            <button @click="pressureTons = 100" :class="{ active: pressureTons === 100 }">
              100 T
            </button>
            <button @click="pressureTons = 120" :class="{ active: pressureTons === 120 }">
              120 T
            </button>
            <button @click="pressureTons = 160" :class="{ active: pressureTons === 160 }">
              160 T
            </button>
          </div>
        </div>
      </section>

      <!-- Chart -->
      <section class="chart-section">
        <div class="chart-container">
          <Line :data="chartData" :options="chartOptions" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { useLang } from '@/composables/useLang'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const { t, tm } = useLang()

// Constants
const AREA_MIN = 0          // cm2
const AREA_MAX = 300000   // cm2 (30 m2)
const AREA_STEP = 2500      // cm2 (0.25 m2)

// Specs: bore (mm, 内径) / rod (mm, 杆径)
const specs = [
  { bore: 125, rod: 90 },
  { bore: 140, rod: 90 },
  { bore: 100, rod: 70 },
  { bore: 90, rod: 70 },
]

// State
const selectedSpec = ref(125)
const cylinderQty = ref(1)
const pressureMPa = ref(1.0)  // Pressure slider: 0.1-2.0 MPa
const centerArea = ref(150000) // cm2 (default: 15 m2)
const length = ref<number | null>(null)  // mm
const width = ref<number | null>(null)   // mm
const mode = ref<'pressure' | 'mpa'>('pressure')  // Mode: 'pressure' (查压力) or 'mpa' (查压强)
const pressureTons = ref(500)  // Pressure in tons, used in 'mpa' mode

// Watch length/width changes and update centerArea
watch([length, width], ([l, w]) => {
  if (l && w && l > 0 && w > 0) {
    // Convert mm2 to cm2: (length_mm × width_mm) / 100
    const area_cm2 = (l * w) / 100
    centerArea.value = Math.round(area_cm2)
  }
})

// Clear dimension inputs when slider is dragged
function onSliderInput() {
  length.value = null
  width.value = null
}

// Colors
const colors = {
  selected: '#1a6fd4',
  other: '#aaaaaa',
}

// Computed area range: center ± 3.75 m2 (total 7.5 m2)
const actualAreaRange = computed(() => {
  const halfRange = 37500 // 3.75 m2 = 37500 cm2
  const min = Math.max(AREA_MIN, centerArea.value - halfRange)
  const max = Math.min(AREA_MAX, centerArea.value + halfRange)
  return [min, max]
})

// Bore area in cm2: π × (bore/2)2 / 100 = π × bore2 / 4 / 100
const boreArea = computed(() => {
  return (Math.PI * selectedSpec.value * selectedSpec.value / 4) / 100
})

// Max total force in tons - at rated 20 MPa (fixed reference for display)
const maxForceAtRated = computed(() => {
  return 20 * boreArea.value * cylinderQty.value / 100
})

// Y axis max: based on 2.0 MPa with current spec/qty, give 10% headroom
const yAxisMax = computed(() => {
  const maxPossible = 20 * boreArea.value * cylinderQty.value / 100
  return Math.max(maxPossible * 1.1, 10)
})

// Chart data for "查压力" mode
const chartDataForPressure = computed(() => {
  const areas_cm2 = areaSteps()
  const areas_m2 = areas_cm2.map(a => a / 10000)

  // Generate single line dataset based on pressureMPa slider
  const datasets = [{
    label: `${pressureMPa.value.toFixed(1)} MPa`,
    data: areas_m2.map(a_m2 => parseFloat((100 * pressureMPa.value * a_m2).toFixed(2))),
    borderColor: colors.selected,
    backgroundColor: 'transparent',
    borderWidth: 3,
    pointRadius: 4,
    pointHoverRadius: 6,
    tension: 0,
  }]

  return {
    labels: areas_m2.map(a => a.toFixed(2)),
    datasets,
  }
})

// Chart data for "查压强" mode
const chartDataForMpa = computed(() => {
  const areas_cm2 = areaSteps()
  const areas_m2 = areas_cm2.map(a => a / 10000)

  const datasets = [{
    label: `${pressureTons.value} T`,
    data: areas_m2.map(a_m2 => {
      // 压强 (MPa) = 压力 (t) / (面积 (m2) × 100)
      const mpa = pressureTons.value / (a_m2 * 100)
      return parseFloat(mpa.toFixed(3))
    }),
    borderColor: colors.selected,
    backgroundColor: 'transparent',
    borderWidth: 3,
    pointRadius: 4,
    pointHoverRadius: 6,
    tension: 0,
  }]

  return {
    labels: areas_m2.map(a => a.toFixed(2)),
    datasets,
  }
})

// Y-axis label based on mode
const yAxisLabel = computed(() => {
  return mode.value === 'pressure'
    ? t('总压力 (T)', 'Total Force (T)',  t('总压力 (T)', 'Total Force (T)', 'Tổng lực (T)', 'Суммарное усилие (т)'),  t('总压力 (T)', 'Total Force (T)', 'Tổng lực (T)', 'Суммарное усилие (т)'))
    : t('压强 (MPa)', 'Pressure (MPa)',  t('压强 (MPa)', 'Pressure (MPa)', 'Áp suất (MPa)', 'Давление (МПа)'),  t('压强 (MPa)', 'Pressure (MPa)', 'Áp suất (MPa)', 'Давление (МПа)'))
})

// Chart data: switch based on mode
const chartData = computed(() => {
  return mode.value === 'pressure'
    ? chartDataForPressure.value
    : chartDataForMpa.value
})

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        title: (ctx: any) => `${t('工件面积', 'Area',  t('工件面积 (m²)', 'Workpiece Area (m²)', 'Diện tích phôi (m²)', 'Площадь заготовки (м²)'),  t('工件面积 (m²)', 'Workpiece Area (m²)', 'Diện tích phôi (m²)', 'Площадь заготовки (м²)'))}: ${ctx[0].label} m2`,
        label: (ctx: any) => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)} t`,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: t('工件面积 (m2)', 'Workpiece Area (m2)',  t('工件面积 (m²)', 'Workpiece Area (m²)', 'Diện tích phôi (m²)', 'Площадь заготовки (м²)'),  t('工件面积 (m²)', 'Workpiece Area (m²)', 'Diện tích phôi (m²)', 'Площадь заготовки (м²)')),
        color: '#555',
        font: { size: 13, weight: 'bold' as const },
      },
      grid: { color: 'rgba(0,0,0,0.05)' },
      ticks: {
        color: '#666',
        maxTicksLimit: 40,
        callback: (val: any, idx: number) => {
          const x = areas_m2_label[idx]
          if (x % 0.5 === 0) return x.toFixed(1)
          return ''
        },
      },
      min: 0,
      max: 30.1,
    },
    y: {
      title: {
        display: true,
        text: yAxisLabel.value,
        color: '#555',
        font: { size: 13, weight: 'bold' as const },
      },
      grid: { color: 'rgba(0,0,0,0.05)' },
      ticks: { color: '#666' },
      beginAtZero: true,
      suggestedMax: mode.value === 'pressure' ? yAxisMax.value : undefined,
    },
  },
}))

// Fixed 0-30 m2 labels for x-axis tick formatting
const areas_m2_label = computed(() => {
  const steps: number[] = []
  for (let a = 0; a <= 30000000; a += AREA_STEP) {
    steps.push(a / 10000)
  }
  return steps
})

// Generate area steps in cm2 for chart display
function areaSteps(): number[] {
  const steps: number[] = []
  const chartStep = 10000  // 1 m2 interval for chart
  for (let a = actualAreaRange.value[0]; a <= actualAreaRange.value[1]; a += chartStep) {
    steps.push(a)
  }
  return steps
}

function fmt(n: number): string {
  return n.toFixed(1)
}

function fmtArea(cm2: number): string {
  return (cm2 / 10000).toFixed(2)
}
</script>

<style lang="scss" scoped>
.pressure-calculator {
  min-height: 100vh;
  background: $c-bg-primary;
  padding-bottom: $s-2xl;
}

.hero {
  background: $c-accent;
  color: #ffffff;
  padding: $s-2xl 0 $s-xl;
  padding-top: calc($s-2xl + 60px);  // Extra space for fixed header
  text-align: center;

  h1 { font-size: $fs-2xl; font-weight: $fw-extrabold; margin-bottom: $s-sm; color: white; }
  .subtitle { font-size: $fs-base; opacity: 0.85; text-align: center; }
}

.mode-switcher {
  display: flex;
  gap: 0;
  margin: 24px 0 0 0;
  border-bottom: 2px solid $c-border;

  button {
    padding: 12px 24px;
    border: none;
    background: transparent;
    color: $c-text-secondary;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;
    font-size: $fs-base;
    font-weight: $fw-semibold;

    &:hover {
      color: $c-text-primary;
    }

    &.active {
      color: $c-accent;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 2px;
        background: $c-accent;
      }
    }
  }
}

.controls-panel {
  display: flex;
  flex-wrap: wrap;
  gap: $s-lg;
  align-items: flex-start;
  background: #ffffff;
  border-radius: $r-xl;
  padding: $s-xl;
  margin: $s-xl 0;
  box-shadow: $shadow-md;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: $s-sm;
  min-width: 140px;

  label {
    font-size: $fs-xs;
    font-weight: $fw-bold;
    color: $c-text-muted;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  select, input[type="number"] {
    padding: $s-sm $s-md;
    border: 1.5px solid $c-border;
    border-radius: $r-md;
    font-size: $fs-base;
    color: $c-text-primary;
    background: $c-bg-primary;
    transition: border-color $t-fast;
    outline: none;
    min-width: 130px;

    &:focus { border-color: $c-accent; }
  }
}

.max-force-display {
  font-size: $fs-xl;
  font-weight: $fw-extrabold;
  color: $c-accent;
  padding: $s-sm 0;
}

.range-group { min-width: 220px; flex: 1; }

.dimension-inputs {
  display: flex;
  align-items: center;
  gap: $s-sm;
  margin-bottom: $s-sm;

  input[type="number"] {
    flex: 1;
    padding: $s-sm $s-md;
    border: 1.5px solid $c-border;
    border-radius: $r-md;
    font-size: $fs-sm;
    color: $c-text-primary;
    background: $c-bg-primary;
    transition: border-color $t-fast;
    outline: none;

    &:focus { border-color: $c-accent; }

    &::placeholder {
      color: $c-text-muted;
      font-size: $fs-xs;
    }
  }

  span {
    color: $c-text-muted;
    font-weight: $fw-bold;
  }
}

.range-row {
  display: flex;
  align-items: center;
  gap: $s-md;
}

.range-label {
  font-size: $fs-xs;
  color: $c-text-secondary;
  min-width: 100px;
  text-align: right;
}

.range-note {
  font-size: $fs-xs;
  color: $c-text-muted;
  margin-top: $s-xs;
  text-align: center;
}

.preset-buttons {
  display: flex;
  gap: 12px;
  margin-top: 8px;
  margin-left: 35px;

  button {
    padding: 8px 18px;
    font-size: 14px;
    border: 1px solid $c-border;
    border-radius: 4px;
    background: white;
    color: $c-text-primary;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: $c-bg-secondary;
    }

    &.active {
      background: $c-accent;
      color: white;
      border-color: $c-accent;
    }
  }
}

input[type="range"] {
  flex: 1;
  accent-color: $c-accent;
  cursor: pointer;
}

.chart-section {
  background: #ffffff;
  border-radius: $r-xl;
  padding: $s-xl;
  box-shadow: $shadow-md;
  margin-bottom: $s-xl;
}

.chart-container {
  height: 420px;
  width: 100%;
  position: relative;
}

.legend-note {
  display: flex;
  gap: $s-xl;
  margin-top: $s-lg;
  padding-top: $s-md;
  border-top: 1px solid $c-border;
  flex-wrap: wrap;
}

.legend-btn {
  display: inline-flex;
  align-items: center;
  gap: $s-sm;
  padding: $s-sm $s-lg;
  border: 1.5px solid $c-border;
  border-radius: $r-lg;
  background: #fff;
  font-size: $fs-sm;
  color: $c-text-secondary;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover { border-color: $c-accent; color: $c-accent; }
  &.active {
    border-color: $c-accent;
    background: $c-accent;
    color: #fff;
    font-weight: $fw-bold;
  }
}

.formula-section {
  h3 {
    font-size: $fs-lg;
    font-weight: $fw-bold;
    color: $c-text-primary;
    margin-bottom: $s-md;
  }
}

.formula-card {
  background: #ffffff;
  border-radius: $r-xl;
  padding: $s-xl;
  box-shadow: $shadow-md;
  border-left: 4px solid $c-accent;

  code {
    display: block;
    font-size: $fs-base;
    color: $c-accent;
    font-weight: $fw-bold;
    margin-bottom: $s-md;
  }

  .formula-note {
    font-size: $fs-sm;
    color: $c-text-secondary;
    line-height: 1.6;
    margin: 0;
  }
}
</style>
