/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryBlue: "#0079ff",
        lightModeAsh: "#697c9a",
        lightModeGreyBlue: "#4B6A9B",
        lightModeBlack: "#2B3442",
        lightModeGhostWhite: "#F6F8FF",
        lightModeWhite: "#FEFEFE",
        darkModeWhite: "#ffffff",
        darkModeBlack: "#141D2F",
        darkModeDark: "#1E2A47",
      },
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
      },
    },
    fontSize: {
      title: "2.6rem",
      paragraph: "1.2rem",
      sm: "13px",
      md: "16px",
      lg: "24px",
    },
  },
  plugins: [],
};
