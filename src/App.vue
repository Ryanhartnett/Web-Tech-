<script setup>
import albumimg from './assets/albumimg.jpg'
import recsto from './assets/recsto.jpg'
</script>

<template>
  <header class="site-header">
    <div class="logo-section">
      <img :src="recsto" alt="Logo" width="125" />
      <h1 class="site-title">Rolling Recs</h1>
    </div>

    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/article">Albums</router-link></li>
        <li><router-link to="/signup">Contact</router-link></li>
      </ul>
    </nav>
  </header>

  <main>
    <router-view />
  </main>

  <footer class="footer">
    <p>Find us on FACEBOOK | TWITTER | INSTAGRAM | WHATSAPP</p>
  </footer>
</template>

<style scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3a3a3a;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0 0 1rem 1rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a.router-link-active {
  font-weight: bold;
  color: #ff0000;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer {
  background-color: #3a3a3a;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
}
</style>
