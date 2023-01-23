/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Videoposter': "url('/assets/image/video/banner.jpeg')",
      }
    },
  },
  plugins: [],
}