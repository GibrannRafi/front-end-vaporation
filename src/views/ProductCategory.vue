<template>
  <div class="min-h-screen bg-black text-white px-16 py-7">
    <nav class="flex items-center justify-between mb-6">
      <div class="text-center w-full">
        <p class="text-sm text-gray-400 italic mb-5">Home / Produk</p>
        <p class="font-semibold mt-5 mb-1">
          WARNING: This product contains nicotine. <br />
          Nicotine is an addictive chemical.
        </p>
      </div>
    </nav>

    <div class="flex justify-center border-b border-[#383636] pb-3 gap-3 mb-6">
      <div class="flex gap-8 items-center">
        <div
          class="bg-[#191919] pl-9 pt-4 rounded-tl-lg h-32 w-28 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 cursor-pointer duration-300"
        >
          <img :src="Mod" alt="Mod" class="w-10 h-15 mb-3" />
          <p class="text-sm ml-1 text-white italic">Mod</p>
        </div>
        <div
          class="bg-[#191919] pl-9 pt-4 rounded-tl-lg h-32 w-28 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 cursor-pointer duration-300"
        >
          <img :src="Pod" alt="Pod" class="w-10 h-15 mb-3" />
          <p class="text-sm text-white italic">Pod</p>
        </div>
        <div
          class="bg-[#191919] pl-6 pt-4 rounded-tl-lg h-32 w-28 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 cursor-pointer duration-300"
        >
          <img :src="Atomizer" alt="Atomizer" class="w-20 h-30 mb-5" />
          <p class="text-sm text-white italic">Atomizer</p>
        </div>
        <div
          class="bg-[#191919] pl-6 pt-4 rounded-tl-lg h-32 w-28 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 cursor-pointer duration-300"
        >
          <img :src="Accesoris" alt="Accesoris" class="w-20 h-30 items-center mb-5" />
          <p class="text-sm text-white italic">Accesoris</p>
        </div>
        <div
          class="bg-[#191919] pl-9 pt-4 rounded-tl-lg h-32 w-28 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 cursor-pointer duration-300"
        >
          <img :src="Liquid" alt="Liquid" class="w-10 h-15 mb-3" />
          <p class="text-sm text-white italic">Liquid</p>
        </div>
      </div>
    </div>

    <!-- PRICE dan SEARCH -->
    <div class="flex items-center space-x-4 p-6 rounded-lg mb-8">
      <!-- Dropdown  -->
      <div class="relative flex text-white">
        <select
          v-model="selectedPrice"
          class="bg-[#1a1a1a] text-gray-200 text-sm px-4 py-2 rounded-full border border-[#2c2c2c] appearance-none pr-10 focus:outline-none"
        >
          <option value="">Price</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <span class="pointer-events-none absolute right-3 bottom-2.5 text-gray-400 text-xs">
          ▼
        </span>
      </div>

      <!-- Input Search -->
      <div class="flex text-white w-full">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search..."
          class="bg-[#1a1a1a] text-white w-96 text-[10px] ml-[450px] px-6 py-3 rounded-full border-2 border-[#2b2b2b] focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>
    </div>

    <!-- PRODUCT GRID -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10 ml-5">
      <ProductCard
        v-for="(product, index) in filteredProducts"
        :key="index"
        :title="product.title"
        :description="product.description"
        :image="product.image"
        @click="goToDetail(product)"
      />
    </div>
    <!-- PAGINATION -->
    <div class="flex justify-center mt-6">
      <button class="px-3 py-1 mx-1 border rounded">&lt;</button>
      <button class="px-3 py-1 mx-1 border rounded bg-white text-black">1</button>
      <button class="px-3 py-1 mx-1 border rounded">&gt;</button>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/Landing/ProductCard.vue'
