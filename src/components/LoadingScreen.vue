<template>
  <Transition name="loading-fade">
    <div v-if="visible" class="loading-screen">
      <div class="loading-content">
        <img src="/商标2-white.png" alt="SHANG RUI" class="loading-logo" />
        <span class="loading-brand">SHANG RUI</span>
        <div class="loading-spinner">
          <div class="spinner-ring"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const visible = ref(false)
let loadingTimer: ReturnType<typeof setTimeout> | null = null
let hideTimer: ReturnType<typeof setTimeout> | null = null

// Show loading if page takes longer than threshold
const showLoading = () => {
  loadingTimer = setTimeout(() => {
    visible.value = true
  }, 300) // Only show after 300ms of slowness
}

// Hide loading and ensure minimum display time
const hideLoading = () => {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
    loadingTimer = null
  }
  // If already visible, keep it for at least 400ms then fade out
  if (visible.value) {
    hideTimer = setTimeout(() => {
      visible.value = false
    }, 400)
  }
}

onMounted(() => {
  router.beforeEach(() => {
    showLoading()
  })
  router.afterEach(() => {
    hideLoading()
  })
})

onUnmounted(() => {
  if (loadingTimer) clearTimeout(loadingTimer)
  if (hideTimer) clearTimeout(hideTimer)
})
</script>

<style lang="scss" scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: $c-accent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $s-lg;
}

.loading-logo {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: $r-lg;
  animation: pulse 1.5s ease-in-out infinite;
}

.loading-brand {
  font-size: $fs-3xl;
  font-weight: $fw-extrabold;
  color: #ffffff;
  letter-spacing: 0.08em;
}

.loading-spinner {
  margin-top: $s-md;
  
  .spinner-ring {
    width: 36px;
    height: 36px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(0.96); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.3s ease;
}
.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}
</style>
