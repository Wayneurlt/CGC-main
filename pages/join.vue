<script setup lang="ts">
import { push } from 'notivue';

useHead({
  title: 'Join Us — Growth Centre Church',
  meta: [
    { name: 'description', content: 'Become a member of Growth Centre Church, Eldoret. Fill in your details to connect with us.' },
  ],
});

const form = reactive({
  name: '',
  email: '',
  phone: '',
});

const loading = ref(false);

const benefits = [
  'Inspiring Sermons',
  'Fellowship Groups',
  'Community Outreach',
  'Bible Studies',
  'Youth Programs',
  'Prayer Support',
];

const onImgError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = 'https://images.unsplash.com/photo-1609899258043-ba86e1b04da3?w=1200&auto=format&fit=crop&q=80';
};

const handleSubmit = async () => {
  loading.value = true;
  try {
    const response = await fetch('https://byzara.life/api/ebonyi/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone }),
    });

    if (response.status === 200 || response.ok) {
      push.success("Welcome! Your information has been submitted. We'll be in touch soon.");
      form.name = '';
      form.email = '';
      form.phone = '';
    } else {
      push.error('Submission failed. Please try again.');
    }
  } catch (error: any) {
    push.error('An error occurred. Please try again later.');
    console.error('Submission error:', error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <HomeNavbar />
  <main class="flex-1 bg-white pt-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
      <!-- Left Panel – Image + Info -->
      <div class="relative hidden lg:flex flex-col justify-end overflow-hidden">
        <img
          class="absolute inset-0 w-full h-full object-cover object-center"
          src="/assets/images/cross.jpg"
          alt="Church Community"
          @error="onImgError"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div class="relative p-10 pb-12">
          <h2 class="text-4xl font-bold text-white mb-4 leading-tight">
            Welcome to<br />Our Church Family
          </h2>
          <p class="text-lg text-gray-200 mb-8 max-w-md">
            Join a community that nurtures your faith, fosters spiritual growth, and provides a space to connect and serve.
          </p>
          <ul class="grid grid-cols-2 gap-3">
            <li v-for="benefit in benefits" :key="benefit" class="flex items-center gap-2">
              <div class="w-5 h-5 bg-[#1b3764] rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-white font-medium text-sm">{{ benefit }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Panel – Form -->
      <div class="flex items-center justify-center px-4 py-12 sm:px-8 bg-white">
        <div class="w-full max-w-md">
          <!-- Mobile hero text -->
          <div class="lg:hidden mb-8 text-center">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Join Our Church</h1>
            <p class="text-gray-600">Become part of our growing family in Christ.</p>
          </div>

          <!-- Desktop header -->
          <div class="hidden lg:block mb-8">
            <h2 class="text-3xl font-bold text-gray-900">Join Our Church Family</h2>
            <p class="mt-2 text-base text-gray-600">
              Fill in your details to connect with us and be part of our mission.
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-5" novalidate>
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-900 mb-1.5">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                v-model="form.name"
                required
                placeholder="Enter your full name"
                class="block w-full py-3.5 px-4 text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all duration-200"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-semibold text-gray-900 mb-1.5">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                v-model="form.email"
                required
                placeholder="Enter your email address"
                class="block w-full py-3.5 px-4 text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all duration-200"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-900 mb-1.5">
                Phone Number <span class="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                v-model="form.phone"
                required
                placeholder="+254 700 000 000"
                class="block w-full py-3.5 px-4 text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              :disabled="loading || !form.name || !form.email || !form.phone"
              class="w-full flex items-center justify-center gap-2 py-4 text-base font-semibold text-white bg-[#1b3764] rounded-xl hover:bg-[#0f2347] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg mt-2"
            >
              <span v-if="loading" class="loader"></span>
              <span>{{ loading ? 'Submitting...' : 'Join Our Church' }}</span>
            </button>

            <div class="relative my-2">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="bg-white px-3 text-gray-500">Or connect with us on</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <a
                href="https://web.facebook.com/mediagcc/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24h11.497v-9.294H9.847v-3.622h2.976v-2.687c0-2.938 1.797-4.548 4.42-4.548 1.256 0 2.339.093 2.654.135v3.074h-1.821c-1.43 0-1.706.678-1.706 1.673v2.354h3.413l-.445 3.622h-2.968V24h5.811c.733 0 1.326-.593 1.326-1.326V1.326C24 .594 23.407 0 22.676 0z"/>
                </svg>
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@ChristianGrowthcenterchurch"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all duration-200"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.761-42.126-48.419-48.419C457.16 64 288 64 288 64s-169.16 0-213.236 11.664c-23.659 6.293-42.138 24.769-48.419 48.419C16 168.163 16 256.019 16 256.019s0 87.837 10.345 131.936c6.281 23.65 24.761 42.126 48.419 48.419C118.84 448 288 448 288 448s169.16 0 213.236-11.626c23.659-6.293 42.138-24.769 48.419-48.419C560 343.856 560 256 560 256s0-87.837-10.345-131.917zM232 336V176l142.857 80L232 336z"/>
                </svg>
                YouTube
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  <HomeFoot />
</template>
