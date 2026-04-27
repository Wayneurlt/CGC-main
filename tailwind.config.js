/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // Church brand palette
        church: {
          navy:    '#1b3764',   // Primary – deep navy (buttons, links, icons)
          'navy-dark': '#0f2347', // Hover / dark state
          'navy-light': '#eef2f9', // Subtle tinted background
          gold:    '#c4932a',   // Accent – warm gold (labels, highlights)
          'gold-dark': '#a07520', // Gold hover
          dark:    '#0d1f3c',   // Footer / dark sections
        },
        // Legacy alias kept for backwards compat with any remaining refs
        primaryColor: {
          DEFAULT: '#1b3764',
          50:  '#eef2f9',
          100: '#dce8f7',
          200: '#b3cef0',
          300: '#7aaae5',
          400: '#4282d4',
          500: '#1b3764',
          600: '#142d55',
          700: '#0f2347',
          800: '#0a1830',
          900: '#050c18',
        },
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'Nunito', 'sans-serif'],
      },
      animation: {
        'scroll-left': 'scrollLeft 40s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        scrollLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
