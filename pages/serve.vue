<template>
  <HomeNavbar class="bg-white"/>
  <div class="w-full mt-24 bg-white">
    <!-- Ministry Areas Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <h2 class="text-3xl font-bold text-[#b70213] text-center mb-12">Ministry Areas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="ministry in ministryAreas" 
               :key="ministry.id" 
               class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 class="text-xl font-semibold text-[#b70213] mb-3">{{ ministry.title }}</h3>
            <p class="text-gray-600 mb-4">{{ ministry.description }}</p>
            <div class="space-y-2">
              <p class="font-medium">Available Roles:</p>
              <ul class="list-disc list-inside text-gray-600 mb-4">
                <li v-for="role in ministry.roles" 
                    :key="role" 
                    class="ml-2">{{ role }}</li>
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
      <div class="container mx-auto px-4 max-w-7xl">
        <h2 class="text-3xl font-bold text-[#b70213] text-center mb-12">Volunteer Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" 
               :key="testimonial.author"
               class="bg-gray-50 p-6 rounded-lg">
            <p class="text-gray-600 italic mb-4">"{{ testimonial.quote }}"</p>
            <p class="font-semibold">{{ testimonial.author }}</p>
            <p class="text-sm text-[#b70213]">{{ testimonial.ministry }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer Application Form -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <h2 class="text-3xl font-bold text-[#b70213] text-center mb-12">Volunteer Application</h2>
        <form @submit.prevent="submitToGoogleForm" class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <!-- Personal Information -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">Personal Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-700 mb-2">First Name</label>
                <input v-model="formData.personalInfo.firstName" 
                       type="text" 
                       required
                       class="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#b70213] focus:border-transparent">
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Last Name</label>
                <input v-model="formData.personalInfo.lastName" 
                       type="text" 
                       required
                       class="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b70213] focus:border-transparent">
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Email</label>
                <input v-model="formData.personalInfo.email" 
                       type="email" 
                       required
                       class="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#b70213] focus:border-transparent">
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Phone</label>
                <input v-model="formData.personalInfo.phone" 
                       type="tel" 
                       required
                       class="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#b70213] focus:border-transparent">
              </div>
            </div>
          </div>

          <!-- Church Information -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">Church Information</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-gray-700 mb-2">Membership Status</label>
                <select v-model="formData.churchInfo.membershipStatus" 
                        required
                        class="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#b70213] focus:border-transparent">
                  <option value="">Select status</option>
                  <option value="member">Member</option>
                  <option value="regular">Regular Attendee</option>
                  <option value="visitor">Visitor</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">How long have you been attending?</label>
                <input v-model="formData.churchInfo.attendanceDuration" 
                       type="text"
                       class="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#b70213] focus:border-transparent">
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
                  <div v-for="ministry in ministryAreas" 
                       :key="ministry.id" 
                       class="flex items-center">
                    <input type="checkbox" 
                           :value="ministry.title" 
                           v-model="formData.interests.ministryPreference"
                           class="h-4 w-4 text-[#b70213] rounded border-gray-300 focus:ring-[#b70213] mr-2">
                    <label>{{ ministry.title }}</label>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Availability</label>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div v-for="option in availabilityOptions" 
                       :key="option" 
                       class="flex items-center">
                    <input type="checkbox" 
                           :value="option" 
                           v-model="formData.interests.availableDays"
                           class="h-4 w-4 text-[#b70213] rounded border-gray-300 focus:ring-[#b70213] mr-2">
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
                          class="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b70213] focus:border-transparent"
                          rows="4"></textarea>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Previous Volunteer Experience</label>
                <textarea v-model="formData.experience.previousVolunteer"
                          class="w-full px-4 py-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b70213] focus:border-transparent"
                          rows="4"></textarea>
              </div>
            </div>
          </div>

          <!-- Submission Status Messages -->
          <div v-if="submitStatus.loading" class="text-center mb-4">
            <p class="text-gray-600">Submitting your application...</p>
          </div>
          <div v-if="submitStatus.success" class="text-green-600 text-center mb-4">
            {{ submitStatus.message }}
          </div>
          <div v-if="submitStatus.error" class="text-red-600 text-center mb-4">
            {{ submitStatus.message }}
          </div>

          <button type="submit" 
                  :disabled="submitStatus.loading"
                  :class="[
                    'w-full px-6 py-3 rounded-md transition-colors duration-300',
                    submitStatus.loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#b70213] hover:bg-[#980110] text-white'
                  ]">
            {{ submitStatus.loading ? 'Submitting...' : 'Submit Application' }}
          </button>
        </form>
      </div>
    </section>
  </div>
  <HomeFoot/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HomeNavbar, HomeFoot } from '#components';

const formData = ref({
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  churchInfo: {
    membershipStatus: '',
    attendanceDuration: '',
  },
  interests: {
    ministryPreference: [],
    availableDays: [],
  },
  experience: {
    relevantSkills: '',
    previousVolunteer: '',
  }
});

const submitStatus = ref({
  loading: false,
  success: false,
  error: false,
  message: ''
});

// Replace YOUR_FORM_ID with the actual ID from your Google Form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

// Replace these entry IDs with the ones from your Google Form
const GOOGLE_FORM_FIELDS = {
  firstName: 'entry.123456789',
  lastName: 'entry.987654321',
  email: 'entry.111111111',
  phone: 'entry.222222222',
  membershipStatus: 'entry.333333333',
  attendanceDuration: 'entry.444444444',
  ministryPreference: 'entry.555555555',
  availableDays: 'entry.666666666',
  relevantSkills: 'entry.777777777',
  previousVolunteer: 'entry.888888888'
};

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

const submitToGoogleForm = async () => {
  submitStatus.value = {
    loading: true,
    success: false,
    error: false,
    message: ''
  };

  try {
    // Create FormData object
    const googleFormData = new FormData();

    // Add form fields to FormData
    googleFormData.append(GOOGLE_FORM_FIELDS.firstName, formData.value.personalInfo.firstName);
    googleFormData.append(GOOGLE_FORM_FIELDS);
    googleFormData.append(GOOGLE_FORM_FIELDS.lastName, formData.value.personalInfo.lastName);
  } catch (error) {
    submitStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: 'An error occurred. Please try again later.'
    };
  }