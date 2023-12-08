---
title: 'The Time Machine'
date: '2018-08-15'
tags: ['writings', 'book', 'reflection']
draft: false
summary: The Time Traveller (for so it will be convenient to speak of him) was
  expounding a recondite matter to us. His pale grey eyes shone and
  twinkled, and his usually pale face was flushed and animated...
---

# next.js
开发者们大家好👋。分析对我们来说是一个非常重要的工具。它有助于我们更深入地了解客户。但当我尝试使用 Nextjs 应用程序时，它并不是很简单。因此，在本文中，我将演示如何轻松地将 Analytics 与 Nextjs 应用程序集成。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a89e482a91c4a108b6cc54bb1c9e401~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1024&h=465&s=36372&e=png&b=ffffff)

## Firebase 设置（第 1 部分 - 在 Firebase 控制台上）

让我们首先转至[Firebase 控制台](https://console.firebase.google.com/)来设置 Firebase 项目。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8be4407c0d3b474d8d05cacf20e33630~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=30&h=6&s=370&e=png&b=444aec)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99d8873d297a40a7a4b4ecb087d75cb5~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1400&h=287&s=84111&e=png&b=4449ec)

`Add Project`在您的控制台上选择。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/123259e4c00a423cb4e3642f3a315f9b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=728&h=631&s=35955&e=png&b=f6f7f9)

在步骤 1 中添加您的 Firebase 项目名称。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03eea5e3b406413893896f4758e2ef70~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=825&h=727&s=75038&e=png&b=f5f6f8)

在步骤2中启用Google Analytics。然后您需要在步骤3中选择或创建Google Analytics帐户。

> 创建项目后，将在您选择的 Google Analytics 帐户中创建一个新的 Google Analytics 资源，并将其链接到您的 Firebase 项目。此链接将启用产品之间的数据流。

现在我们有了 Firebase 项目设置。我们可以通过单击控制台上当前创建的项目来导航到 Firebase 仪表板。

## 将 Firebase 连接到下一个应用程序

我们需要一个 Firebase 配置来连接到我们的应用程序。要生成它，我们首先进入项目设置，如下面的屏幕截图所示。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9afb17c57f744925bd026b2af3c981ee~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=593&h=406&s=32387&e=png&b=4449ed)

`Add Firebase to your web app`从常规选项卡中选择。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e97511ca95e4b52bdb3d312b617a6d0~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=736&h=538&s=30105&e=png&b=fafafa)

注册应用程序后，我们现在获得将 firebase 连接到下一个应用程序所需的所有配置代码。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8406b994f3a44b5a7f7bc5ced5a582d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=983&h=785&s=86554&e=png&b=f9f9f9)

## 开始开发我们的下一个应用程序

您可以使用以下命令创建新的下一个应用程序。

`npx create-next-app nextjs-firebase-analytics`

我们在 root utils 文件夹中添加一个`firebase.js `文件。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74b7ddfa91de40969be749a94a86de03~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=456&h=280&s=15455&e=png&b=23262d)

## firebase.js

我简单解释一下上面的代码

-   [第 1-2 行]：我们不导入所有内容，而是导入我们想要使用的各个 SDK 组件。

```
// 像这样
import firebase from 'firebase/app'; 
导入 'firebase/<PACKAGE>';
```

在我们的例子中，我们只需要一个`analytics`模块。

-   [第 4-12 行]：这些是我们之前从 Firebase 控制台获得的配置代码。
-   [第 13-15 行]：我们在这里创建并初始化一个 Firebase。请注意，我们在这里包含了一个`if`条件。

```
// 检查是否已经初始化
if (!firebase.apps.length) { 
  //立即初始化
}
```

这个条件的需要`if`是确认 firebase 之前尚未初始化。否则我们会得到如下错误

> ❌错误FirebaseError：Firebase：名为“[DEFAULT]”的Firebase应用程序已存在（应用程序/重复应用程序）。

-   [第16-18行]：这里我们只是获取`firebase.analytics`函数的引用。此处不调用该函数的原因是分析内部使用`window.navigator`功能。如果我们在这里调用该函数，我们会得到以下错误。

> ❌ReferenceError：导航器未定义

Nextjs 应用程序的服务器端渲染期间不存在窗口对象。

**解决方案1**

```
if（窗口类型！=未定义）{ 
     firebase.analytics（）
}
```

**解决方案2【我们将遵循这个】**

我们将分析函数称为钩子。钩子总是在客户端渲染期间被调用。[文章后面的实现]

-   [第 18 行]：最后，我们将其导出以供应用程序的不同部分使用。

## _app.js

该文件主要用于初始化页面，并且不会在页面导航上卸载。所以这是我们用例的好地方。在此文件中，我们首先`analytics`从刚刚创建的 utils 文件导入并`analytics()`在其中调用`useEffect`，该文件始终在浏览器上运行。这里我们还检查环境是否是生产环境。

## 实现 screen_view 事件

我们在这里跟踪客户访问的页面。为此，我们使用 Nextjs 路由器事件来监听`routeChangeComplete`。触发此事件时，我们首先使用函数设置当前屏幕`setCurrentScreen`。它将`screen_name`参数设置为后续事件。然后我们`screen_view`使用`logEvent`函数记录事件。或者，我们可以这样做

```
Analytics().logEvent("screen_view", { 
  screen_name: url
 });//此事件可能的参数是
  
  app_id ?: string 
   app_installer_id ?: string 
   app_name : string ; 
  应用程序版本？：字符串；
  screen_name : EventParams [ "screen_name" ]
```

## 触发任何自定义事件

我们可以触发任何组件中的任何自定义事件，以从用户那里收集其他数据。

```
从“../utils/firebase”导入{分析}；useEffect(() => {
   分析("Page1_visited")
   分析("Blog1_read") 
})
```

## 查看分析结果

**选项1**

您可以访问您的 firebase 项目控制台。在这一`Analytics`部分我们有不同的选择。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4143bc9a385d436093161914c72c2ed0~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=246&h=249&s=14096&e=png&b=172a47)

如果单击“事件”，我们可以看到用户触发的不同事件。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68602824c82549bc9ed424c5881ace62~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1400&h=689&s=105225&e=png&b=fefefe)

**选项2**

访问<https://analytics.google.com/>并浏览您的项目。您可以按如下方式查看事件。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/21a059f34e624af5b95d3af080ac0aa8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=428&h=477&s=24262&e=png&b=fefefe)

# 结论

如果你对任何部分感到困惑，你可以查看这个 Github 项目。
