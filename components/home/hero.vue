<template>
  <section class="relative h-screen w-full overflow-hidden bg-[#0d1f3c]" aria-label="Welcome to Growth Centre Church">
    <!-- Video Background (hidden for users who prefer reduced motion) -->
    <div class="absolute inset-0">
      <video
        v-if="!videoFailed && !prefersReducedMotion"
        class="absolute inset-0 h-full w-full object-cover"
        playsinline
        autoplay
        muted
        loop
        aria-hidden="true"
        @error="videoFailed = true"
      >
        <source src="/videos/bibl.mp4" type="video/mp4" />
      </video>
      <!-- Static fallback image (shown if video fails or prefers-reduced-motion) -->
      <img
        v-if="videoFailed || prefersReducedMotion"
        src="/assets/images/7-fellowship.jpeg"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <!-- Navy-tinted gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/65 to-[#0d1f3c]/35"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div class="max-w-2xl">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#c4932a]/40 rounded-full px-4 py-1.5 mb-6">
            <span class="w-2 h-2 rounded-full bg-[#c4932a] animate-pulse"></span>
            <span class="text-white/90 text-sm font-semibold tracking-wide">Welcome to Our Church Family</span>
          </div>

          <!-- Heading -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Growing in Faith,<br />
            <span class="text-[#c4932a]">Together in Christ</span>
          </h1>

          <!-- Subtext -->
          <p class="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
            Join us in worship, fellowship, and growing in the Word of God. Together, let us build a strong community rooted in faith and love.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              to="/know"
              class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#c4932a] rounded-xl hover:bg-[#a07520] transition-all duration-200 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4932a] focus-visible:ring-offset-2"
            >
              Know God
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/join"
              class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/50 rounded-xl hover:bg-white hover:text-[#0d1f3c] transition-all duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              Join Our Church
            </NuxtLink>
          </div>

          <!-- Service time + location pills -->
          <div class="mt-12 flex flex-wrap gap-3">
            <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <svg class="w-4 h-4 text-[#c4932a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              <span class="text-white/90 text-sm font-medium">Sundays — 10:00 AM</span>
            </div>
            <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <svg class="w-4 h-4 text-[#c4932a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span class="text-white/90 text-sm font-medium">Uganda Road, Eldoret</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1" aria-hidden="true">
      <span class="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
      <svg class="w-5 h-5 text-white/40 animate-bounce mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const videoFailed = ref(false);
const prefersReducedMotion = ref(false);

onMounted(() => {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  prefersReducedMotion.value = mq.matches;
  mq.addEventListener('change', (e) => {
    prefersReducedMotion.value = e.matches;
  });
});
</script>
