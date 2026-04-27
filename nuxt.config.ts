export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'notivue/nuxt',
    '@nuxt/image',
  ],
  devtools: { enabled: false },
  css: [
    '~/assets/style.css',
    'notivue/notification.css',
    'notivue/animations.css',
  ],
  app: {
    head: {
      title: 'Growth Centre Church — Eldoret',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        {
          name: 'description',
          content:
            'Christian Growth Centre Church, Eldoret — A community of faith, hope and love. Join us for worship, fellowship and growing in the Word of God. Sundays at 10 AM on Uganda Road.',
        },
        { property: 'og:site_name', content: 'Growth Centre Church' },
        { property: 'og:title',       content: 'Growth Centre Church — Eldoret' },
        {
          property: 'og:description',
          content:
            'Join us in worship, fellowship and growing in the Word of God. A vibrant community rooted in faith and love since 1990.',
        },
        { property: 'og:type',   content: 'website' },
        { property: 'og:image',  content: '/assets/images/4-Bible.jpeg' },
        { property: 'og:locale', content: 'en_KE' },
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'Growth Centre Church — Eldoret' },
        { name: 'twitter:description', content: 'A vibrant church community rooted in faith and love since 1990.' },
        { name: 'twitter:image',       content: '/assets/images/4-Bible.jpeg' },
        { name: 'theme-color',  content: '#1b3764' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,300..800;1,6..12,300..800&display=swap',
        },
      ],
    },
  },
  notivue: {
    limit: 3,
    avoidDuplicates: true,
    notifications: {
      global: { duration: 5000 },
    },
  },
});
