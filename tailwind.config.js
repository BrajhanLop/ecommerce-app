/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#EBECEB",
        buttonsAndTags: "#938556",
        },
      fontFamily: {
        marcellus: "Marcellus-Regular",
        firmebook: 'firme-book'
      },
  },
  plugins: [],
};
