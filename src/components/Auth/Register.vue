<template>
  <div
    class="min-h-screen flex items-center justify-center bg-black"
    :style="`background-image: url('${bgImage}'); background-size: cover; background-position: center;`"
  >
    <div
      class="bg-[#191919] p-8 md:p-16 rounded-3xl w-full max-w-md md:max-w-xl text-white shadow-lg space-y-6"
    >
      <h2 class="text-center text-2xl md:text-3xl font-extrabold italic">
        Daftar Akun Cloud Lovers!
      </h2>
      <p class="text-center text-sm text-[#BEBBBB]">
        Isi semua kolom dengan benar supaya kami
        <br />bisa menyambutmu dengan baik!
      </p>

      <form class="space-y-5">
        <div
          class="flex items-center border-b border-gray-500 focus-within:border-pink-500 space-x-3"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0v.75H4.5v-.75z"
            />
          </svg>
          <input
            type="text"
            placeholder="Name"
            class="bg-transparent outline-none w-full py-2 text-sm placeholder-gray-400"
          />
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
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        <div
          class="flex items-center border-b border-gray-500 focus-within:border-pink-500 space-x-3"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75M21.75 6.75a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91A2.25 2.25 0 012.25 6.993V6.75"
            />
          </svg>
          <input
            type="email"
            placeholder="Email"
            class="bg-transparent outline-none w-full py-2 text-sm placeholder-gray-400"
          />
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
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        <div
          class="flex items-center border-b border-gray-500 focus-within:border-pink-500 space-x-3"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75C2.25 4.679 3.929 3 6 3h12c2.071 0 3.75 1.679 3.75 3.75v10.5A3.75 3.75 0 0118 21H6a3.75 3.75 0 01-3.75-3.75V6.75zm3 0a.75.75 0 01.75-.75h12a.75.75 0 01.75.75v.75l-7.5 4.5-7.5-4.5V6.75z"
            />
          </svg>
          <input
            type="text"
            placeholder="Telp number"
            class="bg-transparent outline-none w-full py-2 text-sm placeholder-gray-400"
          />
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
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        <div
          class="flex items-center border-b border-gray-500 focus-within:border-pink-500 space-x-3"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5v-1.125A4.125 4.125 0 0012.375 5.25h-.75A4.125 4.125 0 007.5 9.375V10.5M4.5 10.5h15a1.5 1.5 0 011.5 1.5v7.5A1.5 1.5 0 0119.5 21h-15a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5z"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            class="bg-transparent outline-none w-full py-2 text-sm placeholder-gray-400"
          />
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
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>

        <router-link>
          <button
            class="block mx-auto w-fit px-10 py-2 mt-12 mb-12 text-xs sm:text-sm md:text-base border-2 border-pink-500 rounded-full hover:bg-pink-500 hover:text-black transition-all"
          >
            Register
          </button>
        </router-link>
      </form>

      <p class="text-center text-sm text-gray-400">
        Or you have an account?
        <router-link to="/login" class="text-pink-500 font-semibold hover:underline"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import bgImage from '@/assets/bg-login.jpg'
</script>

<style scoped></style>
