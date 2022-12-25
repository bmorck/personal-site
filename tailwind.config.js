/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg-color': '#FFFBF0',
        'custom-bg-color2': '#fcfbf5',
      },
      fontFamily: {
        'display-font': ["NameFont"],
        'regular-font': ["MuliRegular"]
      }
    },
    variants: {
      textColor: ['active']
    },
    plugins: [],
  }
}
