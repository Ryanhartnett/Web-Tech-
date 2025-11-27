<script setup lang="ts">
import { ref } from 'vue'

const adminNumberInput = ref('')
const isAuthenticated = ref(false)
const errorMessage = ref('')

const REQUIRED_ADMIN_NUMBER = '1234'

function handleAdminLogin() {
  if (adminNumberInput.value === REQUIRED_ADMIN_NUMBER) {
    isAuthenticated.value = true
    errorMessage.value = ''
  } else {
    errorMessage.value = 'Invalid admin number. Access denied.'
  }
}
</script>

<template>
  <div class="admin-page">
    <!-- Admin login screen -->
    <div v-if="!isAuthenticated" class="admin-login">
      <h2>Admin Sign In</h2>
      <p class="hint">Enter your admin number to access the dashboard.</p>

      <label for="adminNumber">Admin Number:</label>
      <input
          id="adminNumber"
          v-model="adminNumberInput"
          type="password"
          placeholder="Enter admin number"
      />

      <button @click="handleAdminLogin">Enter Admin Area</button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>

    <!-- Admin dashboard (shown only when correct number entered) -->
    <div v-else class="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <p class="welcome-text">
        Welcome, Admin. Here you can manage users, reviews, and albums.
      </p>

      <div class="crud-grid">
        <div class="crud-card">
          <h3>Users</h3>
          <button disabled>CREATE User</button>
          <button disabled>READ Users</button>
          <button disabled>UPDATE User</button>
          <button disabled>DELETE User</button>
        </div>

        <div class="crud-card">
          <h3>Reviews</h3>
          <button disabled>CREATE Review</button>
          <button disabled>READ Reviews</button>
          <button disabled>UPDATE Review</button>
          <button disabled>DELETE Review</button>
        </div>

        <div class="crud-card">
          <h3>Albums</h3>
          <button disabled>CREATE Album</button>
          <button disabled>READ Albums</button>
          <button disabled>UPDATE Album</button>
          <button disabled>DELETE Album</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-page {
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  font-family: Arial, sans-serif;
}

/* Login */
.admin-login {
  text-align: center;
}

.admin-login h2 {
  margin-bottom: 0.75rem;
}

.hint {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: bold;
}

input {
  width: 100%;
  max-width: 260px;
  padding: 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  margin-bottom: 0.8rem;
}

button {
  padding: 0.6rem 1.2rem;
  background-color: #3a3a3a;
  color: white;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 0.95rem;
}

button:hover {
  background-color: #ff0000;
}

button:disabled {
  background-color: #b3b3b3;
  cursor: default;
}

.error {
  margin-top: 0.75rem;
  color: #d20000;
  font-size: 0.9rem;
}

/* Dashboard */
.admin-dashboard h2 {
  margin-bottom: 0.5rem;
}

.welcome-text {
  margin-bottom: 1.5rem;
}

.crud-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.crud-card {
  background: #fafafa;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.crud-card h3 {
  margin-bottom: 0.8rem;
}

.crud-card button {
  display: block;
  width: 100%;
  margin: 0.25rem 0;
}

/* Responsive */
@media (max-width: 768px) {
  .crud-grid {
    grid-template-columns: 1fr;
  }

  .admin-page {
    padding: 1.5rem;
  }
}
</style>
