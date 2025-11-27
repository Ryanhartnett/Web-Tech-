<script setup>
import albumimg from '../assets/albumimg.jpg'
</script>

<template>
  <section class="fancy-that-article">
    <h1><em>Fancy That</em> – PinkPantheress</h1>

    <!-- Top: cover + meta layout -->
    <div class="fancy-layout">
      <div class="fancy-cover">
        <img
            :src="albumimg"
            alt="Fancy That album cover"
            width="300"
            height="300"
        />
      </div>

      <div class="fancy-meta">
        <div class="fancy-meta-row">
          <div class="fancy-meta-label">Artist</div>
          <div class="fancy-meta-value">PinkPantheress</div>
        </div>

        <div class="fancy-meta-row">
          <div class="fancy-meta-label">Type</div>
          <div class="fancy-meta-value">Mixtape</div>
        </div>

        <div class="fancy-meta-row">
          <div class="fancy-meta-label">Released</div>
          <div class="fancy-meta-value">May 9, 2025</div>
        </div>

        <div class="fancy-meta-row">
          <div class="fancy-meta-label">Length</div>
          <div class="fancy-meta-value">~20 minutes (9 tracks)</div>
        </div>

        <div class="fancy-meta-row">
          <div class="fancy-meta-label">Genres</div>
          <div class="fancy-meta-value">
            UK Garage, Jungle, Bedroom Pop, Dance
          </div>
        </div>

        <p class="fancy-description">
          <strong>Fancy That</strong>, released on <strong>May 9, 2025</strong> through Warner
          Records, is the second mixtape by British singer-songwriter and producer PinkPantheress.
        </p>
      </div>
    </div>

    <!-- Bottom: full article body -->
    <div class="fancy-body">
      <h2>Overview</h2>
      <p>
        Spanning around 20 minutes across nine tracks, <em>Fancy That</em> sharpens
        PinkPantheress's signature blend of UK garage, jungle, bedroom pop, and dance.
        She described it as her “most tied-together work,” emphasizing growth, coherence,
        and a focused artistic direction.
      </p>

      <h2>Sound & Style</h2>
      <p>
        The mixtape incorporates samples, interpolations, and influences from early‑2000s
        dance and pop culture. Critics have noted its crisp production, shimmering melodies,
        and a nostalgic yet modern energy.
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
        The mixtape explores themes of desire, identity, heartbreak, and nostalgia.
        From the urgent, emotionally charged opener “Illegal” to the dreamy closer “Romeo,”
        PinkPantheress blends intimate storytelling with high‑energy dance elements.
      </p>

      <blockquote class="quote">
        “I hope everyone loves it — I’m putting everything into this era because I love the music
        so much. Truly my proudest work.”
        <br />— PinkPantheress
      </blockquote>

      <h2>Reception & Impact</h2>
      <p>
        <em>Fancy That</em> received widespread acclaim upon release, praised for its bold
        sample work, tighter vision, and emotional clarity. It achieved strong chart performance
        and reinforced PinkPantheress’s place as one of the UK’s most innovative young artists.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Fast, fresh, and stylistically rich, <em>Fancy That</em> is a compact but powerful
        statement. Whether you’re into dance‑pop, UK garage revival, or introspective
        storytelling, this mixtape offers a unique listening experience that stays with
        you long after it ends.
      </p>
    </div>

    <div class="fancy-ad">ADVERTISEMENT</div>
  </section>
</template>

<style scoped>
.fancy-that-article {
  font-family: Arial, sans-serif;
  color: #222;
  max-width: 1100px;
  margin: 30px auto;
  padding: 20px 30px;
  background: #ffffff;
}

/* Main title */
.fancy-that-article h1 {
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
}

/* Two‑column layout: cover (left) + meta (right) */
.fancy-layout {
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  gap: 2.5rem;
  align-items: flex-start;
}

/* Left column: big cover */
.fancy-cover img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

/* Right column: meta rows */
.fancy-meta {
  font-size: 0.95rem;
}

.fancy-meta-row {
  display: grid;
  grid-template-columns: 110px 1fr;
  margin-bottom: 0.35rem;
}

.fancy-meta-label {
  font-weight: 600;
  color: #666;
}

.fancy-meta-value a {
  color: #1a5fb4;
  text-decoration: none;
}

/* Short descriptive paragraph on right */
.fancy-description {
  margin-top: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Below the two columns: rest of article content */
.fancy-body {
  margin-top: 2.5rem;
  font-size: 0.98rem;
  line-height: 1.6;
}

.fancy-body h2 {
  font-size: 1.3rem;
  margin: 1.8rem 0 0.6rem;
}

.tracklist {
  list-style: none;
  padding: 0;
  margin-left: 0;
}

.tracklist li {
  margin: 3px 0;
}

/* Blockquote styling */
.quote {
  font-style: italic;
  margin: 20px 0;
  padding-left: 12px;
  border-left: 3px solid #ccc;
}

/* Advertisement bar */
.fancy-ad {
  margin-top: 2.5rem;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.85rem;
  color: #777;
  border-top: 1px solid #e0e0e0;
}

/* Basic responsiveness */
@media (max-width: 900px) {
  .fancy-layout {
    grid-template-columns: 1fr;
  }

  .fancy-that-article {
    padding: 20px;
  }
}
</style>
