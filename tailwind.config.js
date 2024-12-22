/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        bgSlider: "bgSliderEffect 20s infinite",
      },
      keyframes: {
        bgSliderEffect: {
          "0%": { backgroundImage: "url('https://balabaninsaat.com.tr/images/dedebasi-ins-1.jpeg')" },
          "33%": { backgroundImage: "url('https://balabaninsaat.com.tr/images/manisa.jpeg')" },
          "66%": { backgroundImage: "url('https://balabaninsaat.com.tr/images/neset-ertas-parki-2.jpg')" },
          "100%": { backgroundImage: "url('https://balabaninsaat.com.tr/images/milas-belediyesi-5.jpg')" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
