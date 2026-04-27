<script setup lang="ts">
useHead({
  title: 'About Us — Growth Centre Church',
  meta: [
    { name: 'description', content: 'Learn about the history, mission, leadership and ministries of Christian Growth Centre Church, Eldoret.' },
  ],
});

const leaders = ref([
  { id: 1, name: 'Evans Mulunji', role: 'Bishop / Founding Pastor', photo: '/assets/images/bishop.jpg' },
  { id: 2, name: 'Jane Doe', role: 'Youth Ministry Leader', photo: '' },
  { id: 3, name: 'Mildred Ludenyi', role: 'Worship Leader', photo: '' },
]);

const branches = [
  { name: 'MAILI NNE', location: 'Eldoret Region' },
  { name: 'HAMTUA', location: 'Eldoret Region' },
  { name: 'LUMAKANDA', location: 'Kakamega County' },
  { name: 'KITENGELA', location: 'Kajiado County' },
];

const churchInfo = {
  title: 'Growth Centre Church',
  established: '1990',
  mission: 'Our mission is to glorify God by leading people into a growing relationship with Jesus Christ, equipping them to serve and share His love with the world.',
  vision: 'Our vision is to be a vibrant, Christ-centred community that transforms lives and impacts the world for the glory of God.',
};

const ministries = [
  {
    title: 'ALTAR MINISTRY',
    icon: '🎶',
    departments: ['Ushering', 'Protocol and Hospitality', 'Praise and Worship', 'Interpretation'],
  },
  {
    title: 'PRAYER MINISTRY',
    icon: '🙏',
    departments: ['Prayer Department', 'Intercessory Team', 'Prayer Chain'],
  },
  {
    title: 'FELLOWSHIP & CARE',
    icon: '🤝',
    departments: ["Men's Fellowship", 'Youth with Praise', "Women's Fellowship", "Children's Ministry", 'Teenagers Ministry', 'Home Churches', 'Compassion Services', 'Cradle Ministry'],
  },
  {
    title: 'MISSIONS MINISTRY',
    icon: '🌍',
    departments: ['Missions to Institutions', 'Church Planting', 'Outreach Missions', 'Discipleship & Internal Missions'],
  },
  {
    title: 'FINANCE & ICT',
    icon: '💻',
    departments: ['Finance and Administration', 'Maintenance & Repair', 'Programme Coordination', 'Information & Communication Technology', 'Training & Christian Development'],
  },
];

const historyParas = [
  "From 1987 to 1990, a body of believers from different denominational backgrounds gathered together as an intercessory prayer group, operating from the home of Brother Evans Mulunji at the Eldoret Meteorological Station. This group ran outreach missions to schools, colleges, and remote communities across North Rift Valley and Western Kenya.",
  "In August 1990, under the direction of the Holy Spirit, an apostolic church was inaugurated following the Antiochan pattern — a worshipping, praying, Spirit-filled, obedient, and sending church. The ministry began under the umbrella of Africa for Christ Evangelistic Association (AFCEA), Kakamega.",
  "The first service of Christian Growth Centre (AFCEA) Eldoret was held on 2nd September 1990, attended by 19 members at a house on Old Uganda Road. The congregation rapidly grew, moving through various premises including the NCCK Dining Hall, White Castle Motel, and Kamau Mountain View.",
  "In February 1994, the name CGC was formally adopted. Real spiritual and numerical growth followed as the church hosted ministers from across the globe — USA, Bahamas, Jamaica, Israel, Uganda, and many Kenyan cities. In 1998, the current site on Uganda Road was acquired.",
  "From a humble beginning of 19 members, Christian Growth Centre has grown from strength to strength under the guidance of the Holy Spirit, with its central doctrine vested in the Triune God and intercession. The church continues to pursue the Antiochan pattern it was founded upon.",
];

const timeline = [
  { year: "'87", title: 'Prayer Group Founded', description: "A group of believers begins meeting at Evans Mulunji's home for intercessory prayer." },
  { year: "'90", title: 'Church Launched', description: 'CGC (AFCEA) Eldoret is officially inaugurated on 2nd September with 19 founding members.' },
  { year: "'92", title: 'Eldo-Fire Ministry', description: 'The ELDO-FIRE Ministry is established to train church ministers across North Rift Valley.' },
  { year: "'94", title: 'CGC Name Adopted', description: 'The name "Christian Growth Centre" is formally adopted, and the church moves to Uganda Road.' },
  { year: "'98", title: 'Permanent Home', description: 'The present church site along Uganda Road is acquired and the first Prayer Summit is held.' },
  { year: 'Now', title: 'Growing Strong', description: 'CGC continues to expand with multiple branches and a vibrant community across Kenya.' },
];

const serviceTimes = [
  { name: 'Sunday Worship', time: '10:00 AM' },
  { name: 'Wednesday Bible Study', time: '7:00 PM' },
  { name: 'Friday Youth Fellowship', time: '6:00 PM' },
];
</script>

