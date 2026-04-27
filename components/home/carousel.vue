<template>
  <section class="py-10 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Our Community in Action</h2>
      <p class="text-base text-gray-500 max-w-xl mx-auto">
        Moments of worship, fellowship, and service that define who we are.
      </p>
    </div>

    <div class="carousel-container" @mouseenter="paused = true" @mouseleave="paused = false">
      <div class="carousel-track" :style="{ animationPlayState: paused ? 'paused' : 'running' }">
        <div v-for="(item, index) in images" :key="`a-${index}`" class="carousel-item">
          <img :src="item.src" :alt="item.alt" class="h-48 lg:h-60 w-auto rounded-xl object-cover shadow-sm" loading="lazy" @error="onImgError($event, item.fallback)" />
        </div>
        <div v-for="(item, index) in images" :key="`b-${index}`" class="carousel-item">
          <img :src="item.src" :alt="item.alt" class="h-48 lg:h-60 w-auto rounded-xl object-cover shadow-sm" loading="lazy" @error="onImgError($event, item.fallback)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const paused = ref(false);

const onImgError = (e: Event, fallback: string) => {
  const img = e.target as HTMLImageElement;
  if (fallback && img.src !== fallback) img.src = fallback;
};

const images = [
  { src: '/assets/images/1-Majestic mountain.jpeg', alt: 'Church worship', fallback: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=600&auto=format&fit=crop&q=70' },
  { src: 'https://images.unsplash.com/photo-1438232992991-995b671e4b84?w=600&auto=format&fit=crop&q=70', alt: 'Church community', fallback: '' },
  { src: '/assets/images/JC.jpg', alt: 'Community outreach', fallback: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=70' },
  { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=70', alt: 'Fellowship gathering', fallback: '' },
  { src: '/assets/images/bishop.jpg', alt: 'Church leadership', fallback: 'https://images.unsplash.com/photo-1609899258043-ba86e1b04da3?w=600&auto=format&fit=crop&q=70' },
  { src: '/assets/images/jesus.jpg', alt: 'Prayer gathering', fallback: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&auto=format&fit=crop&q=70' },
  { src: '/assets/images/Council.jpg', alt: 'Church council', fallback: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=70' },
  { src: 'https://images.unsplash.com/photo-1555435973-42f8c6c8b4e0?w=600&auto=format&fit=crop&q=70', alt: 'Youth ministry', fallback: '' },
  { src: '/assets/images/sunday.jpg', alt: 'Sunday service', fallback: 'https://images.unsplash.com/photo-1609899258043-ba86e1b04da3?w=600&auto=format&fit=crop&q=70' },
  { src: '/assets/images/cross.jpg', alt: 'Cross', fallback: 'https://images.unsplash.com/photo-1438232992991-995b671e4b84?w=600&auto=format&fit=crop&q=70' },
];
</script>

<style scoped>
.carousel-container { overflow: hidden; width: 100%; }
.carousel-container:hover .carousel-track { animation-play-state: paused; }
.carousel-track { display: flex; gap: 0.75rem; width: max-content; animation: carouselScroll 45s linear infinite; }
.carousel-item { flex: 0 0 auto; }
.carousel-item img { display: block; }
@keyframes carouselScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
