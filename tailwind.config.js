/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          25: '#F7FCFF',
          50: '#F0F9FF',
          100: '#E0F2FE',
          150: '#D2EDFD',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FAF6EF',
          200: '#F3EDE2',
          300: '#E7DCB9',
        },
        brand: {
          blue: '#4FA3E3',
          dark: '#1E293B',
          slate: '#334155',
          muted: '#64748B',
          light: '#F4FAFF',
          border: '#E2E8F0',
          accent: '#7DD3FC',
          glow: 'rgba(125, 211, 252, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        editorial: ['"Cormorant Garamond"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(186, 230, 253, 0.3)',
        'soft-lg': '0 20px 40px -10px rgba(186, 230, 253, 0.45)',
        'float': '0 15px 35px rgba(14, 165, 233, 0.15)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 3s infinite',
        'pulse-soft': 'pulseSoft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
