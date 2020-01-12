module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'max-len': "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'no-multiple-empty-lines': 'off',
    'import/extensions': ['.js', '.ts', '.vue'],
    'vue/no-v-html': 'off',
    'no-plusplus': 'off'
  },
};
