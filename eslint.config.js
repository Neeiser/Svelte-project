import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import { fileURLToPath } from 'node:url';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['.svelte-kit', 'build', 'node_modules']
  },
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  ...svelte.configs['flat/prettier'],
  {
    plugins: {
      svelte: fixupPluginRules(svelte)
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelte.parser
    }
  },
  prettier,
  {
    rules: {
      'svelte/no-at-html-tags': 'error',
      'svelte/valid-compile': 'error',
      'prettier/prettier': [
        'error',
        {
          svelteStrictMode: true,
          svelteBracketNewLine: false,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'es5'
        }
      ]
    }
  }
];