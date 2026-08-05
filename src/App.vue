<template>
  <RouterView />
  <Transition name="fade">
    <div id="app-loading" v-if="isLoading">
      <div class="loading-content">
        <img src="/商标2.png" alt="SHANG RUI" class="loading-logo" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// SSR: isLoading must start false so RouterView (LangLayout) IS rendered during SSR
// Client: isLoading starts true to show skeleton, then hides after mount
const isLoading = ref(typeof window === 'undefined')

// Hide loading after a short delay so the logo can be seen breathing
if (typeof window !== 'undefined') {
  setTimeout(() => {
    isLoading.value = false
  }, 800)
}
</script>

<style lang="scss" scoped>
#app-loading {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-logo {
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 12px;
  animation: logo-pulse 1.5s ease-in-out infinite;
}

@keyframes logo-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.92); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
