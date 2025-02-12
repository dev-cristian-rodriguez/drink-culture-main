import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },

    {
      path: '/category/:id',
      name: 'category',
      component: () => import('@/views/Category.vue'),
    },

    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/detail/index.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/common/notFound/notFound.vue'),
    },
  ],
})

export default router
