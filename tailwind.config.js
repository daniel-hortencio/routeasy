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
          DEFAULT: 'rgba(60, 188, 141, 1)',
          dark: 'rgba(50, 170, 130, 1)',
        },
        background: {
          DEFAULT: '#0D0E18',
          light: '#1A1C30',
          light2: '#282A48',

          900: '#000',
          800: '#111',
          700: '#222'
        },
        typography: {
          900: '#000',
          800: '#111',
          700: '#222',

          100: 'fff'
        }

      },
    },
    plugins: [],
  }
}
