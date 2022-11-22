/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1000: '#1c2a6a'
        }
      }
    },
  },
  plugins: [require("daisyui")],
};
