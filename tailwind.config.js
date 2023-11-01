module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    screens: {
      desktop: "1440px",
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 768px) { ... }

      phone: "320px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      animation: {
        fade: "fade 1.5s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0%", marginTop: "60px" },
          "100%": { opacity: "100%",},
        },
      },
      fontFamily: {
        genSans: ["GeneralSans-Variable"],
      },
    },
  },
};
