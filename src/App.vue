<!-- src/App.vue -->
<template>
  <div id="app" class="overflow-x-hidden min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style>
@import '@/assets/main.css';

body {
  background-color: #101010;
}
</style>
