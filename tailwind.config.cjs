/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: { 
        "serif" : ["Cormorant SC","serif"],
        "sans-serif":["Lato","sans-serif"],
      },
      minHeight: {
        "card":"23.2rem",
        
      },
      maxHeight: {
        "card":"23.2rem",
        "login":"30rem",
      },
      minWidth: {
        card:"20rem"
      },
      colors: {
        "blue":{
          "header":"#22223b",
          "card":"#4A4E69"
          },
        "green":"#50C878",
        "purple":"#9A8C98",
        "sauvignon-cr":"#F2E9E4",
        "light-cr":"#c9ada7",
        "light-p":"#9a8c98",
        "red":"#E10606",
        "dark":"#D9D9D9"
        },
        screens: {
          "sm-0":"480px",
          "sm": '570px',
          "md": '768px',
          "md-2":'900px',
          "lg": '996px',
          "lg-2":'1200px',
          "xl": '1440px',
      },
      fontSize:{
        "4.5xl":"2.7rem",
        "5.5xl":"3rem",
        "8.5xl":"6.9rem",
      },
      gridTemplateRows:{
        "3":"25% 50% 25%"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: { 
        wiggle:"wiggle 1s ease-in-out infinite"
      }
  },
},
plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}