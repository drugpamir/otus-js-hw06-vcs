import globals from 'globals';
import pluginJs from '@eslint/js';
import jest from 'eslint-plugin-jest';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js'],
    ignores: ['**/*.config.js', '!**/eslint.config.js'],
    ...jest.configs['flat/recommended'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  },
];
