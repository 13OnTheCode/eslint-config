# @13onthecode/eslint-config

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/258572401-482172f4-a813-41ae-9e42-d17176ae2893.svg" width="100" height="100" align="right" alt="ESLint" />

[![Version](https://img.shields.io/npm/v/@13onthecode/eslint-config?color=4b32c3&label=)](https://www.npmjs.com/package/@13onthecode/eslint-config)
[![License](https://img.shields.io/npm/l/@13onthecode/eslint-config?color=4b32c3&label=)](LICENSE.md)

English | [简体中文](README.CN.md)

A versatile ESLint configuration library that follows best practices, offering foundational setups for JavaScript, TypeScript, Node.js, and React projects

## Features

- Follow best practices to achieve accurate and reliable code inspection
- Flexible configuration options to cater to different project needs
- Automatically fixing formatting without the need for Prettier
- Integrating mainstream plugins to provide extensive functionality enhancements for projects
- Continuously maintained and updated to support the latest versions and features

## Prerequisites

### Node.js
- Version >= 16.0.0
- ESM Project

### ESLint
- Version >= 8.23.0
- Using Flat Config

## Install

```shell
npm install @13onthecode/eslint-config --save-dev
```

## Usage

First, ensure you're using ESM (set `"type": "module"` in your `package.json`)

Then, create ESLint configuration file `eslint.config.js` in the project's root directory, and import the preset configurations you need based on your project requirements:

### Base

Preset configuration for pure JavaScript and TypeScript projects, excluding Node environment and `.jsx` and `.tsx` files

```javascript
import { base } from '@13onthecode/eslint-config'

export default [
  ...base
]
```

### Node

This configuration extends the [Base](#base) configuration

Preset configuration for Node.js projects, providing Node environment support for JavaScript and TypeScript files

```javascript
import { node } from '@13onthecode/eslint-config'

export default [
  ...node
]
```

### React

This configuration extends the [Node](#node) configuration

Preset configuration for React projects, providing support for `.jsx` and `.tsx` files

```javascript
import { react } from '@13onthecode/eslint-config'

export default [
  ...react
]
```

## Override

To override things, just concat the config you want together, for example:

```javascript
import { base } from '@13onthecode/eslint-config'

export default [
  ...base,
  {
    files: ["src/**/*.js"],
    rules: {
      "no-console": "off"
    }
  }
]
```

## FAQ

### Why not Prettier?
- [《Why I don't use Prettier》](https://antfu.me/posts/why-not-prettier)
- [《The Blurry Line Between Formatting and Style》](https://blog.joshuakgoldberg.com/the-blurry-line-between-formatting-and-style/)

### Why not CommonJS?
- [《Get Ready For ESM》](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Check Also
- [`@13onthecode/typescript-config`](https://github.com/13OnTheCode/typescript-config/tree/main)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
