import globals from 'globals';
import pluginJs from '@eslint/js';

const baseConfig = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2023, 
      sourceType: 'module',
    },
  },
  rules: {

  },
};

export default [
  { ...baseConfig, files: ['**/*.js'] },
  { ...baseConfig, files: ['**/*.mjs'] }, 
];


export const globalsConfig = {
  eslint: 'readonly',
};
