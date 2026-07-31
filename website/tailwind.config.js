/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Only utilizes TailwindCSS in the specified files and file-types below.
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom Widths (1 rem = 4 TailwindCSS Units = 16 Pixels).
      width:{
        '128': '32rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem'
      },
      // Custom Heights.
      height:{
        '66': '16.5rem'
      },
      // Custom screen sizes for responsiveness.
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

