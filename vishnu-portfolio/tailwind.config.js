/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: '#0B1220',
        surface2: '#0F1830',
        border: 'rgba(148, 163, 255, 0.12)',
        accent: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          cyan: '#22D3EE',
        },
        success: '#34D399',
        muted: '#8B95B3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(120deg, #8B5CF6 0%, #3B82F6 50%, #22D3EE 100%)',
        'grid-pattern':
          'linear-gradient(rgba(148,163,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,255,0.06) 1px, transparent 1px)',
      },
      borderRadius: {
        xl2: '20px',
        xl3: '28px',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139, 92, 246, 0.45)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.45)',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(4%, 6%) scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        aurora: 'aurora 14s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
