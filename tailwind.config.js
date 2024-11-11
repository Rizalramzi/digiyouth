/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        main : '#B13437',
        dark : '#323232'
      },
      backgroundImage:{
        bg_waves : 'assets/bg-waves.png',
      },
      screens:{
        'sm' : '430px'
      }
    },
  },
  plugins: [],
}

