/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Baloo 2', 'sans-serif'],
          heading: ['Playfair Display', 'serif'],
        },
        colors: {
          primary: {
            100: '#DDE5F2',
            200: '#BBCBE5',
            300: '#99B1D7',
            400: '#7796CA',
            500: '#557CBD',
            600: '#446399',
            700: '#334A75',
            800: '#223250',
            900: '#11192C'
          },
          accent: {
            100: '#FFE6CC',
            200: '#FFCC99',
            300: '#FFB366',
            400: '#FF9933',
            500: '#F18F01',
            600: '#C17201',
            700: '#915401',
            800: '#603701',
            900: '#301B00'
          },
          neutral: {
            100: '#FAFAF9',
            200: '#F2F2F2',
            300: '#D9D9D9',
            400: '#BFBFBF',
            500: '#A6A6A6',
            600: '#8C8C8C',
            700: '#737373',
            800: '#595959',
            900: '#333333'
          }
        }
      },
    },
    plugins: [],
  }
  