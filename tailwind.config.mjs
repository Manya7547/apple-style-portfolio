/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'Inter Variable', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Updated apple-gray to a lighter palette for dark backgrounds
        'apple-gray': {
          50: '#eaeaea',
          100: '#dcdcdc',
          200: '#c8c8c8',
          300: '#b4b4b4',
          400: '#a0a0a0',
          500: '#8c8c8c',
        },
        // Custom dark palette (using dark grey)
        dark: {
          DEFAULT: '#1f2937', // This will be our main dark grey background
          50: '#e0e0e0',
          100: '#c2c2c2',
          200: '#a3a3a3',
          300: '#858585',
          400: '#666666',
          500: '#484848',
          600: '#3a3a3a',
          700: '#2b2b2b',
          800: '#1d1d1d',
          900: '#0e0e0e',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
};
