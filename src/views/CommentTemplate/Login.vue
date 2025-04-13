<script setup>
import { reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { FacebookOutlined, GoogleOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import InputCustom from '@/components/InputCustom.vue'
import dangkiImg from './../../assets/img/dangki.jpg'
import router from '@/router'

const route = useRoute()

console.log(route.path)

const emit = defineEmits(['emailLogin'])

const user = reactive({
  email: '',
  password: '',
})

const loginsuccess = () => {
  emit('emailLogin', user.email)
  if (route.path === '/login') {
    localStorage.setItem('email', user.email)
    router.push('/')
  } else {
    localStorage.setItem('email', user.email)
    router.push('/')
  }
}
</script>

<template>
  <!-- <form @submit.prevent="loginsuccess">
    <input v-model="user.email" placeholder="Email" />
    <input v-model="user.password" placeholder="Password" type="password" />

    <button @click="">Login</button>
  </form> -->

  <div class="min-h-screen bg-[#2C2638] px-4 md:px-20 py-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
      <div class="p-3">
        <img
          :src="dangkiImg"
          class="w-full h-[50vh] md:h-[96vh] object-cover rounded-lg"
          alt="Đăng ký"
        />
      </div>
      <div class="p-5 md:p-10">
        <form @submit.prevent="loginsuccess" class="text-white space-y-4">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <h2 class="text-2xl md:text-4xl font-bold">Welcome back</h2>
            <RouterLink
              to="/"
              class="flex items-center gap-2 mt-2 md:mt-0 text-gray-200 hover:text-white"
            >
              <LeftOutlined class="text-xs" /> Go home
            </RouterLink>
          </div>
          <p class="text-gray-200">
            Don’t have an account?
            <RouterLink to="/register" class="text-blue-400 hover:text-blue-500"
              >Register</RouterLink
            >
          </p>
          <div>
            <InputCustom
              v-model="user.email"
              placeholder="Nhập Email"
              customClass="my-2 py-3 bg-[#3C364C] border border-[#3C364C] text-white placeholder:text-gray-300"
            />
          </div>
          <div>
            <InputCustom
              v-model="user.password"
              placeholder="Nhập Password"
              is-password
              customClass="my-2 py-3 bg-[#3C364C] border border-[#3C364C] text-white placeholder:text-gray-300"
            />
          </div>
          <button type="submit" class="bg-[#6D54B5] px-5 py-3 rounded-lg w-full hover:bg-[#5a45a0]">
            Login
          </button>
        </form>
        <div class="text-gray-200 text-center py-5">Or Login with</div>
        <div class="grid grid-cols-2 gap-3">
          <Button
            class="flex items-center justify-center border border-gray-200 px-5 py-2 rounded-lg gap-2 text-white hover:bg-gray-700"
          >
            <GoogleOutlined /> Google
          </Button>
          <Button
            class="flex items-center justify-center border border-gray-200 px-5 py-2 rounded-lg gap-2 text-white hover:bg-gray-700"
          >
            <FacebookOutlined /> Facebook
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
