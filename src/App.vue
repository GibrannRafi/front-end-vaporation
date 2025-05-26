<template>
  <div id="app" class="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <ProductSection />
    <main class="p-4"></main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue' // Import komponen HeroSection
import ProductSection from './components/Card/ProductSection.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    ProductSection,
  },
}
</script>

<style>
/* CSS global jika ada */
</style>
