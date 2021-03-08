module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [ "airbnb-base", "prettier"],
  plugins: [ "plugins" ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'class-method-use-this': 'off',
    'no-param-reasing': 'off',
    camelCase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next'}],
    "prettier/prettier": "error",
  },
};
