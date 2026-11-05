/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          950: '#000000',
          900: '#09090b',
          850: '#121215',
          800: '#18181b',
          700: '#27272a',
          600: '#3f3f46',
          500: '#52525b',
          400: '#71717a',
          300: '#a1a1aa',
          200: '#e4e4e7',
          100: '#f4f4f5',
          50: '#fafafa',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ],
      }
    },
  },
  plugins: [],
}
