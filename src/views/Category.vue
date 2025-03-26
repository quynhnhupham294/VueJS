<script setup>
import { ref } from 'vue'

import img1 from '../assets/img/img01.png'
import img2 from '../assets/img/img02.png'
import img3 from '../assets/img/img03.png'
import Header from './Header.vue'

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
  <div>
    <h2>Kiến thức sức khỏe cộng đồng</h2>

    <!-- List items -->
    <div>
      <div v-for="(item, index) in items" :key="index">
        <div style="height: 300px; object-fit: cover; overflow: hidden">
          <img :src="item.image" class="w-100" />
        </div>
        <div class="p-3">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
          <button @click="showDetail(index)">Xem chi tiết</button>
        </div>
      </div>
    </div>

    <!-- Detail -->
    <div>
      <div v-if="selectedItem">
        <h2>{{ selectedItem.title }}</h2>
        <p>{{ selectedItem.detail }}</p>
      </div>
    </div>
  </div>
</template>
