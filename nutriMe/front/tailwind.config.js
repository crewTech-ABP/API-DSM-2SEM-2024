/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-green-color': '#027764',
        'text-color': '#212529',
        'p-color': '#495057',
        'orange-color': '#FFA733',
        'footer-color': '#00856F',
        'orange-hover-color': '#FF8418'
      }
    },
  },
  plugins: [],
}

