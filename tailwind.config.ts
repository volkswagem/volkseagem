import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14243A',
        'ink-soft': '#2C4058',
        mint: '#16C7B7',
        'mint-dark': '#0C9E93',
        paper: '#F7F9F7',
        sand: '#E9EFEA',
        muted: '#637386',
        line: '#D8E1DE',
      },
      boxShadow: {
        card: '0 18px 48px rgba(20, 36, 58, 0.09)',
        float: '0 24px 64px rgba(20, 36, 58, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-site)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
