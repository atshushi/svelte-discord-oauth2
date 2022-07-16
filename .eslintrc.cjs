module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  extends: ['descartes/typescript'],
  plugins: ['svelte3'],
};
