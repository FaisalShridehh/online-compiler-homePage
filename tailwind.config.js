/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // screens: {
      //   tall: {
      //     // raw: "(max-height: 740px) and (max-width: 1200px)",
      //     raw: "(max-height: 740px) and (max-width:1200px)",
      //   },
      // },
      textColor: {
        darkTextColor: "#D8F4FD",
        darkPrimaryColor: "#8AE5E5",
        darkSecondaryColor: "#06061D",
        darkAccentColor: "#6DDCFF",
        // lightTextColor: "#333",
        // lightPrimaryColor: "#3B494A",
        // lightSecondaryColor: "#DBDAE1",
        // lightAccentColor: "#FF675E",
        lightTextColor: "#021E27",
        lightPrimaryColor: "#1A7575",
        lightSecondaryColor: "#E1E1F9",
        lightAccentColor: "#007194",
      },
      backgroundColor: {
        darkBgColor: "#000",
        darkBgSecondaryColor: "#06061D",
        // lightBgColor: "#F5F5F5",
        lightBgColor: "#ffffff",
        lightBgSecondaryColor: "#E1E1F9",
        // anotherDarkBgColor: "#171717",
        // anotherLightBgColor: "#E8E8E8",
      },
      fontFamily: {
        heading: ["Inter", "sans-serif"],
        body: ["system-ui", "Roboto", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [nextui()],
};
