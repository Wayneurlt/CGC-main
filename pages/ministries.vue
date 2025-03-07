<template>
  <AboutNavbar />
  <section class="w-full overflow-hidden px-4 py-10 mt-16 lg:mt-24 lg:px-16 2xl:px-48 bg-white">
    <div class="mx-auto max-w-7xl">
      <!-- Header Section -->
      <div class="max-w-2xl space-y-4">
        <h2 class="text-2xl lg:text-3xl font-semibold text-[#b70213]">
          Church Ministries
        </h2>
        <p class="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-black">
          Engage and grow in faith.
        </p>
        <p class="text-base lg:text-lg text-slate-700 dark:text-gray-700 max-w-xl">
          Our church ministries provide diverse opportunities to connect, serve, and grow spiritually. Join a group that resonates with your journey in faith.
        </p>
        
        <a href="/" class="inline-flex items-center text-[#b70213] hover:text-slate-700 font-semibold group">
          Explore all ministries
          <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      <!-- Tabs Section -->
      <div class="mt-12 lg:mt-16">
        <div class="flex overflow-x-auto gap-4 lg:grid lg:grid-cols-5 lg:gap-8 pb-4 lg:pb-0">
          <button
            v-for="(ministry, index) in ministries"
            :key="index"
            @click="activeTab = index"
            class="flex-none min-w-[200px] lg:min-w-0 p-4 rounded-lg transition-all"
            :class="[
              activeTab === index 
                ? 'bg-[#b70213] text-white' 
                : 'hover:bg-slate-100 text-slate-700'
            ]"
          >
            <div class="text-sm font-semibold mb-2">{{ ministry.shortTitle }}</div>
            <h3 class="text-base font-semibold mb-2 hidden lg:block">{{ ministry.title }}</h3>
            <p class="text-sm leading-relaxed hidden lg:block">
              {{ ministry.description }}
            </p>
          </button>
        </div>

        <!-- Mobile Description -->
        <div class="mt-6 lg:hidden">
          <h3 class="text-xl font-semibold mb-2">{{ ministries[activeTab].title }}</h3>
          <p class="text-slate-700">{{ ministries[activeTab].description }}</p>
        </div>

        <!-- Ministry Departments Section -->
        <div class="mt-8 bg-slate-50 p-6 rounded-lg">
          <h4 class="text-lg font-semibold mb-4">Departments</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li v-for="(department, idx) in ministries[activeTab].departments" :key="idx" class="flex items-start">
              <span class="text-[#b70213] mr-2">•</span>
              <span>{{ department }}</span>
            </li>
          </ul>
        </div>

        <!-- Image Section -->
        <div class="mt-8 overflow-hidden rounded-2xl">
          <img
            :src="ministries[activeTab].image"
            :alt="ministries[activeTab].title"
            class="w-full aspect-[1216/640] object-cover transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  <HomeFoot />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref(0);

const ministries = [
  {
    title: "Sunday School Ministry",
    shortTitle: "Sunday School",
    description: "The Sunday School Ministry focuses on teaching children and young people the foundational truths of the Bible in a fun and engaging way.",
    departments: [
      "Children's Classes",
      "Teen Classes",
      "Teachers Training",
      "Curriculum Development"
    ],
    image: "https://placehold.co/1216x640/EEE/31343C?text=Sunday+School" // Placeholder image
  },
  {
    title: "Teen Ministries",
    shortTitle: "Teen",
    description: "Our Teen Ministries provide a safe and supportive environment for teenagers to grow in their faith, build relationships, and serve others.",
    departments: [
      "Teen Bible Study",
      "Youth Events",
      "Mentorship Programs",
      "Community Service"
    ],
    image: "https://placehold.co/1216x640/EEE/31343C?text=Teen+Ministries" // Placeholder image
  },
  {
    title: "Youth Ministry",
    shortTitle: "Youth",
    description: "The Youth Ministry is dedicated to empowering young adults to live out their faith through worship, discipleship, and outreach.",
    departments: [
      "Youth Worship",
      "Small Groups",
      "Mission Trips",
      "Leadership Training"
    ],
    image: "https://placehold.co/1216x640/EEE/31343C?text=Youth+Ministry" // Placeholder image
  },
  {
    title: "Men's Ministry",
    shortTitle: "Men",
    description: "The Men's Ministry focuses on building strong, godly men through fellowship, Bible study, and service opportunities.",
    departments: [
      "Men's Bible Study",
      "Retreats",
      "Accountability Groups",
      "Service Projects"
    ],
    image: "https://placehold.co/1216x640/EEE/31343C?text=Men's+Ministry" // Placeholder image
  },
  {
    title: "Women's Ministry",
    shortTitle: "Women",
    description: "The Women's Ministry provides a space for women to connect, grow spiritually, and support one another through life's challenges.",
    departments: [
      "Women's Bible Study",
      "Retreats",
      "Mentorship Programs",
      "Community Outreach"
    ],
    image: "https://placehold.co/1216x640/EEE/31343C?text=Women's+Ministry" // Placeholder image
  }
];
</script>