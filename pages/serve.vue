<script setup lang="ts">
useHead({
  title: 'Serve — Growth Centre Church',
  meta: [
    { name: 'description', content: 'Volunteer and serve at Growth Centre Church. Find ministry areas that match your gifts and apply today.' },
  ],
});

const formData = ref({
  personalInfo: { firstName: '', lastName: '', email: '', phone: '' },
  churchInfo: { membershipStatus: '', attendanceDuration: '' },
  interests: { ministryPreference: [] as string[], availableDays: [] as string[] },
  experience: { relevantSkills: '', previousVolunteer: '' },
});

const submitStatus = ref({ loading: false, success: false, error: false, message: '' });

const ministryAreas = [
  { id: 1, title: 'Worship Ministry', icon: '🎵', description: 'Join our worship team as a musician, singer, or technical support member.', roles: ['Vocalists', 'Musicians', 'Sound Engineers', 'Media Operators'], requirements: 'Musical background required for musicians/vocalists. Training provided for technical roles.' },
  { id: 2, title: "Children's Ministry", icon: '🧒', description: "Help nurture the faith of our youngest members through teaching and activities.", roles: ['Sunday School Teachers', 'Nursery Volunteers', 'Youth Group Leaders', 'Activity Coordinators'], requirements: 'Background check required. Training provided.' },
  { id: 3, title: 'Hospitality Team', icon: '🤝', description: 'Welcome visitors and members alike with warmth and kindness.', roles: ['Greeters', 'Ushers', 'Welcome Desk Hosts', 'Fellowship Coordinators'], requirements: 'Friendly personality and reliability required.' },
  { id: 4, title: 'Outreach & Missions', icon: '🌍', description: "Participate in community outreach programs and mission work.", roles: ['Community Service Volunteers', 'Mission Trip Participants', 'Food Bank Helpers', 'Evangelism Team'], requirements: 'Commitment to regular participation. Training provided.' },
  { id: 5, title: 'Prayer Ministry', icon: '🙏', description: 'Join our dedicated team of prayer warriors supporting our church and community.', roles: ['Prayer Team Members', 'Prayer Chain Coordinators', 'Prayer Meeting Leaders'], requirements: 'Commitment to confidentiality and regular prayer meetings.' },
  { id: 6, title: 'Media & Communications', icon: '📱', description: 'Help share our message through various media channels.', roles: ['Social Media Managers', 'Photographers', 'Videographers', 'Website Maintainers'], requirements: 'Experience with relevant tools preferred. Training available.' },
];

const testimonials = [
  { quote: "Serving in the children's ministry has been such a blessing. Watching the little ones grow in their faith is incredible.", author: 'Sarah M.', ministry: "Children's Ministry", initials: 'SM' },
  { quote: 'Being part of the worship team has deepened my own relationship with God while serving others.', author: 'David K.', ministry: 'Worship Ministry', initials: 'DK' },
  { quote: 'The outreach program has opened my eyes to the needs in our community and how we can make a difference.', author: 'Rachel T.', ministry: 'Outreach & Missions', initials: 'RT' },
];

const availabilityOptions = [
  'Monday Morning', 'Monday Evening', 'Tuesday Morning', 'Tuesday Evening',
  'Wednesday Morning', 'Wednesday Evening', 'Thursday Morning', 'Thursday Evening',
  'Friday Morning', 'Friday Evening', 'Saturday Morning', 'Saturday Evening',
  'Sunday Morning', 'Sunday Evening',
];

const resetForm = () => {
  formData.value = {
    personalInfo: { firstName: '', lastName: '', email: '', phone: '' },
    churchInfo: { membershipStatus: '', attendanceDuration: '' },
    interests: { ministryPreference: [], availableDays: [] },
    experience: { relevantSkills: '', previousVolunteer: '' },
  };
};

const submitToGoogleForm = async () => {
  submitStatus.value = { loading: true, success: false, error: false, message: '' };
  try {
    const { personalInfo, churchInfo, interests, experience } = formData.value;
    const notes = [
      `Membership: ${churchInfo.membershipStatus}`,
      churchInfo.attendanceDuration ? `Attending: ${churchInfo.attendanceDuration}` : '',
      interests.ministryPreference.length ? `Interests: ${interests.ministryPreference.join(', ')}` : '',
      interests.availableDays.length ? `Available: ${interests.availableDays.join(', ')}` : '',
      experience.relevantSkills ? `Skills: ${experience.relevantSkills}` : '',
      experience.previousVolunteer ? `Past volunteer: ${experience.previousVolunteer}` : '',
    ].filter(Boolean).join(' | ');

    const response = await fetch('https://byzara.life/api/ebonyi/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${personalInfo.firstName} ${personalInfo.lastName}`.trim(),
        email: personalInfo.email,
        phone: personalInfo.phone,
        type: 'volunteer',
        notes,
      }),
    });

    if (response.ok || response.status === 200) {
      submitStatus.value = {
        loading: false, success: true, error: false,
        message: 'Thank you! Your volunteer application has been received. A member of our team will be in touch with you soon.',
      };
      resetForm();
    } else {
      throw new Error(`Server responded with ${response.status}`);
    }
  } catch (err: any) {
    submitStatus.value = {
      loading: false, success: false, error: true,
      message: 'Something went wrong. Please try again or contact us directly at growthcentrechurch@gmail.com.',
    };
    console.error('Volunteer form error:', err);
  }
};
</script>

