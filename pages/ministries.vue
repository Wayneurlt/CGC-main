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
  <HomeFoot/>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import altarMinistry from "../assets/images/altar.jpg";
import prayerMinistry from "../assets/images/prayer.jpg";
import fellowshipMinistry from "../assets/images/fellowship.jpg";
import missionsMinistry from "../assets/images/missions.jpg";
import financeMinistry from "../assets/images/finance.jpg";

const activeTab = ref(0);

const ministries = [
  {
    title: "Altar Ministry",
    shortTitle: "Altar",
    description: "The Altar Ministry focuses on enhancing the worship experience and ensuring that church services run smoothly and effectively.",
    departments: [
      "Ushering",
      "Protocol and Hospitality",
      "Praise and Worship",
      "Interpretation"
    ],
    image: altarMinistry
  },
  {
    title: "Prayer Ministry",
    shortTitle: "Prayer",
    description: "Our Prayer Ministry is dedicated to intercession and spiritual warfare, creating a foundation of prayer for all church activities.",
    departments: [
      "Prayer department"
    ],
    image: prayerMinistry
  },
  {
    title: "Fellowship Development and Care Ministry",
    shortTitle: "Fellowship",
    description: "This ministry focuses on building community through various fellowship groups and providing care to meet the needs of our congregation.",
    departments: [
      "Men's fellowship",
      "Youth with praise",
      "The women fellowship",
      "Children's ministry",
      "Teenagers ministry",
      "Home churches",
      "Compassion services",
      "Cradle ministry"
    ],
    image: fellowshipMinistry
  },
  {
    title: "Missions Ministry",
    shortTitle: "Missions",
    description: "The Missions Ministry extends our church's influence beyond our walls through evangelism, church planting, and discipleship efforts.",
    departments: [
      "Missions to Institutions and Church Planting",
      "Outreach missions",
      "Discipleship and Internal missions"
    ],
    image: missionsMinistry
  },
  {
    title: "Finance, Planning and Information Technology Ministry",
    shortTitle: "Admin",
    description: "This ministry handles the administrative, financial, and technological aspects of our church to ensure effective operation and growth.",
    departments: [
      "Finance and Administration",
      "Maintenance and Repair of Equipment and Facilities",
      "Programme Coordination",
      "Information and Communication Technology (ICT)",
      "Training and Christian Development"
    ],
    image: financeMinistry
  }
];
</script>