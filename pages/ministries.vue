<script setup lang="ts">
useHead({
  title: 'Ministries — Growth Centre Church',
  meta: [
    { name: 'description', content: 'Explore the diverse ministries of Growth Centre Church – from Sunday School and Youth to Men\'s and Women\'s Ministry.' },
  ],
});

const activeTab = ref(0);

const onImgError = (e: Event) => {
  const img = e.target as HTMLImageElement;
  img.src = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1216&h=640&auto=format&fit=crop&q=80';
};

const selectTab = (index: number) => {
  activeTab.value = index;
  if (import.meta.client) {
    const section = document.getElementById('ministry-detail');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

const ministries = [
  {
    title: 'Sunday School Ministry',
    shortTitle: 'Sunday School',
    icon: '📖',
    description: 'Teaching children and young people the foundational truths of the Bible in a fun and engaging way.',
    departments: ["Children's Classes", 'Teen Classes', 'Teachers Training', 'Curriculum Development'],
    image: '/assets/images/sunday.jpg',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Teen Ministries',
    shortTitle: 'Teen',
    icon: '🙌',
    description: 'A safe and supportive environment for teenagers to grow in their faith, build relationships, and serve others.',
    departments: ['Teen Bible Study', 'Youth Events', 'Mentorship Programs', 'Community Service'],
    image: '/assets/images/teen.jpg',
    color: 'from-purple-500 to-purple-700',
  },
  {
    title: 'Youth Ministry',
    shortTitle: 'Youth',
    icon: '⚡',
    description: 'Empowering young adults to live out their faith through worship, discipleship, and outreach.',
    departments: ['Youth Worship', 'Small Groups', 'Mission Trips', 'Leadership Training'],
    image: '/assets/images/youth.jpg',
    color: 'from-orange-500 to-orange-700',
  },
  {
    title: "Men's Ministry",
    shortTitle: 'Men',
    icon: '💪',
    description: 'Building strong, godly men through fellowship, Bible study, and service opportunities.',
    departments: ["Men's Bible Study", 'Retreats', 'Accountability Groups', 'Service Projects'],
    image: '/assets/images/man.jpg',
    color: 'from-gray-600 to-gray-800',
  },
  {
    title: "Women's Ministry",
    shortTitle: 'Women',
    icon: '🌸',
    description: "A space for women to connect, grow spiritually, and support one another through life's challenges.",
    departments: ["Women's Bible Study", 'Retreats', 'Mentorship Programs', 'Community Outreach'],
    image: '/assets/images/women.jpg',
    color: 'from-pink-500 to-pink-700',
  },
];
</script>

<template>
  <AboutNavbar />
  <main class="flex-1 bg-white">
    <!-- Hero -->
    <section class="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block text-[#c4932a] font-semibold text-sm uppercase tracking-widest mb-3">
            Get Involved
          </span>
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Church Ministries
          </h1>
          <p class="text-xl text-gray-600 mb-2 font-medium">Engage and grow in faith.</p>
          <p class="text-base text-gray-600 max-w-xl">
            Our church ministries provide diverse opportunities to connect, serve, and grow spiritually. Find a group that resonates with your journey.
          </p>
          <NuxtLink
            to="/serve"
            class="mt-6 inline-flex items-center gap-2 text-[#1b3764] font-semibold hover:gap-3 transition-all duration-200"
          >
            Want to serve? Apply here
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Ministry Tabs + Content -->
    <section class="pb-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Tabs -->
        <div
          role="tablist"
          aria-label="Church ministries"
          class="flex overflow-x-auto gap-3 pb-4 lg:pb-0 lg:grid lg:grid-cols-5 lg:gap-4 mb-8 scrollbar-hide"
        >
          <button
            v-for="(ministry, index) in ministries"
            :key="index"
            role="tab"
            :aria-selected="activeTab === index"
            :aria-controls="`ministry-detail`"
            :id="`tab-${index}`"
            @click="activeTab = index"
            class="flex-none min-w-[140px] lg:min-w-0 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1b3764] focus-visible:ring-offset-2"
            :class="[
              activeTab === index
                ? 'bg-[#1b3764] text-white shadow-lg shadow-blue-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
          >
            <span class="text-lg block mb-1" aria-hidden="true">{{ ministry.icon }}</span>
            <span>{{ ministry.shortTitle }}</span>
          </button>
        </div>

        <!-- Active Ministry Content -->
        <div id="ministry-detail" role="tabpanel" :aria-labelledby="`tab-${activeTab}`" class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div class="grid lg:grid-cols-2 gap-0">
            <!-- Image -->
            <div class="relative h-64 lg:h-auto overflow-hidden">
              <img
                :src="ministries[activeTab].image"
                :alt="ministries[activeTab].title"
                class="w-full h-full object-cover transition-opacity duration-300"
                loading="lazy"
                @error="onImgError"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent"></div>
              <!-- Mobile title overlay -->
              <div class="absolute bottom-4 left-4 lg:hidden">
                <h2 class="text-2xl font-bold text-white">{{ ministries[activeTab].title }}</h2>
              </div>
            </div>

            <!-- Info -->
            <div class="p-8 lg:p-10">
              <h2 class="hidden lg:block text-3xl font-bold text-gray-900 mb-4">
                {{ ministries[activeTab].title }}
              </h2>
              <p class="text-gray-600 leading-relaxed mb-8">
                {{ ministries[activeTab].description }}
              </p>

              <h3 class="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Departments</h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                <li
                  v-for="dept in ministries[activeTab].departments"
                  :key="dept"
                  class="flex items-center gap-2 text-sm text-gray-700"
                >
                  <svg class="w-4 h-4 text-[#1b3764] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {{ dept }}
                </li>
              </ul>

              <NuxtLink
                to="/serve"
                class="inline-flex items-center gap-2 px-6 py-3 bg-[#1b3764] text-white font-semibold rounded-xl hover:bg-[#0f2347] transition-all duration-200"
              >
                Get Involved
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- All ministries grid -->
        <div class="mt-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">All Ministry Areas</h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <button
              v-for="(ministry, index) in ministries"
              :key="`grid-${index}`"
              @click="selectTab(index)"
              class="group p-5 rounded-2xl border-2 text-left transition-all duration-200"
              :class="[
                activeTab === index
                  ? 'border-[#1b3764] bg-[#eef2f9]'
                  : 'border-gray-100 bg-white hover:border-[#1b3764]/40 hover:bg-red-50/50',
              ]"
            >
              <span class="text-2xl block mb-3">{{ ministry.icon }}</span>
              <h3 class="font-bold text-gray-900 text-sm mb-1">{{ ministry.title }}</h3>
              <p class="text-xs text-gray-500 line-clamp-2">{{ ministry.description }}</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
  <HomeFoot />
</template>
