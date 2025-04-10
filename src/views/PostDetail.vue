<script setup>
import { ref } from 'vue'
import Header from './Header.vue'

import img1 from '../assets/img/tap-pilates1.jpg'
import img2 from '../assets/img/tap-piltes.jpg'
import Footer from './Footer.vue'

// Dữ liệu reactive
const newComment = ref('')
const comments = ref(['Bài viết rất hữu ích', 'Bài viết rất hữu ích'])
const postSections = ref([
  {
    title: 'Phương pháp tập Pilates giúp phục hồi chấn thương cột sống',
    image: img1,
    alt: 'Pilates exercise',
    content:
      'Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai cho người tập. Đặc biệt, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn thương cột sống. Sau đây hãy cùng tìm hiểu các phương pháp tập luyện này giúp phục hồi chấn thương cột sống nhanh chóng nhé!',
  },
  {
    title: 'Pilates giúp phục hồi chấn thương cột sống nhanh chóng',
    content:
      'Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn phòng, đó là đau lưng, thoát vị đĩa đệm. Tuy nhiên, nếu điều trị không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm, bao gồm: Ví dụ, điều trị bằng laser không đúng cách hoặc tập yoga không đúng cách có thể khiến bệnh nhân nằm liệt giường.',
  },
  {
    title: 'Phương pháp tập Pilates Cat Cow',
    image: img2,
    alt: 'Cat Cow exercise',
    content: 'Các bước thực hiện:',
    steps: [
      'Bắt đầu với tư thế 4 điểm. Vai và cổ tay của bạn phải thẳng hàng và vuông góc với thảm, lưng của bạn phải bằng phẳng và xương chậu của bạn phải cân đối.',
      'Hít vào, võng lưng, nâng cằm lên, mở rộng ngực.',
      'Thở ra, cong xương cụt, nâng cong lưng và đưa cằm về gần khoang ngực',
      'Lặp đi lặp lại động tác từ 5-7 lần.',
    ],
  },
  {
    title: 'Lời kết',
    content:
      'Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng. Để đạt được kết quả tập luyện như mong muốn, bạn cần duy trì chế độ tập luyện đều đặn, thực hiện đúng động tác, kết hợp cùng chế độ ăn uống khoa học.',
  },
])

const addComment = () => {
  if (newComment.value.trim()) {
    comments.value.push(newComment.value)
    newComment.value = ''
  }
}
</script>

<template>
  <Header />
  <main class="max-w-7xl mx-auto flex gap-8 pt-4 px-4">
    <!-- Col-8 -->
    <div class="w-2/3 border-2 rounded-lg bg-gray-100 p-4">
      <div v-for="(section, index) in postSections" :key="index">
        <h3
          v-if="section.title && index === 0"
          class="text-teal-500 text-center text-2xl font-bold mb-4"
        >
          {{ section.title }}
        </h3>
        <h4 v-else-if="section.title" class="text-xl font-semibold mb-3">{{ section.title }}</h4>
        <img
          v-if="section.image"
          :src="section.image"
          class="w-full rounded-md mb-3"
          :alt="section.alt"
        />
        <span v-if="section.content" class="block text-gray-700 mb-4">{{ section.content }}</span>
        <ul v-if="section.steps" class="list-disc pl-5 mb-4">
          <li v-for="(step, stepIndex) in section.steps" :key="stepIndex" class="text-gray-700">
            {{ step }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Col-4 -->
    <div class="w-1/3 border-2 rounded-lg bg-gray-100 p-4">
      <div>
        <h4 class="text-xl font-semibold mb-3">Bình luận bài viết tại đây</h4>
        <textarea
          v-model="newComment"
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
          <li v-for="(comment, index) in comments" :key="index">
            <b class="font-bold">Như Quỳnh: </b>{{ comment }}
          </li>
        </ul>
      </div>
    </div>
  </main>
  <Footer />
</template>
