<template>
  <div class="min-h-screen bg-black text-white px-6 py-10">
    <div class="text-sm text-[#949090] italic font-semibold ml-[550px] mb-10">
      Home / Product / {{ product.title }}
    </div>

    <div class="grid md:grid-cols-2 w-full">
      <!-- Left: Image -->
      <img
        :src="product.image"
        alt="Product Image"
        class="w-[530px] h-[560px] rounded-lg shadow ml-48"
      />

      <!-- Right: Info -->
      <div class="w-[673px]">
        <div class="bg-[#191919] p-5 rounded-br-[71px] w-[673px]">
          <div class="flex items-center mb-2">
            <div class="text-pink-400 text-xl font-bold">★★★★★</div>
            <span class="text-sm ml-2">6 Review</span>
          </div>

          <h1 class="text-2xl font-bold mb-1">{{ product.title }}</h1>
          <p class="text-gray-400 line-through">Rp. 70.000</p>
          <p class="text-pink-500 font-bold text-xl mb-4">Rp. 50.000</p>

          <div class="mb-4">
            <p class="font-semibold">Pilih Varian</p>
            <div class="flex gap-2 mt-1">
              <button class="px-3 py-1 rounded bg-gray-700">10mg</button>
              <button class="px-3 py-1 rounded bg-gray-700">20mg</button>
            </div>
          </div>
        </div>

        <div class="flex gap-4 mb-4 mt-5 bg-[#191919] p-8 rounded-br-[71px]">
          <button
            class="bg-[#DB486D] text-white text-[14px] italic font-bold rounded-[28px] px-6 py-3"
          >
            Tambahkan ke Keranjang
          </button>
          <button
            class="bg-black text-white text-[14px] px-6 py-3 rounded border-4 border-[#DB486D] rounded-[28px]"
          >
            Beli Dengan 1 Klik
          </button>
          <button class="border px-4 py-1 rounded-full">🤍</button>
        </div>

        <div class="grid grid-cols-3 gap-4 text-center mt-6 bg-[#191919] p-5 rounded-br-[71px]">
          <div>
            <img :src="Gratis" alt="Gratis Ongkir" class="w-[65px] h-[69px] mx-auto mb-2" />
            <p class="text-sm">Gratis Pengiriman</p>
          </div>
          <div>
            <img :src="Cashback" alt="Cashback" class="w-[65px] h-[69px] mx-auto mb-2" />
            <p class="text-sm">Cashback 6%</p>
          </div>
          <div>
            <img :src="Express" alt="Express" class="w-[65px] h-[69px] mx-auto mb-2" />
            <p class="text-sm">Pengiriman Express</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="flex mt-10 border-b justify-center border-gray-700">
      <button class="px-4 py-2 border-b-2 border-pink-500 italic text-[20px] text-pink-500">
        Desc
      </button>
      <button class="px-4 py-2 italic text-[18px] text-gray-400">Review (4)</button>
    </div>

    <!-- Description -->
    <div class="mt-6 flex flex-col justify-center items-center">
      <h2 class="text-[30px] font-bold mb-16">{{ product.title }}</h2>
      <p class="w-[1172px]">
        {{ product.description }}
      </p>

      <!-- Flavor Profile -->
      <div class="bg-gray-900 rounded-lg flex gap-10 w-[680px] p-4 mt-20 w-fit">
        <img src="../assets/testi.png" alt="flavor" class="w-24 h-24 mt-5 ml-5" />
        <div class="">
          <div class="flex items-center justify-center gap-10">
            <p class="font-bold text-[32px] w-[100px]">ICE</p>
            <div class="flex flex-row gap-5 mb-2 mt-1">
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-10">
            <p class="font-bold text-[32px] w-[100px]">SWEET</p>
            <div class="flex flex-row gap-5 mb-2 mt-1">
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-10">
            <p class="font-bold text-[32px] w-[100px]">SOUR</p>
            <div class="flex flex-row gap-5 mb-2 mt-1">
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
              <div class="w-[52px] h-[10px] bg-pink-500 rounded-[28px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Gratis from '../assets/gratis.png'
import Cashback from '../assets/cashback.png'
import Express from '../assets/pengiriman.png'
import DetailFallback from '../assets/detail.png'

const route = useRoute()

const product = computed(() => {
  return (
    route?.state?.product || {
      title: 'Hayati Salts Bubblegum Ice Flavour',
      image: DetailFallback,
      price: 'medium',
      description: 'Rasa manis menyegarkan dengan sensasi dingin.',
    }
  )
})
</script>
