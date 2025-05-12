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
        }
      }
    },
  },
  plugins: [],
}