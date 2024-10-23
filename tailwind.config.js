/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        customGray: "#f4f4f4",
        customYellowIcon: "#e7d631",
        customGreenIcon: "#8e9e48",
        customOrangeIcon: "#f4c323"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.fade-image': {
          '-webkit-mask-image': 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
          'mask-image': 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
