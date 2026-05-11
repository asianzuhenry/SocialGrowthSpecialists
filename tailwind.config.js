/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#05050f',
          800: '#0a0a1a',
          700: '#0f0f24',
          600: '#161630',
        },
        neon: {
          pink: '#ff2d78',
          purple: '#9b30ff',
          blue: '#2d78ff',
          cyan: '#00d4ff',
        },
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255,45,120,0.4), 0 0 40px rgba(255,45,120,0.2)',
        'neon-purple': '0 0 20px rgba(155,48,255,0.4), 0 0 40px rgba(155,48,255,0.2)',
        'neon-blue': '0 0 20px rgba(45,120,255,0.4), 0 0 40px rgba(45,120,255,0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}


