/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Barlow" : ["Barlow", "sans-serif"],
        "Anton" : ["Anton", "sans-serif"],
        "Saira" : ["Saira Condensed", "sans-serif"],
      }
    },
  },
  plugins: [],
}