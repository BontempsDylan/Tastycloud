<template>
    <nav id="navbar">
        <div>
            <router-link href="/">Acceuil</router-link>
            <router-link href="/plats">plats<font-awesome-icon :icon="['fas', 'chevron-down']" /></router-link>
            <router-link href="/desserts">Dessert<font-awesome-icon :icon="['fas', 'chevron-down']" /></router-link>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
};
</script>