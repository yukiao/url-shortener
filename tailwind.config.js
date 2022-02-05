const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      primary: {
        cyan: "#2ACFCF",
        "dark-violet": "#3B3054",
      },
      secondary: {
        red: "#F46262",
      },
      neutral: {
        gray: "#bfbfbf",
        "grayish-violet": "#9E9AA7",
        "very-dark-blue": "#35323E",
        "very-dark-violet": "#232127",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        "one-half": "150%",
      },
    },
  },
  plugins: [],
};
