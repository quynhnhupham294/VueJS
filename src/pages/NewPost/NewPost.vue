<script setup>
import Header from '@/views/HomeTemplate/components/Header.vue'
import { reactive } from 'vue'
import { items } from '@/Utils/post'
import router from '@/router'
import Footer from '@/views/HomeTemplate/components/Footer.vue'
// import { getEmail } from '@/hook/UseUser'

const emit = defineEmits(['add-post'])

const getEmail = localStorage.getItem('email')

const object = reactive({
  id: '',
  title: '',
  image: '',
  content: '',
  detail: '',
})

const randomId = Math.floor(Math.random() * 9000) + 1000

const addPost = () => {
  if (!getEmail) {
    router.push('/login')
    return
  }
  const newPost = {
    id: randomId,
    title: object.title,
    image: object.img,
    content: object.content,
    detail: object.detail,
  }
  console.log(newPost)

  const posted = items.push(newPost)
  // console.log(posted)

  // const posted2 = [...items, newPost] // ...items: bảo lưu các items cũ(ES6)
  // console.log(posted2)

  router.push('/')
}
</script>

<template>
  <Header />
  <div class="container mx-auto px-4">
    <form
      @submit.prevent="addPost"
      class="max-w-lg mx-auto mt-6 p-6 bg-gray-50 rounded-lg shadow-md"
    >
      <h1 class="text-center py-5">Đăng bài</h1>
      <input
        v-model="object.title"
        placeholder="Title"
        class="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      <input
        v-model="object.img"
        placeholder="Img"
        class="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      <input
        v-model="object.content"
        placeholder="Content"
        class="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      <input
        v-model="object.detail"
        placeholder="Detail"
        class="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      <button
        type="submit"
        class="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
      >
        Post
      </button>
    </form>
  </div>
  <Footer />
</template>
