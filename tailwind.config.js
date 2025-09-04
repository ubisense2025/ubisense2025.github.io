/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FFFFFF',
          dark: '#141414'
        },
        base: {
          fill: {
            DEFAULT: '#F0F2F5',
            dark: '#303030'
          },
          border: {
            DEFAULT: '#DCDFE6',
            dark: '#4C4D4F'
          }
        },
        darker: {
          fill: {
            DEFAULT: '#E6E8EB',
            dark: '#424243'
          },
          border: {
            DEFAULT: '#CDD0D6',
            dark: '#636466'
          }
        },
        moonlight: {
          99: '#E3F3FF',
          100: '#E8F7FF',
          200: '#C2E9FF',
          300: '#9CD7FF',
          400: '#75C3FF',
          500: '#4FADFF',
          600: '#2994FF',
          700: '#1970D2',
          800: '#0D4FA6',
          900: '#053379',
          950: '#001C4D',
          999: '#192833'
        }
      }
    },
  },
  plugins: [],
}