import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlatsView from '../views/PlatsView.vue'
import DessertsView from '../views/DessertsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Plats',
      name: 'Plats',
      component: PlatsView
    },
    {
      path: '/Desserts',
      name: 'Desserts',
      component: DessertsView
    }
  ]
})

export default router
