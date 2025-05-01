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
      path: '/mind-canvas',
      name: 'MindCanvas',
      meta: { title: '官网' },
      component: () => import('@/views/MindCanvas.vue')
    },
    {
      path: '/ai',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: 'search',
          name: 'Search',
          meta: { title: 'AI 搜索' },
          component: () => import('@/views/Search.vue')
        },
        {
          path: 'write',
          name: 'Write',
          meta: { title: '帮我写作' },
          component: () => import('@/views/Write.vue')
        },
        {
          path: 'code',
          name: 'Code',
          meta: { title: 'AI 编程' },
          component: () => import('@/views/Code.vue')
        },
        {
          path: 'image',
          name: 'Image',
          meta: { title: '图像生成' },
          component: () => import('@/views/Image.vue')
        },
        {
          path: 'read',
          name: 'Read',
          meta: { title: 'AI 阅读' },
          component: () => import('@/views/Read.vue')
        }
      ]
    }
  ]
})

export default router