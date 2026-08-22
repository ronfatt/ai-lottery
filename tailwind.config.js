/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#06080B",
        surface: {
          50: "#0D1117",
          100: "#121820",
          200: "#1A222D",
          300: "#242F3E",
          400: "#324053",
        },
        lime: {
          300: "#7CFF6B",
          400: "#00FF66",
          500: "#00E55B",
          accent: "#22C55E",
          neon: "#39FF14",
          bright: "#CCFF00",
        },
        cyber: {
          blue: "#00E5FF",
          indigo: "#6366F1",
          violet: "#A855F7",
          amber: "#F59E0B",
          rose: "#F43F5E",
        },
        metal: {
          100: "#FFFFFF",
          200: "#F1F5F9",
          300: "#CBD5E1",
          400: "#94A3B8", // significantly brightened from #484F58 to high-contrast #94A3B8
          500: "#64748B",
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Syne"', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 25px -5px rgba(0, 255, 102, 0.4)',
        'glow-lime-lg': '0 0 50px -10px rgba(0, 255, 102, 0.5)',
        'glow-blue': '0 0 25px -5px rgba(0, 229, 255, 0.4)',
        'glow-violet': '0 0 25px -5px rgba(168, 85, 247, 0.4)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(0, 255, 102, 0.08) 0%, rgba(6, 8, 11, 0) 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
