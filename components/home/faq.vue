<template>
  <section class="py-10 sm:py-16 lg:py-12 bg-white">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
      </div>
      <div
        class="max-w-3xl mx-auto mt-4 space-y-4 md:mt-16 border border-gray-200 z-[100] relative"
      >
        <div
          class="transition-all duration-200 shadow-lg cursor-pointer 2xl:ext-xl"
        >
          <button
            @click="activeIndex == 1 ? (activeIndex = 0) : (activeIndex = 1)"
            class="flex justify-between w-full px-4 py-5 sm:p-6 gap-3"
          >
            <span class="flex 2xl:text-2xl text-start font-semibold">
              How can I become a member of this church?
            </span>

            <svg
              :class="{ 'rotate-180': activeIndex === 1 }"
              class="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div v-if="activeIndex === 1" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>
              Becoming a member is simple! Visit our membership page or attend
              our Sunday service. Speak with any of our church leaders to learn
              more and complete your membership registration.
            </p>
          </div>
        </div>
        <div
          class="transition-all duration-200 shadow-lg cursor-pointer 2xl:text-xl"
        >
          <button
            @click="activeIndex == 2 ? (activeIndex = 0) : (activeIndex = 2)"
            class="flex justify-between w-full px-4 py-5 sm:p-6 cursor-pointer gap-3"
          >
            <span
              class="flex 2xl:text-2xl font-semibold text-start cursor-pointer"
            >
              What programs does the church offer?
            </span>

            <svg
              :class="{ 'rotate-180': activeIndex === 2 }"
              class="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div v-if="activeIndex === 2" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>
              Our church offers a range of programs including Bible study groups,
              youth mentorship, community outreach initiatives, worship nights,
              and prayer sessions to support spiritual growth and fellowship.
            </p>
          </div>
        </div>
        <div
          class="transition-all duration-200 shadow-lg cursor-pointer 2xl:text-xl"
        >
          <button
            @click="activeIndex == 3 ? (activeIndex = 0) : (activeIndex = 3)"
            class="flex justify-between w-full px-4 py-5 sm:p-6 cursor-pointer gap-3"
          >
            <span
              class="flex 2xl:text-2xl font-semibold text-start cursor-pointer"
            >
              How can I get involved in the church's activities?
            </span>

            <svg
              :class="{ 'rotate-180': activeIndex === 3 }"
              class="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div v-if="activeIndex === 3" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>
              You can participate in various church activities by joining our
              volunteer programs, small groups, or outreach events. Check our
              events calendar or speak with our ministry leaders for more
              details.
            </p>
          </div>
        </div>
        <div
          class="transition-all duration-200 shadow-lg cursor-pointer 2xl:text-xl"
        >
          <button
            @click="activeIndex == 4 ? (activeIndex = 0) : (activeIndex = 4)"
            class="flex justify-between w-full px-4 py-5 sm:p-6 cursor-pointer gap-3"
          >
            <span
              class="flex 2xl:text-2xl font-semibold text-start cursor-pointer"
            >
              What support services does the church provide?
            </span>

            <svg
              :class="{ 'rotate-180': activeIndex === 4 }"
              class="w-6 h-6 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div v-if="activeIndex === 4" class="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>
              We provide counseling services, financial assistance for those in
              need, and spiritual guidance to support our members through
              challenging times. Reach out to our pastoral team for help.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
let activeIndex = ref(0);
</script>
