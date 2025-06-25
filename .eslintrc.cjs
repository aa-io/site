/* eslint-env node */
module.exports = {
  extends: ['next', 'eslint:recommended', 'prettier', 'plugin:storybook/recommended'],
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
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'warn', // https://react.dev/learn/you-might-not-need-an-effect
    'no-restricted-imports': [
      'warn',
      {
        patterns: [
          {
            group: ['@/server/*'],
            message: 'Use client components and graphql instead',
          },
          {
            group: ['@/app/hooks/useOptionalFetch'],
            message: 'Use graphql instead',
          },
          {
            group: ['@/app/components/lib/button'],
            message: 'Use ui/Button instead of lib/Button',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['src/server/**/*', 'src/app/(auth)/**/*', 'src/app/api/**/*'],
      rules: { 'no-restricted-imports': 'off' },
    },
    {
      files: ['**/*.graphql', '**/*.gql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
    },
  ],
};
