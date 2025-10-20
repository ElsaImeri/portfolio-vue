/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.vue",
    "./src/components/**/*.vue",
    "./src/views/**/*.vue",
    "./src/data/**/*.js",
    "./src/App.vue", 
    "./src/main.js"
  ],
  theme: {
    extend: {
      animation: {
        'float-elegant': 'float-elegant 6s ease-in-out infinite',
      },
      keyframes: {
        'float-elegant': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translate(20px, -20px) scale(1.05)', opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}