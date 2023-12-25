---
title: '如何在 React 中循环遍历对象'
date: '2023-12-16'
---

我最近，在做 WebEvo 网站中的 [微博短视频解析工具](/tools/weibo-video-spider) 的时候，需要将获取到的urls渲染到页面中，而微博接口返回的urls为一个对象。如下：

```json
{
  "1080P 高清": "//example.com/****",
  "720P 高清": "//example.com/****"
}
```
思考之后发现有以下几种方式：

## 遍历对象的键

```tsx
export default function App() {
  const urls = {
    '1080p': "1080",
    '720p': "720",
  };
  return (
      <div>
        {Object.keys(urls).map((key, index) => (
            <div key={index}>
              {key}: {urls[key]}
            </div>
        ))}
      </div>
  )
}
```
## 遍历对象的值

如果只需要渲染对象的值，你可以使用此方法直接访问它们。 `Object.values()`
```tsx
export default function App() {
  const urls = {
    '1080p': "1080",
    '720p': "720",
  };
  return (
      <div>
        {Object.values(urls).map((value, index) => (
            <div key={index}>
              {value}
            </div>
        ))}
      </div>
  )
}
```

## 遍历对象的键值对数组
如果需要渲染对象的键和值的话，你可以使用该方法返回一个包含键值对子数组的数组。 `Object.entries()`

```tsx
export default function App() {
  const urls = {
    '1080p': "1080",
    '720p': "720",
  };
  return (
      <div>
        {Object.entries(urls).map(([key, value]) => (
            <div key={key}>
              {value}
            </div>
        ))}
      </div>
  )
}
```
