<template>
  <section class="relative overflow-hidden bg-black/50">
    <!-- Background Image -->
    <img
      src="/assets/images/biblebg.jpeg"
      alt="Christian Growth Center Church"
      class="absolute inset-0 object-cover w-full h-full"
    />
    <!-- Content Overlay -->
    <div class="relative p-8 md:p-12 lg:px-16 lg:py-24 bg-black/50">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
          Worship, Fellowship, and Grow in Faith!
        </h2>

        <p class="max-w-lg mx-auto text-white/90 md:mt-6 md:text-lg md:leading-relaxed">
          Join the Christian Growth Center Church as we grow together in faith, love, and service to the Lord. Together, we build a strong community rooted in Christ.
        </p>

        <div class="mt-4 sm:mt-8">
          <a
            href="/join"
            class="inline-block rounded-full bg-[#b70213] px-12 py-3 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring focus:ring-green-400"
          >
            Become a Member
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Ensure full section styling for the image */
section img {
  z-index: -1;
}
</style>
