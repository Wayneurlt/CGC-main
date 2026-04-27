<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <span class="inline-block text-[#c4932a] font-semibold text-xs uppercase tracking-widest mb-2">Stay Connected</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">News & Announcements</h2>
        <p class="mt-2 text-base text-gray-500 max-w-xl mx-auto">
          Latest news, events, and updates from Growth Centre Church.
        </p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in newsItems"
          :key="item.title"
          class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >
          <div class="relative overflow-hidden h-44">
            <img
              class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              :src="item.image"
              :alt="item.title"
              loading="lazy"
              @error="onImgError($event, item.fallback)"
            />
            <span class="absolute top-3 left-3 bg-[#c4932a] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {{ item.category }}
            </span>
          </div>
          <div class="p-4">
            <div class="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
              <span>{{ item.date }}</span>
            </div>
            <h3 class="text-base font-bold text-gray-900 mb-1.5 group-hover:text-[#c4932a] transition-colors duration-200 leading-snug">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed line-clamp-2">{{ item.description }}</p>
            <NuxtLink
              :to="item.link"
              class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1b3764] hover:gap-2 transition-all duration-200"
            >
              {{ item.cta }}
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="text-center mt-8">
        <NuxtLink
          to="/about"
          class="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#1b3764] text-[#1b3764] text-sm font-semibold rounded-lg hover:bg-[#1b3764] hover:text-white transition-all duration-200"
        >
          Learn More About Us
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const newsItems = [
  {
    title: 'Sunday Worship Service',
    description: 'Join us every Sunday for a spirit-filled worship experience. Everyone is welcome.',
    category: 'Worship',
    date: 'Sundays — 10:00 AM',
    image: '/assets/images/bishop.jpg',
    fallback: 'https://images.unsplash.com/photo-1438232992991-995b671e4b84?w=600&auto=format&fit=crop&q=70',
    link: '/about',
    cta: 'Learn more',
  },
  {
    title: 'Member Testimony',
    description: "Be inspired by how God is transforming lives through faith and prayer in our community.",
    category: 'Testimony',
    date: 'Every Month',
    image: '/assets/images/cross.jpg',
    fallback: 'https://images.unsplash.com/photo-1609899258043-ba86e1b04da3?w=600&auto=format&fit=crop&q=70',
    link: '/know',
    cta: 'Read more',
  },
  {
    title: 'Monthly Prayer Meeting',
    description: "Come together to seek God's guidance and blessings for our church and community.",
    category: 'Prayer',
    date: 'Fridays — 6:00 PM',
    image: '/assets/images/Council.jpg',
    fallback: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=70',
    link: '/serve',
    cta: 'Get involved',
  },
];

const onImgError = (e: Event, fallback: string) => {
  const img = e.target as HTMLImageElement;
  if (fallback && img.src !== fallback) img.src = fallback;
};
</script>
