module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: "10px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
