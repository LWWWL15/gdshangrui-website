import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/:lang(cn|mic|vn|ru)',
    component: () => import('@/views/LangLayout.vue'),
    children: [
      { path: '', component: () => import('@/views/HomeView.vue') },
      { path: 'about', component: () => import('@/views/AboutView.vue') },
      { path: 'products', component: () => import('@/views/AllProductsView.vue') },
      { path: 'products/series', component: () => import('@/views/ProductsView.vue') },
      { path: 'products/:seriesId', component: () => import('@/views/ProductSeriesView.vue') },
      { path: 'products/:seriesId/:modelId', component: () => import('@/views/ProductModelView.vue') },
      { path: 'blog', component: () => import('@/views/BlogView.vue') },
      { path: 'blog/:slug', component: () => import('@/views/BlogDetailView.vue') },
      { path: 'contact', component: () => import('@/views/ContactView.vue') },
      { path: 'tools', component: () => import('@/views/ToolsView.vue') },
      { path: 'tools/pressure-calculator', component: () => import('@/views/PressureCalculatorView.vue') },
      { path: 'tools/ground-pressure-calculator', component: () => import('@/views/GroundPressureCalculator.vue') },
      { path: '404', component: () => import('@/views/NotFoundView.vue') },
      { path: 'gallery', component: () => import('@/views/GalleryView.vue') },
    ]
  },
  {
    path: '/',
    redirect: () => {
      const lang = navigator.language || ''
      if (lang.toLowerCase().startsWith('zh')) {
        return '/cn/'
      }
      return '/mic/'
    }
  },
  { path: '/:pathMatch(.*)*', redirect: (to) => {
    const lang = (navigator.language || '').toLowerCase().startsWith('zh') ? 'cn' : 'mic'
    return `/${lang}/404`
  }},
]