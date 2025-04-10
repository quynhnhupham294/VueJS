<script setup>
import { reactive } from 'vue'
import Header from './Header.vue'

const emit = defineEmits(['add-post'])

const object = reactive({
  title: '',
  img: '',
  content: '',
  detail: '',
})

function post() {
  if (object.title && object.content && object.img) {
    const newPost = {
      title: object.title,
      img: object.img,
      content: object.content,
      detail: object.detail,
    }

    console.log(newPost)
    emit('add-post', newPost)
  }
}
</script>

<template>
  <Header />
  <div>
    <form>
      <input v-model="object.title" placeholder="Title" />
      <input v-model="object.img" placeholder="Img" />
      <input v-model="object.content" placeholder="Content" />
      <input v-model="object.detail" placeholder="Detail" />

      <button @click="post">Post</button>
    </form>
  </div>
</template>
