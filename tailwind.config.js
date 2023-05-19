/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#B0E6D2',
          100: '#3CBC8D',
          200: '#32AA82',
        },
        grayscale: {
          50: '#EDEDED',
          100: '#D5D7E8',
          200: '#ABAED1',
          300: '#444B55',
          400: '#353860',
          500: '#282A48',
          600: '#1A1C30',
          700: '#0D0E18',
        },
      },
      boxShadow: {
          '3xl': ' 0px -16px 4px rgba(0, 0, 0, 0.25)',
      }
    },
    plugins: [],
  }
}
