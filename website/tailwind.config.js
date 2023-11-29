/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "dark-colour": "#212121", // This is a custom name for your color
      },
    },
  },
  plugins: [],
};
