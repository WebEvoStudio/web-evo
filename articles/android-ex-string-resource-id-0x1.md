---
title: '如何解决 Android Resources$NotFoundException: String resource ID #0x1 错误'
date: '2023-12-22'
---

我最近，在做智慧农业App的时候，出现了 `android.content.res.Resources$NotFoundException: String resource ID #0x1` 错误，该错误表示找不到指定的字符串资源。

`#0x1` 表示字符串资源的 ID 为 1. 如果在代码中使用了 R.string.xxx 来引用字符串资源，但 xxx 不存在，则会抛出此错误

随即我找到报错位置 `mTextview.text = 2` 也就是我将控件的 `text` 设置为 `Int` 类型了， 而编辑器未提示错误。
