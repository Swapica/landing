import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  useRoute,
  useRouter,
} from 'vue-router'

import { ROUTE_NAMES } from '@/enums'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: ROUTE_NAMES.homepage },
  },
  {
    path: '/',
    name: ROUTE_NAMES.homepage,
    component: () => import('@/pages/Homepage.vue'),
  },
  {
    path: '/terms',
    name: ROUTE_NAMES.terms,
    component: () => import('@/pages/Terms.vue'),
  },
  {
    path: '/privacy-policy',
    name: ROUTE_NAMES.privacyPolicy,
    component: () => import('@/pages/PrivacyPolicy.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100,
      }
    } else {
      return { top: 0, left: 0 }
    }
  },
})

export { router, useRouter, useRoute }
