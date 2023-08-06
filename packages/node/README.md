# @13onthecode/eslint-config-node

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/258572401-482172f4-a813-41ae-9e42-d17176ae2893.svg" width="100" height="100" align="right" alt="ESLint" />

[![Version](https://img.shields.io/npm/v/@13onthecode/eslint-config-node?color=4b32c3&label=)](https://www.npmjs.com/package/@13onthecode/eslint-config-node)
[![License](https://img.shields.io/npm/l/@13onthecode/eslint-config-node?color=4b32c3&label=)](LICENSE.md)

English | [简体中文](README.CN.md)

Shareable ESLint config for Node.js projects

## Features

- Opinionated, yet maintaining reasonable defaults and best practices
- Selectively import the configuration files that fit your project
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Integration with popular and commonly used ESLint plugins

## Prerequisites

- ESLint version 8.23.0 or higher
- ESLint Flat Config to be enabled and used

## Install

```shell
npm install @13onthecode/eslint-config-node --save-dev
```

## Usage

Create ESLint configuration file `eslint.config.js` :

```javascript
import node from '@13onthecode/eslint-config-node'

export default [
  node
]
```

## Related

- [`@13onthecode/eslint-config-react`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/react)
- [`@13onthecode/eslint-config-javascript`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/javascript)
- [`@13onthecode/eslint-config-typescript`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/typescript)

## FAQ

### Why not Prettier?
- [《Why I don't use Prettier》](https://antfu.me/posts/why-not-prettier)
- [《The Blurry Line Between Formatting and Style》](https://blog.joshuakgoldberg.com/the-blurry-line-between-formatting-and-style/)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
