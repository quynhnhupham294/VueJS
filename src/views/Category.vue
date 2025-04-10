<script setup>
import { ref } from 'vue'

import img1 from '../assets/img/img01.png'
import img2 from '../assets/img/img02.png'
import img3 from '../assets/img/img03.png'
import Header from './Header.vue'
import Footer from './Footer.vue'

const items = ref([
  {
    title: 'Tái chế rác thải sinh hoạt',
    image: img1,
    content: 'Phân loại rác thải để tái sử dụng...',
    detail:
      'Hướng dẫn cách phân loại rác thành rác hữu cơ, rác tái chế và rác không tái chế để bảo vệ môi trường.',
  },
  {
    title: 'Sử dụng túi vải thay túi nilon',
    image: img2,
    content: 'Giảm thiểu rác thải nhựa...',
    detail:
      'Túi vải không chỉ bền mà còn thân thiện với môi trường, giúp giảm lượng rác nhựa khó phân hủy.',
  },
  {
    title: 'Tiết kiệm nước trong sinh hoạt',
    image: img3,
    content: 'Những cách đơn giản để tiết kiệm nước...',
    detail:
      'Tắt vòi khi không dùng, sửa chữa rò rỉ, và tái sử dụng nước mưa là các cách hiệu quả để tiết kiệm tài nguyên.',
  },
  {
    title: 'Tiết kiệm nước trong sinh hoạt',
    image: img3,
    content: 'Những cách đơn giản để tiết kiệm nước...',
    detail:
      'Tắt vòi khi không dùng, sửa chữa rò rỉ, và tái sử dụng nước mưa là các cách hiệu quả để tiết kiệm tài nguyên.',
  },
])

const selectedItem = ref(null)

const showDetail = (index) => {
  selectedItem.value = items.value[index]
}
</script>

<template>
  <Header />
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-6">Kiến thức sức khỏe cộng đồng</h2>

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
          <button
            @click="showDetail(index)"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Xem chi tiết
          </button>
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

  <Footer />
</template>
