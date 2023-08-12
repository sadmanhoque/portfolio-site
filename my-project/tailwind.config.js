/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkestBlue: '#011f2e',
        medBlue: '#219EBC',
        lightestBlue: '#8ECAE6',
        highlightYellow: '#FFB703'

      }
    },
  },
  plugins: [],
}

