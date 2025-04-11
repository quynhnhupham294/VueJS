<script setup>
import { ref } from 'vue'
import Footer from '../HomeTemplate/components/Footer.vue'
import Header from '../HomeTemplate/components/Header.vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { items } from '@/Utils/post'

const route = useRoute()

const props = defineProps({
  propsEmail: String,
})

const comment = ref([])

const inputComment = ref('')

const addComment = () => {
  comment.value.push({
    email: props.propsEmail,
    comment: inputComment.value,
  })
  inputComment.value = ''
}

const idPost = route.params.id

const post = items

const postDetail = ref({})

postDetail.value = post.find((item) => item.id === +idPost)

console.log(postDetail.value)
</script>

<template>
  <p>Xin chao: {{ propsEmail }}</p>
  <main class="max-w-7xl mx-auto flex gap-8 pt-4 px-4">
    <!-- Col-8 -->
    <div class="w-2/3 border-2 rounded-lg bg-gray-100 p-4">
      <div>
        <h3 class="text-teal-500 text-center text-2xl font-bold mb-4">
          Title{{ postDetail.title }}
        </h3>
        <h4 class="text-xl font-semibold mb-3">{{ postDetail.title }}</h4>
        <img class="w-full rounded-md mb-3" :alt="postDetail.alt" :src="postDetail.image" />
        <span class="block text-gray-700 mb-4">{{ postDetail.content }}</span>
        <p>Detail: {{ postDetail.detail }}</p>
      </div>
    </div>

    <!-- Col-4 -->
    <div class="w-1/3 border-2 rounded-lg bg-gray-100 p-4">
      <div>
        <h4 class="text-xl font-semibold mb-3">Bình luận bài viết tại đây</h4>
        <textarea
          v-model="inputComment"
          name="comment"
          class="w-full border rounded-md p-2 mb-3 text-gray-700 placeholder-gray-400"
          placeholder="Nhập bình luận của bạn"
        ></textarea>
        <button
          type="button"
          class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          @click="addComment"
        >
          Gửi bình luận
        </button>
      </div>
      <hr class="my-4" />
      <div>
        <h5 class="text-lg font-medium mb-2">Danh sách các bình luận</h5>
        <ul class="list-disc pl-5">
          <li v-for="(item, index) in comment" :key="index">
            <b class="font-bold">{{ item.email }}: </b>{{ item.comment }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
