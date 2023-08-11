import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

import { defineEslintConfig, defineEslintRules } from '../utils'

import { eslintConfigForJavascript } from './javascript'
import { eslintConfigForNode } from './node'

const eslintRulesForReact = defineEslintRules({
  'react/boolean-prop-naming': 2,
  'react/button-has-type': 2,
  'react/hook-use-state': [2, { allowDestructuredState: true }],
  'react/jsx-boolean-value': 2,
  'react/jsx-closing-bracket-location': 2,
  'react/jsx-closing-tag-location': 2,
  'react/jsx-curly-brace-presence': [2, { children: 'never', propElementValues: 'always', props: 'never' }],
  'react/jsx-curly-newline': 2,
  'react/jsx-curly-spacing': [2, { children: true, when: 'never' }],
  'react/jsx-equals-spacing': [2, 'never'],
  'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
  'react/jsx-first-prop-new-line': 2,
  'react/jsx-fragments': 2,
  'react/jsx-handler-names': 2,
  'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
  'react/jsx-indent-props': [2, 2],
  'react/jsx-key': 2,
  'react/jsx-max-props-per-line': [2, { maximum: { multi: 1 } }],
  'react/jsx-newline': [2, { allowMultilines: true, prevent: true }],
  'react/jsx-no-comment-textnodes': 2,
  'react/jsx-no-constructed-context-values': 2,
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-no-leaked-render': 2,
  'react/jsx-no-target-blank': 2,
  'react/jsx-no-undef': 2,
  'react/jsx-no-useless-fragment': 2,
  'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
  'react/jsx-pascal-case': 2,
  'react/jsx-tag-spacing': 2,
  'react/jsx-uses-react': 0,
  'react/jsx-uses-vars': 2,
  'react/jsx-wrap-multilines': [
    2,
    {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line'
    }
  ],
  'react/no-access-state-in-setstate': 2,
  'react/no-children-prop': 2,
  'react/no-deprecated': 2,
  'react/no-invalid-html-attribute': 2,
  'react/no-unescaped-entities': 2,
  'react/no-unknown-property': 2,
  'react/react-in-jsx-scope': 0,
  'react/self-closing-comp': 2,
  'react/style-prop-object': 2,
  'react/void-dom-elements-no-children': 2
})

const eslintRulesForReactHooks = defineEslintRules({
  'react-hooks/exhaustive-deps': 2,
  'react-hooks/rules-of-hooks': 2
})

const eslintRulesForJsxA11y = defineEslintRules({
  ...eslintPluginJsxA11y.configs.recommended.rules,
  'jsx-a11y/no-aria-hidden-on-focusable': 2,
  'jsx-a11y/prefer-tag-over-role': 2
})

export const eslintConfigForJsx = defineEslintConfig([
  {
    files: ['**/*.jsx'],
    languageOptions: {
      globals: {
        ...eslintConfigForJavascript[0]?.languageOptions?.globals,
        ...eslintConfigForNode[0]?.languageOptions?.globals
      },
      parserOptions: {
        ...eslintConfigForJavascript[0]?.languageOptions?.parserOptions,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      ...eslintConfigForJavascript[0]?.plugins,
      'jsx-a11y': eslintPluginJsxA11y,
      'react': eslintPluginReact,
      'react-hooks': eslintPluginReactHooks
    },
    rules: {
      ...eslintConfigForJavascript[0]?.rules,
      ...eslintRulesForJsxA11y,
      ...eslintRulesForReact,
      ...eslintRulesForReactHooks
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.mjs', '.cjs', '.jsx']
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs', '.jsx', '.json', '.node']
        }
      },
      'react': {
        version: 'detect'
      }
    }
  }
])
