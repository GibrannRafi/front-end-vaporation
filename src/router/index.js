import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryProduct from '../views/ProductCategory.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    //a
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    //L
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    //R
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    //p
    {
      path: '/product',
      name: 'Category Product',
      component: CategoryProduct,
    },
    {
      path: '/product-detail',
      name: 'ProductDetail',
      component: ProductDetail,
    },
  ],
})

export default router
