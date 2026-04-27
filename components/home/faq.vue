<template>
  <section class="py-12 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <span class="inline-block text-[#c4932a] font-semibold text-xs uppercase tracking-widest mb-2">Got Questions?</span>
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>

      <div class="space-y-2">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b3764] focus-visible:ring-inset"
            :aria-expanded="activeIndex === index"
          >
            <div class="flex items-center gap-3">
              <span class="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#dce8f7] text-[#1b3764] text-xs font-bold">
                {{ index + 1 }}
              </span>
              <span class="font-semibold text-gray-900 text-sm sm:text-base text-left">{{ faq.question }}</span>
            </div>
            <svg
              class="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180 text-[#1b3764]': activeIndex === index }"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="activeIndex === index" class="overflow-hidden">
              <div class="px-5 pb-4 pt-2 border-t border-gray-100 bg-gray-50/50">
                <p class="text-gray-600 text-sm leading-relaxed pl-10">{{ faq.answer }}</p>
                <div v-if="faq.link" class="pl-10 mt-2.5">
                  <NuxtLink
                    :to="faq.link.to"
                    class="inline-flex items-center gap-1 text-sm font-semibold text-[#1b3764] hover:underline"
                  >
                    {{ faq.link.label }}
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-7 text-center p-6 bg-[#eef2f9] rounded-xl">
        <h3 class="text-base font-bold text-gray-900 mb-1">Still have questions?</h3>
        <p class="text-sm text-gray-500 mb-4">Our team is always happy to help.</p>
        <NuxtLink
          to="/about"
          class="inline-flex items-center justify-center px-6 py-2.5 bg-[#1b3764] text-white text-sm font-semibold rounded-lg hover:bg-[#0f2347] transition-all duration-200"
        >
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeIndex = ref<number | null>(null);
const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  {
    question: 'How can I become a member of this church?',
    answer: 'Becoming a member is simple! Attend our Sunday service at 10:00 AM or visit our membership page. Speak with any of our church leaders to complete your registration.',
    link: { to: '/join', label: 'Start your membership' },
  },
  {
    question: 'What programs does the church offer?',
    answer: 'We offer Bible study groups, youth mentorship, community outreach, worship nights, and prayer sessions to support your spiritual growth and fellowship.',
    link: { to: '/ministries', label: 'Explore our ministries' },
  },
  {
    question: 'How can I get involved in the church\'s activities?',
    answer: 'Join our volunteer programs, small groups, or outreach events. Visit our Serve page to find ministry areas that match your gifts and availability.',
    link: { to: '/serve', label: 'Find a place to serve' },
  },
  {
    question: 'What support services does the church provide?',
    answer: 'We provide counseling services, financial assistance for those in need, and spiritual guidance. Reach out to our pastoral team for help.',
    link: null,
  },
  {
    question: 'Where are you located and when are services held?',
    answer: 'Uganda Road, Eldoret. Sunday Worship — 10:00 AM | Wednesday Bible Study — 7:00 PM | Friday Youth Fellowship — 6:00 PM.',
    link: { to: '/about', label: 'Get directions' },
  },
];
</script>
