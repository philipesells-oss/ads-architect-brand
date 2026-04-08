import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        obsidian: '#0A0A0A',
        carbon: '#111111',
        graphite: '#1A1A1A',
        slate: '#222222',
        // Accent
        teal: {
          DEFAULT: '#00D4AA',
          hover: '#33DDBB',
          muted: 'rgba(0,212,170,0.1)',
          glow: 'rgba(0,212,170,0.15)',
        },
        // Text
        snow: '#FAFAFA',
        muted: '#A1A1AA',
        faint: '#71717A',
        ghost: '#3F3F46',
        // Borders
        border: {
          DEFAULT: '#27272A',
          hover: '#3F3F46',
        },
        // Semantic
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h1: ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h2: ['36px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        h3: ['28px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        h4: ['22px', { lineHeight: '1.3' }],
        h5: ['18px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        caption: ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      boxShadow: {
        accent: '0 0 20px rgba(0, 212, 170, 0.15)',
        'accent-lg': '0 0 40px rgba(0, 212, 170, 0.2)',
        card: '0 4px 12px rgba(0,0,0,0.4)',
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '4px',
        lg: '12px',
        xl: '16px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'draw-line': 'drawLine 0.3s linear forwards',
        'expand-width': 'expandWidth 0.5s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        expandWidth: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
