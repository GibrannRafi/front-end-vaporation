<script setup>
import { ref } from 'vue'

import Carousel1 from '@/assets/carousel-1.png'
import Carousel2 from '@/assets/carousel-2.png'

const activeIndex = ref(0)

const newsItems = ref([
  {
    title: 'Ini liquid yang katanya bakal keluar 2 tahun lg',
    imageUrl: Carousel1,
  },
  {
    title: 'Ini liquid yang katanya bakal keluar 2 tahun lg',
    imageUrl: Carousel2,
  },
  // Anda bisa menambahkan item berita lain di sini
  {
    title: 'Promo Terbatas: Beli 2 Gratis 1',
    imageUrl:
      'https://images.unsplash.com/photo-1622521093593-3731835d0413?q=80&w=1974&auto=format&fit=crop',
  },
])

// Fungsi untuk mengganti slide
const goToSlide = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <!-- Kontainer utama dengan background gelap -->
  <div class="bg-dark-black text-white w-full py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Judul Section -->
      <h2 class="text-3xl font-bold mb-8">News Product</h2>

      <!-- Kontainer Slider -->
      <div class="relative w-full overflow-hidden">
        <!-- Wrapper untuk semua slide, bergerak menggunakan transform -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <!-- Loop untuk setiap item berita -->
          <div v-for="(item, index) in newsItems" :key="index" class="w-full flex-shrink-0">
            <!-- Kartu Berita -->
            <div class="relative h-80 rounded-lg overflow-hidden cursor-pointer group">
              <!-- Gambar Latar Belakang -->
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
              <!-- Overlay Gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
              ></div>
              <!-- Judul Berita -->
              <h3
                class="absolute bottom-6 left-6 text-white text-2xl font-bold max-w-md leading-tight"
              >
                {{ item.title }}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigasi Titik (Pagination Dots) -->
      <div class="flex justify-center items-center space-x-3 mt-6">
        <button
          v-for="(item, index) in newsItems"
          :key="`dot-${index}`"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="[activeIndex === index ? 'bg-custom-pink' : 'bg-gray-600 hover:bg-gray-500']"
        ></button>
      </div>
    </div>
  </div>
</template>
