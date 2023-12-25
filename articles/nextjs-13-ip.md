---
title: '如何在 NextJS 13+ 中获取用户的 IP 地址'
date: '2023-12-16'
---

我最近，有一个任务是跟踪 IP 地址、记录、根据 国家/地区 调整产品的定价、检查 IP 是否已被阻止或根据 IP 地址调整提供的内容。

## 用户Ip存在于何处？

当用户向服务器请求某些内容时，请求始终会附有其原始`IP`地址。 

在任何语言中，只有通过传入的**请求对象**进行访问时才能获取用户的IP。

用户的原始 `IP` 存在于 **请求对象** 的 `headers` 之中。`x-real-ip` `x-forwarded-for`

## 获取 Page 中的 IP

在 `page.jsx` 中可以使用 `headers` Hook 来获取IP。

```tsx
import React from 'react';
import {headers} from "next/headers";

export default function Page() {
  const headersList = headers();
  const ip = headersList.get('x-real-ip');
  return (<div>{ip}</div>)
}
```
如果由于各种原因 `headers` 中 `x-real-ip` 不存在, 我们任可以从 `x-forwarded-for` 中截取。

```tsx
const getIp = (headersList) => {
  const xRealIp = headersList.get('x-real-ip');
  if (xRealIp) return xRealIp;
  const xForwardedFor = headersList.get('x-forwarded-for');
  if (Array.isArray(xForwardedFor)) return xForwardedFor.at(0)!.toString();
  return xForwardedFor?.split(',').at(0) || 'Unknown';
};
```
