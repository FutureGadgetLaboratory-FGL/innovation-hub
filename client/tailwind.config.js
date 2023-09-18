/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: {
        DEFAULT: '#f4f5fa',
      },
      primary: {
        DEFAULT: '#9155fd',
        light: '#c5a6fe'
      },
      font: {
        DEFAULT: '#534f5a',
        light: '#79767e',
      },
      accent: {
        green: '#56ca00',
        red: '#ff3e1d',
        yellow: '#ffb400',
        cyan: '#16b1ff',
        gray: '#8a8d93',
      }
    }
  },
  plugins: [],
}

