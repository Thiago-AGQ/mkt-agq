<script setup>
import { ref, inject, computed } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import CartSidebar from '../components/CartSidebar.vue';

const products = [
  {
    id: 1,
    name: 'Propriedades rurais (SICAR/SNCI/SIGEF)',
    description: 'Descrição do Produto 1',
    price: 55.00,
    image: 'assets/propriedades_rurais.jpg'
  },
  {
    id: 2,
    name: 'Pedologia (Tipos de solo)',
    description: 'Descrição do Produto 2',
    price: 65.00,
    image: 'assets/pedologia.jpg'
  },
  {
    id: 3,
    name: 'Áreas de Reserva Legal',
    description: 'Descrição do Produto 3',
    price: 75.00,
    image: 'assets/reserva_legal.png'
  },
  {
    id: 4,
    name: 'Áreas de Preservação Permanente',
    description: 'Descrição do Produto 4',
    price: 85.00,
    image: 'assets/preservacao_permanente.jpg'
  },
  {
    id: 5,
    name: 'Uso do solo',
    description: 'Descrição do Produto 5',
    price: 95.00,
    image: 'assets/uso_solo.jpg'
  },
  {
    id: 6,
    name: 'Zoneamento Agroambiental Sucroalcooleiro',
    description: 'Descrição do Produto 6',
    price: 105.00,
    image: 'assets/zoneamento.png'
  },
  {
    id: 7,
    name: 'Dados meteorológicos',
    description: 'Descrição do Produto 7',
    price: 115.00,
    image: 'assets/dados_meteorologicos.jpg'
  },
]

let login = ref(true);
const selectedIds = ref([])
const searchTerm = ref('')

const cartOpen = inject('cartOpen')
const cart = inject('cart')
cartOpen.value = false

const addToCart = (product) => {
  cart.value.push(product)
  cartOpen.value = true
}

const handleNavigate = () => {
  cartOpen.value = false
  window.scrollTo(0, 0)
}

const filteredProducts = computed(() => {
  const term = searchTerm.value.toLowerCase().trim()

  return products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)

    const matchesCheckbox =
      selectedIds.value.length === 0 || selectedIds.value.includes(p.id)

    return matchesSearch && matchesCheckbox
  })
})

const handleSearch = (term) => {
  searchTerm.value = term
}
</script>

<template>
  <Header @search="handleSearch"/>
  <CartSidebar />
  <div class="container">
    <main class="main">
      <div class="poster mb-4">
        <img src="/assets/agronomia.jpg" alt="Banner" class="banner" />
      </div>

      <div class="row">
        <div class="col-md-4">
          <aside class="filters">
            <h2 class="title">Produtos</h2>
            <ul class="filter-list">
              <li v-for="product in products" :key="product.id" class="d-flex align-items-center">
                <input type="checkbox" :id="product.name" :value="product.id" v-model="selectedIds" />
                <label :for="product.name">{{ product.name }}</label>
              </li>
            </ul>
          </aside>
        </div>

        <div class="col-md-8">
          <section class="product-section mb-3">
            <p class="product-count">Filtro: {{ filteredProducts.length }} produto{{ filteredProducts.length !== 1 ? 's' : '' }} encontrado{{ filteredProducts.length !== 1 ? 's' : '' }}</p>
          </section>
          <div class="row">
            <router-link v-for="product in filteredProducts" :key="product.id" :to="`/product/${product.id}`"
              class="product-card d-block col-sm-6 col-lg-4" @click="handleNavigate">
              <img :src="product.image" />
              <h4 class="product-title">{{ product.name }}</h4>
              <p class="product-description">{{ product.description }}</p>
              <p class="product-price">Valor: R${{ product.price.toFixed(2).replace('.', ',').replace('00','99') }}</p>
              <button class="buy-button" @click.stop.prevent="addToCart(product)"><i class="fa-solid fa-cart-plus"></i> Comprar</button>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
  <Footer />
</template>

<style scoped>
.banner {
  width: 100%;
  height: 288px;
  object-fit: cover;
}

.filters {
  padding-right: 16px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}

.filter-list {
  list-style: none;
  padding: 0;
}

.filter-list li {
  margin-bottom: 8px;
  font-size: 14px;
  column-gap: .25rem;
}

.filter-list li:hover {
  text-decoration: underline;
}

label {
  cursor: pointer;
}

.product-count {
  font-size: 14px;
  margin-bottom: 16px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  text-decoration: none;
}

.product-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  object-fit: cover;
  height: 150px;
}

.product-title {
  font-weight: 600;
}

.product-description {
  font-size: 14px;
  color: #666;
}

.product-price {
  font-weight: 600;
  margin-top: 8px;
}

.buy-button {
  margin-top: 8px;
  color: white;
  background: #677637;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 16px;
}

.product-card:hover .buy-button {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .banner {
    height: 200px;
  }
  
}
</style>
