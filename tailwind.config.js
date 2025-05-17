const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Baloo 2"', ...defaultTheme.fontFamily.sans],
        heading: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          light: '#ECECE6', // was 1
          dark: '#040000',  // was 2
        },
        text: {
          DEFAULT: '#040000',
          light: "#ECECE6",
          special: '#f76f53',
        },
        button: {
          bg: '#2e2e2e',
          bg2: '#E0E0DB',
          text: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
