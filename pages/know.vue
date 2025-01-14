<template>
  <HomeNavbar class="bg-white" />
  <div class="min-h-screen bg-white">
    <div class="relative h-[60vh] bg-gray-900 mt-10">
      <div class="absolute inset-0 bg-white"></div>
      <div
        class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <h1 class="text-5xl md:text-7xl font-bold text-[#C41E3A] mb-6">
          KNOW GOD
        </h1>
        <p class="text-xl md:text-2xl text-black max-w-3xl">
          You were created to know God in a personal way—to have a relationship
          with Him, through His Son, Jesus Christ.
        </p>
      </div>
    </div>

    <!-- Steps Section -->
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="space-y-24">
        <template v-for="(step, index) in steps" :key="index">
          <div
            :class="[
              'flex flex-col md:flex-row gap-12',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            ]"
          >
            <div class="w-full md:w-1/2">
<<<<<<< HEAD
              <img
                v-if="step.image"
                :src="step.image"
=======
              <img 
                :src="step.image || defaultImage"
>>>>>>> 680737749ee691a9260db14677df8a66e1c700a4
                :alt="step.title"
                class="w-full h-[400px] object-cover rounded-lg shadow-xl"
                @error="handleImageError"
              />
<<<<<<< HEAD
              <div
                v-else
                class="w-full h-[400px] bg-gray-100 rounded-lg shadow-xl flex items-center justify-center"
              >
                <span class="text-gray-400">Image Coming Soon</span>
              </div>
=======
>>>>>>> 680737749ee691a9260db14677df8a66e1c700a4
            </div>
            <div class="w-full md:w-1/2 flex flex-col justify-center">
              <div class="mb-6">
                <span class="text-[#C41E3A] font-semibold"
                  >STEP {{ index + 1 }}</span
                >
                <h2 class="text-3xl font-bold mt-2 text-gray-900">
                  {{ step.title }}
                </h2>
              </div>
              <p class="text-lg text-gray-600 leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>

    
    <!-- <div
      class="flex flex-col sm:flex-row gap-4 justify-center items-center pb-16"
    >
      <button
        class="px-8 py-3 bg-[#C41E3A] text-white font-semibold rounded hover:bg-[#A01830] transition-colors w-full sm:w-auto"
      >
        Know God
      </button>
      <button
        class="px-8 py-3 border-2 border-[#C41E3A] text-[#C41E3A] font-semibold rounded hover:bg-[#C41E3A] hover:text-white transition-colors w-full sm:w-auto"
      >
        Ministries
      </button>
    </div> -->
  </div>

  <section class="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
    <div
      class="overflow-hidden bg-white lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl"
    >
      <!-- Image Section -->
      <div class="lg:w-1/2">
        <div
          class="h-64 bg-cover lg:h-full"
          style="
            background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
          "
        ></div>
      </div>

      <!-- Content Section -->
      <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
        <h2 class="text-2xl font-semibold text-black md:text-3xl">
          Need Someone to <span class="text-[#C41E3A]">Pray for You?</span>
        </h2>

        <p class="mt-4 text-black">
          We believe in the power of prayer and would love to support you in
          your spiritual journey. Share your prayer requests with us, and our
          team will keep you in our thoughts and prayers.
        </p>

        <div class="inline-flex w-full mt-6 sm:w-auto">
          <a
            href="#"
            class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-[#C41E3A] rounded-lg hover:bg-red-500 focus:ring"
          >
            Request Prayer
          </a>
        </div>
      </div>
    </div>
  </section>

  <HomeFoot />
</template>

<script>
// Import images
<<<<<<< HEAD
import majesticMountain from "../assets/images/1-Majestic mountain.jpeg";
import acceptance from "../assets/images/2-acceptance.jpeg";
import cross from "../assets/images/3-cross.jpeg";
import bible from "../assets/images/4-Bible.jpeg";
import prayer from "../assets/images/5-prayer.jpeg";
=======
import majesticMountain from '../assets/images/1-Majestic mountain.jpeg'
import acceptance from '../assets/images/2-acceptance.jpeg'
import cross from '../assets/images/3-cross.jpeg'
import bible from '../assets/images/4-Bible.jpeg'
import prayer from '../assets/images/5-prayer.jpeg'
import obedience from '../assets/images/6-obedience.jpeg'
import fellowship from '../assets/images/7-fellowship.jpeg'
import guidance from '../assets/images/8-guidance.jpeg'
import defaultImage from '../assets/images/blank.png'
>>>>>>> 680737749ee691a9260db14677df8a66e1c700a4

export default {
  name: "KnowPage",
  data() {
    return {
      defaultImage,
      steps: [
        {
          title: "Acknowledge God's Personhood",
          description:
            "Recognize that God is a personal being who desires a relationship with you. Understanding this is foundational to building a meaningful connection.",
          image: majesticMountain,
        },
        {
          title: "Accept Your Need for Salvation",
          description:
            "Acknowledge that you are a sinner in need of God's grace. No matter how good a life we try to live, we all fall short of God's perfect standard. Accepting this truth is the first step toward receiving God's forgiveness through Jesus Christ.",
          image: acceptance,
        },
        {
          title: "Accept Jesus Christ as Your Savior",
          description:
            "Believe that Jesus died for your sins and rose again, bridging the gap between humanity and God. Place your trust in Him for the forgiveness of your sins and the gift of eternal life.",
          image: cross,
        },
        {
          title: "Engage with God's Word",
          description:
            "Regularly read and study the Bible to understand God's character, promises, and will for your life. Scripture serves as a primary means through which God communicates with us.",
          image: bible,
        },
        {
          title: "Cultivate a Life of Prayer",
          description:
            "Develop a consistent prayer life, involving both speaking to God and listening for His guidance. Prayer fosters intimacy and aligns your heart with God's purposes.",
          image: prayer,
        },
        {
          title: "Obey God's Commands",
<<<<<<< HEAD
          description:
            "Apply the teachings of the Bible in your daily life. Obedience to God's Word deepens your relationship with Him and reflects your commitment.",
        },
        {
          title: "Fellowship with Other Believers",
          description:
            "Engage in a community of faith where you can grow, receive support, and serve others. Fellowship provides encouragement and accountability on your spiritual journey.",
        },
        {
          title: "Seek the Guidance of the Holy Spirit",
          description:
            "Be attentive to the Holy Spirit's leading in your life, allowing Him to transform you and reveal God's will. Walking in the Spirit empowers you to live according to God's purposes.",
        },
      ],
    };
  },
};
</script>
=======
          description: "Apply the teachings of the Bible in your daily life. Obedience to God's Word deepens your relationship with Him and reflects your commitment.",
          image: obedience
        },
        {
          title: "Fellowship with Other Believers",
          description: "Engage in a community of faith where you can grow, receive support, and serve others. Fellowship provides encouragement and accountability on your spiritual journey.",
          image: fellowship
        },
        {
          title: "Seek the Guidance of the Holy Spirit",
          description: "Be attentive to the Holy Spirit's leading in your life, allowing Him to transform you and reveal God's will. Walking in the Spirit empowers you to live according to God's purposes.",
          image: guidance
        }
      ]
    }
  },
  methods: {
    handleImageError(e) {
      e.target.src = this.defaultImage
    }
  }
}
</script>
>>>>>>> 680737749ee691a9260db14677df8a66e1c700a4
