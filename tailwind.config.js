/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        biggerthansmall: "432px",

        min510: "510px",
        min667: "667px",
        min768: "768px",
        min340: "350px",
        min1440: "1440px",
        min632: "632px",
        min920: "920px",
      },

      animation: {
        "spin-slow": "spin 7s linear infinite",
      },

      fontFamily: {
        Inter900: ["Inter", "sans-serif"],
      },

      fontFamily: {
        RegularInter400: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
