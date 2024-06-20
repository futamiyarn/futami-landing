/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        red: {
          text: "#070606",
          background: "#fdfcfc",
          primary: "#9b222d",
          secondary: "#d4979c",
          accent: "#d26f77",

          dark: {
            text: "#f8f7f7",
            background: "#030202",
            primary: "#dd646e",
            secondary: "#682c31",
            accent: "#8f2d35",
          },
        },

        futa: {
          twins: "#FEE440",
          white: "#d5dce7",
          red: "#c0212e",
        },
        ysn: {
          black: "#181f2a",
          blue: "#8DCDF1",
          pink: "#D067A8",
          orange: "#F89F63",
          purple: "#9654A1",
        },

        ac: {
          green: {
            soft: "#B0DED3",
            mid: "#8BCFBB",
            hard: "#73C7AA",
          },
          pink: "#F1A3C7",
        },
      },
    },
    fontSize: {
      sm: "0.889rem",
      base: "1rem",
      xl: "1.125rem",
      "2xl": "1.266rem",
      "3xl": "1.424rem",
      "4xl": "1.602rem",
      "5xl": "1.802rem",
    },
    fontFamily: {
      heading: "Poppins",
      body: "Onest",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};
