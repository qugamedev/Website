/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      backgroundColor: {
        "dark-colour": "#212121",
        "custom-purple": "#8263DC",
      },
      fontFamily: {
        brick: ['"NT Brick Sans"', "sans-serif"],
        archivo: ['"Archivo Black"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

