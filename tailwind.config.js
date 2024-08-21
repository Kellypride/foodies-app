/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monterate: ["Monterate", "sans-serif"], // Adjust the font name as needed
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".drop-shadow": {
          filter: "drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5))",
        },
      });
    },
  ],
};
