<script setup>
import { ref, computed } from 'vue'
// Impor komponen kartu produk. Pastikan path ini benar.
import ProductCard from './ProductCard.vue'

// --- DATA PRODUK ---
// Ini adalah data dummy. Nantinya, Anda bisa mengambil data ini dari API.
const allProducts = ref([
  {
    id: 1,
    name: 'Liquid penenang dapat mengatasi stress karena...',
    price: '737rb',
    imageUrl:
      'https://images.unsplash.com/photo-1594228803698-13233283c789?q=80&w=1974&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 2,
    name: 'Liquid untuk membuka angkringan tutup dong!?!',
    price: '1jt',
    imageUrl:
      'https://images.unsplash.com/photo-1611699291152-d52363435015?q=80&w=1974&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 3,
    name: 'Liquid Chll Vibe untuk santai sore hari',
    price: '737rb',
    imageUrl:
      'https://images.unsplash.com/photo-1608479339055-8851a69b7a54?q=80&w=1974&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 4,
    name: 'Liquid Creamy Pop rasa jagung bakar manis',
    price: '737rb',
    imageUrl:
      'https://images.unsplash.com/photo-1622521093593-3731835d0413?q=80&w=1974&auto=format&fit=crop',
    isNew: true,
  },
  {
    id: 5,
    name: 'Produk Kelima yang Mantap',
    price: '500rb',
    imageUrl: 'https://placehold.co/300x300/191919/ffffff?text=Produk+5',
    isNew: false,
  },
  {
    id: 6,
    name: 'Produk Keenam Paling Laris',
    price: '800rb',
    imageUrl: 'https://placehold.co/300x300/191919/ffffff?text=Produk+6',
    isNew: false,
  },
  {
    id: 7,
    name: 'Produk Ketujuh Edisi Terbatas',
    price: '950rb',
    imageUrl: 'https://placehold.co/300x300/191919/ffffff?text=Produk+7',
    isNew: false,
  },
  {
    id: 8,
    name: 'Produk Kedelapan Super Keren',
    price: '650rb',
    imageUrl: 'https://placehold.co/300x300/191919/ffffff?text=Produk+8',
    isNew: false,
  },
  {
    id: 9,
    name: 'Produk Kesembilan',
    price: '700rb',
    imageUrl: 'https://placehold.co/300x300/191919/ffffff?text=Produk+9',
    isNew: false,
  },
  {
    id: 10,
    name: 'Produk Kesepuluh Final',
    price: '1.2jt',
    imageUrl: 'https://placehold.co/300x300/191919/ffffff?text=Produk+10',
    isNew: false,
  },
])

// --- LOGIKA CAROUSEL/SLIDER ---
const itemsPerPage = ref(4) // Menampilkan 4 produk per halaman/slide
const currentPage = ref(1)

// Menghitung total halaman berdasarkan jumlah produk
const totalPages = computed(() => {
  return Math.ceil(allProducts.value.length / itemsPerPage.value)
})

// Memfilter produk mana yang akan ditampilkan di halaman saat ini
const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return allProducts.value.slice(start, end)
})

// Fungsi untuk pindah ke halaman berikutnya
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// Fungsi untuk pindah ke halaman sebelumnya
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<template>
  <!-- Kontainer utama dengan background 'dark-black' dan padding -->
  <div class="bg-dark-black text-white w-full py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header: Judul dan Tombol Navigasi -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold">Top Product</h2>

        <div class="flex items-center space-x-4">
          <!-- Indikator halaman -->
          <span class="text-gray-400 text-sm font-mono">{{ currentPage }} / {{ totalPages }}</span>

          <!-- Tombol Kembali (Previous) -->
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="p-2 rounded-full bg-card-black hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <!-- Tombol Maju (Next) -->
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="p-2 rounded-full bg-card-black hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Grid untuk menampilkan produk-produk -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>
