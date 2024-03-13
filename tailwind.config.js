/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        fixedwidth:"1512px",
      },
      height :{
        fixedheight : "585px"
      },
  
    },
  },
  plugins: [],
}