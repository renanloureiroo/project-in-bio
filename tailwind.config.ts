import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'background-tertiary': 'var(--background-tertiary)',

        'content-heading': 'var(--content-heading)',
        'content-body': 'var(--content-body)',
        'content-headline': 'var(--content-headline)',
        'content-placeholder': 'var(--content-placeholder)',

        'accent-purple': 'var(--accent-purple)',
        'accent-blue': 'var(--accent-blue)',
        'accent-green': 'var(--accent-green)',
        'accent-pink': 'var(--accent-pink)',
        'accent-yellow': 'var(--accent-yellow)',

        'border-primary': 'var(--border-primary)',
        'border-secondary': 'var(--border-secondary)',
        'border-tertiary': 'var(--border-tertiary)'
      }
    }
  },
  plugins: []
} satisfies Config
