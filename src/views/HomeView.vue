<template>
  <div class="w-100">
    <div class="bloc-fixed">
      <HeaderComponent />
      <NavbarComponent />
    </div>
    <BannerComponent />
    <section class="suggestion">
      <h2>Suggestions</h2>
      <p>Nos suggestions pour vous</p>
      <ProductList :products="suggestions" />
    </section>
    <section class="suggestion">
      <h2>Laissez-vous tenter</h2>
      <p>Nos suggestions pour vous</p>
      <ProductList :products="temptations"  />
    </section>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import NavbarComponent from '@/components/NavBar.vue'
import BannerComponent from '@/components/Banner.vue'
import ProductList from '@/components/ProductList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    ProductList
  },
  computed: {
    ...mapGetters(['allProducts']),
    suggestions() {
      return this.getRandomProducts(5);
    },
    temptations() {
      return this.getRandomProducts(5);
    }
  },
  methods: {
    getRandomProducts(count) {
      return this.allProducts.sort(() => 0.5 - Math.random()).slice(0, count);
    }
  }
};
</script>
