<template>
    <nav id="navbar">
        <div>
            <a href="/">Acceuil</a>
            <a href="/">plats<font-awesome-icon :icon="['fas', 'chevron-down']" /></a>
            <a href="/">Dessert<font-awesome-icon :icon="['fas', 'chevron-down']" /></a>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
};
</script>