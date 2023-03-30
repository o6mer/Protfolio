/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dce0d9",
        secondary: "#fbf6ef",
        third: "#ead7c3",
      },
    },
  },
  plugins: [],
};
