<script setup>
import { ref } from 'vue'

import recsto from './assets/recsto.jpg'

const isNavOpen = ref(false)

function toggleNav() {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <header class="site-header">
    <div class="logo-section">
      <img :src="recsto" alt="Logo" width="125" />
      <h1 class="site-title">Rolling Recs</h1>
    </div>

    <!-- Hamburger button (shown on small screens) -->
    <button class="hamburger" @click="toggleNav" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="navbar" :class="{ open: isNavOpen }">
      <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/article">Reviews</router-link></li>
        <li><router-link to="/signup">Sign Up</router-link></li>
        <li><router-link to="/Account">Account</router-link></li>
        <li><router-link to="/Admin">Admin</router-link></li>
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
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.site-title {
  font-size: 1.6rem;
}

/* Desktop nav */
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



/* Hamburger button (hidden on large screens) */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 22px;
  height: 2px;
  background: white;
  border-radius: 1px;
}

/* Footer */
.footer {
  background-color: #3a3a3a;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
}

/* ───────── Responsive ───────── */
@media (max-width: 768px) {
  .site-header {
    padding: 0.75rem 1rem;
  }

  .site-title {
    font-size: 1.3rem;
  }

  /* Show hamburger, hide desktop nav by default */
  .hamburger {
    display: flex;
  }

  .navbar {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: #2c2c2c;
    display: none;
  }

  .navbar.open {
    display: block;
  }

  .navbar ul {
    flex-direction: column;
    gap: 0;
  }

  .navbar li {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navbar a {
    display: block;
    padding: 0.75rem 1rem;
  }
}
</style>
