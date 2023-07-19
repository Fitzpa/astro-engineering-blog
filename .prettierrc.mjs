
const config = {
  plugins: ["./node_modules/prettier-plugin-astro"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}

export default config