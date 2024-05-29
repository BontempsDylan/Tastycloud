<template>
    <nav id="navbar">
        <ul>
            <li><router-link to="/">Acceuil</router-link></li>
            <li><router-link to="/Plats">plats<font-awesome-icon :icon="['fas', 'chevron-down']" /></router-link></li>
            <li><router-link to="/desserts">Dessert<font-awesome-icon :icon="['fas', 'chevron-down']" /></router-link></li>
        </ul>
    </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
};
</script>