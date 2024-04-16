/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['"Nunito", sans-serif'],
      'poppins': ['"Poppins", sans-serif'],
      'roboto': ['"Roboto", sans-serif'],
    },

    extend: {
      backgroundImage: {
        'banner': "url('/banner.svg')",
        'segmentBg': "url('/segment.svg')",
        'house': "url('https://i.ibb.co/T1Tqdf3/r-architecture-Jv-Q0-Q5-Ike-MM-unsplash.jpg')",
        'map': "url('/map.svg')",
        'polygon': "url('/polygon.svg')"
      }
    },
  },
  plugins: [require("daisyui")],
}