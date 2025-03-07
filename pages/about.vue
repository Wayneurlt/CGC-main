<script setup>
import { ref } from 'vue';

// Leaders data
const leaders = ref([
  {
    id: 1,
    name: "Evans Mulunji",
    role: "Bishop",
    photo: "/assets/images/bishop.jpg"
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Youth Ministry Leader",
    photo: "/api/placeholder/200/200"
  },
  {
    id: 3,
    name: "Mildred Ludenyi",
    role: "Worship Leader",
    photo: "/api/placeholder/200/200"
  }
]);

// Branches data
const branches = [
  'MAILI NNE',
  'HAMTUA',
  'LUMAKANDA',
  'KITENGELA'
];

// Church information
const churchInfo = {
  title: 'Growth Centre Church',
  established: '2000',
  mission: 'Our mission is to glorify God by leading people into a growing relationship with Jesus Christ, equipping them to serve and share His love with the world.',
  vision: 'Our vision is to be a vibrant, Christ-centered community that transforms lives and impacts the world for the glory of God.'
};
</script>

<template>
  <HomeNavbar class="bg-white" />
  <div class="min-h-screen mt-24 bg-white">
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center py-32" style="background-image: url('assets/images/4-Bible.jpeg');">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          About <span class="text-red-700">{{ churchInfo.title }}</span>
        </h1>
        <p class="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          We are a community of faith, hope, and love, dedicated to serving God and our neighbors.
        </p>
        <button class="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800 transition-colors">
          Join Us
        </button>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-8">Our Mission</h2>
        <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          {{ churchInfo.mission }}
        </p>
      </div>
    </section>

    <!-- History Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-8">Our History</h2>
        <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Established in {{ churchInfo.established }}, our church has been a beacon of hope and faith for generations.
          From humble beginnings, we have grown into a vibrant community dedicated to making a difference.
        </p>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-12">Meet Our Leaders</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="leader in leaders"
            :key="leader.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <img
              class="w-full h-64 object-cover"
              :src="leader.photo"
              :alt="leader.name"
            />
            <div class="p-6 text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ leader.name }}</h3>
              <p class="text-gray-600">{{ leader.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Branches Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-12">Our Branches</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="branch in branches"
            :key="branch"
            class="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 class="text-xl font-semibold text-black mb-4">{{ branch }}</h3>
            <button class="text-black border border-red-700 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white transition-colors">
              Visit Branch
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Times Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-8">Service Times</h2>
        <div class="max-w-md mx-auto">
          <ul class="space-y-4">
            <li class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span class="font-semibold">Sunday Worship:</span>
              <span>10:00 AM</span>
            </li>
            <li class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span class="font-semibold">Bible Study:</span>
              <span>Wednesday, 7:00 PM</span>
            </li>
            <li class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span class="font-semibold">Youth Fellowship:</span>
              <span>Friday, 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-8">Contact Us</h2>
        <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="font-semibold w-24">Address:</span>
              <span>Uganda Road, Eldoret City</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold w-24">Phone:</span>
              <span>0722636926</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold w-24">Email:</span>
              <span>growthcentrechurch@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <HomeFoot />
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.transition-colors {
  transition: all 0.3s ease-in-out;
}

.transition-shadow {
  transition: box-shadow 0.3s ease-in-out;
}

/* Additional custom styles can be added here */
</style>