<script setup>
import albumimg from '../assets/albumimg.jpg'
</script>

<template>
  <section class="fancy-that-article">
    <h1><em>Fancy That</em> – PinkPantheress</h1>

    <img
        :src="albumimg"
        alt="Fancy That album cover"
        class="album-image"
        width="300"
        height="300"
    />

    <p>
      <strong>Fancy That</strong>, released on <strong>May 9, 2025</strong> through Warner Records,
      is the second mixtape by British singer-songwriter and producer PinkPantheress.
    </p>

    <h2>Overview</h2>
    <p>
      Spanning around 20 minutes across nine tracks, <em>Fancy That</em> sharpens PinkPantheress's
      signature blend of UK garage, jungle, bedroom pop, and dance. She described it as her
      “most tied-together work,” emphasizing growth, coherence, and a focused artistic direction.
    </p>

    <h2>Sound & Style</h2>
    <p>
      The mixtape incorporates samples, interpolations, and influences from early-2000s dance and
      pop culture. Critics have noted its crisp production, shimmering melodies, and a
      nostalgic yet modern energy.
    </p>

    <h2>Tracklist</h2>
    <ul class="tracklist">
      <li>1. Illegal</li>
      <li>2. Girl Like Me</li>
      <li>3. Tonight</li>
      <li>4. Stars</li>
      <li>5. Intermission</li>
      <li>6. Noises</li>
      <li>7. Nice to Know You</li>
      <li>8. Stateside</li>
      <li>9. Romeo</li>
    </ul>

    <h2>Thematic Highlights</h2>
    <p>
      The mixtape explores themes of desire, identity, heartbreak, and nostalgia. From the urgent,
      emotionally charged opener “Illegal” to the dreamy closer “Romeo,” PinkPantheress blends
      intimate storytelling with high-energy dance elements.
    </p>

    <blockquote class="quote">
      “I hope everyone loves it — I’m putting everything into this era because I love the music
      so much. Truly my proudest work.”
      <br />— PinkPantheress
    </blockquote>

    <h2>Reception & Impact</h2>
    <p>
      <em>Fancy That</em> received widespread acclaim upon release, praised for its bold sample
      work, tighter vision, and emotional clarity. It achieved strong chart performance and
      reinforced PinkPantheress’s place as one of the UK’s most innovative young artists.
    </p>

    <h2>Final Thoughts</h2>
    <p>
      Fast, fresh, and stylistically rich, <em>Fancy That</em> is a compact but powerful
      statement. Whether you’re into dance-pop, UK garage revival, or introspective storytelling,
      this mixtape offers a unique listening experience that stays with you long after it ends.
    </p>
  </section>
</template>

<style scoped>
.fancy-that-article {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  margin: 20px;
}

.album-image {
  display: block;
  margin: 20px auto; /* centers the image */
  max-width: 300px;
  border-radius: 0.5rem;
}

h1, h2 {
  color: #111;
}

.tracklist {
  list-style: none;
  padding: 0;
}

.tracklist li {
  margin: 4px 0;
}

.quote {
  font-style: italic;
  margin: 20px 0;
  padding-left: 12px;
  border-left: 3px solid #ccc;
}
</style>
