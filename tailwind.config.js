module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    screens: {
      'desktop': '1440px',
      // => @media (min-width: 640px) { ... }

      'table': '768px',
      // => @media (min-width: 768px) { ... }

      'phone': '320px',
      // => @media (min-width: 1024px) { ... }

    },
    extend: {
      fontFamily: {
        genSans: ['GeneralSans-Variable']
      }
    }
  }
};
