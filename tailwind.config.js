/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Sora', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      colors: {
        primary: {
          50: '#e6f4f9', 100: '#cce9f3', 200: '#99d3e7',
          300: '#66bddb', 400: '#33a7cf', 500: '#0891c3',
          600: '#06749c', 700: '#055775', 800: '#033a4e', 900: '#021d27',
        },
        secondary: {
          50: '#e6f9f8', 100: '#ccf3f1', 200: '#99e7e3',
          300: '#66dbd5', 400: '#33cfc7', 500: '#00c3b9',
          600: '#009c94', 700: '#00756f', 800: '#004e4a', 900: '#002725',
        },
        accent: {
          50: '#eefbf4', 100: '#dcf7e9', 200: '#b9efd3',
          300: '#97e7bd', 400: '#74dfa7', 500: '#51d791',
          600: '#41ac74', 700: '#318157', 800: '#20563a', 900: '#102b1d',
        },
        neutral: {
          50: '#f8f9fa', 100: '#f1f3f5', 200: '#e9ecef',
          300: '#dee2e6', 400: '#ced4da', 500: '#adb5bd',
          600: '#6c757d', 700: '#495057', 800: '#343a40',
          900: '#212529', 950: '#0d1117',
        },
        success: '#10b981', warning: '#f59e0b', error: '#ef4444', info: '#3b82f6',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 1.8s infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
        shimmer: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
        pulseSubtle: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(81, 215, 145, 0.25), 0 0 60px rgba(81, 215, 145, 0.1)',
        'glow-accent-sm': '0 0 15px rgba(81, 215, 145, 0.25)',
        'glow-blue': '0 0 30px rgba(8, 145, 195, 0.25)',
        'card': '0 2px 8px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.6)',
      },
      backdropBlur: { xs: '2px' },
      spacing: { '18': '4.5rem', '88': '22rem', '100': '25rem', '128': '32rem' },
      maxWidth: { '8xl': '88rem', '9xl': '96rem' },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/aspect-ratio'),
  ],
};
