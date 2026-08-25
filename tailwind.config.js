/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#111C2E',
          900: '#0F172A',
          950: '#080D1A',
        },
        brand: {
          blue: '#2563EB',
          blueDark: '#1E40AF',
          gold: '#D4A62B',
          goldLight: '#F3E5AB',
          emerald: '#059669',
          teal: '#0D9488',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono: ['Fira Code', 'monospace'],
      }
    }
  },
  plugins: [],
}
