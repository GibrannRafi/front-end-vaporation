// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'dark-black': '#101010',
        'custom-pink': '#DB486D',
        'card-black': '#191919', // <-- Tambahkan warna baru ini
      }
    },
  },
  plugins: [],
}
