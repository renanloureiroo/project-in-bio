import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'background-tertiary': 'var(--background-tertiary)',
        'background-quaternary': 'var(--background-quaternary)',

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
      },
      fontSize: {
        'heading-large': [
          '3rem',
          {
            lineHeight: '4rem',
            fontWeight: '700'
          }
        ],
        'heading-medium': [
          '2.25rem',
          {
            lineHeight: '2.75rem',
            fontWeight: '700'
          }
        ],
        'heading-small': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700'
          }
        ],

        'body-large': [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '400'
          }
        ],
        'body-medium': [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400'
          }
        ],
        'body-small': [
          '0.75rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400'
          }
        ],

        label: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700'
          }
        ]
      }
    }
  },
  plugins: []
} satisfies Config
