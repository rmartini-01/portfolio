/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      glassEffect: {
        background: "rgba(255, 255, 255, 0.32)",
        "border-radius": "16px",
        "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
        "backdrop-filter": "blur(5.5px)",
        "-webkit-backdrop-filter": " blur(5.5px)",
        border: "1px solid rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
};
