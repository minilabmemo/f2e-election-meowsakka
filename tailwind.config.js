/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "Segoe UI"],
        noto: ["Noto Sans TC", "system-ui", "Segoe UI"]
      },
      colors: {
        blue: {
          default: "#55A8D4",
        },
      },
      dropShadow: {
        'default': '0px 4px 8px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
