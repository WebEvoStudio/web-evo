---
title: '将 FCM（Firebase Cloud Messaging）添加到 Vue'
date: '2023-12-14'
---

我最近，有一个任务是将 FCM（Firebase Cloud Messaging）实现到我正在开发的 vue 应用程序中，我发现教程很少，而且它们对我没有太大帮助，所以我决定为它写一个小型的教程。

## 初始化 firebase

新建`src/firebase.js`

```javascript
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging'; //新增

const firebaseConfig = {
  apiKey: '．．．',
  authDomain: '．．．',
  projectId: '．．．',
  storageBucket: '．．．',
  messagingSenderId: '．．．',
  appId: '．．．'
};

// 初始化 Firebase
export const setupFirebase = initializeApp(firebaseConfig);

// 取得 getMessaging實例
export const messaging = getMessaging(setupFirebase);
```
**将上面的配置替换为您从`firebase`获得的配置**  
转到 Firebase 的项目主页 -> 按“设置”图标 -> 单击“项目设置” -> 向下滚动 -> 找到“您的应用” -> 选择“Web应用”下列出的您的应用

## 请求通知权限

在您使用`getToken`方法获取Web应用程序的FCM推送令牌时，需要保证已经取得通知权限！

在 `src/App.vue` 添加以下代码

```javascript
const hasPermission = ref(true);

const requestPermission = () => {
  console.log('请求权限...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('已授予通知许可.');
      hasPermission.value = true;
    }
  });
}
```

## 获取FCM推送令牌

在 `src/App.vue` 中添加以下代码

```javascript
import {getToken} from "firebase/messaging";
import {messaging} from "./firebase.js";

const fcmToken = ref();

const getFcmToken = async () => {
  const vapidKey = '<YOUR_PUBLIC_VAPID_KEY_HERE>';
  getToken(messaging, {vapidKey}).then(token => {
    fcmToken.value = token;
    // 将你的FcmToken发送到服务器
  }).catch(() => {
    hasPermission.value = false;
  });
};

onMounted(() => {
  getFcmToken();
});
```
要获取 vapidKey，请转到 firebase 控制台：

转到 firebase 的项目主页 -> 按“设置”图标 -> 单击“项目设置”->“云消息传递”选项卡 ->“Web 配置”>“Web 推送证书”

之后通过判断 `hasPermission` 为 `false` 时在页面中显示请求权限按钮。

```vue
<template>
  <button v-if="!hasPermission" @click="requestPermission()">请求权限</button>
</template>
```

## 接收消息

接收消息的行为有所不同，取决于页面是在**前台(具有焦点)**、还是在**后台**、**隐藏在其他选项卡后面**、或**完全关闭**。


|       接收消息方法        | 应用状态 | 自动显示通知 |
|:-------------------:|:----:|:------:|
|      onMessage      |  前台  |   否    |
| onBackgroundMessage |  后台  |   是    |

在所有情况下，页面都必须处理 `onMessage` 回调，但在后台情况下，您可能还需要处理 `onBackgroundMessage` 或配置显示通知，以允许用户将您的 Web 应用程序带入前台。

向`src/App.vue`中添加以下代码

```javascript
import { onMessage } from "firebase/messaging";
import { messaging } from "./firebase.js";


onMessage(messaging, (payload) => {
  console.log('消息到达. ', payload);
  // ...
});

```
注意：页面处于前台时可以收到消息，但不会显示通知。

## 注册 service worker

新建`firebase-messaging-sw.js` 添加到 `public` 文件夹（使用这个文件名很重要，因为 firebase 会查找具有该特定名称的文件，它很难更改，所以不在本指南中 - 抱歉）。

（如果您不熟悉`service worker`这个词，您可以在此处或此处了解更多信息）

```javascript
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: '<API-KEY>',
  authDomain: '<AUTH-DOMAIN>',
  projectId: '<PROJECT-ID>',
  storageBucket: '<STORAGE-BUCKET>',
  messagingSenderId: '<MESSAGING-SENDER-ID>',
  appId: '<APP-ID>',
  measurementId: '<MEASUREMENT-ID>'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
      notificationOptions);
});
```
在 `service worker` 注册成功之后将会接收到通知！

```javascript
self.registration.showNotification(notificationTitle, notificationOptions);
```
显示通知为浏览器默认行为，在 `onBackgroundMessage` 不去调用上面显示通知的方法依然会显示通知。

当你的浏览器标签页处于当前页面，并且浏览器窗口被其他窗口遮挡时，您的页面依然处于前台，不会激活 `service worker`。

**为什么我需要再次实例化 firebase？**
由于服务工作线程在另一个线程上运行，而不是在主线程上运行，因此我们无法将实例传递给主应用程序。
