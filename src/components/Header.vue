<template>
    <header id="header" class="header" >
        <div class='header__logo'>
          <img :src="logoSimple" alt="logo noir">
          <h1>TastyCloud</h1>
        </div>
        <div class='header__button'>
          <button>Mon panier<font-awesome-icon :icon="['fas', 'shopping-basket']" /></button>
        </div>
    </header>
</template>

<script>
import logoSimple from './icons/logo_simple_blanc.png'

export default {
  data() {
    return {
      logoSimple
    };
  },
  name: 'HeaderComponent',
};
</script>

