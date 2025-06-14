<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, inject, watch } from 'vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import CartSidebar from '../components/CartSidebar.vue';

const cart = inject('cart')
const cartOpen = inject('cartOpen')

const addToCart = (product) => {
    cart.value.push(product)
    cartOpen.value = true
}

const route = useRoute()

const products = [
    {
        id: 1,
        name: 'Propriedades rurais (SICAR/SNCI/SIGEF)',
        description: 'Descrição do Produto 1',
        price: 55.00,
        image: '../assets/propriedades_rurais.jpg'
    },
    {
        id: 2,
        name: 'Pedologia (Tipos de solo)',
        description: 'Descrição do Produto 2',
        price: 65.00,
        image: '../assets/pedologia.jpg'
    },
    {
        id: 3,
        name: 'Áreas de Reserva Legal',
        description: 'Descrição do Produto 3',
        price: 75.00,
        image: '../assets/reserva_legal.png'
    },
    {
        id: 4,
        name: 'Áreas de Preservação Permanente',
        description: 'Descrição do Produto 4',
        price: 85.00,
        image: '../assets/preservacao_permanente.jpg'
    },
    {
        id: 5,
        name: 'Uso do solo',
        description: 'Descrição do Produto 5',
        price: 95.00,
        image: '../assets/uso_solo.jpg'
    },
    {
        id: 6,
        name: 'Zoneamento Agroambiental Sucroalcooleiro',
        description: 'Descrição do Produto 6',
        price: 105.00,
        image: '../assets/zoneamento.png'
    },
    {
        id: 7,
        name: 'Dados meteorológicos',
        description: 'Descrição do Produto 7',
        price: 115.00,
        image: '../assets/dados_meteorologicos.jpg'
    },
]

const productId = computed(() => Number(route.params.id))
const product = computed(() => products.find(p => p.id === productId.value) || {})
const related = products.filter(p => p.id !== productId)

watch(() => route.params.id, (newId) => {
    productId.value = Number(newId)
})

const handleNavigate = () => {
    cartOpen.value = false
    window.scrollTo(0, 0)    
}
</script>

<template>
    <div class="product-detail-container">
        <Header />
        <CartSidebar />
        <main class="main">
            <div class="container">
                <section class="product-main row">
                    <div class="col-md-6"><img :src="product.image" alt="Produto" class="product-main-image" /></div>
                    <div class="col-md-6">
                        <div class="product-info">
                            <h1 class="product-name">{{ product.name }}</h1>
                            <h2 class="product-subheading">{{ product.subheading }}</h2>
                            <p class="product-price">{{ `R$ ${product.price.toFixed(2).replace('.', ',').replace('00','99')}` }}</p>
                            <p class="product-description">{{ product.description }}</p>
                            <button class="add-to-cart" @click="addToCart(product)">Adicionar ao carrinho</button>
                            <p class="fine-print">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, voluptatibus.</p>
                        </div>
                    </div>
                </section>
                <section class="related-section row">
                    <h2 class="related-title">Produtos relacionados</h2>
                    <router-link v-for="product in products" :key="product.id" :to="`/product/${product.id}`"
                        @click="handleNavigate" class="product-card d-block col-md-3">
                        <img :src="product.image" />
                        <h4 class="product-title">{{ product.name }}</h4>
                        <p class="product-description">{{ product.description }}</p>
                        <button class="buy-button" @click.stop.prevent="addToCart(product)"><i class="fa-solid fa-cart-plus"></i>Comprar</button>
                    </router-link>
                </section>
            </div>
        </main>
    </div>
    <Footer />
</template>

<style scoped>
.product-main {
    padding: 40px 0;
}

.product-main-image {
    width: 100%;
    border-radius: 8px;
    height: 300px;
    object-fit: cover;
}

.product-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.product-name {
    font-size: 24px;
    font-weight: bold;
}

.product-subheading {
    font-size: 18px;
    color: #777;
}

.product-price {
    font-size: 20px;
    font-weight: 600;
}

.product-description {
    color: #444;
}

.add-to-cart {
    background: #24aa18;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.fine-print {
    font-size: 12px;
    color: #aaa;
}

.related-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
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
</style>
