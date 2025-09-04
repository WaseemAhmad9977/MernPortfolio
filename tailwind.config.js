/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Custom class for Rubik
        rajdhani: ["Rajdhani", "sans-serif"], // Default font
      },
    },
  },
  plugins: [],
};
