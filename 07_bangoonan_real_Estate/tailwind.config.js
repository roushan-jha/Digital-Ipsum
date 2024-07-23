/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"]
      },
      colors: {
        primary: '#151D31',
        secondary: '#FFD278'
      }
    },
  },
  plugins: [],
}

