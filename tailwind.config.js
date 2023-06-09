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
          300: '#A7DA75',
          DEFAULT: '#3CBC8D',
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
        bluescale: {
          50: '#3BB5EF',
          100: '#424678',
          200: '#5CC1F2',
        },
        redscale: {
          50: '#FF4E32',
          100: '#FF6C54'
        },
        yellowscale: {
          50: '#FCB400'
        },
        purplescale: {
          50: '#424678'
        }
      },
      boxShadow: {
        '3xl': ' 0px -16px 4px rgba(0, 0, 0, 0.25)',
      }
    },
    plugins: [],
  }
}
