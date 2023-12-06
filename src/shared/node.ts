import globals from 'globals'

import { defineEslintConfig, findTsConfigFile } from '../utils'

const hasTsConfigFile = !!findTsConfigFile()

export const eslintConfigForNode = defineEslintConfig([
  {
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
      ...hasTsConfigFile ? [
        '**/*.ts',
        '**/*.mts',
        '**/*.cts'
      ] : []
    ],
    ignores: ['**/*.min.*'],
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin
      }
    }
  }
])
