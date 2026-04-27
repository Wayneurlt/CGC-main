<script setup lang="ts">
useHead({
  title: 'Know God — Growth Centre Church',
  meta: [
    { name: 'description', content: 'Discover the steps to knowing God personally through Jesus Christ. Your spiritual journey starts here.' },
  ],
});

const defaultImage = 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&auto=format&fit=crop&q=80';

const steps = [
  {
    title: "Acknowledge God's Personhood",
    description: "Recognize that God is a personal being who desires a relationship with you. Understanding this is foundational to building a meaningful connection with your Creator.",
    image: '/assets/images/1-Majestic mountain.jpeg',
    fallback: 'https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: "Accept Your Need for Salvation",
    description: "Acknowledge that you are a sinner in need of God's grace. No matter how good a life we try to live, we all fall short of God's perfect standard. Accepting this truth is the first step toward receiving God's forgiveness through Jesus Christ.",
    image: '/assets/images/2-acceptance.jpeg',
    fallback: 'https://images.unsplash.com/photo-1438232992991-995b671e4b84?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: "Accept Jesus Christ as Your Savior",
    description: "Believe that Jesus died for your sins and rose again, bridging the gap between humanity and God. Place your trust in Him for the forgiveness of your sins and the gift of eternal life.",
    image: '/assets/images/3-cross.jpeg',
    fallback: 'https://images.unsplash.com/photo-1609899258043-ba86e1b04da3?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: "Engage with God's Word",
    description: "Regularly read and study the Bible to understand God's character, promises, and will for your life. Scripture serves as the primary means through which God communicates with us.",
    image: '/assets/images/4-Bible.jpeg',
    fallback: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: "Cultivate a Life of Prayer",
    description: "Develop a consistent prayer life, involving both speaking to God and listening for His guidance. Prayer fosters intimacy and aligns your heart with God's purposes.",
    image: '/assets/images/5-prayer.jpeg',
    fallback: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: "Obey God's Commands",
    description: "Apply the teachings of the Bible in your daily life. Obedience to God's Word deepens your relationship with Him and reflects your commitment to Christ.",
    image: '/assets/images/6-obedience.jpeg',
    fallback: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: "Fellowship with Other Believers",
    description: "Engage in a community of faith where you can grow, receive support, and serve others. Fellowship provides encouragement and accountability on your spiritual journey.",
    image: '/assets/images/7-fellowship.jpeg',
    fallback: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: "Seek the Guidance of the Holy Spirit",
    description: "Be attentive to the Holy Spirit's leading in your life, allowing Him to transform you and reveal God's will. Walking in the Spirit empowers you to live according to God's purposes.",
    image: '/assets/images/8-guidance.jpeg',
    fallback: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&auto=format&fit=crop&q=80',
  },
];

const handleImageError = (e: Event, fallback: string) => {
  const img = e.target as HTMLImageElement;
  if (img.src !== fallback) {
    img.src = fallback;
  } else {
    img.src = defaultImage;
  }
};
</script>

<template>
  <HomeNavbar />
  <main class="bg-white flex-1">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-14 overflow-hidden bg-gradient-to-b from-[#0d1f3c] to-[#1b3764]">
      <div class="absolute inset-0 opacity-30">
        <img src="/assets/images/4-Bible.jpeg" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-[#c4932a]/50 rounded-full px-4 py-1.5 mb-6">
          <span class="w-2 h-2 rounded-full bg-[#c4932a] animate-pulse"></span>
          <span class="text-[#c4932a] text-sm font-semibold">Your Spiritual Journey</span>
        </div>
        <h1 class="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
          KNOW <span class="text-[#c4932a]">GOD</span>
        </h1>
        <p class="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          You were created to know God in a personal way — to have a relationship with Him, through His Son, Jesus Christ.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/join"
            class="inline-flex items-center justify-center px-8 py-4 bg-[#1b3764] text-white font-semibold rounded-xl hover:bg-[#0f2347] transition-all duration-200 hover:shadow-xl"
          >
            Start Your Journey
          </NuxtLink>
          <a
            href="#steps"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            See the Steps
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Steps Section -->
    <section id="steps" class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <span class="inline-block text-[#c4932a] font-semibold text-sm uppercase tracking-widest mb-3">The Path</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">8 Steps to Knowing God</h2>
        </div>

        <div class="space-y-12">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="grid md:grid-cols-2 gap-6 lg:gap-16 items-center"
          >
            <!-- Image — flips order on even/odd rows via order utilities -->
            <div
              class="relative rounded-3xl overflow-hidden shadow-2xl"
              :class="index % 2 === 1 ? 'md:order-2' : 'md:order-1'"
            >
              <img
                :src="step.image"
                :alt="step.title"
                class="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
                @error="(e: Event) => handleImageError(e, step.fallback)"
              />
              <div class="absolute top-4 left-4 w-12 h-12 bg-[#c4932a] rounded-2xl flex items-center justify-center shadow-lg">
                <span class="text-white font-extrabold text-lg">{{ index + 1 }}</span>
              </div>
            </div>

            <!-- Content -->
            <div :class="index % 2 === 1 ? 'md:order-1' : 'md:order-2'">
              <span class="text-[#c4932a] font-bold text-sm uppercase tracking-widest">STEP {{ index + 1 }}</span>
              <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed text-lg">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prayer Request Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div class="grid lg:grid-cols-2">
            <!-- Image -->
            <div
              class="h-64 lg:h-full bg-cover bg-center min-h-[300px]"
              style="background-image: url('/assets/images/5-prayer.jpeg');"
            ></div>

            <!-- Content -->
            <div class="px-8 py-12 lg:px-12">
              <div class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#dce8f7] mb-6">
                <svg class="w-6 h-6 text-[#1b3764]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Need Someone to <span class="text-[#c4932a]">Pray for You?</span>
              </h2>
              <p class="text-gray-600 leading-relaxed mb-8">
                We believe in the power of prayer and would love to support you in your spiritual journey. Share your prayer requests with us, and our dedicated prayer team will keep you in our thoughts and prayers.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <NuxtLink
                  to="/join"
                  class="inline-flex items-center justify-center px-6 py-3.5 bg-[#1b3764] text-white font-semibold rounded-xl hover:bg-[#0f2347] transition-all duration-200"
                >
                  Request Prayer
                </NuxtLink>
                <NuxtLink
                  to="/about"
                  class="inline-flex items-center justify-center px-6 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#1b3764] hover:text-[#1b3764] transition-all duration-200"
                >
                  Contact Us
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <HomeFoot />
</template>
