<template>
  <section class="section-delivery">
    <div ref="bannerEl" class="delivery-banner" aria-label="delivery gallery">
      <div ref="scrollerEl" class="delivery-scroller"></div>
      <div class="delivery-overlay">
        <h2>{{ t('出货现场实拍', 'Delivery in Action', 'Hình Ảnh Xuất Hàng', 'Фото отгрузок') }}</h2>
        <p>{{ t('每一台设备的交付瞬间——打包、物流、客户签收。', 'Every equipment delivery moment — packing, logistics, customer sign-off.', 'Mỗi khoảnh khắc giao hàng — đóng gói, vận chuyển, khách hàng ký nhận.', 'Каждая поставка — упаковка, логистика, приёмка клиентом.') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useLang } from '@/composables/useLang'

const { t } = useLang()

const bannerEl = ref<HTMLDivElement | null>(null)
const scrollerEl = ref<HTMLDivElement | null>(null)

// 拼贴式横幅:固定 4.5 行高容器,始终向下匀速滚动,鼠标停在某张图上时暂停
const BATCH = 80
const ROWS_VISIBLE = 6
const SPEED_PX_PER_SEC = 50
const IMG_BASE = '/delivery/'

let offset = 0
let lastTs = 0
let rafId = 0
let hoverPaused = false
let isTouch = false

function getColumnCount(): number {
  const w = window.innerWidth
  if (w >= 1920) return 32
  if (w >= 1600) return 24
  if (w >= 1200) return 20
  if (w >= 900) return 16
  if (w >= 600) return 12
  return 6
}

function recomputeHeight(): void {
  const banner = bannerEl.value
  const scroller = scrollerEl.value
  if (!banner || !scroller) return
  const cols = getColumnCount()
  const w = banner.clientWidth
  const pad = parseFloat(getComputedStyle(banner).paddingLeft) * 2
  const cs = getComputedStyle(scroller)
  const gap = parseFloat(cs.columnGap || cs.gap) || 4
  const innerW = w - pad
  const tile = cols > 0 ? (innerW - gap * (cols - 1)) / cols : 100
  const totalH = tile * ROWS_VISIBLE + gap * (ROWS_VISIBLE - 1)
  banner.style.setProperty('--banner-h', totalH + 'px')
}

function makeTile(file: string): HTMLAnchorElement {
  const a = document.createElement('a')
  a.href = IMG_BASE + encodeURIComponent(file)
  a.target = '_blank'
  a.rel = 'noopener'
  a.className = 'delivery-tile'
  const img = document.createElement('img')
  img.loading = 'lazy'
  img.decoding = 'async'
  img.src = IMG_BASE + encodeURIComponent(file)
  img.alt = ''
  a.appendChild(img)
  return a
}

function renderBatch(list: string[], start: number): number {
  const scroller = scrollerEl.value
  if (!scroller) return start
  const frag = document.createDocumentFragment()
  const end = Math.min(start + BATCH, list.length)
  for (let i = start; i < end; i++) frag.appendChild(makeTile(list[i]))
  scroller.appendChild(frag)
  return end
}

function tick(ts: number): void {
  const banner = bannerEl.value
  const scroller = scrollerEl.value
  if (!banner || !scroller) return
  if (!lastTs) lastTs = ts
  const dt = (ts - lastTs) / 1000
  lastTs = ts
  if (!hoverPaused) {
    offset += SPEED_PX_PER_SEC * dt
  }
  const maxOffset = Math.max(0, scroller.scrollHeight - banner.clientHeight)
  if (maxOffset > 0 && offset >= maxOffset) {
    offset = 0
  }
  scroller.style.transform = `translate3d(0, ${-offset}px, 0)`
  rafId = requestAnimationFrame(tick)
}

function start(): void {
  if (!rafId) {
    lastTs = 0
    rafId = requestAnimationFrame(tick)
  }
}

function stop(): void {
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = 0
  }
}

