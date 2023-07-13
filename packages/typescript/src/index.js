import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

import ESlintConfigJavascript from '@13onthecode/eslint-config-javascript'
import ESlintPluginTypescript from '@typescript-eslint/eslint-plugin'
import ESlintParserTypescript from '@typescript-eslint/parser'

const TSConfigPath = resolve(cwd(), 'tsconfig.json')

if (!existsSync(TSConfigPath)) {
  throw new Error(`TSConfig file not found. Please check if the file exists at the path: ${TSConfigPath}`)
}

const ESlintConfigJavascriptRules = {
  ...ESlintConfigJavascript.rules,
  'perfectionist/sort-imports': [2, { ...ESlintConfigJavascript.rules['perfectionist/sort-imports'][1], 'read-tsconfig': true }]
}

const cloneDeep = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let clone = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      clone[key] = cloneDeep(obj[key])
    }
  }

  return clone
}

const createESlintPluginTypescriptRules = () => {
  let sameRules = {}
  let ESlintConfigJavascriptRulesClone = cloneDeep(ESlintConfigJavascriptRules)
  let ESlintConfigJavascriptRulesKeys = new Set(Object.keys(ESlintConfigJavascriptRulesClone))

  for (const key of Object.keys(ESlintPluginTypescript.rules)) {
    if (ESlintConfigJavascriptRulesKeys.has(key)) {
      sameRules[key] = 0
      sameRules[`@typescript-eslint/${key}`] = ESlintConfigJavascriptRulesClone[key]
    }
  }

  return {
    ...ESlintPluginTypescript.configs['eslint-recommended'].rules,
    ...ESlintPluginTypescript.configs.recommended.rules,
    ...sameRules,
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/consistent-generic-constructors': 2,
    '@typescript-eslint/consistent-type-definitions': 2,
    '@typescript-eslint/consistent-type-exports': 2,
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/method-signature-style': 2,
    '@typescript-eslint/no-duplicate-type-constituents': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-import-type-side-effects': 2,
    '@typescript-eslint/no-mixed-enums': 2,
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    '@typescript-eslint/no-unnecessary-condition': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/padding-line-between-statements': [2, ...ESlintConfigJavascriptRulesClone['padding-line-between-statements'].slice(1), { blankLine: 'always', next: ['interface', 'type'], prev: '*' }],
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/unified-signatures': 2
  }
}

const ESlintPluginTypescriptRules = createESlintPluginTypescriptRules()

export default {
  files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
  ignores: ['**/*.d.*', '**/dist/**', '**/build/**', '**/node_modules/**', '**/.*/**'],
  languageOptions: {
    ...ESlintConfigJavascript.languageOptions,
    parser: ESlintParserTypescript,
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      project: [TSConfigPath],
      tsconfigRootDir: cwd()
    }
  },
  plugins: {
    ...ESlintConfigJavascript.plugins,
    '@typescript-eslint': ESlintPluginTypescript
  },
  rules: {
    ...ESlintConfigJavascriptRules,
    ...ESlintPluginTypescriptRules
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        project: [TSConfigPath]
      }
    }
  }
}
