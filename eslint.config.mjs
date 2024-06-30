import globals from 'globals';
import pluginJs from '@eslint/js';

const baseConfig = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2023, // Adjust according to your target ECMAScript version
      sourceType: 'module',
    },
  },
  rules: {
    // Remove or comment out the rule causing issues
    // 'constructor-super': 'error',
    // Ensure other rules align with your project requirements
  },
};

export default [
  { ...baseConfig, files: ['**/*.js'] },
  { ...baseConfig, files: ['**/*.mjs'] }, // Example for different file type
];

// Global variables can be defined outside the array if necessary
export const globalsConfig = {
  eslint: 'readonly',
};
