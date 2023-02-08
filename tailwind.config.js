/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif']
      },
      fontSize: {
        'custom-xs': ['0.75rem', '1.25rem'],
      },
      colors: {
        'custom-orange': 'hsl(25, 97%, 53%)',
        'custom-mediumgrey': '#8e959f',
      },
      spacing: {
        '95': '23.4375rem',
      },
    },
  },
  plugins: [],
}
