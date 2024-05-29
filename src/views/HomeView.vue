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
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import NavbarComponent from '@/components/NavBar.vue'
import BannerComponent from '@/components/Banner.vue'
import ProductList from '@/components/ProductList.vue';
import FooterComponent from '@/components/Footer.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    ProductList,
    FooterComponent
  },
  computed: {
    ...mapGetters(['allProducts', 'getRandomProducts']),
    suggestions() {
      return this.getRandomProducts();
    },
    temptations() {
      return this.getRandomProducts();
    }
  },
  data() {
    return {
      randomSuggestions: [],
      randomTemptations: []
    };
  },
  created() {
    this.calculateRandomSuggestions();
    this.calculateRandomTemptations();
  },
  methods: {
    calculateRandomSuggestions() {
      const allProducts = this.allProducts;
      const randomIndices = Array.from({ length: 5 }, () => Math.floor(Math.random() * allProducts.length));
      this.randomSuggestions = randomIndices.map(index => allProducts[index]);
    },
    calculateRandomTemptations() {
      const allProducts = this.allProducts;
      const randomIndices = Array.from({ length: 5 }, () => Math.floor(Math.random() * allProducts.length));
      this.randomTemptations = randomIndices.map(index => allProducts[index]);
    }
  }
};
</script>
