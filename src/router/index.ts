import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // redirect: '/home',
    name:'Calculadora',
    component: HomePage
  },
  {
    path: '/privacidade',
    name: 'Política Privacidade',
    component: () => import('@/views/PoliticaPrivacidade.vue'),
  },

  {
    path: '/termos-e-condicoes',
    name: 'Termos Condicões',
    component: () => import('@/views/TermosUso.vue'),
  },
  
  
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: HomePage
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
