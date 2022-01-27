module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          light: '#b3bcf5',
          DEFAULT: '#5c6ac4',
          dark: '#161F36',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
