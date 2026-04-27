<template>
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <span class="inline-block text-[#c4932a] font-semibold text-xs uppercase tracking-widest mb-2">Our Mission</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Transforming Lives Through Faith</h2>
        <p class="mt-2 text-base text-gray-500 max-w-xl mx-auto">
          Building a community grounded in faith, love, and service to God and each other.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Image -->
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            alt="Church Community in Worship"
            class="object-cover w-full h-full min-h-[320px]"
            src="/assets/images/1-Majestic mountain.jpeg"
            loading="lazy"
            @error="onImgError"
          />
          <div class="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-md">
            <p class="text-xs font-semibold text-gray-600">Serving since</p>
            <p class="text-2xl font-bold text-[#c4932a]">1990</p>
          </div>
        </div>

        <!-- Feature list -->
        <div class="space-y-3">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="group flex gap-4 p-4 rounded-xl hover:bg-[#eef2f9] transition-all duration-200 cursor-default"
          >
            <div class="flex-shrink-0 w-10 h-10 inline-flex items-center justify-center rounded-xl bg-[#dce8f7] text-[#1b3764] group-hover:bg-[#1b3764] group-hover:text-white transition-colors duration-200">
              <svg v-if="feature.key === 'worship'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <svg v-else-if="feature.key === 'outreach'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
              <svg v-else fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <h3 class="text-gray-900 text-base font-bold mb-0.5">{{ feature.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
              <NuxtLink
                :to="feature.link"
                class="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-[#1b3764] hover:gap-2 transition-all duration-200"
              >
                Learn More
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const onImgError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = '/assets/images/Council.jpg';
};

const features = [
  { key: 'worship', title: 'Worship Services', description: 'Uplifting Sunday services that bring us closer to God through prayer, song, and the Word.', link: '/ministries' },
  { key: 'outreach', title: 'Community Outreach', description: "Extending God's love through charity programs that uplift the community spiritually and socially.", link: '/serve' },
  { key: 'youth', title: 'Youth & Family Programs', description: 'Nurturing the faith of families and empowering the next generation to live purposefully in Christ.', link: '/ministries' },
];
</script>
