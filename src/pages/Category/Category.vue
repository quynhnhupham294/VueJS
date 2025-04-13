<script setup>
import { ref } from 'vue'
import { items } from '@/Utils/post'

const selectedItem = ref(null)

const showDetail = (index) => {
  selectedItem.value = items.value[index]
}
</script>

<template>
  <!-- <Header /> -->
  <div class="container mx-auto px-20">
    <!-- List items -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div class="h-[300px] overflow-hidden">
          <img :src="item.image" class="w-full h-full object-cover" />
        </div>
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 mb-4">{{ item.content }}</p>
          <RouterLink
            :to="`/category/comment/${item.id}`"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >Xem chi tiết</RouterLink
          >
          <!-- <button
            @click="showDetail(item.id)"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Xem chi tiết
          </button> -->
        </div>
      </div>
    </div>

    <!-- Detail -->
    <div class="mt-8" v-if="selectedItem">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold mb-4">{{ selectedItem.title }}</h2>
        <p class="text-gray-700">{{ selectedItem.detail }}</p>
      </div>
    </div>
  </div>

  <!-- <Footer /> -->
</template>
