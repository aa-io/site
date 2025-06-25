/* eslint-env node */
module.exports = {
  extends: ['next', 'eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',

  plugins: ['unicorn', '@typescript-eslint', 'eslint-plugin-unused-imports', 'react-hooks-extra'],

  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-warning-comments': [
      `error`,
      {
        terms: ['@nomerge'],
        location: 'anywhere',
      },
    ],
    'unicorn/expiring-todo-comments': 'error',
    'import/no-anonymous-default-export': 'off',
    'react/display-name': [
      'warn',
      {
        ignoreTranspilerName: false,
      },
    ],
    'no-dupe-keys': 'error',
    'no-useless-escape': 'off',
    'no-extra-boolean-cast': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'no-case-declarations': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    '@next/next/no-img-element': 'off',
    'unused-imports/no-unused-imports': 'error',
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
  },
};
