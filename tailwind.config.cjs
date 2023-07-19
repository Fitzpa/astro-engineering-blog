/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        berka: ['BerkaLight', 'sans-serif'],
        sans: ['BerkaLight', 'sans-serif'],
        serif: ['BerkaLight', 'sans-serif'],
        mono: ['BerkaLight', 'sans-serif'],
        display: ['BerkaLight', 'sans-serif'],
        body: ['BerkaLight', 'sans-serif'],
      },
      colors: {
        header: '#000',
        'header-foreground': '#fff',
        link: '#2563EB',
        primary: {
          500: '#2563EB',
          600: '#1D4ED8',
        },
        'primary-foreground': '#fff',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.link'),
            },

          },
        },
      }),
    },
  },
  daisyui: {
    themes: [
      "night"
      // {
      //   mytheme: {
      //     "primary": "#4728D3",
      //     "secondary": "#663BC2",
      //     "accent": "#1dcdbc",
      //     "neutral": "#2b3440",
      //     "base-100": "#ffffff",
      //     "info": "#3abff8",
      //     "success": "#36d399",
      //     "warning": "#fbbd23",
      //     "error": "#f87272",
      //   },
      // },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
