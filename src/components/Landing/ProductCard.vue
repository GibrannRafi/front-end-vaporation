<template>
  <div
    class="bg-card-black w-[283px] h-[393px] rounded-[20px] px-[10] overflow-hidden shadow-lg p-4 pt-8 relative transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500"
  >
    <span
      v-if="isNew"
      class="absolute top-8 left-9 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-tl-[20px] z-10"
      >New</span
    >
    <button class="absolute top-6 right-7 text-gray-400 hover:text-white transition duration-200">
      <svg
        class="h-6 w-6"
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

    <div class="w-[206px] h-[225px] flex items-center ml-5 justify-center rounded-tl-[20px] mb-4">
      <img :src="image" :alt="title" class="max-h-full max-w-full object-contain" />
    </div>

    <h3 class="text-white text-[13px] w-[206px] mb-1 ml-5 font-semibold">
      {{ title }}
    </h3>
    <p class="text-gray-400 text-[10px] w-[206px] ml-5 line-clamp">{{ description }}</p>

    <div class="flex justify-between ml-5 mt-5 w-[206px] text-gray-500 text-[10px]">
      <span>{{ soldCount }} Terjual</span>
      <button class="text-gray-400 hover:text-white transition duration-200">
        <svg
          class="h-6 w-6"
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
        <p class="border-b-2 border-pink-600 pt-5"></p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    soldCount: {
      type: Number,
      default: 0,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped></style>
