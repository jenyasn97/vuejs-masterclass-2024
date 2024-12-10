import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      name: 'projects',
      path: '/projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      name: 'single-project',
      path: '/projects/:id',
      component: () => import('@/views/SingleProject.vue'),
    },
    {
      name: 'NotFound',
      path: '/:catchAll(.*)*',
      component: h('p', { style: 'color:red' }, '404 Page Not Found'),
    },
  ],
})

export default router
