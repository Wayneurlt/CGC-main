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

// About Us information
const aboutUs = {
  introduction: {
    title: 'INTRODUCTION: HISTORICAL BACKGROUND',
    content: [
      "A brief historical foundation of Christian Growth Centre- Eldoret is here below outlined for the believers to come to a full knowledge of the local church’s genesis and its basic contribution to the universal church – the Body of Christ.",
      "From 1987 to 1990, there existed a body of believers from different denominational backgrounds who gathered together for the simple reason of propagating their Christian Faith as an intercessory prayer group. In the mutual stages there was no knowledge or thought of starting a local church. Thus, this intercessory prayer group was operating as follows:",
      "a. As a Prayer group, which held their prayer meetings in the house of Brother Evans Mulunji at the Eldoret Metrological Station.",
      "b. As an Outreach group to Schools and colleges through Eldoret Evangelistic Team. This team holds its meetings on an annual basis in Hill School and Wareng Secondary School in Eldoret. Africa for Christ Evangelistic Association, (AFCEA), Kakamega, sponsored the coverage for this Missionary work.",
      "c. As an outreach group to the communities in Eldoret was through the Eldoret Calvary Temple Church.",
      "d. As an outreach to the remote and rural areas of North Rift Valley and Western Kenya. This group was acting like a free-lance missionary group. This saw churches born in Khayega and Shinyalu and the growth of the Marakwet Evangelistic Team, Musembe and Nzoia-Matunda fellowships that are now churches and the establishment of Munyaka and Hill School Calvary temple churches.",
      "During this same period, there was a clear leading on the team to effectively declare and demonstrate the gospel of Jesus Christ to the lost, equip the saints for fellowship with God, with one another, and releasing them for the work of the ministry, and this was done with a lot of fervency and zeal.",
      "In August 1990, there were clear indicators that the timing for the launching of a local church was ripe, hence under the direction of the Holy Spirit, an apostolic church based on an Antiochan pattern of a worshipping church, a praying church, a Spirit-filled church, an obedient church, a discipline church and a sending church that was cosmopolitan was inaugurated as a church ministry with a clear mandate. The young church ministry was under the umbrella of Africa for Christ Evangelistic Associaton (AFCEA) Ministries – Kakamega. And sooner, with the blessing of the late Rev. Hezron Smith Chivile, AFCEA Eldoret was born in August 1990. The original team members of this local church were: - Evans Mulunji, Julius Atsango, Joshua Manono, Sammy Okoth Odhiambo, Charles Shivachi, Joseph Likavo among others.",
      "The first service of Christian Growth Centre (AFCEA) Eldoret was held on the 2nd of September 1990 and was attended by 19 members at a house in Old Uganda Road estate. The 19 members included 12 brothers and 7 sisters. The house was rental and the environment was not conducive for church growth and thus in November 1990, the local church congregation was moved to NCCK Dining hall.",
      "In January 1992, Mulunji resigned to be the pastor of AFCEA Eldoret. Among the notable achievements of the young church ministry; Christian Growth Centre (AFCEA) Eldoret, while at the NCCK dining hall was the fruits of starting the ELDO-FIRE Ministry in May 1992 and because God blessed the meeting, it turned out to be such a success that another similar meeting was hosted in December 1992. The main objective of Eldo-fire at that time was to train church ministers in North Rift Valley and Western Provinces of Kenya. Members from other local churches in Eldoret, as the body of Christ came together and sanctioned Eldo-fire ministry as an interdenominational arm of training churches in Eldoret. The then office bearers were Joshua Manono (chairman), Rhoda Maswan (secretary), and Gaudensia Okello (treasurer). In addition to the office bearers, other members were the Marakwet Evangelistic Team and some of the Eldoret churches representatives.",
      "The second achievement of Christian Growth Centre (AFCEA) Eldoret, while still at NCCK dining hall was the planning, organizing and carrying out several revival meetings under the direction of the board of elders with the following office bearers: Joseph K. Likavo (chairman), Evans Mulunji (Pastor and secretary) and John Chivile (treasurer). As a result, many members joined the fellowship and there was a good spiritual and numerical growth.",
      "Therefore, the NCCK dining hall became small and in January 1993, the ministry was moved to the White Castle Motel. However, in May 1993, the ministry was further moved to Kamau Mountain View. In August 1993, the Kamau Mountain View was sold out to Mountain View Hotel and the rapidly expanding ministry was forced to move out. This took them to some corridor in Old Uganda Road in September 1993 where they stayed up to February 1994. In February 1994, the name CGC was adopted and the ministry was further moved to a site along Uganda Road Opposite the Unga residential quarters. At this new site, a plot was rented and a temporal timber structure was constructed as a church building. Here, is where Christian Growth Centre (AFCEA) ministry was real blessed by God. Real growth occurred spiritually and numerically. Many visiting men and women of God came to the local church. They preached the Good News of our Lord Jesus Christ, which increased the spiritual maturity of the congregation. Among the visiting ministers were from the USA, Bahamas, Jamaica, Israel, and Uganda and locally from Kakamega, Mombasa, Kisumu, Webuye, Nakuru, and Kitale. In 1998 June, the present site was acquired and in the month of August, the same year, the church settled on the site to enhance the work of the ministry of Christ and the first prayer summit was held.",
      "All this time, Pastor Evans Mulunji was the only pastor of Christian Growth Centre (AFCEA) Eldoret. Then in 1995 July, the board of elders at Christian growth Centre (AFCEA) Eldoret created a post of senior pastor and J. K. Likavo was appointed to the post, which he held until August 2000 when he moved to the International Vision Centre (IVC) Eldoret. Pastor Evans Mulunji continued to be the pastor of the church.",
      "Therefore, from a humble beginning, Christian Growth Centre (AFCEA) Eldoret has grown from strength to strength under the guidance of the only Spirit and has its central doctrine vested in the triune God and Intercession. The apostolic visionary, missionary message is still as clear as it was at inauguration in 1990. Hence the Christian Growth Centre (AFCEA) ministry Eldoret still pursues the Antiochan pattern."
    ]
  },
  ministries: [
    {
      title: 'ALTAR MINISTRY',
      departments: [
        'Ushering',
        'Protocol and Hospitality',
        'Praise and Worship',
        'Interpretation'
      ]
    },
    {
      title: 'PRAYER MINISTRY',
      departments: [
        'Prayer department'
      ]
    },
    {
      title: 'FELLOWSHIP DEVELOPMENT AND CARE MINISTRY',
      departments: [
        'Men’s fellowship',
        'Youth with praise',
        'The women fellowship',
        'Children’s ministry',
        'Teenagers ministry',
        'Home churches',
        'Compassion services',
        'Cradle ministry'
      ]
    },
    {
      title: 'MISSIONS MINISTRY',
      departments: [
        'Missions to Institutions and Church Planting',
        'Outreach missions',
        'Discipleship and Internal missions'
      ]
    },
    {
      title: 'FINANCE, PLANNING AND INFORMATION TECHNOLOGY MINISTRY',
      departments: [
        'Finance and Administration',
        'Maintenance and Repair of Equipment and Facilities',
        'Programme Coordination',
        'Information and Communication Technology (ICT)',
        'Training and Christian Development'
      ]
    }
  ]
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

    <!-- About Us Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-8">{{ aboutUs.introduction.title }}</h2>
        <div class="text-lg text-gray-700 max-w-3xl mx-auto space-y-4">
          <p v-for="(paragraph, index) in aboutUs.introduction.content" :key="index">{{ paragraph }}</p>
        </div>
      </div>
    </section>

    <!-- Ministries Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-8">Our Ministries</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="ministry in aboutUs.ministries" :key="ministry.title" class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-red-700 mb-4">{{ ministry.title }}</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li v-for="department in ministry.departments" :key="department">{{ department }}</li>
            </ul>
          </div>
        </div>
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