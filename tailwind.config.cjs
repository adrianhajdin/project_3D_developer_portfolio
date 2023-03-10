/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#1e1e1f",
        "black-100": "#19191a",
        "black-200": "#0a0a0a",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.imgur.com/YgxuOcG.jpg')",
      },
    },
  },
  plugins: [],
};
