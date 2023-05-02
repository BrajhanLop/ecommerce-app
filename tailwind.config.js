/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marcellus: "Marcellus-Regular",
        firmebook: 'firme-book'
      },
    },
  },
  plugins: [],
};
