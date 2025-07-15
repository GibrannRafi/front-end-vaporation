<template>
  <footer class="bg-[#101010] text-white py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-24 lg:gap-16">
        <!-- KATALOG Section -->
        <div class="flex-1">
          <h3 class="text-xl font-bold mb-6 text-white">KATALOG</h3>
          <div class="flex flex-col gap-x-8 gap-y-3">
            <a href="#" class="text-[#767676] hover:text-white transition-colors">POD</a>
            <a href="#" class="text-[#767676] hover:text-white transition-colors">Mod</a>
            <a href="#" class="text-[#767676] hover:text-white transition-colors">Cartridge</a>
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Liquid Freebase</a
            >
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Liquid Salt Nic</a
            >
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Tools / Alat Perawatan</a
            >
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Coil / Atomizer</a
            >
          </div>
        </div>

        <!-- CUSTOMER Section -->
        <div class="flex-1">
          <h3 class="text-xl font-bold mb-6 text-white">CUSTOMER</h3>
          <div class="flex flex-col gap-x-8 gap-y-3">
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Metode Pembayaran</a
            >
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Pengiriman & Ongkir</a
            >
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Kebijakan Pengembalian</a
            >
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Syarat & Ketentuan</a
            >
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Kebijakan Privasi</a
            >
            <a href="#" class="text-[#767676] hover:text-white transition-colors">Lacak Pesanan</a>
            <a href="#" class="text-[#767676] hover:text-white transition-colors"
              >Testimoni Pelanggan</a
            >
          </div>
        </div>

        <!-- Contact Section -->
        <div class="flex-1">
          <div class="mb-6">
            <div class="flex gap-2">
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Your Email"
                class="flex-1 p-3 bg-[#101010] text-white border-b border-gray-700 rounded focus:outline-none focus:border-pink-500"
              />
              <button
                @click="handleSubmit"
                class="px-4 py-2 bg-pink-500 text-sm text-white rounded hover:bg-pink-600 transition-colors"
              >
                Send
              </button>
            </div>
          </div>

          <p class="text-[#767676] text-sm mb-6">
            Langganan untuk mendapatkan berita terbaru, promo spesial, dan produk baru dari toko
            kami.
          </p>

          <!-- Social Media Icons -->
          <div class="flex space-x-4 mb-6">
            <!-- Facebook -->
            <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3H14v7A10 10 0 0022 12z"
                />
              </svg>
            </div>

            <!-- Instagram -->
            <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.3 3 3v10c0 1.6-1.3 3-3 3H7c-1.6 0-3-1.3-3-3V7c0-1.6 1.3-3 3-3h10zM12 7c-2.8 0-5 2.3-5 5s2.2 5 5 5 5-2.3 5-5-2.2-5-5-5zm0 2c1.7 0 3 1.4 3 3s-1.3 3-3 3-3-1.4-3-3 1.3-3 3-3zm4.5-2c-.4 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.3-.8-.8-.8z"
                />
              </svg>
            </div>

            <!-- Twitter -->
            <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </div>
          </div>

          <div class="space-y-2 text-gray-400 text-sm">
            <p>Jam Operasional: Senin - Jumat 10:00 - 22:00</p>
            <p>Hubungi Email Kami:</p>
            <p class="text-white">Vaporations@technovepe</p>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-700">
        <p class="text-gray-400 text-sm">© 2025 Mager Squad. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'VapeFooter',
  data() {
    return {
      email: '',
    }
  },
  methods: {
    handleSubmit() {
      // Handle email submission here
      console.log('Email submitted:', this.email)
      this.email = ''
    },
  },
}
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
