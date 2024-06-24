---
title: '如何在 SpringBoot 模版中获取运行环境？'
date: '2023-12-28'
---

## 模版

默认情况下，SpringBoot使用Thymeleaf模版引擎。

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body></body>
</html>
```

上面代码是一个简单的HTML页面，使用Thymeleaf模版引擎渲染，`xmlns:th`是Thymeleaf模版引擎的命名空间。

## 变量

在模版中，可以使用`${}`来获取变量的值。

## 获取运行时环境配置

在 `Thymeleaf` 中, 我们可以使用`${@environment.acceptsProfiles('dev')}`来获取运行时配置。

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p th:if="${@environment.acceptsProfiles('dev')}">Dev</p>
<p th:if="${@environment.acceptsProfiles('prod')}">Prod</p>
</body>
</html>
```
