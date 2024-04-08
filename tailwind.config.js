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
    extend: {},
  },
  plugins: [require("daisyui")],
}