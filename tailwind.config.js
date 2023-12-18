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
        black: {
          default: "#141414",
        },
        blue: {
          150: "#55A8D4",

          250: "#307CAE",

        },
        pink: {
          default: "#d37272",
        },
        red: {
          250: "#FF6666",
        },
        gray: {
          150: "#D9D9D9",
        },


      },
      dropShadow: {
        'default': '0px 4px 8px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'marquee': 'marquee 10s linear infinite',
      }
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
