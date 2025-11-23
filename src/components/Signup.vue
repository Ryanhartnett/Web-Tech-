<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore.js'

const userStore = useUserStore()

// Form fields
const fullName = ref('')
const username = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')

// Form state
const submitted = ref(false)

// Handle form submission
function handleSubmit() {
  if (fullName.value && username.value && phone.value && email.value && password.value) {

    // Save to Pinia store
    userStore.setUser({
      fullName: fullName.value,
      username: username.value,
      phone: phone.value,
      email: email.value,
      password: password.value
    })

    submitted.value = true
  }
}

// Reset form + Pinia user
function resetForm() {
  fullName.value = ''
  username.value = ''
  phone.value = ''
  email.value = ''
  password.value = ''
  submitted.value = false

  userStore.resetUser()
}
</script>


<template>
  <div class="signup-page">
    <h2>Sign Up</h2>

    <div v-if="submitted" class="thank-you">
      <p>Thank you, {{ fullName }}! Your account has been created.</p>
      <button @click="resetForm">Sign Up Another Account</button>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="signup-form">
      <div class="form-group">
        <label for="fullName">Full Name:</label>
        <input id="fullName" v-model="fullName" type="text" required />
      </div>

      <div class="form-group">
        <label for="username">Username:</label>
        <input id="username" v-model="username" type="text" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number:</label>
        <input id="phone" v-model="phone" type="tel" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password" required />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style scoped>
.signup-page {
  max-width: 450px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  font-family: Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.signup-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.3rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  padding: 0.7rem;
  background-color: #3a3a3a;
  color: white;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.5rem;
}

button:hover {
  background-color: #ff0000;
}

.thank-you {
  text-align: center;
  font-size: 1rem;
}
</style>
