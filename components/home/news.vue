<template>
  <section class="py-10 bg-gray-50 sm:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
          Church News & Announcements
        </h2>
        <p class="mt-4 text-base text-gray-600">
          Stay informed with the latest news, events, and updates from the Christian Growth Center Church.
        </p>
      </div>

      <div class="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <!-- Featured Event -->
        <div class="overflow-hidden bg-white shadow-md transform transition-transform duration-300 hover:scale-105">
          <img
            class="object-cover w-full h-56"
            src="/assets/images/jesus.jpg"
            alt="Church Event 1"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-black">
              Sunday Worship Service
            </h3>
            <p class="mt-3 text-sm text-gray-600">
              Join us this Sunday for a spirit-filled worship experience. Everyone is welcome!
            </p>
            <a
              href="#"
              class=" mt-4 text-sm font-medium text-[#b70213] hover:text-green-700 flex items-center gap-1 group"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Testimony Spotlight -->
        <div class="overflow-hidden bg-white shadow-md transform transition-transform duration-300 hover:scale-105">
          <img
            class="object-cover w-full h-56"
            src="/assets/images/cross.jpg"
            alt="Church Testimony"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-black">
              Member Testimony
            </h3>
            <p class="mt-3 text-sm text-gray-600">
              Be inspired by Sister Grace’s testimony of how God transformed her life through faith and prayer.
            </p>
            <a
              href="#"
              class=" mt-4 text-sm font-medium text-[#b70213] hover:text-green-700 flex items-center gap-1 group"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Church Announcement -->
        <div class="overflow-hidden bg-white shadow-md transform transition-transform duration-300 hover:scale-105">
          <img
            class="object-cover w-full h-56"
            src="/assets/images/leaders.webp"
            alt="Church Announcement"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-black">
              Monthly Prayer Meeting
            </h3>
            <p class="mt-3 text-sm text-gray-600">
              Don’t miss our monthly prayer meeting as we come together to seek God’s guidance and blessings.
            </p>
            <a
              href="#"
              class=" mt-4 text-sm font-medium text-[#b70213] hover:text-green-700 flex items-center gap-1 group"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
