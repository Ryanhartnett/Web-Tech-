<script setup>
import { ref } from 'vue'
import albumimg from '../assets/albumimg.jpg'
import recsto from '../assets/recsto.jpg'

const count = ref(0)
</script>

<template>
  <div class="home">
    <h2>Hello Music Lovers!</h2>
    <p>Welcome to Rolling Recs.</p>
    <p>Click this button to give "Fancy That" by Pink Pantheress an upvote!</p>

    <img :src="albumimg" alt="Album cover" class="album-image" width="125" height="125" />
    <br />
    <button @click="count++">
      You Upvoted {{ count }} {{ count === 1 ? 'time' : 'times' }}
    </button>
  </div>
</template>

<style scoped>
.home {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: 2rem auto;
  font-family: system-ui, sans-serif;
}
button {
  background-color: #3a3a3a;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
}
button:hover {
  background-color: #ff0000;
}
</style>
