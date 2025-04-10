import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import HomePage from '@/views/HomePage.vue'
import Login from '../views/Login.vue'
import Category from '@/views/Category.vue'
import PostDetail from '@/views/PostDetail.vue'
import NewPost from '@/views/NewPost.vue'

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
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/postDetail',
      name: 'postDetail',
      component: PostDetail,
    },
    {
      path: '/post',
      name: 'post',
      component: NewPost,
    },
  ],
})

export default router
