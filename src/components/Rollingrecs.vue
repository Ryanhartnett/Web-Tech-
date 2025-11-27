<script setup>
import { ref } from 'vue'
import albumimg from '../assets/albumimg.jpg'
import ethel from '../assets/ethel.webp'
import weeknd from '../assets/weeknd.webp'
import sade from '../assets/sade.png'
import madonna from '../assets/madonna.png'
import pjhar from '../assets/pjhar.png'

const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)
const count4 = ref(0)
const count5 = ref(0)
const count6 = ref(0)
</script>

<template>
  <div class="home-wrapper">
    <h2>Hello Music Lovers!</h2>
    <p class="intro-text">Welcome to Rolling Recs.</p>

    <div class="home-page">
      <!-- Card 1 -->
      <div class="home">
        <p>Click this button to give "Fancy That" by Pink Pantheress an upvote!</p>

        <img :src="albumimg" alt="Fancy That album cover" class="album-image" width="125" height="125" />
        <br />
        <button @click="count1++">
          You Upvoted {{ count1 }} {{ count1 === 1 ? 'time' : 'times' }}
        </button>
      </div>

      <!-- Card 2 - Ethel Cain -->
      <div class="home">
        <p>Click this button to give "willoughby tucker i'll always love you" by Ethel Cain an upvote!</p>

        <img :src="ethel" alt="Ethel Cain album cover" class="album-image" width="125" height="125" />
        <br />
        <button @click="count2++">
          You Upvoted {{ count2 }} {{ count2 === 1 ? 'time' : 'times' }}
        </button>
      </div>

      <!-- Card 3 - The Weeknd -->
      <div class="home">
        <p>Click this button to give "Dawn FM" by The Weeknd an upvote!</p>

        <img :src="weeknd" alt="Dawn FM by The Weeknd album cover" class="album-image" width="125" height="125" />
        <br />
        <button @click="count3++">
          You Upvoted {{ count3 }} {{ count3 === 1 ? 'time' : 'times' }}
        </button>
      </div>

      <!-- Card 4 - Sade -->
      <div class="home">
        <p>Click this button to give "Soldier of Love" by Sade an upvote!</p>

        <img :src="sade" alt="Soldier of Love by Sade album cover" class="album-image" width="125" height="125" />
        <br />
        <button @click="count4++">
          You Upvoted {{ count4 }} {{ count4 === 1 ? 'time' : 'times' }}
        </button>
      </div>

      <!-- Card 5 - Madonna -->
      <div class="home">
        <p>Click this button to give "Ray of Light" by Madonna an upvote!</p>

        <img :src="madonna" alt="Ray of Light by Madonna album cover" class="album-image" width="125" height="125" />
        <br />
        <button @click="count5++">
          You Upvoted {{ count5 }} {{ count5 === 1 ? 'time' : 'times' }}
        </button>
      </div>

      <!-- Card 6 - PJ Harvey -->
      <div class="home">
        <p>Click this button to give "Stories from the City, Stories from the Sea" by PJ Harvey an upvote!</p>

        <img :src="pjhar" alt="Stories from the City Stories from the Sea by PJ Harvey album cover" class="album-image" width="125" height="125" />
        <br />
        <button @click="count6++">
          You Upvoted {{ count6 }} {{ count6 === 1 ? 'time' : 'times' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-wrapper {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  font-family: system-ui, sans-serif;
}

.intro-text {
  margin-bottom: 1.5rem;
}

.home-page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
}

.home {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
