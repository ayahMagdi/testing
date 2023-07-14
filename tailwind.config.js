/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#22419a",
        hover: "#1f3b8b",
        dark: "#0c1739",
        popup: "rgba(0,0,0,.4)",
        danger: "#dc3545",
        succuss: "#28a745"
      },
  },
  plugins: [],
}
}
