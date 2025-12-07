// tailwind.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-out": { from: { opacity: "1" }, to: { opacity: "0" } },
        "zoom-in-95": { from: { transform: "scale(0.95)" }, to: { transform: "scale(1)" } },
        "zoom-out-95": { from: { transform: "scale(1)" }, to: { transform: "scale(0.95)" } },
      },
      animation: {
        "fade-in": "fade-in 0.15s ease-out",
        "fade-out": "fade-out 0.15s ease-in",
        "zoom-in-95": "zoom-in-95 0.15s ease-out",
        "zoom-out-95": "zoom-out-95 0.15s ease-in",
      },
    },
  },
};
