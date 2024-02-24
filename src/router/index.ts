import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'
import FormularioViewVue from '@/views/FormularioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
      component: AboutViewVue
    },
    {
      path: '/',
      name: 'Profile',
      component: ProfileViewVue
    },
    {
      path: '/formulario',
      name: 'Formulario',
      component: FormularioViewVue
    }
  ]
})

export default router
