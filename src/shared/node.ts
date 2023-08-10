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
    ignores: [
      '**/*.min.?(m|c)js',
      ...hasTsConfigFile ? ['**/*.d.?(m|c)ts'] : []
    ],
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin
      }
    }
  }
])
