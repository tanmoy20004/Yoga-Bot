/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', './shared/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F2',
        sand: '#F3EBDD',
        ink: '#24352B',
        forest: {
          50: '#F0F7F2',
          100: '#DDEEE2',
          200: '#BCD9C6',
          300: '#8FBE9F',
          400: '#5F9E76',
          500: '#3E8E63',
          600: '#2F7450',
          700: '#275E42',
          800: '#204B36',
          900: '#193C2D',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -18px rgba(31, 72, 48, 0.25)',
        card: '0 8px 30px -12px rgba(31, 72, 48, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        blink: {
          '0%, 60%, 100%': { opacity: '0.25', transform: 'translateY(0)' },
          '30%': { opacity: '1', transform: 'translateY(-3px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 5s ease-in-out infinite',
        blink: 'blink 1.2s infinite',
      },
    },
  },
  plugins: [],
};
