import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import HomePage from '@/views/HomePage.vue'
import Login from '../views/Login.vue'
import Login2 from '@/views/Login2.vue'
import Category from '@/views/Category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/login2',
      name: 'login2',
      component: Login2,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
  ],
})

export default router
