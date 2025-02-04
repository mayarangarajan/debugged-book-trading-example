<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/search">Search</router-link>
    <router-link to="/trades">Trades</router-link>
    <router-link to="/account">Account</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 1rem;
}

.navbar a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}

.navbar a.router-link-active {
  color: #42b983;
}
</style>