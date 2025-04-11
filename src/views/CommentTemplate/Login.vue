<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['emailLogin'])

const user = reactive({
  email: '',
  password: '',
})

const loginsuccess = () => {
  emit('emailLogin', user.email)
}
</script>

<template>
  <form @submit.prevent="loginsuccess">
    <input v-model="user.email" placeholder="Email" />
    <input v-model="user.password" placeholder="Password" type="password" />

    <button @click="">Login</button>
  </form>
</template>
