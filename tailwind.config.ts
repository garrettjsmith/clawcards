import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // OpenClaw ecosystem colors
        background: {
          deep: '#050810',
          navy: '#0a0f1a',
          card: '#0d1320',
        },
        accent: {
          coral: '#ff4d4d',
          'coral-dark': '#e63946',
          cyan: '#00e5cc',
          teal: '#14b8a6',
        },
        text: {
          primary: '#f0f4ff',
          muted: '#8892b0',
          dim: '#5a6480',
        },
        // Rarity colors
        rarity: {
          legendary: '#f59e0b',
          'legendary-glow': '#fbbf24',
          epic: '#a855f7',
          'epic-glow': '#c084fc',
          rare: '#3b82f6',
          'rare-glow': '#60a5fa',
          uncommon: '#22c55e',
          'uncommon-glow': '#4ade80',
          common: '#6b7280',
          'common-glow': '#9ca3af',
        },
      },
      fontFamily: {
        display: ['var(--font-clash)', 'system-ui', 'sans-serif'],
        body: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'card-legendary': 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
        'card-epic': 'linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7c3aed 100%)',
        'card-rare': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
        'card-uncommon': 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
        'card-common': 'linear-gradient(135deg, #6b7280 0%, #4b5563 50%, #374151 100%)',
        'holographic': 'linear-gradient(135deg, #ff4d4d, #a855f7, #3b82f6, #22c55e, #f59e0b)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
