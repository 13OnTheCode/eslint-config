<div align="center">

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/137921275/258572401-482172f4-a813-41ae-9e42-d17176ae2893.svg" width="100" height="100" alt="ESLint" />

# ESLint Config

[![Version](https://img.shields.io/npm/v/@13onthecode/eslint-config?color=4b32c3&label=)](https://www.npmjs.com/package/@13onthecode/eslint-config)
[![License](https://img.shields.io/npm/l/@13onthecode/eslint-config?color=4b32c3&label=)](LICENSE.md)

[English](README.md) | 简体中文

为 JavaScript、TypeScript、Node.js 和 React 项目提供了预定义的配置文件，可根据项目需求选择性地导入配置
</div>

## Features

- 固执己见, 但同时保持合理的默认配置和最佳实践
- 按需导入适合你项目的配置文件
- 自动修复格式（旨在独立使用，无需使用 Prettier）
- 主流常用 ESLint 插件集成

## Prerequisites

- ESLint 版本需要 8.23.0 或更高
- 使用 ESLint Flat Config

## Install

```shell
npm install @13onthecode/eslint-config --save-dev
```

## Usage

创建 ESLint 配置文件 `eslint.config.js`，并根据你的项目需求导入所需的预设配置：

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

该包是以下共享 ESLint 配置包的集合：

- [`@13onthecode/eslint-config-javascript`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/javascript)
- [`@13onthecode/eslint-config-typescript`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/typescript)
- [`@13onthecode/eslint-config-node`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/node)
- [`@13onthecode/eslint-config-react`](https://github.com/13OnTheCode/eslint-config/tree/main/packages/react)

## FAQ

### 为什么不使用 Prettier？
- [《Why I don't use Prettier》](https://antfu.me/posts/why-not-prettier)
- [《The Blurry Line Between Formatting and Style》](https://blog.joshuakgoldberg.com/the-blurry-line-between-formatting-and-style/)

## License

[MIT](LICENSE.md) License &copy; 2023-PRESENT [13OnTheCode](https://github.com/13OnTheCode)
