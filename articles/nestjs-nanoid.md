---
title: '在 NestJS 中使用 Nanoid 生成唯一 ID'
date: '2024-01-06'
---

我在尝试在 `NestJS` 中使用 `nanoid` 生成唯一 ID 时，遇到了一些问题。

```ts
import { nanoid } from 'nanoid';
```

这样导入之后，在代码中调用 `nanoid()` 方法时，会报错：

```log
Error [ERR_REQUIRE_ESM]: require() of ES Module ....
... Instead change the require of index.js in ... to a dynamic import() which is available in all CommonJS modules.
```
之后我尝试了以下导入方法：

```ts
import * as nanoid from 'nanoid';
```

```ts
const nanoid = require ( 'nanoid' );
```
但是，无论我使用哪种导入方式，均会遇到相同的错误。

在通过复杂的搜索之后，发现了问题所在。

## 问题背景

在2022年6月8日，`nanoid` `v4`发布，其进行了重大更改。

他有一个新的功能，现在只支持`ESM`，这使他与使用`CommonJS`的`NestJS`不兼容。[更改日志](https://github.com/ai/nanoid/issues/365)

`nanoid` 团队承诺根据需要将继续支持 `v3`, 直到 `nodejs` 和 `nestjs` 支持 `ESM`。

所以在 `Nestjs` 支持ESM 之前，我们只能使用 `v3` 版本。

## 其他解决方案

如果想在 `Nestjs` 中使用最新版本的 `nanoid`，可以尝试使用 [fix-esm](https://www.npmjs.com/package/fix-esm) 包使其支持 `CommonJS`。

```shell
pnpm add nanoid fix-esm
```

```ts
const { nanoid } = require('fix-esm').require('nanoid');
```

此方案在我使用 `nanoid` `v5.0.7` 时，可以解决上述问题。其他版本也可以尝试使用此方案，但需要注意的是，`fix-esm` 包可能会导致其他问题，如依赖关系问题。

