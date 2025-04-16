/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1a1a1a',
        'dark-charcoal': '#121212',
        'neon-green': '#39FF14',
        'light-gray': '#e0e0e0',
        'cyber-blue': '#00ff9f',
        'cyber-purple': '#ff00ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber': '20px 20px',
      },
    },
  },
  plugins: [],
};