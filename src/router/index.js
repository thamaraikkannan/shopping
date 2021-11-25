import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchView from '../views/SearchView'
import ProductDetails from '../views/ProductDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeRouteUpdate: () => {
      this.$store.dispatch('filterProducts','')
    }
  },
  {
    path: '/products',
    name: 'SearchView',
    component: SearchView,
    props: true
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router