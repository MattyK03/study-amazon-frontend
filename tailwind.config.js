/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: '#2E3239',
  white: twColors.white,
  secondary: '#FF9902',
  primary: '#161D25',
  'bg-color': '#F2F2F5',
  aqua: '#268697',
}



module.exports = {
  content: [
    "./src/**/*.{js, ts, jsx, tsx}",
    "./pages/**/*.{js, ts, jsx, tsx}",
    "./components/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    colors,
    extend: {
      keyframes: {
        animationOpacity: {
          from: { opacity: 0.2 },
          to: { opacity: 1 }
        },
        scaleIn: {
          '0%': {
          opacity: 0,
          tranform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            opacity: 1,
            tranform: 'scale(1)'
          }
        }
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      }
    },
  },
  plugins: [],
}

