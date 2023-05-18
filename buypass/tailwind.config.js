/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ember: ["Ember", "sans-serif"],
        Bookerly: ["Bookerly", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "512px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 960px) { ... }

        lg: "1024px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
