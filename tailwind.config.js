/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#F6EEDC',
        paper:     '#FBF6E9',
        ink:       '#2A1810',
        'ink-soft':'#5A4232',
        terracotta: {
          DEFAULT: '#B8442C',
          deep:    '#8E3320',
        },
        peacock: {
          DEFAULT: '#0F4C5C',
          deep:    '#0A3744',
        },
        gold: {
          DEFAULT: '#B8860B',
          soft:    '#C99A2E',
        },
        rule: '#D9C6A0',
      },
      fontFamily: {
        serif:      ['"Cormorant Garamond"', 'Times New Roman', 'serif'],
        sans:       ['Karla', 'system-ui', 'sans-serif'],
        devanagari: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 90s linear infinite',
      },
    },
  },
  plugins: [],
}
