import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' },
      'import/resolver': {
        alias: {
          map: [
            ['@utils', './src/utils'],
            ['@components', './src/components'],
            ['@styles', './src/styles']
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before'
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: 'hyun-design-system',
              group: 'external',
              position: 'after'
            }
          ],
          'newlines-between': 'always',
          alphabetize: {
            'order': 'asc',
            'caseInsensitive': true
          },
          pathGroupsExcludedImportTypes: ['react']
        }
      ]
    },
  },
]