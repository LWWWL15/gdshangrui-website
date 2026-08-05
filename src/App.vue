<template>
  <RouterView />
  <Transition name="fade">
    <div id="app-loading" v-if="isLoading">
      <div class="skeleton-wrapper">
        <!-- Header skeleton -->
        <div class="skeleton-header">
          <div class="skeleton-bar" style="width: 100%; height: 36px; background: #c0392b;"></div>
          <div class="skeleton-bar" style="width: 100%; height: 60px; background: #1a2744;"></div>
        </div>

        <!-- Hero skeleton -->
        <div class="skeleton-hero">
          <div class="skeleton-bar" style="width: 80%; height: 48px; margin: 0 auto 16px;"></div>
          <div class="skeleton-bar" style="width: 60%; height: 24px; margin: 0 auto 24px;"></div>
          <div class="skeleton-bar" style="width: 140px; height: 48px; margin: 0 auto;"></div>
        </div>

        <!-- Content skeleton -->
        <div class="skeleton-content">
          <div class="skeleton-grid">
            <div class="skeleton-card" v-for="i in 4" :key="i"></div>
          </div>
          <div class="skeleton-bar" style="width: 50%; height: 40px; margin: 40px auto 24px;"></div>
          <div class="skeleton-grid">
            <div class="skeleton-card skeleton-card--large" v-for="i in 6" :key="i"></div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// SSR: isLoading must start false so RouterView (LangLayout) IS rendered during SSR
// Client: isLoading starts true to show skeleton, then hides after mount
const isLoading = ref(typeof window === 'undefined')
</script>

<style lang="scss" scoped>
#app-loading {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #ffffff;
  overflow-y: auto;
}

.skeleton-wrapper {
  min-height: 100vh;
}

.skeleton-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.skeleton-bar {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.skeleton-hero {
  padding: 200px 40px 80px;
  background: #1a2744;
  text-align: center;
}

.skeleton-content {
  padding: 60px 40px;
}

.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

.skeleton-card {
  aspect-ratio: 1;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 12px;
  
  &--large {
    aspect-ratio: 4/3;
  }
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>