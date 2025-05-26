<template>
  <section class="relative bg-dark-black text-white py-16 md:py-24 overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    ></div>

    <div
      class="container mx-auto relative z-5 flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 lg:px-16"
    >
      <div class="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <div class="inline-block bg-[#DB107A] w-[328px] h-[40px] px-4 py-1 mb-4 rounded-full">
          <p class="uppercase text-lg text-black text-center font-bold">MOST POPULAR DEVICE!!</p>
        </div>
        <h1 class="text-5xl font-extrabold text-[#FFB1E0] italic mb-4">VAPE SHOP</h1>
        <h1 class="text-5xl ml-24 font-extrabold text-[#FFB1E0] italic mb-4">CLOUD HOME</h1>
        <p class="text-[#FFFEFE] text-lg mb-8 max-w-lg mx-auto md:mx-0 italic">
          Temukan perangkat vape inovatif dengan <br />
          desain modern dan performa optimal.
        </p>
        <button
          class="bg-[#101010] border border-custom-pink ml-24 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300 ease-in-out"
        >
          Lihat Produk
        </button>
      </div>

      <div class="w-full md:w-1/2 flex justify-center md:justify-end md:self-start">
        <img
          :src="vapeProductsImage"
          alt="Vape Products"
          class="max-h-96 md:max-h-full object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script>
import bgImage from '../assets/bg_vape.png'
import vapeProductsImage from '../assets/vape_product.png' // Impor gambar produk juga

export default {
  name: 'HeroSection',
  setup() {
    return {
      bgImage,
      vapeProductsImage, // Sediakan variabel untuk gambar produk
    }
  },
}
</script>

<style scoped>
/* style CSS lainnya */
</style>
