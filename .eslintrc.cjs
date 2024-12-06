module.exports = {
  env: {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn',
    'react-refresh/only-export-components': 'warn',
  },
}
