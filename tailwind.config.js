/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/customers/*.liquid",
    "./templates/**/*.liquid",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '94': '22rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}