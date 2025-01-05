<script setup>
import { ref } from 'vue';

// Existing data
const ministryAreas = [
  {
    id: 1,
    title: "Worship Ministry",
    description: "Join our worship team as a musician, singer, or technical support member to help create meaningful worship experiences.",
    roles: ["Vocalists", "Musicians", "Sound Engineers", "Visual/Media Operators"],
    requirements: "Musical background required for musicians/vocalists. Training provided for technical roles."
  },
  {
    id: 2,
    title: "Children's Ministry",
    description: "Help nurture the faith of our youngest members through teaching, mentoring, and organizing activities.",
    roles: ["Sunday School Teachers", "Nursery Volunteers", "Youth Group Leaders", "Activity Coordinators"],
    requirements: "Background check required. Training provided."
  },
  {
    id: 3,
    title: "Hospitality Team",
    description: "Welcome visitors and members alike with warmth and kindness as part of our hospitality ministry.",
    roles: ["Greeters", "Ushers", "Welcome Desk Hosts", "Fellowship Coordinators"],
    requirements: "Friendly personality and reliability required."
  },
  {
    id: 4,
    title: "Outreach & Missions",
    description: "Participate in community outreach programs and mission work to spread God's love beyond our walls.",
    roles: ["Community Service Volunteers", "Mission Trip Participants", "Food Bank Helpers", "Evangelism Team"],
    requirements: "Commitment to regular participation. Training provided for specific roles."
  },
  {
    id: 5,
    title: "Prayer Ministry",
    description: "Join our dedicated team of prayer warriors supporting our church and community through intercessory prayer.",
    roles: ["Prayer Team Members", "Prayer Chain Coordinators", "Prayer Meeting Leaders"],
    requirements: "Commitment to confidentiality and regular prayer meetings."
  },
  {
    id: 6,
    title: "Media & Communications",
    description: "Help share our message through various media channels and keep our community connected.",
    roles: ["Social Media Managers", "Photographers", "Videographers", "Website Maintainers"],
    requirements: "Experience with relevant tools preferred. Training available."
  }
];

// Form data
const formData = ref({
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    birthDate: ''
  },
  churchInfo: {
    membershipStatus: '',
    attendanceDuration: '',
    previousMinistry: ''
  },
  interests: {
    ministryPreference: [],
    availableDays: [],
    timeCommitment: ''
  },
  experience: {
    relevantSkills: '',
    previousVolunteer: '',
    references: ''
  }
});

const submitForm = () => {
  console.log('Form submitted:', formData.value);
  // Add your form submission logic here
};

const availabilityOptions = [
  'Monday Morning',
  'Monday Evening',
  'Tuesday Morning',
  'Tuesday Evening',
  'Wednesday Morning',
  'Wednesday Evening',
  'Thursday Morning',
  'Thursday Evening',
  'Friday Morning',
  'Friday Evening',
  'Saturday Morning',
  'Saturday Evening',
  'Sunday Morning',
  'Sunday Evening'
];

const testimonials = [
  {
    quote: "Serving in the children's ministry has been such a blessing. Watching the little ones grow in their faith is incredible.",
    author: "Sarah M.",
    ministry: "Children's Ministry"
  },
  {
    quote: "Being part of the worship team has deepened my own relationship with God while serving others.",
    author: "David K.",
    ministry: "Worship Ministry"
  },
  {
    quote: "The outreach program has opened my eyes to the needs in our community and how we can make a difference.",
    author: "Rachel T.",
    ministry: "Outreach & Missions"
  }
];
</script>

<template>
  <!-- Previous sections remain the same until Ministry Areas -->

  <!-- Enhanced Ministry Areas Section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-red-700 text-center mb-12">Ministry Areas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="ministry in ministryAreas" :key="ministry.id" 
             class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-3">{{ ministry.title }}</h3>
          <p class="text-gray-600 mb-4">{{ ministry.description }}</p>
          <div class="space-y-2">
            <p class="font-medium">Available Roles:</p>
            <ul class="list-disc list-inside text-gray-600 mb-4">
              <li v-for="role in ministry.roles" :key="role">{{ role }}</li>
            </ul>
            <p class="text-sm text-gray-500 italic">
              <strong>Requirements:</strong> {{ ministry.requirements }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-red-700 text-center mb-12">Volunteer Testimonials</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.author"
             class="bg-gray-50 p-6 rounded-lg">
          <p class="text-gray-600 italic mb-4">"{{ testimonial.quote }}"</p>
          <p class="font-semibold">{{ testimonial.author }}</p>
          <p class="text-sm text-red-700">{{ testimonial.ministry }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Volunteer Application Form -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-red-700 text-center mb-12">Volunteer Application</h2>
      <form @submit.prevent="submitForm" class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <!-- Personal Information -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Personal Information</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-700 mb-2">First Name</label>
              <input v-model="formData.personalInfo.firstName" type="text" required
                     class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-700">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Last Name</label>
              <input v-model="formData.personalInfo.lastName" type="text" required
                     class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-700">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Email</label>
              <input v-model="formData.personalInfo.email" type="email" required
                     class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-700">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Phone</label>
              <input v-model="formData.personalInfo.phone" type="tel" required
                     class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-700">
            </div>
          </div>
        </div>

        <!-- Church Information -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Church Information</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-gray-700 mb-2">Membership Status</label>
              <select v-model="formData.churchInfo.membershipStatus" required
                      class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-700">
                <option value="">Select status</option>
                <option value="member">Member</option>
                <option value="regular">Regular Attendee</option>
                <option value="visitor">Visitor</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">How long have you been attending?</label>
              <input v-model="formData.churchInfo.attendanceDuration" type="text"
                     class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-700">
            </div>
          </div>
        </div>

        <!-- Ministry Interests -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Ministry Interests</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-gray-700 mb-2">Which ministries interest you?</label>
              <div class="space-y-2">
                <div v-for="ministry in ministryAreas" :key="ministry.id" class="flex items-center">
                  <input type="checkbox" :value="ministry.title" 
                         v-model="formData.interests.ministryPreference"
                         class="mr-2">
                  <label>{{ ministry.title }}</label>
                </div>
              </div>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Availability</label>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div v-for="option in availabilityOptions" :key="option" class="flex items-center">
                  <input type="checkbox" :value="option" 
                         v-model="formData.interests.availableDays"
                         class="mr-2">
                  <label class="text-sm">{{ option }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Experience & Skills</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-gray-700 mb-2">Relevant Skills & Experience</label>
              <textarea v-model="formData.experience.relevantSkills"
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-700"
                        rows="4"></textarea>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Previous Volunteer Experience</label>
              <textarea v-model="formData.experience.previousVolunteer"
                        class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-red-700"
                        rows="4"></textarea>
            </div>
          </div>
        </div>

        <button type="submit" 
                class="w-full bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800 transition-colors">
          Submit Application
        </button>
      </form>
    </div>
  </section>
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

input [type="checkbox"] { 
       :value="option" 
       v-model="formData.interests.availableDays"
       class="h-4 w-4 text-red-700 rounded border-gray-300 focus:ring-red-700 mr-2">}
</style>