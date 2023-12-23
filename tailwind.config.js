/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens:{
        "smalltosm":"450px"   
      },
      fontFamily: {
        Rubik: ['"Rubik Scribble"']
      }
    },
  },
  plugins: [],
}