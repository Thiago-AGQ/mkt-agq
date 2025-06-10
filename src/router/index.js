import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/product/:id', name: 'ProductDetails', component: ProductDetails, props: true }
]

const router = createRouter({
  history: createWebHistory('/mkt-agq/'),
  routes
})

export default router
