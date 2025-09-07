/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        "dark-contrast": {
          "primary": "#38bdf8",
          "secondary": "#a855f7",
          "accent": "#f472b6",
          "neutral": "#2a303c",
          "base-100": "#0a101f",
          "base-200": "#1f2937",
          "base-300": "#374151",
          "info": "#0284c7",
          "success": "#22c55e",
          "warning": "#f97316",
          "error": "#ef4444",
        },
      },
    ],
  },
}