<template>
  <footer class="bg-[#0d1f3c] text-gray-300 mt-auto">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="inline-flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="Growth Centre Church Logo"
              class="w-14 h-14 rounded-full object-contain bg-white p-1"
              @error="onLogoError"
            />
            <span class="text-white font-bold text-lg leading-tight">
              Growth Centre<br /><span class="text-[#c4932a]">Church</span>
            </span>
          </NuxtLink>
          <p class="text-sm text-gray-400 leading-relaxed mb-6">
            A community of faith, hope, and love, dedicated to serving God and building each other in Christ since 1990.
          </p>
          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <a
              href="https://web.facebook.com/mediagcc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="w-9 h-9 flex items-center justify-center rounded-full bg-[#1b3764]/30 text-gray-400 hover:bg-[#c4932a] hover:text-white transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ChristianGrowthcenterchurch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              class="w-9 h-9 flex items-center justify-center rounded-full bg-[#1b3764]/30 text-gray-400 hover:bg-[#c4932a] hover:text-white transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.761-42.126-48.419-48.419C457.16 64 288 64 288 64s-169.16 0-213.236 11.664c-23.659 6.293-42.138 24.769-48.419 48.419C16 168.163 16 256.019 16 256.019s0 87.837 10.345 131.936c6.281 23.65 24.761 42.126 48.419 48.419C118.84 448 288 448 288 448s169.16 0 213.236-11.626c23.659-6.293 42.138-24.769 48.419-48.419C560 343.856 560 256 560 256s0-87.837-10.345-131.917zM232 336V176l142.857 80L232 336z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/254722636926"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              class="w-9 h-9 flex items-center justify-center rounded-full bg-[#1b3764]/30 text-gray-400 hover:bg-[#c4932a] hover:text-white transition-all duration-200"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#c4932a] flex-shrink-0"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Ministries -->
        <div>
          <h3 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Ministries</h3>
          <ul class="space-y-3">
            <li v-for="ministry in ministryLinks" :key="ministry">
              <NuxtLink
                to="/ministries"
                class="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#c4932a] flex-shrink-0"></span>
                {{ ministry }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-4 h-4 text-[#c4932a] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm text-gray-400">Uganda Road, Eldoret City, Kenya</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-[#c4932a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+254722636926" class="text-sm text-gray-400 hover:text-white transition-colors">+254 722 636 926</a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-4 h-4 text-[#c4932a] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:growthcentrechurch@gmail.com" class="text-sm text-gray-400 hover:text-white transition-colors">growthcentrechurch@gmail.com</a>
            </li>
            <!-- Service Times -->
            <li class="mt-2 pt-4 border-t border-gray-800">
              <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">Service Times</p>
              <div class="space-y-1 text-sm text-gray-400">
                <p>Sunday — 10:00 AM</p>
                <p>Wednesday — 7:00 PM</p>
                <p>Friday — 6:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-[#1b3764]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} Growth Centre Church, Eldoret. All rights reserved.
        </p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <span>Built with ♥ for the Kingdom</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const onLogoError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.style.display = 'none';
};

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/ministries', label: 'Ministries' },
  { to: '/serve', label: 'Serve' },
  { to: '/know', label: 'Know God' },
  { to: '/join', label: 'Join Us' },
];

const ministryLinks = [
  'Altar Ministry',
  'Prayer Ministry',
  'Youth with Praise',
  'Men\'s Fellowship',
  'Women\'s Fellowship',
  'Missions Ministry',
];
</script>
