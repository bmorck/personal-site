/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg-color': '#FFFBF0',
      },
      fontFamily: {
        'display-font': ["NameFont"]
      }
    },
    variants: {
      textColor: ['active']
    },
    plugins: [],
  }
}
