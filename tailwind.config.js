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
        'regular-font': ["MuliRegular"],
        'code': ["Code"],
        'code2': ["Code2"],
      }
    },
    variants: {
      textColor: ['active']
    },
    plugins: [],
  }
}
