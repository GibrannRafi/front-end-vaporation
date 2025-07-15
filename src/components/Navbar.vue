<!-- src/components/Navbar.vue -->
<template>
  <div>
    <div class="bg-custom-pink text-center py-1 text-sm">
      <p class="font-playfair italic text-white">Where Every Puff Feels Like a Celebration.</p>
    </div>
    <nav class="bg-dark-black text-white">
      <div
        class="container mx-auto flex items-center justify-between py-4 border-b border-gray-800"
      >
        <div class="flex items-center space-x-4">
          <button class="text-white text-2xl md:hidden">&#9776;</button>
          <span class="font-playfair text-lg hidden md:block">PREMIUM VAPE STORE</span>
        </div>

        <div class="flex-shrink-0">
          <router-link to="/" class="block px-4 py-2 s" @click.native="isDropdownOpen = false">
            <img src="../assets/Logo.png" alt="Vaporation Logo" class="h-20 w-20" />
          </router-link>
        </div>

        <div class="flex items-center space-x-6">
          <button>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>

          <!-- Account Dropdown -->
          <div class="relative">
            <button @click="toggleDropdown" class="relative">
              <svg
                class="h-6 w-6 mt-1.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </button>

            <div
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-[#1a1a1a] rounded-xl border border-pink-500/40 shadow-lg shadow-pink-500/30 z-50 overflow-hidden"
            >
              <router-link
                to="/login"
                class="block px-4 py-3 text-white hover:bg-pink-600/20 transition-colors"
                @click.native="isDropdownOpen = false"
              >
                <div class="flex items-center space-x-2">
                  <svg
                    class="h-4 w-4 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 12H3m6 6l-6-6 6-6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Login</span>
                </div>
              </router-link>

              <router-link
                to="/register"
                class="block px-4 py-3 text-white hover:bg-pink-600/20 transition-colors"
                @click.native="isDropdownOpen = false"
              >
                <div class="flex items-center space-x-2">
                  <svg
                    class="h-4 w-4 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>Register</span>
                </div>
              </router-link>
            </div>
          </div>

          <button>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isDropdownOpen: false,
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    handleLogin() {
      console.log('Login clicked')
      this.isDropdownOpen = false
    },
    handleRegister() {
      console.log('Register clicked')
      this.isDropdownOpen = false
    },
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false
      }
    })
  },
}
</script>

<style scoped>
.bg-custom-pink {
  background-color: #e94e77; /* misalnya pink custom */
}
.bg-dark-black {
  background-color: #1a1a1a;
}
</style>
