module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}