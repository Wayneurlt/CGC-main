<template>
  <AboutNavbar/>
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
  <HomeFoot/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AboutNavbar from '../components/AboutNavbar.vue';
import HomeFoot from '../components/HomeFoot.vue';
import sunday from "../assets/images/sunday.jpg";
import teen from "../assets/images/teen.jpg";
import youth from "../assets/images/youth.jpg";
import women from "../assets/images/women.jpg";
import man from "../assets/images/man.jpg";

const activeTab = ref(0);

const ministries = [
  {
    title: "Sunday School",
    shortTitle: "Sunday",
    description: "Sunday School provides a nurturing environment for children to learn about God's word through engaging lessons and activities.",
    image: sunday
  },
  {
    title: "Teens Ministry",
    shortTitle: "Teens",
    description: "Our Teens Ministry supports adolescents in their faith journey, addressing their unique challenges and spiritual growth.",
    image: teen
  },
  {
    title: "Youth Ministry",
    shortTitle: "Youth",
    description: "The Youth Ministry empowers young adults to grow in their faith and connect through fellowship, service, and worship.",
    image: youth
  },
  {
    title: "Women Ministries",
    shortTitle: "Women",
    description: "Women Ministries provides a supportive community for women to grow spiritually, share experiences, and serve others.",
    image: women
  },
  {
    title: "Men Ministries",
    shortTitle: "Men",
    description: "Men Ministries fosters spiritual growth and brotherhood among men, encouraging them to lead Christ-centered lives.",
    image: man
  }
];
</script>