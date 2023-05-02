/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#EBECEB",
        buttonsAndTags: "#938556",
      },
    },
  },
  plugins: [],
};
