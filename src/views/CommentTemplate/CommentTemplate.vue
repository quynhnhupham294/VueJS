<script setup>
import Comment from './Comment.vue'
import { ref } from 'vue'
import Header from '../HomeTemplate/components/Header.vue'
import Footer from '../HomeTemplate/components/Footer.vue'
import Login from './Login.vue'
// import { getEmail } from '@/hook/UseUser'
const getEmail = localStorage.getItem('email')

const loginEmail = ref('')

const isActive = ref(true)

const handleLoginData = (email) => {
  loginEmail.value = email
  isActive.value = false
}
</script>
<template>
  <div v-if="!getEmail">
    <!-- "" -->
    <Login @emailLogin="handleLoginData" />
  </div>
  <div v-else>
    <Header :propsEmail="loginEmail" />
    <Comment :propsEmail="loginEmail" />
    <Footer />
  </div>
</template>
