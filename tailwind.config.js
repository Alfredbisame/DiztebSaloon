/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'float-rotate-3d': 'float-rotate-3d 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-border': 'pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 6s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-gentle': 'bounce 3s infinite ease-in-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
        'pulse-border': {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)' },
          '70%': { boxShadow: '0 0 0 4px rgba(255, 255, 255, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%) rotate(10deg)' },
          '100%': { transform: 'translateX(100%) rotate(10deg)' },
        },
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
    },
  },
  plugins: [],
};