function onResize(): void {
  recomputeHeight()
}

function onMouseOver(e: MouseEvent): void {
  if (isTouch) return
  const target = e.target as HTMLElement
  if (target.closest('.delivery-tile')) hoverPaused = true
}

function onMouseOut(e: MouseEvent): void {
  if (isTouch) return
  const target = e.target as HTMLElement
  if (target.closest('.delivery-tile')) hoverPaused = false
}

onMounted(async () => {
  if (typeof window === 'undefined') return
  isTouch = window.matchMedia('(hover: none)').matches

  const banner = bannerEl.value
  if (!banner) return

  banner.addEventListener('mouseover', onMouseOver)
  banner.addEventListener('mouseout', onMouseOut)
  window.addEventListener('resize', onResize, { passive: true })

  try {
    const res = await fetch(IMG_BASE + 'images.json', { cache: 'no-store' })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const list: string[] = await res.json()
    // 随机打乱
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[list[i], list[j]] = [list[j], list[i]]
    }
    let i = 0
    const tickRender = (): void => {
      i = renderBatch(list, i)
      if (i < list.length) requestAnimationFrame(tickRender)
      else {
        requestAnimationFrame(recomputeHeight)
      }
    }
    tickRender()
    recomputeHeight()
    start()
  } catch (err) {
    console.error('[DeliveryBanner] failed to load manifest:', err)
    const scroller = scrollerEl.value
    if (scroller) {
      scroller.textContent = '无法加载出货图片清单。'
    }
  }
})

onBeforeUnmount(() => {
  stop()
  if (typeof window === 'undefined') return
  const banner = bannerEl.value
  if (banner) {
    banner.removeEventListener('mouseover', onMouseOver)
    banner.removeEventListener('mouseout', onMouseOut)
  }
  window.removeEventListener('resize', onResize)
})
</script>

<style lang="scss">
.section-delivery {
  padding: 0;
  background: transparent;
}

/* 拼贴式出货图片横幅:6 行高容器,鼠标悬停时暂停,全屏宽 */
.delivery-banner {
  width: 100%;
  padding: 4px;
  height: var(--banner-h, 480px);
  overflow: hidden;
  position: relative;
  touch-action: pan-y;
}

/* 暗色遮罩 + 居中文字层 */
.delivery-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  z-index: 2;

  h2 {
    font-size: 44px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 12px;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
    letter-spacing: 1px;
  }

  p {
    font-size: 16px;
    color: #ffffff;
    margin: 0;
    max-width: 720px;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
    line-height: 1.6;
  }
}

@media (max-width: 600px) {
  .delivery-overlay {
    padding: 16px;

    h2 {
      font-size: 32px;
      margin: 0 0 8px;
    }

    p {
      font-size: 14px;
    }
  }
}

.delivery-scroller {
  display: grid;
  grid-auto-flow: dense;
  gap: 4px;
  will-change: transform;
}

.delivery-tile {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: #ececec;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center center;
    transition: transform 0.35s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
}

@media (min-width: 1920px) {
  .delivery-scroller {
    grid-template-columns: repeat(32, 1fr);
  }
}
@media (min-width: 1600px) {
  .delivery-scroller {
    grid-template-columns: repeat(24, 1fr);
  }
}
@media (min-width: 1200px) {
  .delivery-scroller {
    grid-template-columns: repeat(20, 1fr);
  }
}
@media (min-width: 900px) {
  .delivery-scroller {
    grid-template-columns: repeat(16, 1fr);
  }
}
@media (max-width: 900px) {
  .delivery-scroller {
    grid-template-columns: repeat(12, 1fr);
  }
}
@media (max-width: 600px) {
  .delivery-scroller {
    grid-template-columns: repeat(6, 1fr);
    gap: 3px;
  }
  .delivery-banner {
    padding: 3px;
  }
}
</style>