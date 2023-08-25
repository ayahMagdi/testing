/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#4353b2",
        hover: "#1f3b8b",
        dark: "#0c1739",
        popup: "rgba(0,0,0,.4)",
        danger: "#dc3545",
        succuss: "#28a745",
        tablerow: "#e9ecf5",
      },
      backgroundColor: ['even'],
  },
  plugins: [],
}
}
