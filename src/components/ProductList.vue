<template>
    <div class="product-list">
      <ul>
        <li v-for="product in products" :key="product.id" class="product-item">
          <div class="product-image"><img :src="product.image" :alt="product.name"/></div>
          <div class="product-info">
            <div>
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p><strong>{{ product.price }}</strong></p>
              <div v-if="productQuantity(product.id) === 0">
                <button @click="addToCart(product)">Ajouter</button>
              </div>
              <div v-else class="d-flex justify-content-between">
                <button @click="addToCart(product)" class="buttonAjout">+</button>
                <div class="quantity"><p>{{ productQuantity(product.id) }}</p></div>
                <button @click="removeFromCart(product.id)" class="buttonSup">-</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getProductQuantity']),
    productQuantity() {
      return (id) => this.getProductQuantity(id);
    }
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart'])
  }
};
</script>