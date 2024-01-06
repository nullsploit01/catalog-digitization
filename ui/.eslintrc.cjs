module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-console': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to ESLint
    }
  }
}
