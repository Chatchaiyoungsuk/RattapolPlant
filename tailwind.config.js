/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      kanit:'Kanit',
      sarabun:'Sarabun'
    },
    extend: {},
  },
  plugins: [require("daisyui"),require('@tailwindcss/typography'),],
  daisyui: {
    themes: ["light", "dark", "forest"],
  },
}

