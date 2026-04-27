<template>
  <section class="relative py-14 overflow-hidden">
    <img
      src="/assets/images/4-Bible.jpeg"
      alt="Open Bible"
      class="absolute inset-0 w-full h-full object-cover"
      @error="onImgError"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-[#0d1f3c]/80 to-[#0d1f3c]/90"></div>

    <div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
        Worship, Fellowship, and<br class="hidden sm:block" /> Grow in Faith
      </h2>
      <p class="text-base text-white/80 leading-relaxed mb-7 max-w-xl mx-auto">
        Join Growth Centre Church — a strong community rooted in Christ, serving together since 1990.
      </p>

      <div class="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        <NuxtLink to="/join" class="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-[#1b3764] rounded-lg hover:bg-[#0f2347] transition-all duration-200 hover:shadow-lg">
          Become a Member
        </NuxtLink>
        <NuxtLink to="/know" class="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white border border-white/40 rounded-lg hover:bg-white hover:text-[#0d1f3c] transition-all duration-200">
          Know God
        </NuxtLink>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-6 max-w-sm mx-auto border-t border-white/20 pt-7">
        <div>
          <p class="text-2xl font-bold text-[#c4932a]">35+</p>
          <p class="text-white/60 text-xs mt-0.5">Years</p>
        </div>
        <div>
          <p class="text-2xl font-bold text-[#c4932a]">4+</p>
          <p class="text-white/60 text-xs mt-0.5">Branches</p>
        </div>
        <div>
          <p class="text-2xl font-bold text-[#c4932a]">10+</p>
          <p class="text-white/60 text-xs mt-0.5">Ministries</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const onImgError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&auto=format&fit=crop&q=80';
};
</script>
