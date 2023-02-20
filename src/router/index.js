import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
    {
      path: '/',
      component: HomeView,
      name: 'home',
    },
    {
      path: '/calculation/:id',
      name: 'calculation',
      component: () => import('@/views/CalcView.vue'),
    },
    {
      path: '/esom',
      name: 'esom',
      component: () => import('@/views/EsomView.vue'),
    },
  ],
});

export default router;
