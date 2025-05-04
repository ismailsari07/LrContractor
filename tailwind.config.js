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
          1: '#ECECE6',
          2: '#FFFFFF',
        },
        text: {
          DEFAULT: '#040000',
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
