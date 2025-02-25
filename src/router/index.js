import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdmininterView from '../views/AdmininterView.vue'
import EnseignantView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import Login1View from '../views/Login1View.vue'
import LoginV2iew from '../views/Login2View.vue'
import DashboardView from '../views/DashboardView.vue'
import FinducoursView from '@/views/FinducoursView.vue'
import CumuldheureView from '@/views/cumuldheureView.vue'
import HistoriqueView from '@/views/HistoriqueView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/login1',
      name: 'login1',
      component: Login1View,
    },{
      path: '/login2',
      name: 'login2',
      component: LoginV2iew,
    },
    {
      path: '/admininter',
      name: 'Admininter',
      component: AdmininterView,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView,
    },
   
    {
      path: '/debutducours',
      name: 'debutducours',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DebutducoursView.vue'),
    },
    {
      path: '/finducours',
      name: 'Finducours',
      component: FinducoursView,
    },
    {
      path: '/cumuldheure',
      name: 'cumuldheure',
      component: CumuldheureView,
    },
    {
      path: '/historique',
      name: 'Historique',
      component: HistoriqueView,
    },
  ],
})

export default router
