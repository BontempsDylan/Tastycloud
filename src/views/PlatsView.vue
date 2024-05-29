<template>
    <div class="w-100">
        <div class="bloc-fixed">
            <HeaderComponent />
            <NavbarComponent />
        </div>
        <BannerComponent />
        <section class="suggestion">
            <h2>Nos Plats</h2>
            <ProductList :products="plats" />
        </section>
    </div>
</template>
  
<script>
import HeaderComponent from '@/components/Header.vue';
import NavbarComponent from '@/components/NavBar.vue';
import BannerComponent from '@/components/Banner.vue'
import ProductList from '@/components/ProductList.vue';
import { mapGetters } from 'vuex';

export default {
name: 'PlatsView',
components: {
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    ProductList
},
computed: {
    ...mapGetters(['plats'])
}
};
</script>