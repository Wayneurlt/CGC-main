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
    googleFormData.append(GOOGLE_FORM_FIELDS.lastName, formData.value.personalInfo.lastName);
    googleFormData.append(GOOGLE_FORM_FIELDS.email, formData.value.personalInfo.email);
    googleFormData.append(GOOGLE_FORM_FIELDS.phone, formData.value.personalInfo.phone);
    googleFormData.append(GOOGLE_FORM_FIELDS.membershipStatus, formData.value.churchInfo.membershipStatus);
    googleFormData.append(GOOGLE_FORM_FIELDS.attendanceDuration, formData.value.churchInfo.attendanceDuration);
    googleFormData.append(GOOGLE_FORM_FIELDS.ministryPreference, formData.value.interests.ministryPreference.join(', '));
    googleFormData.append(GOOGLE_FORM_FIELDS.availableDays, formData.value.interests.availableDays.join(', '));
    googleFormData.append(GOOGLE_FORM_FIELDS.relevantSkills, formData.value.experience.relevantSkills);
    googleFormData.append(GOOGLE_FORM_FIELDS.previousVolunteer, formData.value.experience.previousVolunteer);

    // Submit the form
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      body: googleFormData,
      mode: 'no-cors'
    });

    submitStatus.value = {
      loading: false,
      success: true,
      error: false,
      message: 'Thank you for your application! We will be in touch soon.'
    };

    // Reset form after successful submission
    formData.value = {
      personalInfo: { firstName: '', lastName: '', email: '', phone: '' },
      churchInfo: { membershipStatus: '', attendanceDuration: '' },
      interests: { ministryPreference: [], availableDays: [] },
      experience: { relevantSkills: '', previousVolunteer: '' }
    };

  } catch (error) {
    submitStatus.value = {
      loading: false,
      success: false,
      error: true,
      message: 'An error occurred. Please try again later.'
    };
    console.error('Form submission error:', error);
  }
};
</script>