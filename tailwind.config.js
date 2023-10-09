/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1479FF",
        miscBg: "#F8F9FD",
        deleteBtn: "#FE5656",
      },
      animation: {
        "input-focus": "input-focus 0.1s ease-out forwards",
        drawer: "drawer 50ms ease-out forwards",
      },
      keyframes: {
        "input-focus": {
          "0%": { width: "0" },
          "100%": { width: "200px" },
        },
        drawer: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      opacity: {
        15: "0.15",
      },
    },
  },
  plugins: [],
};
