<script setup>
import { ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
const loginSuccess = JSON.parse(localStorage.getItem('Data'))
const handleLogout = () => {
  localStorage.removeItem('Data')
  // window.location.reload()
}
const props = defineProps(['email'])
console.log(props)
// watchEffect(() => {
//   loginSuccess.value = JSON.parse(localStorage.getItem('Email'))
// })
// console.log(loginSuccess)
</script>

<template>
  <div class="bg-[#fffcc6] py-5 px-10">
    <nav class="max-w-[10 00px] m-auto flex justify-between">
      <ul class="flex gap-10">
        <li>
          <RouterLink to="/">Trang chủ</RouterLink>
        </li>
        <li>
          <RouterLink to="/category">Danh mục</RouterLink>
        </li>
        <li>
          <!-- <RouterLink to="/postDetail">Chi tiết sản phẩm</RouterLink> -->
        </li>
        <li>
          <RouterLink to="/post">Đăng bài</RouterLink>
        </li>
      </ul>

      <ul class="flex gap-10">
        <li v-if="loginSuccess">
          {{ loginSuccess.name }}
          <button @click="handleLogout">Đăng xuất</button>
        </li>

        <template v-else>
          <li><RouterLink to="/register">Đăng kí</RouterLink></li>
          <li><RouterLink to="/login">Đăng nhập</RouterLink></li>
        </template>
      </ul>
    </nav>
  </div>
</template>
