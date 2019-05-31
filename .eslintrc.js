module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json'],
      },
    },
    targets: ['chrome >= 50', 'firefox', 'edge', 'safari', 'ie'],
  },
  extends: [require.resolve('./config/eslint'), 'prettier'],
  plugins: ['prettier', 'react'],
  rules: {
    strict: 'error',
    // 'react/jsx-uses-react': ['error'],
    // 'react/prefer-stateless-function': 'off',
    'prettier/prettier': ['error'],
    'react/label-has-for': 'off',
    complexity: ['error', 14],
  },
};
