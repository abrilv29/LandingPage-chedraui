/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0077c8',
        customGrind: '#f2f3f5',
      },
      
    },
  },
  plugins: [],
}