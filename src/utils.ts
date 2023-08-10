/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

import type { Linter } from 'eslint'

type GenericKeys = number | string | symbol

export function isObject(object: unknown): object is Record<GenericKeys, any> {
  return Object.prototype.toString.call(object) === '[object Object]'
}

export function isArray(array: unknown): array is any[] {
  return Object.prototype.toString.call(array) === '[object Array]'
}

export function isCommonJS() {
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain, unicorn/prefer-module
  return typeof module !== 'undefined' && module.exports
}

export function findTsConfigFile() {
  const findDirectory = process.cwd()
  const tsConfigPaths = ['tsconfig.eslint.json', 'tsconfig.json']

  for (const filePath of tsConfigPaths) {
    const fullPath = path.join(findDirectory, filePath)

    if (fs.existsSync(fullPath)) {
      return fullPath
    }
  }

  return undefined
}

export function defineEslintRules(
  rules: Linter.RulesRecord | Readonly<Linter.RulesRecord>
): Readonly<Linter.RulesRecord> {
  if (!isObject(rules)) {
    throw new TypeError('"rules" parameter must be of object type')
  }

  return Object.isFrozen(rules) ? rules : Object.freeze(rules)
}

export function defineEslintConfig(
  config: Linter.FlatConfig[] | Readonly<Linter.FlatConfig[]>
): Readonly<Linter.FlatConfig[]> {
  if (!isArray(config)) {
    throw new TypeError('"config" parameter must be of array type')
  }

  return Object.isFrozen(config) ? config : Object.freeze(config)
}