<template>
  <HomeNavbar />
  <main class="bg-white flex-1">

    <!-- Hero -->
    <section class="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-block text-[#c4932a] font-semibold text-sm uppercase tracking-widest mb-3">Make a Difference</span>
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Serve With Us</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Use your God-given gifts to serve others and advance the Kingdom. There's a place for everyone here.
        </p>
      </div>
    </section>

    <!-- Ministry Areas -->
    <section class="py-10 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-7">Ministry Areas</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="ministry in ministryAreas"
            :key="ministry.id"
            class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div class="text-3xl mb-4">{{ ministry.icon }}</div>
            <h3 class="text-lg font-bold text-[#1b3764] mb-2">{{ ministry.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ ministry.description }}</p>
            <div class="mb-3">
              <p class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Available Roles</p>
              <ul class="space-y-1">
                <li v-for="role in ministry.roles" :key="role" class="flex items-center gap-1.5 text-xs text-gray-600">
                  <svg class="w-3.5 h-3.5 text-[#1b3764] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {{ role }}
                </li>
              </ul>
            </div>
            <p class="text-xs text-gray-500 italic border-t border-gray-100 pt-3">
              <span class="font-semibold not-italic text-gray-700">Requirement:</span> {{ ministry.requirements }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-10 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-7">Volunteer Stories</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.author"
            class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-5 italic">"{{ t.quote }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-[#c4932a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {{ t.initials }}
              </div>
              <div>
                <p class="font-bold text-gray-900 text-sm">{{ t.author }}</p>
                <p class="text-xs text-[#c4932a]">{{ t.ministry }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer Application Form -->
    <section class="py-10 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-gray-900 mb-3">Volunteer Application</h2>
          <p class="text-gray-600">Fill in the form below and we'll get in touch with you about serving opportunities.</p>
        </div>

        <!-- Success / Error States -->
        <div v-if="submitStatus.success" class="mb-6 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p class="text-green-800 font-semibold">{{ submitStatus.message }}</p>
        </div>
        <div v-if="submitStatus.error" class="mb-6 bg-[#eef2f9] border border-blue-200 rounded-2xl p-5 text-center">
          <p class="text-red-700">{{ submitStatus.message }}</p>
        </div>

        <form v-if="!submitStatus.success" @submit.prevent="submitToGoogleForm" class="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 space-y-8">
          <!-- Personal Info -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Personal Information</h3>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">First Name <span class="text-red-500">*</span></label>
                <input v-model="formData.personalInfo.firstName" type="text" required class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Last Name <span class="text-red-500">*</span></label>
                <input v-model="formData.personalInfo.lastName" type="text" required class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email <span class="text-red-500">*</span></label>
                <input v-model="formData.personalInfo.email" type="email" required class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Phone <span class="text-red-500">*</span></label>
                <input v-model="formData.personalInfo.phone" type="tel" required class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all" />
              </div>
            </div>
          </div>

          <!-- Church Info -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Church Information</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Membership Status</label>
                <select v-model="formData.churchInfo.membershipStatus" required class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all">
                  <option value="">Select status</option>
                  <option value="member">Member</option>
                  <option value="regular">Regular Attendee</option>
                  <option value="visitor">Visitor</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">How long have you been attending?</label>
                <input v-model="formData.churchInfo.attendanceDuration" type="text" placeholder="e.g. 2 years" class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all" />
              </div>
            </div>
          </div>

          <!-- Ministry Interests -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Ministry Interests</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Which ministries interest you?</label>
                <div class="grid sm:grid-cols-2 gap-2">
                  <label v-for="ministry in ministryAreas" :key="ministry.id" class="flex items-center gap-2.5 cursor-pointer group">
                    <input type="checkbox" :value="ministry.title" v-model="formData.interests.ministryPreference" class="w-4 h-4 text-[#1b3764] border-gray-300 rounded focus:ring-[#1b3764]" />
                    <span class="text-sm text-gray-700 group-hover:text-gray-900">{{ ministry.title }}</span>
                  </label>
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Availability</label>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <label v-for="option in availabilityOptions" :key="option" class="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" :value="option" v-model="formData.interests.availableDays" class="w-4 h-4 text-[#1b3764] border-gray-300 rounded focus:ring-[#1b3764]" />
                    <span class="text-xs text-gray-600 group-hover:text-gray-900">{{ option }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Experience & Skills</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Relevant Skills & Experience</label>
                <textarea v-model="formData.experience.relevantSkills" rows="3" placeholder="Share any relevant skills or training..." class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all resize-none"></textarea>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Previous Volunteer Experience</label>
                <textarea v-model="formData.experience.previousVolunteer" rows="3" placeholder="Describe any previous volunteer or ministry experience..." class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:border-[#1b3764] focus:ring-2 focus:ring-[#1b3764]/20 focus:bg-white transition-all resize-none"></textarea>
              </div>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="submitStatus.loading"
            class="w-full py-4 px-6 bg-[#1b3764] text-white font-semibold rounded-xl hover:bg-[#0f2347] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span v-if="submitStatus.loading" class="loader"></span>
            {{ submitStatus.loading ? 'Submitting...' : 'Submit Application' }}
          </button>
        </form>
      </div>
    </section>
  </main>
  <HomeFoot />
</template>
