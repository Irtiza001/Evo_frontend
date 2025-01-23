/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        progress: "progress 3s linear infinite",
        "zoom-in": "zoomIn 1s ease-out",
        snake: "snake 3s infinite", // Custom animation for the filter bar
      },
      keyframes: {
        snake: {
          "0%": {
            borderColor: "transparent",
            transform: "scale(1)",
          },
          "25%": {
            borderColor: "rgba(0, 192, 241, 1)", // Blue color for snake animation
            transform: "scale(1.1)",
          },
          "50%": {
            borderColor: "transparent",
            transform: "scale(1)",
          },
          "75%": {
            borderColor: "rgba(0, 192, 241, 1)",
            transform: "scale(1.1)",
          },
          "100%": {
            borderColor: "transparent",
            transform: "scale(1)",
          },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        zoomIn: {
          "0%": {
            transform: "scale(0.5)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
      colors: {
        primary: "#00CFF1",
        customBlue: '#54ACDF', // Custom color for consistency
      },
    },
  },
  plugins: [],
};
