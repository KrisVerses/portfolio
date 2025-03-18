/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E2E3A",
        secondary: "#14171A",
        accent: "#FF6F61",
        background: "#E8ECEF",
        border: "#E1E8ED",
        text: "#0F1419",
        complementary1: "#61FF6F", // Complementary color to accent
        complementary2: "#3C401A", // Complementary color to primary
      },
      scale: {
        110: "1.1",
      },
    },
  },
  plugins: [],
};
