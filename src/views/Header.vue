<script setup>
import { ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'
const loginSuccess = ref(JSON.parse(localStorage.getItem('Email')))
const handleLogout = () => {
  localStorage.removeItem('Email')
  loginSuccess.value = null
  // window.location.reload()
}

watchEffect(() => {
  loginSuccess.value = JSON.parse(localStorage.getItem('Email'))
})
// console.log(loginSuccess)
</script>
<template>
  <div class="py-5 px-10">
    <nav class="max-w-[10 00px] m-auto flex justify-between">
      <ul class="flex gap-10">
        <li>
          <RouterLink to="/">Trang chủ</RouterLink>
        </li>
        <li>
          <RouterLink to="/category">Danh mục</RouterLink>
        </li>
        <li>
          <a href="#">Danh mục</a>
        </li>
        <li>
          <a href="#">Giỏ hàng</a>
        </li>
      </ul>

      <ul class="flex gap-10">
        <li v-if="loginSuccess">
          {{ loginSuccess }}
          <button @click="handleLogout">Đăng xuất</button>
        </li>

        <template v-else>
          <li><RouterLink to="/register">Đăng kí</RouterLink></li>
          <li><RouterLink to="/login2">Đăng nhập</RouterLink></li>
        </template>
      </ul>
    </nav>
  </div>
</template>
