/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGrey:"#1e293b",white:"#ffffff"

      },
       fontFamily: {
        chakra: ["Chakra Petch", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

