/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        hantay:["Irish Grover"],
        hantay1:["Madimi One"],
        hanuman:['Hanuman']
      },
      colors:{
          customPurple: 'rgba(150, 136, 238, 0.61)',
      }
    },
  },
  plugins: [require('flowbite/plugin'),
  require('tailwind-scrollbar-hide')],
}