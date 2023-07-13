<div align="center">

<img src="https://camo.githubusercontent.com/3d3600855c97f9bb4d34030db7f975e5329e797d7e42e1563ad6c3647df86ce6/68747470733a2f2f6769746875622d70726f64756374696f6e2d757365722d61737365742d3632313064662e73332e616d617a6f6e6177732e636f6d2f353639383335302f3234313432363632392d66376533613562662d353066652d343963312d616437362d3938626433393134636433652e737667" width="100" height="100" alt="ESLint" />

# ESLint Config

[![NPM version](https://img.shields.io/npm/v/@13onthecode/eslint-config?color=463abd&amp;label=)](https://www.npmjs.com/package/@13onthecode/eslint-config)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?color=463abd&amp;label=)](LICENSE.md)

English | [简体中文](README.CN.md)

ESLint sharable configs

It provides predefined configuration files for JavaScript, TypeScript, Node.js, and React projects, allowing you to selectively import the appropriate modules based on your project's needs
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
