<script setup lang="ts">
useHead({
  title: 'Growth Centre Church — Eldoret | Worship, Fellowship & Faith',
  meta: [
    {
      name: 'description',
      content:
        'Welcome to Growth Centre Church, Eldoret. Join us for Sunday worship at 10 AM on Uganda Road. A Christ-centred community growing in faith since 1990.',
    },
  ],
});
</script>

<template>
  <HomeNavbar />
  <main class="flex-1">
    <HomeHero />
    <HomeCarousel />
    <HomeFeatures />
    <HomeNews />
    <HomeCta />
    <HomeFaq />
  </main>
  <HomeFoot />
</template>
