/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#080A09",
          dark: "#111512",
          surface: "#191F1B",
          "surface-light": "#222B25",
          "surface-border": "#28342D",
          green: "#A3F238",
          "green-hover": "#8FE024",
          "green-dark": "#79C92B",
          gray: "#A0A69F",
          "gray-light": "#E2E8F0",
          "gray-dark": "#525953",
          white: "#FFFFFF",
        }
      },
      fontFamily: {
        headline: ["'Space Grotesk'", "'Sora'", "sans-serif"],
        body: ["'Inter'", "'Manrope'", "sans-serif"],
        display: ["'Sora'", "'Space Grotesk'", "sans-serif"],
      },
      boxShadow: {
        'glow-green': '0 0 35px -5px rgba(163, 242, 56, 0.35)',
        'glow-green-sm': '0 0 20px -3px rgba(163, 242, 56, 0.25)',
        'glow-green-lg': '0 0 60px -10px rgba(163, 242, 56, 0.4)',
        'surface-card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'surface-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(163, 242, 56, 0.15)',
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(163, 242, 56, 0.12) 0%, rgba(8, 10, 9, 0) 70%)',
        'radial-gradient-glow': 'radial-gradient(circle, rgba(163, 242, 56, 0.15) 0%, rgba(8, 10, 9, 0) 70%)',
        'subtle-grid': "radial-gradient(rgba(163, 242, 56, 0.07) 1px, transparent 1px)",
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
