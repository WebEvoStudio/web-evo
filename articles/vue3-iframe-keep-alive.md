---
title: '在 Vue3 中对 iframe 实现类似 keep-alive 的无刷新缓存'
date: '2024-01-10'
---

我的 vue 项目中加入了一个第三方客服的 iframe 页面，类似下面这样。

<div class="text-center">
    <img src="/articles/vue3-iframe-keep-alive/iframe.png" alt="示例图片" width="35%">
</div>

`views/chat.vue`
```vue
<script lang="ts" setup></script>
<template>
  <iframe src="https://www.example.com/chat.html"></iframe>
</template>
```

在没有进行任何配置的情况下，每次切换到这个页面都会重新加载iframe页面，这样就会导致用户体验非常不好。

为了解决这个问题，我首先想到的是使用 `keep-alive`，发现没有作用。所以研究了一下，发现 `keep-alive` 只能对组件节点进行缓存，而`iframe` 是一个原生的 DOM 节点，所以无法被 `keep-alive` 缓存。

那么为了解决这个问题，我如果在应用启动时就挂载 iframe 组件，通过显示和隐藏来对 iframe 组件进行处理，应该可以实现类似 `keep-alive` 的效果了。

## 显示和隐藏 iframe 组件方案

`app.vue`

```vue
<script lang="ts" setup>
  import { ref } from 'vue'
  import IframeComponent from './iframe.vue'
  
  const showIframe = ref(true)
</script>
<template>
  <div>
    <button @click="showIframe = !showIframe">显示/隐藏 iframe</button>
    <iframe-component v-show="showIframe" />
  </div>
</template>
```
如此 iframe 组件的显示和隐藏就比较类似 `keep-alive` 的效果了。
但是，如果 iframe 组件的显示和隐藏不是通过按钮来触发的，而是通过路由切换来触发的，那么上面的方法就不适用了。

## 路由切换时缓存 iframe 组件方案

首先修改 `app.vue`，将 `keep-alive` 包裹在 `router-view` 中，实现基本的缓存功能。

然后通过 `meta` 中的 isIframe 属性来判断是否为iframe页面。


`app.vue`

```vue
<script lang="ts" setup>
  import {useRoute} from "vue-router";
  import IframeKeepAlive from "./components/iframe-keep-alive.vue";
  
  const route = useRoute();
</script>
<template>
  <router-view v-slot="{ Component }">
    <keep-alive v-if="!(route.meta['isIframe']??false)">
      <component ref="childComponent" :is="Component"/>
    </keep-alive>
  </router-view>
  <iframe-keep-alive></iframe-keep-alive>
</template>
```
上述代码中，判断了如果 iframe 页面的话，将使用 `iframe-keep-alive` 组件来顶替 router-view 中的组件。

再创建一个组件 `iframe-keep-alive.vue`，用来处理需要缓存的 iframe 页面。
`components/iframe-keep-alive.vue`

```vue
<script lang="ts" setup>
import {useRoute, useRouter} from "vue-router";
import {markRaw, ref, watchEffect} from "vue";

const route = useRoute();
const router = useRouter();
const iframeComponents = ref([]);
const getComponent = async (component) => {
  return (await component()).default;
}
watchEffect(async () => {
  if ((route.meta['isIframe']??false) && !iframeComponents.value.find(({path}) => route.path === path)) {
    iframeComponents.value.push({
      path: route.path,
      component: markRaw(await getComponent(route.meta['component'])),
    })
  }
});
</script>

<template>
 <template v-for="it in iframeComponents">
   <component
       v-show="it.path === route.path"
       :is="iframeComponents.find(({path}) => it.path === path)['component']"
   ></component>
 </template>
</template>
```
上述代码中，通过 `watchEffect` 监听路由的变化，当路由变化时，判断是否为 iframe 页面，如果为 iframe 页面，则将 iframe 页面的组件添加到 iframeComponents 数组中。
通过 `v-for` 遍历 iframeComponents 数组，将所有已经访问的 iframe 页面的组件渲染到页面中，并根据路由的变化，使用 `v-show` 控制组件的显示和隐藏。

之后，在需要显示 iframe 页面的路由中，添加 `meta` 属性 `isIframe`，值为 true。

`router/index.ts`

```ts
import {createRouter, createWebHistory} from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: () => import('./views/home.vue')},
    {path: '/chat', component: () => import('./views/chat.vue'), meta: {isIframe: true}},
  ],
});
```
这样，就可以实现在路由切换时对 iframe 页面的缓存了。

