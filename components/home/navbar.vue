<template>
  <nav
    :class="[
      'fixed top-0 w-full z-[1000] transition-all duration-300',
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14 lg:h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center flex-shrink-0">
          <img
            class="h-10 lg:h-14 w-auto"
            src="/logo.png"
            alt="Growth Centre Church"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1 lg:gap-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
            :class="isScrolled
              ? 'text-gray-700 hover:text-[#1b3764] hover:bg-[#eef2f9]'
              : 'text-white hover:text-white/80'"
            active-class="!text-[#1b3764] !bg-[#eef2f9]"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/join"
            class="ml-2 px-5 py-2.5 bg-[#1b3764] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:bg-[#0f2347] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1b3764] focus:ring-offset-2 whitespace-nowrap"
          >
            Join Us
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 rounded-md transition-colors duration-200"
          :class="isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          aria-label="Toggle navigation menu"
          :aria-expanded="isMenuOpen"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition name="mobile-menu">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white border-t border-gray-100 shadow-lg"
      >
        <div class="px-4 py-3 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            @click="isMenuOpen = false"
            class="block px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-[#eef2f9] hover:text-[#1b3764] transition-colors duration-200"
            active-class="!bg-[#eef2f9] !text-[#1b3764]"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            to="/join"
            @click="isMenuOpen = false"
            class="block mt-2 px-4 py-3 bg-[#1b3764] text-white text-center font-semibold rounded-lg hover:bg-[#0f2347] transition-colors duration-200"
          >
            Join Us
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const navLinks = [
  { to: '/know', label: 'Know God' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/serve', label: 'Serve' },
  { to: '/about', label: 'About Us' },
];

let scrollHandler: (() => void) | null = null;

onMounted(() => {
  scrollHandler = () => {
    isScrolled.value = window.scrollY > 10;
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });
  scrollHandler();
});

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
  }
});

const route = useRoute();
watch(() => route.path, () => {
  isMenuOpen.value = false;
});
</script>
