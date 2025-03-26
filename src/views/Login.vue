<script setup>
import InputCustom from '@/components/InputCustom.vue'
import { ref } from 'vue'
import { Button } from 'ant-design-vue'

const isLogin = ref(false)
const email = ref('')
const password = ref('')

const emailError = ref('')
const passwordError = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const login = () => {
  emailError.value = ''
  passwordError.value = ''

  if (!email.value) {
    emailError.value = 'Vui lòng nhập Email'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Email không hợp lệ! Vui lòng nhập lại'
  }

  if (!password.value) {
    passwordError.value = 'Vui lòng nhập mật khẩu'
  }

  if (!emailError.value && !passwordError.value) {
    isLogin.value = true
    console.log('Đăng nhập thành công:', {
      email: email.value,
      password: password.value,
    })
  }
}
</script>

<template>
  <div v-if="!isLogin">
    <form @submit.prevent="login">
      <h2>Form đăng nhập</h2>
      <div>
        <InputCustom v-model="email" placeholder="Email" />
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>
      <div>
        <InputCustom v-model="password" placeholder="Password" is-password />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>
      <Button type="primary" html-type="submit">Đăng nhập</Button>
    </form>
  </div>
  <div v-else>
    <h2>Đăng nhập thành công! {{ email }}</h2>
  </div>
</template>
