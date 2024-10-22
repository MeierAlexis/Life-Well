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
    },
  },
  plugins: [],
}

