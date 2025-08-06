/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
                        colors: {
                    primary: {
                      50: '#f5f3f7',
                      100: '#ebe5f0',
                      200: '#d7cbe1',
                      300: '#c3b1d2',
                      400: '#af97c3',
                      500: '#9b7db4',
                      600: '#8763a5',
                      700: '#694873',
                      800: '#5a3d62',
                      900: '#4b3251',
                    },
                    accent: {
                      50: '#f0f5f4',
                      100: '#e1ebe9',
                      200: '#c3d7d3',
                      300: '#a5c3bd',
                      400: '#87afa7',
                      500: '#699b91',
                      600: '#4b877b',
                      700: '#2d7365',
                      800: '#1f5f51',
                      900: '#16302b',
                    },
                    african: {
                      purple: '#694873',
                      teal: '#16302b',
                      green: '#16a34a',
                      yellow: '#eab308',
                      red: '#dc2626',
                    }
                  },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 