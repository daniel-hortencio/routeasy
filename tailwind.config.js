/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundBlack: "#1E1E1E",
        backgroundGray: "#F4F4F4",
        backgroundGrayLight: "#EAEAEA",
        primary: "#15BE62",
        primaryHover: "#09A751",
        warning: "#BF0905",
        warningHover: "#A61311",
        secondary: "#E7F4EE",
        textGray: {
          light: "#A7A7A7",
          dark: "#595959"
        },
        textDefault: "#252525"
      },
      borderWidth: {
        1: "1px"
      },
      fontSize: {
        '28px': ['1.75rem', '2.25rem']
      },
      letterSpacing: {
        '2px': '0.125em'
      },
    },
    plugins: [],
  }
}