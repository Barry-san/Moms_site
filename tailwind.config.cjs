/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "src/App.jsx"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["'Oswald'", "sans-serif"],
        Barlow: ["'Barlow'", "sans-serif"],
      },
      backgroundImage: {
        pepsi: "url('../public/nikhil-82LJQZGwW5o-unsplash.jpg')",
        coke: "url('../public/mae-mu-z8PEoNIlGlg-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
