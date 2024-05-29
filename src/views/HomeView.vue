<template>
  <div>
    <HeaderComponent />
    <NavbarComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import NavbarComponent from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    NavbarComponent,
  },
};
</script>
