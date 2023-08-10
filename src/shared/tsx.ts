import { defineEslintConfig, findTsConfigFile } from '../utils'

import { eslintConfigForJsx } from './jsx'
import { eslintConfigForTypescript } from './typescript'

const tsConfigPath = findTsConfigFile()

export const eslintConfigForTsx = defineEslintConfig([
  {
    files: ['**/*.tsx'],
    languageOptions: {
      globals: {
        ...eslintConfigForJsx[0]?.languageOptions?.globals
      },
      parser: eslintConfigForTypescript[0]?.languageOptions?.parser,
      parserOptions: {
        ...eslintConfigForJsx[0]?.languageOptions?.parserOptions,
        project: tsConfigPath
      }
    },
    plugins: {
      ...eslintConfigForJsx[0]?.plugins,
      ...eslintConfigForTypescript[0]?.plugins
    },
    rules: {
      ...eslintConfigForJsx[0]?.rules,
      ...eslintConfigForTypescript[0]?.rules
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx']
      },
      'import/resolver': {
        typescript: {
          extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json', '.node']
        },
        // eslint-disable-next-line perfectionist/sort-objects
        node: {
          extensions: ['.ts', '.tsx', '.js', '.mjs', '.cjs', '.jsx', '.json', '.node']
        }
      },
      'react': {
        version: 'detect'
      }
    }
  }
])
