/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E050F",
        secondary: "#170B3B",
        third: "#341948",
        fourth: "#9388A2",
      },
    },
  },
  plugins: [],
};
