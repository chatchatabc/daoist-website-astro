/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: "rgb(112, 76, 26)",
          50: "rgb(250, 244, 234)",
          100: "rgb(245, 232, 214)",
          200: "rgb(236, 209, 172)",
          300: "rgb(226, 186, 131)",
          400: "rgb(216, 164, 90)",
          500: "rgb(207, 141, 48)",
          600: "rgb(165, 113, 39)",
          700: "rgb(124, 84, 29)",
          800: "rgb(83, 56, 19)",
          900: "rgb(41, 28, 10)",
          950: "rgb(21, 14, 5)",
        },
        secondary: {
          DEFAULT: "#A9916A",
        },
      },
    },
  },
  plugins: [],
};
