import { eslintConfigForJavascript } from './shared/javascript'
import { eslintConfigForJsx } from './shared/jsx'
import { eslintConfigForNode } from './shared/node'
import { eslintConfigForTsx } from './shared/tsx'
import { eslintConfigForTypescript } from './shared/typescript'
import { defineEslintConfig, findTsConfigFile } from './utils'

const hasTsConfigFile = !!findTsConfigFile()

export const base = defineEslintConfig([
  {
    ignores: ['**/dist/**', '**/build/**', '**/node_modules/**', '**/.*/**']
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  ...eslintConfigForJavascript,
  ...hasTsConfigFile ? eslintConfigForTypescript : []
])

export const node = defineEslintConfig([
  ...base,
  ...eslintConfigForNode
])

export const react = defineEslintConfig([
  ...node,
  ...eslintConfigForJsx,
  ...hasTsConfigFile ? eslintConfigForTsx : []
])
