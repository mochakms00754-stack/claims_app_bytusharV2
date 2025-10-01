/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        background: 'rgb(var(--color-background))',
        foreground: 'rgb(var(--color-foreground))',
        card: {
          DEFAULT: 'rgb(var(--color-card-background))',
          foreground: 'rgb(var(--color-card-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--color-muted-background))',
          foreground: 'rgb(var(--color-muted-foreground))',
        },
        border: 'rgb(var(--color-border))',
      },
    },
  },
  plugins: [],
}
