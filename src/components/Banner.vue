<template>
    <div class="w-100">
      <div class="banner">
        <img :src="ImageBanner" alt="logo noir">
        <div class="banner__hero">
          <img :src="logoSimpleNom" alt="logo noir">
          <div class="banner__hero__texte">
            <h1>Bienvenue chez TastyCloud !</h1>
            <p>Découvrez nos produits frais et savoureux, préparés avec soin pour vous offrir une expérience culinaire inoubliable. Commandez facilement en ligne et profitez de notre service de livraison rapide ou de retrait en restaurant. Bon appétit !</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ImageBanner from '@/assets/image_banner.jpg'
import logoSimpleNom from '../components/icons/logo_nom_blanc.png'

export default {
data() {
    return {
      ImageBanner,
      logoSimpleNom
    };
},
  name: 'BannerComponent',
};
</script>