/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "src/App.jsx"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["'Oswald'", "sans-serif"],
      },
    },
  },
  plugins: [],
};