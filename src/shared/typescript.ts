import eslintPluginTypescript from '@typescript-eslint/eslint-plugin'
import eslintParserTypescript from '@typescript-eslint/parser'
import type { Linter } from 'eslint'

import { defineEslintConfig, defineEslintRules, findTsConfigFile } from '../utils'

import { eslintConfigForJavascript } from './javascript'

const tsConfigPath = findTsConfigFile()

function createEslintRulesForTypescript() {
  const replacementRules: Linter.RulesRecord = {}

  const eslintRulesForJavascript = JSON.parse(JSON.stringify(eslintConfigForJavascript[0]?.rules))
  const eslintRulesForJavascriptKeys = new Set(Object.keys(eslintRulesForJavascript))
  const eslintRulesForTypescriptKeys = new Set(Object.keys(eslintPluginTypescript.rules))

  for (const key of eslintRulesForTypescriptKeys) {
    if (eslintRulesForJavascriptKeys.has(key)) {
      replacementRules[key] = 0
      replacementRules[`@typescript-eslint/${key}`] = eslintRulesForJavascript[key]
    }
  }

  // https://github.com/typescript-eslint/typescript-eslint/issues/6636
  if (Object.hasOwn(replacementRules, '@typescript-eslint/lines-around-comment')) {
    Reflect.deleteProperty((replacementRules['@typescript-eslint/lines-around-comment'] as object[])[1]!, 'afterHashbangComment')
  }

  return defineEslintRules({
    ...eslintRulesForJavascript,
    ...eslintPluginTypescript.configs['eslint-recommended'].overrides[0].rules,
    ...eslintPluginTypescript.configs.recommended.rules,
    ...eslintPluginTypescript.configs.stylistic.rules,
    ...replacementRules,
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
    '@typescript-eslint/padding-line-between-statements': [
      2,
      ...(eslintRulesForJavascript['padding-line-between-statements'] as unknown[]).slice(1),
      { blankLine: 'always', next: ['interface', 'type'], prev: '*' }
    ],
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/unified-signatures': 2
  })
}

const eslintRulesForTypescript = createEslintRulesForTypescript()

export const eslintConfigForTypescript = defineEslintConfig([
  {
    files: ['**/*.ts', '**/*.mts', '**/*.cts'],
    ignores: ['**/*.d.*'],
    languageOptions: {
      globals: {
        ...eslintConfigForJavascript[0]?.languageOptions?.globals
      },
      parser: eslintParserTypescript,
      parserOptions: {
        ...eslintConfigForJavascript[0]?.languageOptions?.parserOptions,
        project: tsConfigPath
      }
    },
    plugins: {
      ...eslintConfigForJavascript[0]?.plugins,
      '@typescript-eslint': eslintPluginTypescript
    },
    rules: {
      ...eslintRulesForTypescript,

      // https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting#eslint-plugin-import
      'import/default': 0,
      'import/named': 0,
      'import/namespace': 0,
      'import/no-cycle': 0,
      'import/no-deprecated': 0,
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/no-unused-modules': 0
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.mts', '.cts']
      },
      'import/resolver': {
        typescript: {
          extensions: ['.ts', '.d.ts', '.js', '.json', '.node']
        },
        // eslint-disable-next-line perfectionist/sort-objects
        node: {
          extensions: ['.ts', '.js', '.mjs', '.cjs', '.json', '.node']
        }
      }
    }
  }
])
