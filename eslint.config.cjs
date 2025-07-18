const { defineConfig } = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const unicorn = require('eslint-plugin-unicorn');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const unusedImports = require('eslint-plugin-unused-imports');
const reactHooksExtra = require('eslint-plugin-react-hooks-extra');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const tsFiles = ['{app,tests}/**/*.{ts,tsx,js,jsx}'];

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    files: tsFiles,
    extends: compat.extends('next', 'eslint:recommended', 'prettier'),

    languageOptions: {
      parser: tsParser,
    },

    plugins: {
      unicorn,
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
      'react-hooks-extra': reactHooksExtra,
    },

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
  },
]);
