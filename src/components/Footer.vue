<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 TastyCloud. Tous droits réservés.</p>
        <nav>
          <ul>
            <li><router-link to="/">Acceuil</router-link></li>
            <li><router-link to="/Plats">plats</router-link></li>
            <li><router-link to="/desserts">Dessert</router-link></li>
          </ul>
        </nav>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>