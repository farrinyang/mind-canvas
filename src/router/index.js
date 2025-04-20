import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      meta: { title: '首页' },
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/ai',
      name: 'Ai',
      meta: { title: 'AI' },
      component: () => import('@/views/Ai.vue')
    }
  ]
})

export default router