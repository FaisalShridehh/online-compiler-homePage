/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  darkMode: "class",
  plugins: [],
};

/*
      animation: {
        chitchat: "chitchat linear both 1.2s",
      },
      keyframes: {
        chitchat: {
          "0%": { content: "#" },
          "5%": { content: "." },
          "10%": { content: "^{" },
          "15%": { content: "-!" },
          "20%": { content: "#$_" },
          "25%": { content: "№:0" },
          "30%": { content: "#{+." },
          "35%": { content: "@}-?" },
          "40%": { content: "?{4@%" },
          "45%": { content: "=.,^!" },
          "50%": { content: "?2@%" },
          "55%": { content: ";1}]" },
          "60%": { content: "?{%:%", right: 0 },
          "65%": { content: "|{f[4", right: 0 },
          "70%": { content: "{4%0%", right: 0 },
          "75%": { content: "'1_0<", right: 0 },
          "80%": { content: "{0%", right: 0 },
          "85%": { content: "]>'", right: 0 },
          "90%": { content: "4", right: 0 },
          "95%": { content: "2", right: 0 },
          "100%": { content: "", right: 0 },
        },
      },
*/
