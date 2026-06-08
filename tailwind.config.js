/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#101F48',
        'navy-dark': '#0A1530',
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
      },
      fontFamily: {
        heading: ["'Cormorant Garamond'", 'serif'],
        body: ["'Montserrat'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

