/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        mobile:  '375px',
        tablet: '768px',
        laptop: '1200px',
        desktop: '1440px'
      }
    },
  },
  plugins: [],
}