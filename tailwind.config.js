module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: "10px",
      },
      colors: {
        bluedark: "#0a213a",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
