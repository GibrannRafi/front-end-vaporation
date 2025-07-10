<script setup>
import { ref } from 'vue'

// Data untuk setiap kartu kategori.
// Ganti URL gambar dengan path yang benar dari folder `src/assets` atau URL eksternal.
// Contoh jika gambar ada di assets: import hexommImage from '@/assets/hexomm.jpg';
const categories = ref([
  {
    title: 'Hexomm Rigidbody',
    // Ganti dengan path gambar Anda
    imageUrl:
      'https://images.unsplash.com/photo-1588340578485-74cde6453298?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Pod Oxva Angker',
    // Ganti dengan path gambar Anda
    imageUrl:
      'https://images.unsplash.com/photo-1612811333999-a9045ddac82f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Liquid Makna J6x V3',
    // Ganti dengan path gambar Anda
    imageUrl:
      'https://images.unsplash.com/photo-1622521093593-3731835d0413?q=80&w=1974&auto=format&fit=crop',
  },
])
</script>

<template>
  <!-- Kontainer utama dengan background gelap dan padding -->
  <div class="bg-dark-black w-full py-10 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Judul "KATEGORI" -->
      <h2 class="text-3xl font-bold text-white text-center mb-8 tracking-wider uppercase">
        Kategori
      </h2>

      <!-- Grid untuk kartu-kartu kategori -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loop melalui data kategori -->
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="relative h-80 rounded-lg overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-custom-pink/20"
        >
          <!-- Gambar Latar Belakang -->
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            :style="{ backgroundImage: `url(${category.imageUrl})` }"
          ></div>

          <!-- Overlay Gradient untuk membuat teks lebih terbaca -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          ></div>

          <!-- Konten Teks di bagian bawah kartu -->
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <h3 class="text-white text-2xl font-semibold">
              {{ category.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Kita bisa menambahkan style tambahan di sini jika diperlukan,
   tetapi sebagian besar sudah ditangani oleh Tailwind CSS. */
</style>
