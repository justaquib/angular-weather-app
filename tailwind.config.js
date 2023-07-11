/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,sass,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

