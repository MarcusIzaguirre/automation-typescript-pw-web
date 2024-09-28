module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['*.config.ts'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'max-len': ['error', { code: 140 }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 140,
        semi: false,
        singleQuote: true,
        quoteProps: 'consistent',
        bracketSpacing: true,
        endOfLine: 'auto',
      },
    ],

    // disable the rule for all files
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-useless-escape': 'off',
  },
}
