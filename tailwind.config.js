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
        'banner': "url('https://i.ibb.co/ZW9n29d/harper-van-mourik-0yf-WDw-HOB0g-unsplash.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}