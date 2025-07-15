<!-- src/views/Login.vue -->
<template>
  <div
    class="min-h-screen flex items-center justify-center bg-black"
    :style="`background-image: url('${bgImage}'); background-size: cover; background-position: center;`"
  >
    <div class="bg-[#191919] p-16 rounded-3xl w-full max-w-lg text-white shadow-lg space-y-6">
      <h2 class="text-center text-2xl font-bold italic mb-14">Welcome Cloud Lovers!</h2>

      <!-- Email -->
      <div class="space-y-1 mt-10">
        <div
          class="flex items-center border-b border-gray-500 focus-within:border-pink-500 space-x-2"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75
              m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25
              m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615
              a2.25 2.25 0 0 1-2.36 0L3.32 8.91
              a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="email"
            placeholder="Your email"
            class="bg-transparent outline-none w-full py-2 text-sm text-white placeholder-gray-400"
          />
        </div>
      </div>

      <!-- Password -->
      <div class="space-y-1">
        <div
          class="flex items-center border-b border-gray-500 focus-within:border-pink-500 space-x-2"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            class="bg-transparent outline-none w-full py-2 text-sm text-white placeholder-gray-400"
          />
        </div>
        <div class="flex justify-end text-xs pt-1">
          <router-link to="/register" class="text-[#BEBEBE] hover:underline"
            >Forgot Password?</router-link
          >
        </div>
      </div>

      <!-- Tombol Login -->
      <button
        class="block mx-auto w-fit px-14 py-2 text-xs sm:text-sm md:text-base border-2 border-pink-500 rounded-full hover:bg-pink-500 hover:text-black transition-all"
      >
        Login
      </button>

      <!-- Google Login -->
      <button
        class="w-full flex items-center justify-center gap-2 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          class="w-5 h-5"
          alt="Google logo"
        />
        Login with Google
      </button>

      <!-- Atau -->
      <div class="flex items-center justify-center text-gray-400 text-sm">
        <span class="border-t border-gray-600 flex-grow mr-2"></span>
        Or
        <span class="border-t border-gray-600 flex-grow ml-2"></span>
      </div>

      <!-- Facebook Login -->
      <button
        class="w-full flex items-center justify-center gap-2 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path
            d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.404.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413
            c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001
            c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116
            C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"
          />
        </svg>
        Login with Facebook
      </button>
    </div>
  </div>
</template>

<script setup>
import bgImage from '@/assets/bg-login.jpg' // pastikan file ini ada
</script>

<style scoped></style>
