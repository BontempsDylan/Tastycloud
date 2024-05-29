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
              <button>Ajouter</button>
            </div>
            
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>