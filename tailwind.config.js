/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          disabled: 'var(--color-primary-disabled)',
          'hover-bg': 'var(--color-primary-hover-bg)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          disabled: 'var(--color-secondary-disabled)',
          'hover-bg': 'var(--color-secondary-hover-bg)',
        },
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      },
    },
  },
  plugins: [],
};
