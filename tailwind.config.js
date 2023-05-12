/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      logo : ['Trade Winds', 'cursive'],
      basic : ['Alegreya Sans', 'sans-serif'],
    },
    colors: {
      transparent : 'transparent',
      mint : '#21D19F',
      red : '#C1292E',
      darkBlue : '#02182B',
      gray : '#888DA7',
      lavender : '#F5B0CB',
      mint500 : '#1CB086',
      mint200 : '#83ECCE',
      mint700 : '#116A51',
      mint100 : '#CAF7EA'
    },
   
    extend: {
      backgroundImage: {
        'banner' : "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      },
      borderRadius : {
        '3xl' : '3rem',
        '4xl' : '4rem',
        '5xl' : '5rem',
        '6xl' : '6rem',
        '7xl' : '7rem',
      },
      screens: {
        'sm' : '920px',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

