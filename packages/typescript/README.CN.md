# @13onthecode/eslint-config-typescript

<img src="https://camo.githubusercontent.com/3d3600855c97f9bb4d34030db7f975e5329e797d7e42e1563ad6c3647df86ce6/68747470733a2f2f6769746875622d70726f64756374696f6e2d757365722d61737365742d3632313064662e73332e616d617a6f6e6177732e636f6d2f353639383335302f3234313432363632392d66376533613562662d353066652d343963312d616437362d3938626433393134636433652e737667" align="right" width="100" height="100" alt="ESLint" />

[![NPM version](https://img.shields.io/npm/v/@13onthecode/eslint-config-typescript?color=463abd&amp;label=)](https://www.npmjs.com/package/@13onthecode/eslint-config-typescript)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?color=463abd&amp;label=)](LICENSE.md)

[English](README.md) | 简体中文

用于 Typescript 项目的可共享 ESLint 配置

## Features

- 固执己见, 但同时保持合理的默认配置和最佳实践
- 按需导入适合你项目的配置文件
- 自动修复格式（旨在独立使用，无需使用 Prettier）
- 主流常用 ESLint 插件集成，开箱即用

## Prerequisites

- ESLint 版本需要 8.23.0 或更高
- 使用 ESLint Flat Config

## Install

```shell
npm install @13onthecode/eslint-config-typescript --save-dev
```

## Usage

创建 ESLint 配置文件 `eslint.config.js` :

```javascript
import typescript from '@13onthecode/eslint-config-typescript'

export default [
  typescript
]
```

## Related

- [`@13onthecode/eslint-config-node`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/node)
- [`@13onthecode/eslint-config-react`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/react)
- [`@13onthecode/eslint-config-javascript`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/javascript)

## FAQ

### 为什么不使用 Prettier？
- [《Why I don't use Prettier》](https://antfu.me/posts/why-not-prettier)
- [《The Blurry Line Between Formatting and Style》](https://blog.joshuakgoldberg.com/the-blurry-line-between-formatting-and-style/)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
