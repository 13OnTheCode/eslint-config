import ESlintConfigJavascript from '@eslint/js'
import ESlintPluginI from 'eslint-plugin-i'
import ESlintPluginPerfectionist from 'eslint-plugin-perfectionist'
import ESlintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

const ESlintRules = {
  ...ESlintConfigJavascript.configs.recommended.rules,
  'array-bracket-newline': [2, { multiline: true }],
  'array-bracket-spacing': 2,
  'array-callback-return': 2,
  'array-element-newline': [2, 'consistent'],
  'arrow-body-style': [2, 'as-needed'],
  'arrow-parens': [2, 'always'],
  'arrow-spacing': [2, { after: true, before: true }],
  'block-spacing': [2, 'always'],
  'brace-style': [2, '1tbs', { allowSingleLine: false }],
  'camelcase': [2, { ignoreGlobals: true, properties: 'always' }],
  'comma-dangle': [2, 'never'],
  'comma-spacing': [2, { after: true, before: false }],
  'comma-style': [2, 'last'],
  'computed-property-spacing': [2, 'never'],
  'consistent-return': 2,
  'curly': [2, 'all'],
  'default-case-last': 2,
  'dot-location': [2, 'property'],
  'dot-notation': 2,
  'eol-last': [2, 'always'],
  'eqeqeq': [2, 'always'],
  'func-call-spacing': [2, 'never'],
  'function-call-argument-newline': [2, 'consistent'],
  'function-paren-newline': [2, 'multiline-arguments'],
  'generator-star-spacing': [2, { after: true, before: true }],
  'implicit-arrow-linebreak': [2, 'beside'],
  'indent': [2, 2, { SwitchCase: 1 }],
  'jsx-quotes': 2,
  'key-spacing': [2, { afterColon: true, beforeColon: false }],
  'keyword-spacing': 2,
  'linebreak-style': [2, 'unix'],
  'lines-around-comment': [2, { allowBlockStart: true, beforeBlockComment: true, beforeLineComment: true }],
  'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
  'new-cap': [2, { capIsNew: false, newIsCap: true, properties: true }],
  'new-parens': 2,
  'no-array-constructor': 2,
  'no-caller': 2,
  'no-console': [2, { allow: ['warn', 'error'] }],
  'no-else-return': 2,
  'no-empty': [2, { allowEmptyCatch: true }],
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-parens': [2, 'functions'],
  'no-floating-decimal': 2,
  'no-implied-eval': 2,
  'no-irregular-whitespace': [2, { skipComments: true, skipJSXText: true, skipRegExps: true, skipStrings: true, skipTemplates: true }],
  'no-iterator': 2,
  'no-labels': [2, { allowLoop: false, allowSwitch: false }],
  'no-lonely-if': 2,
  'no-mixed-operators': [2, { allowSamePrecedence: true, groups: [['===', '!==', '>', '>=', '<', '<='], ['&&', '||', '??'], ['in', 'instanceof']] }],
  'no-multi-spaces': 2,
  'no-multi-str': 2,
  'no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
  'no-nested-ternary': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-object': 2,
  'no-new-wrappers': 2,
  'no-octal-escape': 2,
  'no-return-assign': [2, 'except-parens'],
  'no-self-assign': [2, { props: true }],
  'no-self-compare': 2,
  'no-shadow': 2,
  'no-tabs': 2,
  'no-template-curly-in-string': 2,
  'no-trailing-spaces': 2,
  'no-undef-init': 2,
  'no-unneeded-ternary': [2, { defaultAssignment: false }],
  'no-unreachable-loop': 2,
  'no-unused-expressions': [2, { allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true }],
  'no-unused-vars': [2, { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_', ignoreRestSiblings: true, varsIgnorePattern: '^_' }],
  'no-use-before-define': [2, { classes: false, functions: false, variables: false }],
  'no-useless-call': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-useless-rename': 2,
  'no-useless-return': 2,
  'no-var': 2,
  'no-void': 2,
  'no-whitespace-before-property': 2,
  'object-curly-newline': [2, { consistent: true, multiline: true }],
  'object-curly-spacing': [2, 'always'],
  'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
  'object-shorthand': [2, 'always', { avoidQuotes: true, ignoreConstructors: false }],
  'one-var': [2, { initialized: 'never' }],
  'operator-linebreak': [2, 'after', { overrides: { ':': 'before', '?': 'before', '|>': 'before' } }],
  'padded-blocks': [2, 'never'],
  'padding-line-between-statements': [
    2,
    { blankLine: 'always', next: '*', prev: ['multiline-const', 'multiline-let', 'multiline-expression'] },
    { blankLine: 'always', next: '*', prev: 'block' },
    { blankLine: 'always', next: '*', prev: 'block-like' },
    { blankLine: 'always', next: '*', prev: 'directive' },
    { blankLine: 'always', next: ['multiline-const', 'multiline-let', 'multiline-expression'], prev: '*' },
    { blankLine: 'always', next: ['block', 'block-like', 'return'], prev: '*' },
    { blankLine: 'any', next: 'directive', prev: 'directive' }
  ],
  'prefer-destructuring': [2, { 'array': false, 'object': true }],
  'prefer-exponentiation-operator': 2,
  'prefer-promise-reject-errors': 2,
  'prefer-regex-literals': [2, { disallowRedundantWrapping: true }],
  'prefer-rest-params': 2,
  'quote-props': [2, 'consistent'],
  'quotes': [2, 'single'],
  'rest-spread-spacing': [2, 'never'],
  'semi': [2, 'never'],
  'semi-spacing': [2, { after: true, before: false }],
  'semi-style': [2, 'last'],
  'space-before-blocks': [2, 'always'],
  'space-before-function-paren': [2, 'never'],
  'space-in-parens': [2, 'never'],
  'space-infix-ops': 2,
  'space-unary-ops': [2, { nonwords: false, words: true }],
  'spaced-comment': [2, 'always'],
  'switch-colon-spacing': [2, { after: true, before: false }],
  'template-curly-spacing': [2, 'never'],
  'template-tag-spacing': [2, 'never'],
  'use-isnan': [2, { enforceForIndexOf: true, enforceForSwitchCase: true }],
  'wrap-iife': [2, 'any', { functionPrototypeMethods: true }],
  'yoda': [2, 'never']
}

const ESlintPluginIRules = {
  'import/consistent-type-specifier-style': [2, 'prefer-top-level'],
  'import/default': 2,
  'import/export': 2,
  'import/first': 2,
  'import/named': 2,
  'import/newline-after-import': [2, { considerComments: true }],
  'import/no-duplicates': 2,
  'import/no-empty-named-blocks': 2,
  'import/no-named-as-default': 2,
  'import/no-named-default': 2,
  'import/no-self-import': 2,
  'import/no-unresolved': 0,
  'import/no-useless-path-segments': 2,
  'import/no-webpack-loader-syntax': 2
}

const ESlintPluginUnicornRules = {
  ...ESlintPluginUnicorn.configs.recommended.rules,
  'unicorn/catch-error-name': 0,
  'unicorn/consistent-function-scoping': 0,
  'unicorn/expiring-todo-comments': 0,
  'unicorn/filename-case': 0,
  'unicorn/import-style': 0,
  'unicorn/no-useless-undefined': 0,
  'unicorn/prevent-abbreviations': 0
}

const ESlintPluginPerfectionistRules = {
  ...ESlintPluginPerfectionist.configs['recommended-natural'].rules,
  'perfectionist/sort-imports': [
    2,
    {
      'groups': [
        ['builtin', 'builtin-type'],
        ['external', 'external-type'],
        ['internal', 'internal-type'],
        ['parent', 'parent-type'],
        ['sibling', 'sibling-type'],
        ['index', 'index-type'],
        'side-effect',
        'style',
        'object',
        'unknown'
      ],
      'internal-pattern': []
    }
  ]
}

export default {
  files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'],
  ignores: ['**/*.min.*', '**/dist/**', '**/build/**', '**/node_modules/**', '**/.*/**'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es5,
      ...globals.es2015,
      ...globals.es2017,
      ...globals.es2020,
      ...globals.es2021
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  plugins: {
    'import': ESlintPluginI,
    'perfectionist': ESlintPluginPerfectionist,
    'unicorn': ESlintPluginUnicorn
  },
  rules: {
    ...ESlintRules,
    ...ESlintPluginIRules,
    ...ESlintPluginUnicornRules,
    ...ESlintPluginPerfectionistRules
  },
  settings: {
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx']
    }
  }
}
