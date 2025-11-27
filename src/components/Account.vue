<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore.js'

import albumimg from '../assets/albumimg.jpg'
import ethel from '../assets/ethel.webp'
import weeknd from '../assets/weeknd.webp'
import sade from '../assets/sade.png'
import madonna from '../assets/madonna.png'
import pjhar from '../assets/pjhar.png'

const userStore = useUserStore()

// Local bio – default from store or placeholder
const bio = ref(
    userStore.user?.bio ||
    'Music lover, always hunting for the next great record.'
)

// Simple local counters for reviewed albums
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)
const count4 = ref(0)
const count5 = ref(0)
const count6 = ref(0)
</script>

<template>
  <div class="account-page">
    <!-- Profile header -->
    <section class="profile-header">
      <div class="avatar">
        <span>{{ (userStore.user?.username || 'U')[0].toUpperCase() }}</span>
      </div>

      <div class="profile-main">
        <h1>{{ userStore.user?.username || 'YourUsername' }}</h1>
        <p class="real-name">{{ userStore.user?.fullName || 'Your Name' }}</p>

        <p class="meta-line">
          <strong>Email:</strong> {{ userStore.user?.email || 'you@example.com' }}
        </p>
        <p class="meta-line">
          <strong>Phone:</strong> {{ userStore.user?.phone || 'N/A' }}
        </p>
      </div>
    </section>

    <!-- Bio section -->
    <section class="profile-bio">
      <h2>Bio</h2>
      <p class="bio-text">
        {{ bio }}
      </p>
    </section>

    <!-- Reviewed albums (Rolling Recs style) -->
    <section class="reviewed-section">
      <h2>Reviewed Albums</h2>
      <p class="section-intro">
        A selection of albums you’ve upvoted and written about.
      </p>

      <div class="home-page">
        <!-- Card 1 -->
        <div class="home">
          <p>Click this button to give "Fancy That" by Pink Pantheress an upvote!</p>

          <img
              :src="albumimg"
              alt="Fancy That album cover"
              class="album-image"
              width="125"
              height="125"
          />
          <br />
          <button @click="count1++">
            You Upvoted {{ count1 }} {{ count1 === 1 ? 'time' : 'times' }}
          </button>
        </div>

        <!-- Card 2 -->
        <div class="home">
          <p>
            Click this button to give "willoughby tucker i'll always love you" by
            Ethel Cain an upvote!
          </p>

          <img
              :src="ethel"
              alt="Ethel Cain album cover"
              class="album-image"
              width="125"
              height="125"
          />
          <br />
          <button @click="count2++">
            You Upvoted {{ count2 }} {{ count2 === 1 ? 'time' : 'times' }}
          </button>
        </div>

        <!-- Card 3 -->
        <div class="home">
          <p>Click this button to give "Dawn FM" by The Weeknd an upvote!</p>

          <img
              :src="weeknd"
              alt="Dawn FM by The Weeknd album cover"
              class="album-image"
              width="125"
              height="125"
          />
          <br />
          <button @click="count3++">
            You Upvoted {{ count3 }} {{ count3 === 1 ? 'time' : 'times' }}
          </button>
        </div>

        <!-- Card 4 -->
        <div class="home">
          <p>Click this button to give "Soldier of Love" by Sade an upvote!</p>

          <img
              :src="sade"
              alt="Soldier of Love by Sade album cover"
              class="album-image"
              width="125"
              height="125"
          />
          <br />
          <button @click="count4++">
            You Upvoted {{ count4 }} {{ count4 === 1 ? 'time' : 'times' }}
          </button>
        </div>

        <!-- Card 5 -->
        <div class="home">
          <p>Click this button to give "Ray of Light" by Madonna an upvote!</p>

          <img
              :src="madonna"
              alt="Ray of Light by Madonna album cover"
              class="album-image"
              width="125"
              height="125"
          />
          <br />
          <button @click="count5++">
            You Upvoted {{ count5 }} {{ count5 === 1 ? 'time' : 'times' }}
          </button>
        </div>

        <!-- Card 6 -->
        <div class="home">
          <p>
            Click this button to give
            "Stories from the City, Stories from the Sea" by PJ Harvey an upvote!
          </p>

          <img
              :src="pjhar"
              alt="Stories from the City Stories from the Sea by PJ Harvey album cover"
              class="album-image"
              width="125"
              height="125"
          />
          <br />
          <button @click="count6++">
            You Upvoted {{ count6 }} {{ count6 === 1 ? 'time' : 'times' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.account-page {
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
  font-family: Arial, sans-serif;
}

/* Profile header */
.profile-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #3a3a3a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
}

.profile-main h1 {
  font-size: 1.8rem;
  margin-bottom: 0.2rem;
}

.real-name {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.meta-line {
  font-size: 0.9rem;
  color: #444;
}

/* Bio */
.profile-bio {
  margin-bottom: 2.5rem;
}

.profile-bio h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.bio-text {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Reviewed albums section */
.reviewed-section {
  margin-top: 1rem;
}

.reviewed-section h2 {
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
}

.section-intro {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.2rem;
}

/* Rolling Recs grid reused */
.home-page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
}

.home {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.album-image {
  display: block;
  margin: 0.75rem auto 0.5rem;
  border-radius: 0.5rem;
}

button {
  background-color: #3a3a3a;
  color: white;
  border: none;
  padding: 0.6rem 1.1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-size: 0.95rem;
}

button:hover {
  background-color: #ff0000;
}

/* Responsive */
@media (max-width: 900px) {
  .home-page {
    grid-template-columns: repeat(2, 1fr);
  }

  .account-page {
    padding: 1.5rem;
  }
}

@media (max-width: 600px) {
  .profile-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .home-page {
    grid-template-columns: 1fr;
  }
}
</style>
