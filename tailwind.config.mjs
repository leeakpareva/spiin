/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#02040A",   // main background (almost black)
          800: "#050814",
          700: "#07101F",
          600: "#0B1729",
          500: "#111827",
          accent: "#16A34A" // dark-ish green accent
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      }
    }
  },
  plugins: []
};