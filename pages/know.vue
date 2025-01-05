<!-- pages/know.vue -->
<template>
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <div class="relative h-[60vh] bg-gray-900">
        <div class="absolute inset-0 bg-gradient-to-b from-black to-gray-900">
          <!-- Background gradient -->
        </div>
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            KNOW GOD
          </h1>
          <p class="text-xl md:text-2xl text-white max-w-3xl">
            You were created to know God in a personal way—to have a relationship with Him, through His Son, Jesus Christ.
          </p>
        </div>
      </div>
  
      <!-- Steps Section -->
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="space-y-24">
          <template v-for="(step, index) in steps" :key="index">
            <div :class="['flex flex-col md:flex-row gap-12', index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']">
              <div class="w-full md:w-1/2">
                <!-- Placeholder with updated colors -->
                <div 
                  class="w-full h-[400px] bg-gray-100 rounded-lg shadow-xl flex items-center justify-center"
                >
                  <span class="text-gray-400">Image Coming Soon</span>
                </div>
              </div>
              <div class="w-full md:w-1/2 flex flex-col justify-center">
                <div class="mb-6">
                  <span class="text-[#C41E3A] font-semibold">STEP {{ index + 1 }}</span>
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
  
      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pb-16">
        <button class="px-8 py-3 bg-[#C41E3A] text-white font-semibold rounded hover:bg-[#A01830] transition-colors w-full sm:w-auto">
          Know God
        </button>
        <button class="px-8 py-3 border-2 border-[#C41E3A] text-[#C41E3A] font-semibold rounded hover:bg-[#C41E3A] hover:text-white transition-colors w-full sm:w-auto">
          Ministries
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const steps = [
    {
      title: "Acknowledge God's Personhood",
      description: "Recognize that God is a personal being who desires a relationship with you. Understanding this is foundational to building a meaningful connection."
    },
    {
      title: "Accept Jesus Christ as Your Savior",
      description: "Believe that Jesus died for your sins and rose again, bridging the gap between humanity and God. This act of faith is essential for salvation and initiating a relationship with God."
    },
    {
      title: "Engage with God's Word",
      description: "Regularly read and study the Bible to understand God's character, promises, and will for your life. Scripture serves as a primary means through which God communicates with us."
    },
    {
      title: "Cultivate a Life of Prayer",
      description: "Develop a consistent prayer life, involving both speaking to God and listening for His guidance. Prayer fosters intimacy and aligns your heart with God's purposes."
    },
    {
      title: "Obey God's Commands",
      description: "Apply the teachings of the Bible in your daily life. Obedience to God's Word deepens your relationship with Him and reflects your commitment."
    },
    {
      title: "Fellowship with Other Believers",
      description: "Engage in a community of faith where you can grow, receive support, and serve others. Fellowship provides encouragement and accountability on your spiritual journey."
    },
    {
      title: "Seek the Guidance of the Holy Spirit",
      description: "Be attentive to the Holy Spirit's leading in your life, allowing Him to transform you and reveal God's will. Walking in the Spirit empowers you to live according to God's purposes."
    }
  ]
  </script>