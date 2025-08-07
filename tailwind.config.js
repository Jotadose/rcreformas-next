/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Aquí pegas la configuración de colores y fuentes
      colors: {
        "dark-bg": "#111827",
        "medium-bg": "#1F2937",
        "light-bg": "#374151",
        "brand-yellow": "#FFC107",
        "main-text": "#F9FAFB",
      },
      fontFamily: {
        // La configuración en layout.tsx con next/font es la forma moderna,
        // pero si prefieres, puedes mantener esta línea también.
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
