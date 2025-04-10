<script setup>
import { Button, Input } from 'ant-design-vue'
import { FacebookOutlined, GoogleOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { RouterLink } from 'vue-router'
import InputCustom from '@/components/InputCustom.vue'
import { reactive, ref } from 'vue'
import router from '@/router'

const object = reactive({
  fullName: '',
  email: '',
  password: '',
})

const register = () => {
  console.log(object)
  if (object.fullName === '' || object.email === '' || object.password === '') {
    alert('Vui lòng nhập đầy đủ thông tin!')
    return
  } else {
    const data = {
      name: object.fullName,
      email: object.email,
      password: object.password,
    }
    localStorage.setItem('Data', JSON.stringify(data))

    router.push('/login')
  }
}
</script>

<template>
  <div class="grid grid-cols-2 gap-5 bg-[#2C2638] px-20">
    <div class="p-3">
      <img
        src="../assets/img/dangki.jpg"
        class="w-full h-[96vh] object-cover rounded-s-lg"
        alt=""
      />
    </div>
    <div class="p-10">
      <form v-on:submit.prevent="register" class="text-white space-y-3">
        <div class="flex justify-between items-center">
          <h2 class="text-4xl">Create an account</h2>
          <RouterLink to="/" class="flex items-center gap-2">
            <LeftOutlined class="text-xs" /> Go home
          </RouterLink>
        </div>
        <p class="text-gray-200">
          Already have an account? <RouterLink to="/login">Login</RouterLink>
        </p>
        <InputCustom
          v-model="object.fullName"
          placeholder="Nhập Họ Và Tên"
          class="!py-3 !bg-[#3C364C] border !border-[#3C364C] !text-white"
        />
        <InputCustom
          v-model="object.email"
          placeholder="Nhập Email"
          class="!my-5 !py-3 !bg-[#3C364C] border !border-[#3C364C] !text-white"
        />
        <InputCustom
          v-model="object.password"
          is-password
          placeholder="Nhập Password"
          class="!my-5 !py-3 !bg-[#3C364C] border !border-[#3C364C] !text-white"
        />
        <div>
          <button class="bg-[#6D54B5] px-5 py-3 mt-1 rounded-lg w-full">Create account</button>
        </div>
      </form>
      <div class="text-gray-200 text-center py-5">Or register with</div>
      <div class="grid grid-cols-2 gap-3 !text-white">
        <Button
          class="flex items-center justify-center border border-gray-200 px-5 py-2 rounded-lg gap-2"
        >
          <GoogleOutlined /> Google
        </Button>
        <Button
          class="flex items-center justify-center border border-gray-200 px-5 py-2 rounded-lg gap-2"
        >
          <FacebookOutlined /> Facebook
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ant-input {
  background-color: #3c364c !important;
}

.ant-input::placeholder {
  color: #fff !important;
}
</style>
