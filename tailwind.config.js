const c = (n) => `rgb(var(--${n}) / <alpha-value>)`
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: { bg: c('bg'), surf: c('surf'), ink: c('ink'), mute: c('mute'), line: c('line'), accent: c('accent'), accent2: c('accent2'), on: c('on') },
    },
  },
  plugins: [],
}
