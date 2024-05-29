<template>
    <header id="header" class="header" >
        <div class='header__logo'>
          <img :src="logoSimple" alt="logo noir">
          <h1>TastyCloud</h1>
        </div>
        <div class='header__button'>
          <button @click="toggleCart">Mon panier<font-awesome-icon :icon="['fas', 'shopping-basket']" /><p v-if="cartTotalQuantity > 0">({{ cartTotalQuantity }})</p></button>
        </div>
        <div v-if="showCart & cart.length > 0" class="cart-dropdown">
          <ul v-if="cart.length > 0">
            <li v-for="item in cart" :key="item.id" class="cart-item">
              <div class="cart-item-info">
                <div class="cart-item-image">
                  <img :src="item.image" :alt="item.name" />
                </div>
                <div>
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.quantity }} x {{ item.price }}</p>
                  <p>Total: {{ (item.quantity * parseFloat(item.price)).toFixed(2) }}€</p>
                </div>
              </div>
              <div class="cart-item-actions">
                <button @click="removeFromCart(item.id)">-</button>
                <button @click="addToCart(item)">+</button>
              </div>
            </li>
          </ul>
          <p v-else>Votre panier est vide</p>
          <div v-if="cart.length > 0" class="cart-summary">
            <p>Total: {{ cartTotalPrice.toFixed(2) }}€</p>
            <button>Passer à la caisse</button>
          </div>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import logoSimple from './icons/logo_simple_blanc.png'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      showCart: false,
      logoSimple
    };
  },
  computed: {
    ...mapGetters(['cart', 'cartTotalQuantity', 'cartTotalPrice'])
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
    toggleCart() {
      this.showCart = !this.showCart;
    }
  }
};
</script>

