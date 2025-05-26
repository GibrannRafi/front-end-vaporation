<template>
  <div class="bg-card-black w-[283px] h-[393px] rounded-lg overflow-hidden shadow-lg p-4 relative">
    <span
      v-if="isNew"
      class="absolute top-0 left-0 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-br-lg z-10"
      >New</span
    >

    <button class="absolute top-2 right-7 text-gray-400 hover:text-white transition duration-200">
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

    <div
      class="w-[206px] h-[225px] bg-gray-700 flex items-center ml-5 justify-center rounded-md mb-4"
    >
      <img :src="image" :alt="title" class="max-h-full max-w-full object-contain" />
    </div>

    <h3 class="text-white text-sm font-semibold mb-2 line-clamp-2">{{ title }}</h3>
    <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ description }}</p>

    <div class="flex items-center justify-between text-gray-500 text-sm">
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

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
