import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/about', component: () => import('@/views/AboutView.vue') },
  { path: '/products', component: () => import('@/views/ProductsView.vue') },
  { path: '/products/:seriesId', component: () => import('@/views/ProductSeriesView.vue') },
  { path: '/products/:seriesId/:modelId', component: () => import('@/views/ProductModelView.vue') },
  { path: '/cases', component: () => import('@/views/CasesView.vue') },
  { path: '/cases/:id', component: () => import('@/views/CaseDetailView.vue') },
  { path: '/contact', component: () => import('@/views/ContactView.vue') },
  { path: '/tools', component: () => import('@/views/ToolsView.vue') },
  { path: '/tools/pressure-calculator', component: () => import('@/views/PressureCalculatorView.vue') },
]
