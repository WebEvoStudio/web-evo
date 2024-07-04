---
title: '使用 NestJs 提供 Vue 单页应用程序（SPA）的静态内容'
date: '2024-01-02'
---

在部署我的前后端分离项目时，以往的做法是将前后端分别运行在两个端口上，然后通过 `nginx` 将请求转发到到不同的 `URL` 上，但是由于项目多了之后 `URL` 端点的数量会非常多，不容易管理，所以决定将 `Vue` 单页应用程序（SPA）部署到 `NestJs` 后端项目中，通过一个 `URL` 访问到 `Vue` 单页应用程序和`NestJs` 后端服务。

## public目录和静态服务（Serve Static）

在 `NestJs` 中，`public` 目录下的文件会被 `NestJs` 默认当作静态资源，可以直接通过 URL 访问到。比如，在 `NestJs` 项目的根目录下创建一个 `public` 目录，然后创建一个 `index.html` 文件，我们可以通过 `http://localhost:3000/index.html` 访问到这个文件。

而静态服务是指在 `NestJs` 中，通过 `@nestjs/serve-static` 模块，我们可以将一个目录作为静态资源，通过 `http://localhost:3000/static/` 访问到这个文件。

不用猜，看了这两种方案的区别，应该就明白了。我应该是想通过 `NestJs` 提供的静态服务，将 `Vue` 单页应用程序部署到 `NestJs` 后端项目中，明显他的 `url` 更加优雅，而且如果使用`public`方案来集成的话，我们还需要对`Vue` 单页应用程序进行一些输出配置。

## 安装 @nestjs/serve-static

```shell
    pnpm add --save @nestjs/serve-static
```

## 配置

`src/app.module.ts`

```ts
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
      ServeStaticModule.forRoot({
        rootPath: join(__dirname, '..', 'client'),
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
## 放置Vue

将 `vue` 项目打包后的 `dist` 目录中的文件放置到 `NestJs` 项目的 `client` 目录下。

目录结构如下

```
├─client
|  ├─index.html
|  ├─*.js
|  └─*.css
└─src
```
## 启动

在浏览器中访问 `http://localhost:3000/` 就可以访问到 `Vue` 单页应用程序了。
