---
layout: default
title: Pretzelvision
---
<div class="section-hero">
  <img src="/images/ink-drawings/banners/home-banner.jpg" alt="Ink drawing: ocean waves]">
</div>

<p class="home-intro">
  Original artwork, cartoons, and written work by Alan McClellan. Music includes classic surf and instrumental covers performed by The Corpse Revivers. 
</p>

<div class="home-grid">

  <div class="home-card live">
    <h2>Art Collections</h2>
    <p>Browse my cartoons, art gallery, and my sketchbooks over the past several years.</p>
    <a class="primary-button" href="/images/">Go to Art</a>
  </div>

  <div class="home-card live">
    <h2>Audio Collections</h2>
    <p>Cool instrumentals and cover tunes that I play with my band, The Corpse Revivers.</p>
    <a class="primary-button" href="/audio/">Go to Music</a>
  </div>

  <div class="home-card disabled">
    <h2>Writing Collections</h2>
    <p>Notes, sketches, and short writing.</p>
    <div class="coming-soon">Coming soon-ish</div>
  </div>
</div>

<section class="home-section">
  <h2>Featured</h2>

  {% include featured-grid.html %}
</section>

<!-- 
<section class="home-section">
  {% include whats-new.html %}
</section>
-->


<section class="home-section">
  <h2>Reader Notes</h2>

  <details class="pv-reveal">
    <summary>See What People Are Saying</summary>

    {% include reader-notes-block.html %}
  </details>
</section>


<section class="home-section">
  <h2>Stay in the Loop</h2>

  <p>
    Pretzelvision is an ongoing project, and I add new drawings, music,
    cartoons, and writing from time to time.
  </p>

  <p>
    If you'd like an occasional email when something new is posted,
    send me a note at
    <a href="mailto:pretzelvision@gmail.com">pretzelvision@gmail.com</a>.
  </p>
</section>


<section class="home-section">
  <h2>Feedback</h2>

  {% include send-note.html %}
</section>
