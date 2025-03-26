<script setup>
import { FacebookOutlined, GoogleOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import { RouterLink } from 'vue-router'
import InputCustom from '@/components/InputCustom.vue'
import { ref } from 'vue'

import dangkiImg from '../assets/img/dangki.jpg'
import router from '@/router'

const isLogin = ref(false)

const object = ref({
  email: '',
  password: '',
})

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const login = () => {
  if (!object.value.email) {
    // alert('Vui lòng nhập Email')
  } else if (!emailRegex.test(object.value.email)) {
    // alert('Email không hợp lệ! Vui lòng nhập lại')
  }

  if (!object.value.password) {
    // alert('Vui lòng nhập mật khẩu')
  }

  const data = JSON.parse(localStorage.getItem('Data'))

  if (object.value.email && object.value.password) {
    if (data.email === object.value.email && data.password === object.value.password) {
      localStorage.setItem('Email', JSON.stringify(object.value.email))
      router.push('/')
      alert('Đăng nhập thành công')
      console.log('Đăng nhập thành công:', {
        email: object.value.email,
        password: object.value.password,
      })
    } else {
      alert('Tài khoản không đúng hoặc k tồn tại!')
    }
  }
}

// console.log(account)
</script>

<template>
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
        <form v-on:submit.prevent="login" class="text-white space-y-4">
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
              v-model="object.email"
              placeholder="Nhập Email"
              customClass="my-2 py-3 bg-[#3C364C] border border-[#3C364C] text-white placeholder:text-gray-300"
            />
          </div>
          <div>
            <InputCustom
              v-model="object.password"
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
  <!-- <div v-else class="min-h-screen flex items-center justify-center bg-[#2C2638] text-white">
    <h2 class="text-2xl">Đăng nhập thành công! {{ email }}</h2>
  </div> -->
</template>
<style scoped>
.InputCustom {
  background-color: #3c364c;
}

.InputCustom::placeholder {
  color: #fff !important;
}
</style>
