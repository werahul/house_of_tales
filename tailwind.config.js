/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if you're using the App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        redHat: ["Red Hat Display", "sans-serif"],
      },
    },
    screens: {
      lg: "1025px", // customized
    },
  },
  plugins: [],
};
