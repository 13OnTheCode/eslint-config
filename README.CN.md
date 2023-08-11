# @13onthecode/eslint-config

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/258572401-482172f4-a813-41ae-9e42-d17176ae2893.svg" width="100" height="100" align="right" alt="ESLint" />

[![Version](https://img.shields.io/npm/v/@13onthecode/eslint-config?color=4b32c3&label=)](https://www.npmjs.com/package/@13onthecode/eslint-config)
[![License](https://img.shields.io/npm/l/@13onthecode/eslint-config?color=4b32c3&label=)](LICENSE.md)

[English](README.md) | 简体中文

一个通用的 ESLint 配置库，它遵循最佳实践，为 JavaScript、TypeScript、Node.js 和 React 项目提供基础配置

## Features

- 遵循最佳实践，实现准确可靠的代码检查
- 灵活配置选项，适应不同项目需求
- 自动修复格式，无需使用 Prettier
- 主流插件集成，为项目提供广泛的功能拓展
- 持续维护更新，支持最新的版本和特性

## Prerequisites

### Node.js
- 版本 >= 16.0.0
- ESM 项目

### ESLint
- 版本 >= 8.23.0
- 使用 Flat Config

## Install

```shell
npm install @13onthecode/eslint-config --save-dev
```

## Usage

首先，确保你正在使用 ESM（在你的 `package.json` 中设置 `"type": "module"`）

然后，在项目根目录中创建 ESLint 配置文件 `eslint.config.js`，根据你的项目需求导入所需的预设配置：

### Base

用于纯 JavaScript 和 TypeScript 项目的预设配置，不包括 Node 环境以及 `.jsx` 和 `.tsx` 文件

```javascript
import { base } from '@13onthecode/eslint-config'

export default [
  ...base
]
```

### Node

此配置继承了 [Base](#base) 配置

用于 Node 项目的预设配置，为 JavaScript 和 TypeScript 文件提供了 Node 环境的支持

```javascript
import { node } from '@13onthecode/eslint-config'

export default [
  ...node
]
```

### React

此配置继承了 [Node](#node) 配置

用于 React 项目的预设配置，提供了 `.jsx` 和 `.tsx` 文件的支持

```javascript
import { react } from '@13onthecode/eslint-config'

export default [
  ...react
]
```

## Override

要覆盖某些配置，只需将您想要的配置连接在一起，例如：

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

### 为什么不使用 Prettier？
- [《Why I don't use Prettier》](https://antfu.me/posts/why-not-prettier)
- [《The Blurry Line Between Formatting and Style》](https://blog.joshuakgoldberg.com/the-blurry-line-between-formatting-and-style/)

### 为什么不使用 CommonJS?
- [《Get Ready For ESM》](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Check Also
- [`@13onthecode/typescript-config`](https://github.com/13OnTheCode/typescript-config/tree/main)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
