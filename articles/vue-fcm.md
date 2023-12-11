---
title: '将 FCM（Firebase Cloud Messaging）添加到 Vue'
date: '2023-12-11'
---

我最近，有一个任务是将 FCM（Firebase Cloud Messaging）实现到我正在开发的 vue 应用程序中，我发现教程很少，而且它们对我没有太大帮助，所以我决定为它写一个小型的教程。

## service worker

我们需要做的第一件事是将 `service worker` 文件 `firebase-messaging-sw.js` 添加到 `public` 文件夹（使用这个文件名很重要，因为 firebase 会查找具有该特定名称的文件，它很难更改，所以不在本指南中 - 抱歉）。

（如果您不熟悉`service worker`这个词，您可以在此处或此处了解更多信息）

```javascript
// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

var firebaseConfig = {
  apiKey: '<API-KEY>',
  authDomain: '<AUTH-DOMAIN>',
  projectId: '<PROJECT-ID>',
  storageBucket: '<STORAGE-BUCKET>',
  messagingSenderId: '<MESSAGING-SENDER-ID>',
  appId: '<APP-ID>',
  measurementId: '<MEASUREMENT-ID>'
}

const app = firebase.initializeApp(firebaseConfig)
```
**将上面的配置替换为您从`firebase`获得的配置**  
转到 Firebase 的项目主页 -> 按“设置”图标 -> 单击“项目设置” -> 向下滚动 -> 找到“您的应用” -> 选择“Web应用”下列出的您的应用

## 注册 service worker

注册 Service Worker 并订阅 FCM 的一种方法是安装 firebase 包。`pnpm add firebase`

安装该软件包后，创建一个名为 firebase.js （或您想要的任何其他名称）的文件并添加以下内容：

```javascript
//firebase.js

import firebase from 'firebase/app'
import 'firebase/firebase-messaging'

var firebaseConfig = {
  apiKey: '<API-KEY>',
  authDomain: '<AUTH-DOMAIN>',
  projectId: '<PROJECT-ID>',
  storageBucket: '<STORAGE-BUCKET>',
  messagingSenderId: '<MESSAGING-SENDER-ID>',
  appId: '<APP-ID>',
  measurementId: '<MEASUREMENT-ID>'
}

firebase.initializeApp(firebaseConfig)

export default firebase.messaging()
```

**为什么我需要再次实例化 firebase？**
由于服务工作线程在另一个线程上运行，而不是在主线程上运行，因此我们无法将实例传递给主应用程序。

## 订阅消息

注册 Service Worker 后，我们可以通过调用 `getToken()` 函数将客户端订阅到 FCM。

要获取 vapidKey，请转到 firebase 控制台：

转到 firebase 的项目主页 -> 按“设置”图标 -> 单击“项目设置”->“云消息传递”选项卡 ->“Web 配置”>“Web 推送证书”

```javascript
app.messaging().getToken({ vapidKey: '<KEY>' })
.then((currentToken) => {
  if (currentToken) {
    console.log('client token', currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
})

```
