/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f1fd',
          100: '#eaddfa',
          200: '#d0bff5',
          300: '#b094ee',
          400: '#8e62e4',
          500: '#753be0',
          600: '#6426cd',
          700: '#551db0',
          800: '#461a8f',
          900: '#2b0f5e',
          950: '#1b073e',
        },
        accent: {
          50: '#effef9',
          100: '#cbfef0',
          200: '#98fce0',
          300: '#5df5cb',
          400: '#24eeb6',
          500: '#0bd29e',
          600: '#06aa81',
          700: '#088869',
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        secondary: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "skewX(-20deg) translateX(-150%)" },
          "100%": { transform: "skewX(-20deg) translateX(150%)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
    },
  },
  plugins: [],
}