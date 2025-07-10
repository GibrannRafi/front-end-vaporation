<template>
  <div id="app" class="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <ProductSection />
    <CategorySection />
    <TopProduct />
    <NewsProduct />

    <main class="p-4"></main>
  </div>
</template>

<script>
// Import semua komponen yang dibutuhkan
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductSection from './components/Card/ProductSection.vue'
import CategorySection from './components/CategorySection.vue'
import TopProduct from './components/Card/TopProduct.vue'
import NewsProduct from './components/NewsProduct.vue'

export default {
  name: 'App',
  components: {
    // Daftarkan semua komponen di sini
    Navbar,
    HeroSection,
    ProductSection,
    CategorySection,
    TopProduct,
    NewsProduct,
  },
}
</script>

<style>
/* Pastikan Anda sudah mengimpor file CSS utama jika ada */
@import '@/assets/main.css';

/* Style global lainnya bisa ditambahkan di sini */
body {
  background-color: #101010; /* Contoh background dari tailwind.config.js */
}
</style>
