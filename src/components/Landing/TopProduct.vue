<template>
  <section class="bg-dark-black text-white py-16 px-4 sm:px-8 lg:px-16">
    <div class="container mx-auto flex items-center justify-between mb-8">
      <h2 class="text-3xl md:text-4xl font-bold">Top Product</h2>
      <div class="flex items-center space-x-4 text-gray-400">
        <button class="hover:text-white transition duration-200">
          <svg
            class="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <span class="text-lg">1 / 10</span>
        <button class="hover:text-white transition duration-200">
          <svg
            class="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <router-link to="/product">
      <div
        class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <ProductCard
          :image="product1Image"
          title="ChillNation - Chill Vibe"
          description="Vanilla creamy dengan sensasi dingin yang halus."
          :sold-count="731"
          :is-new="true"
        />
        <ProductCard
          :image="product2Image"
          title="Liquid Fresh Mango Series"
          description="Manga manis berpadu dingin yang menyegarkan."
          :sold-count="1"
          :is-new="true"
        />
        <ProductCard
          :image="product3Image"
          title="MOD Hotcig R99"
          description="Sensasi seperti di udara melayang dengan kenikmatan mod ini"
          :sold-count="731"
          :is-new="true"
        />
        <ProductCard
          :image="product4Image"
          title="Accesoris Diy Kit"
          description="Harga terjangkau murah dan yang pasti awet tahan lama untuk vape"
          :sold-count="731"
          :is-new="true"
        />
      </div>
    </router-link>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'
// Impor gambar-gambar produk Anda di sini
import product1Image from '../../assets/yeaa.png' // Sesuaikan path dan nama file
import product2Image from '../../assets/liq-2.png'
import product3Image from '../../assets/mod-2.png'
import product4Image from '../../assets/pro-acc.png'

export default {
  name: 'ProductSection',
  components: {
    ProductCard,
  },
  setup() {
    return {
      product1Image,
      product2Image,
      product3Image,
      product4Image,
    }
  },
}
</script>

<style scoped>
/* style CSS lainnya */
</style>