<template>
  <HomeNavbar />

  <main class="bg-white flex-1">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-14 overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url('/assets/images/4-Bible.jpeg');"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block text-[#c4932a] bg-white/10 backdrop-blur-sm border border-white/20 font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Est. 1990 — Eldoret, Kenya
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          About <span class="text-[#c4932a]">{{ churchInfo.title }}</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          We are a community of faith, hope, and love — dedicated to serving God and transforming lives.
        </p>
        <NuxtLink
          to="/join"
          class="inline-flex items-center justify-center px-8 py-4 bg-[#1b3764] text-white font-semibold rounded-xl hover:bg-[#0f2347] transition-all duration-200 hover:shadow-xl"
        >
          Join Our Family
        </NuxtLink>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-5 lg:gap-12">
          <div class="bg-[#eef2f9] rounded-3xl p-8 lg:p-10">
            <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#1b3764] text-white mb-6">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p class="text-gray-700 leading-relaxed">{{ churchInfo.mission }}</p>
          </div>
          <div class="bg-[#0d1f3c] rounded-3xl p-8 lg:p-10">
            <div class="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#1b3764] text-white mb-6">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p class="text-gray-300 leading-relaxed">{{ churchInfo.vision }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-7">
          <span class="inline-block text-[#c4932a] font-semibold text-sm uppercase tracking-widest mb-3">Our Story</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Historical Background</h2>
        </div>
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <div class="space-y-5">
            <p v-for="(para, i) in historyParas" :key="i" class="text-gray-700 leading-relaxed">
              {{ para }}
            </p>
          </div>
          <!-- Timeline -->
          <div class="space-y-0">
            <div v-for="(event, i) in timeline" :key="i" class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 rounded-full bg-[#c4932a] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 z-10">
                  {{ event.year }}
                </div>
                <div v-if="i < timeline.length - 1" class="w-0.5 flex-1 bg-gray-200 my-1 min-h-[2rem]"></div>
              </div>
              <div class="pb-6 pt-2">
                <h4 class="font-bold text-gray-900 mb-1">{{ event.title }}</h4>
                <p class="text-sm text-gray-600 leading-relaxed">{{ event.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ministries Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-7">
          <span class="inline-block text-[#c4932a] font-semibold text-sm uppercase tracking-widest mb-3">Departments</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Our Ministries</h2>
          <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Diverse ministry areas designed to help every member find their place and purpose.
          </p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="ministry in ministries"
            :key="ministry.title"
            class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div class="text-3xl mb-4">{{ ministry.icon }}</div>
            <h3 class="text-base font-bold text-[#1b3764] mb-3 uppercase tracking-wide">{{ ministry.title }}</h3>
            <ul class="space-y-1.5">
              <li v-for="dept in ministry.departments" :key="dept" class="flex items-start gap-2 text-sm text-gray-600">
                <svg class="w-4 h-4 text-[#1b3764] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ dept }}
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-10">
          <NuxtLink to="/ministries" class="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1b3764] text-white font-semibold rounded-xl hover:bg-[#0f2347] transition-all duration-200">
            Explore All Ministries
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-7">
          <span class="inline-block text-[#c4932a] font-semibold text-sm uppercase tracking-widest mb-3">Leadership</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Meet Our Leaders</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <div
            v-for="leader in leaders"
            :key="leader.id"
            class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div class="relative bg-gray-100 h-56 overflow-hidden">
              <img
                v-if="leader.photo"
                class="w-full h-full object-cover object-top"
                :src="leader.photo"
                :alt="leader.name"
              />
              <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
                <svg class="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-bold text-gray-900">{{ leader.name }}</h3>
              <p class="text-sm text-[#1b3764] font-medium mt-1">{{ leader.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Branches Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-7">
          <span class="inline-block text-[#c4932a] font-semibold text-sm uppercase tracking-widest mb-3">Our Reach</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">Our Branches</h2>
          <p class="mt-4 text-lg text-gray-600">Growing the Kingdom across Kenya.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="branch in branches"
            :key="branch.name"
            class="group bg-gray-50 hover:bg-[#1b3764] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
          >
            <div class="w-12 h-12 mx-auto mb-4 bg-[#dce8f7] group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300">
              <svg class="w-6 h-6 text-[#1b3764] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-white mb-1 transition-colors duration-300">{{ branch.name }}</h3>
            <p class="text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300">{{ branch.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Times & Contact -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-5">
          <!-- Service Times -->
          <div class="bg-white rounded-3xl p-8 shadow-sm">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-[#1b3764] rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Service Times</h2>
            </div>
            <ul class="space-y-3">
              <li
                v-for="service in serviceTimes"
                :key="service.name"
                class="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <span class="font-semibold text-gray-900">{{ service.name }}</span>
                <span class="text-[#1b3764] font-medium text-sm">{{ service.time }}</span>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="bg-[#0d1f3c] rounded-3xl p-8 shadow-sm">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-[#1b3764] rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-white">Contact Us</h2>
            </div>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[#1b3764] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-300 text-sm">Uganda Road, Eldoret City, Kenya</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-[#1b3764] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+254722636926" class="text-gray-300 hover:text-white text-sm transition-colors">+254 722 636 926</a>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-[#1b3764] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:growthcentrechurch@gmail.com" class="text-gray-300 hover:text-white text-sm transition-colors">growthcentrechurch@gmail.com</a>
              </div>
            </div>
            <div class="mt-8">
              <NuxtLink
                to="/join"
                class="w-full block text-center px-6 py-3.5 bg-[#1b3764] text-white font-semibold rounded-xl hover:bg-[#0f2347] transition-all duration-200"
              >
                Join Our Community
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <HomeFoot />
</template>
