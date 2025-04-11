import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Category from '@/pages/Category/Category.vue'
// import PostDetail from '@/views/PostDetail.vue'
import NewPost from '@/pages/NewPost/NewPost.vue'
import CommentTemplate from '@/views/CommentTemplate/CommentTemplate.vue'
import HomeTemplate from '@/views/HomeTemplate/HomeTemplate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeTemplate,
    },
    {
      path: '/category/comment/:id',
      name: 'comment',
      component: CommentTemplate,
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
    // {
    //   path: '/postDetail',
    //   name: 'postDetail',
    //   component: PostDetail,
    // },
    {
      path: '/post',
      name: 'post',
      component: NewPost,
    },
  ],
})

export default router
