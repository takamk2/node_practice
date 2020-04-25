module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
}
