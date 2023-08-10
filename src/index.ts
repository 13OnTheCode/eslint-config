import { eslintConfigForJavascript } from './shared/javascript'
import { eslintConfigForJsx } from './shared/jsx'
import { eslintConfigForNode as eslintConfigForNodeJs } from './shared/node'
import { eslintConfigForTsx } from './shared/tsx'
import { eslintConfigForTypescript } from './shared/typescript'
import { defineEslintConfig, findTsConfigFile } from './utils'

const hasTsConfigFile = !!findTsConfigFile()

export const eslintConfigForBase = defineEslintConfig([
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

export const eslintConfigForNode = defineEslintConfig([
  ...eslintConfigForBase,
  ...eslintConfigForNodeJs
])

export const eslintConfigForReact = defineEslintConfig([
  ...eslintConfigForNode,
  ...eslintConfigForJsx,
  ...hasTsConfigFile ? eslintConfigForTsx : []
])
