<script setup>
import Login from './Login.vue'
import Comment from './Comment.vue'
import { ref } from 'vue'
import Header from '../HomeTemplate/components/Header.vue'
import Footer from '../HomeTemplate/components/Footer.vue'

const loginEmail = ref('')

const isActive = ref(true)

const handleLoginData = (email) => {
  loginEmail.value = email
  isActive.value = false
}
</script>
<template>
  <div v-if="isActive">
    <Login @emailLogin="handleLoginData" />
  </div>
  <div v-else="!isActive">
    <Header />
    <Comment :propsEmail="loginEmail" />
    <Footer />
  </div>
</template>
