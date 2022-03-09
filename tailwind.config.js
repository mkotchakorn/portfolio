module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      default: ["Manrope", "sans-serif"],
    },
    screens: {
      sm: "640px",
      "md-down": { max: "767px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "0",
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    },
    extend: {
      lineHeight: {
        0: "0",
      },
    },
  },
  plugins: [],
};
