/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#002B5B",
        "brand-yellow": "#FFD600",
        "brand-dark": "#171717",
        "brand-white": "#FFFFFF",
        "brand-light-gray": "#F8F9FA",
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
        heading: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