import Mod from '../assets/mod.png'
import Pod from '../assets/pod.png'
import Atomizer from '../assets/atomizer.png'
import Accesoris from '../assets/accesoris.png'
import Liquid from '../assets/liquid.png'
import PodAir from '../assets/pod-air.jpg'
import Acc1 from '../assets/pro-acc.png'
import Acc2 from '../assets/acc-2.png'
import Pod1 from '../assets/pod-1.png'
import Pod2 from '../assets/pod-2.png'
import Pod3 from '../assets/pod-3.png'
import Atom1 from '../assets/atom-1.png'
import Atom2 from '../assets/atom-2.png'
import Atom3 from '../assets/atom-3.png'
import Mod1 from '../assets/mod-1.png'
import Mod2 from '../assets/mod-2.png'
import Mod3 from '../assets/mode-3.png'
import Liq1 from '../assets/liq-1.png'
import Liq2 from '../assets/liq-2.png'
import Liq3 from '../assets/liq-3.png'

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      selectedPrice: '',
      searchQuery: '',
      Mod,
      Pod,
      Atomizer,
      Accesoris,
      Liquid,
      products: [
        {
          title: 'Pod Oxva Oneo',
          price: 'medium',
          image: Pod2,
          description: 'Pod praktis dengan performa solid dan desain elegan.',
        },
        {
          title: 'Accesoris Diy Kid V2',
          image: Acc2,
          price: 'high',
          description: 'Kit lengkap untuk kebutuhan DIY coil harian.',
        },
        {
          title: 'Accesoris Nitrous toolkit',
          price: 'medium',
          image: Acc1,
          description: 'Toolkit build coil premium untuk vapers serius.',
        },
        {
          title: 'Atomizer Stalk RDA V2',
          price: 'high',
          image: Atom1,
          description: 'Flavor mantap dan cloud besar dalam satu atomizer.',
        },

        // POD
        {
          title: 'Atomizer Nitrouse RDA V3',
          image: Atom2,
          price: 'low',
          description: 'Upgrade rasa dan uap maksimal, cocok untuk RDA fans.',
        },
        {
          title: 'Atomizer Nitrous RTA',
          image: Atom3,
          price: 'low',
          description: 'RTA ringan dengan rasa optimal dan build mudah.',
        },
        {
          title: 'Pod Boro POD Zulu',
          image: Pod3,
          price: 'low',
          description: 'Khasiat yang nikmat serta bergizi yoi yoi asik asik jos',
        },

        // LIQUID (MOD)
        {
          title: 'Vox MOD',
          image: Mod1,
          price: 'high',
          description: 'Rasa manis lembut, cocok buat santai. apalagi kalo jomblo beuh',
        },
        {
          title: 'MOD Hotcig R99',
          image: Mod2,
          price: 'medium',
          description: 'Campuran berry segar dengan dingin menyegarkan.',
        },
        {
          title: 'MOD Trml',
          image: Mod3,
          price: 'low',
          description: 'Menthol kuat yang bikin segar di tiap hisapan.',
        },

        // LIQUID
        {
          title: 'Liquid Bad Fellas V3',
          image: Liq1,
          price: 'low',
          description: 'Coil tahan lama dengan rasa maksimal. campuran alami khas jawa',
        },
        {
          title: 'Liquid Foom Fresh Mango',
          image: Liq2,
          price: 'medium',
          description: 'Pengisi daya cepat dan aman untuk semua device.',
        },
        {
          title: 'Liquid Zoo Tokyo Series',
          image: Liq3,
          price: 'low',
          description: 'Drip tip nyaman dan stylish untuk vape kamu.',
        },
        {
          title: 'Liquid Zoo Tokyo Series',
          image: Liq3,
          price: 'low',
          description: 'Drip tip nyaman dan stylish untuk vape kamu.',
        },
      ],
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesPrice = this.selectedPrice === '' || product.price === this.selectedPrice
        return matchesSearch && matchesPrice
      })
    },
  },
  methods: {
    goToDetail(product) {
      this.$router.push({
        name: 'ProductDetail',
        state: { product },
      })
    },
  },
}
</script>
