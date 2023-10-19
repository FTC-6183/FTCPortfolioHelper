/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        '2': '2px',
      },
      gradientColorStops: {
        'black-blue': '#000000, #0000FF',
      },
      borderImageSource: {
        'gradient-black-blue': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      colors: {
        'owl-blue': '#224979',
        'owl-orange': '#DB572E',
      },

    },
  },
  plugins: [],
}

