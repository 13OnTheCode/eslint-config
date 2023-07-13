import globals from 'globals'

export default {
  files: [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.jsx',
    '**/*.ts',
    '**/*.mts',
    '**/*.cts',
    '**/*.tsx'
  ],
  ignores: [
    '**/*.d.*',
    '**/*.min.*',
    '**/dist/**',
    '**/build/**',
    '**/node_modules/**',
    '**/.*/**'
  ],
  languageOptions: {
    globals: {
      ...globals.nodeBuiltin
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.mts', '.cts', '.tsx']
      }
    }
  }
}
