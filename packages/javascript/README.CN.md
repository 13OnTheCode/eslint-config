# @13onthecode/eslint-config-javascript

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/258572401-482172f4-a813-41ae-9e42-d17176ae2893.svg" width="100" height="100" align="right" alt="ESLint" />

[![Version](https://img.shields.io/npm/v/@13onthecode/eslint-config-javascript?color=4b32c3&label=)](https://www.npmjs.com/package/@13onthecode/eslint-config-javascript)
[![License](https://img.shields.io/npm/l/@13onthecode/eslint-config-javascript?color=4b32c3&label=)](LICENSE.md)

[English](README.md) | 简体中文

用于 JavaScript 项目的可共享 ESLint 配置

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
npm install @13onthecode/eslint-config-javascript --save-dev
```

## Usage

创建 ESLint 配置文件 `eslint.config.js` :

```javascript
import javascript from '@13onthecode/eslint-config-javascript'

export default [
  javascript
]
```

## Related

- [`@13onthecode/eslint-config-node`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/node)
- [`@13onthecode/eslint-config-react`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/react)
- [`@13onthecode/eslint-config-typescript`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/typescript)

## FAQ

### 为什么不使用 Prettier？
- [《Why I don't use Prettier》](https://antfu.me/posts/why-not-prettier)
- [《The Blurry Line Between Formatting and Style》](https://blog.joshuakgoldberg.com/the-blurry-line-between-formatting-and-style/)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
