<script setup>
import router from '@/router'
import { RouterLink } from 'vue-router'

// const props = defineProps({
//   propsEmail: String,
// })

const getEmail = localStorage.getItem('email')

const handleLogout = () => {
  window.location.reload()
  localStorage.removeItem('email')
  router.push('/')
}
</script>

<template>
  <div class="bg-[#fffcc6] py-5 px-10">
    <nav class="max-w-[10 00px] m-auto flex justify-between">
      <ul class="flex gap-10">
        <li>
          <RouterLink to="/">Trang chủ</RouterLink>
        </li>
        <li>
          <RouterLink :to="getEmail ? '/post' : '/login'">Đăng bài</RouterLink>
        </li>
      </ul>

      <ul class="flex gap-10">
        <li v-if="getEmail">
          {{ getEmail }}
          <button @click="handleLogout">Đăng xuất</button>
        </li>

        <template v-else>
          <li><RouterLink to="/login">Đăng nhập</RouterLink></li>
          <li><RouterLink to="/register">Đăng kí</RouterLink></li>
        </template>
      </ul>
    </nav>
  </div>
</template>
