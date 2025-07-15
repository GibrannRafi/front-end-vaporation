<template>
  <div>
    <HeroSection />
    <ProductSection />
    <Category />
    <TopProduct />
    <NewsProduct />
  </div>
</template>

<script>
import HeroSection from './HeroSection.vue'
import NewsProduct from './NewsProduct.vue'
import Category from './CategorySection.vue'
import TopProduct from './TopProduct.vue'
import ProductSection from './ProductSection.vue'

export default {
  name: 'Landing',
  components: {
    HeroSection,
    NewsProduct,
    Category,
    TopProduct,
    ProductSection,
  },
}
</script>
