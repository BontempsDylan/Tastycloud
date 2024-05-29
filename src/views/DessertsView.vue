<template>
    <div class="w-100">
        <div class="bloc-fixed">
            <HeaderComponent />
            <NavbarComponent />
        </div>
        <BannerComponent />
        <section class="suggestion">
            <h2>Nos Desserts</h2>
            <ProductList :products="desserts" />
        </section>
        <FooterComponent />
    </div>
</template>
  
<script>
import HeaderComponent from '@/components/Header.vue';
import NavbarComponent from '@/components/NavBar.vue';
import BannerComponent from '@/components/Banner.vue'
import ProductList from '@/components/ProductList.vue';
import FooterComponent from '@/components/Footer.vue';
import { mapGetters } from 'vuex';

export default {
name: 'DessertsView',
components: {
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    ProductList,
    FooterComponent
},
computed: {
    ...mapGetters(['desserts'])
}
};
</script>