<div align="center">

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/258572401-482172f4-a813-41ae-9e42-d17176ae2893.svg" width="100" height="100" alt="ESLint" />

# ESLint Config

[![Version](https://img.shields.io/npm/v/@13onthecode/eslint-config?color=4b32c3&label=)](https://www.npmjs.com/package/@13onthecode/eslint-config)
[![License](https://img.shields.io/npm/l/@13onthecode/eslint-config?color=4b32c3&label=)](LICENSE.md)

English | [简体中文](README.CN.md)

It provides predefined configuration files for JavaScript, TypeScript, Node.js, and React projects, allowing selective importing of configurations based on project requirements
</div>

## Features

- Opinionated, yet maintaining reasonable defaults and best practices
- Selectively import the configuration files that fit your project
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Integration with other popular ESLint plugins out of the box

## Prerequisites

- ESLint version 8.23.0 or higher
- ESLint Flat Config to be enabled and used

## Install

```shell
npm install @13onthecode/eslint-config --save-dev
```

## Usage

Create ESLint configuration file `eslint.config.js` and import the preset configurations that you need based on your project requirements:

```javascript
import { javascript, typescript, react, node } from '@13onthecode/eslint-config'

export default [
  node,
  react,
  javascript,
  typescript
]
```

## Packages

This package is a collection of the following shareable ESLint configurations:

- [`@13onthecode/eslint-config-javascript`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/javascript)
- [`@13onthecode/eslint-config-typescript`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/typescript)
- [`@13onthecode/eslint-config-node`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/node)
- [`@13onthecode/eslint-config-react`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/react)

## FAQ

### Why not Prettier?
- [《Why I don't use Prettier》](https://antfu.me/posts/why-not-prettier)
- [《The Blurry Line Between Formatting and Style》](https://blog.joshuakgoldberg.com/the-blurry-line-between-formatting-and-style/)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
