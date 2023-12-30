---
title: 'Vue3 setup 基础及奇技淫巧'
date: '2023-12-20'
---
<img width="100%" src="http://developers-center.oss-cn-beijing.aliyuncs.com/undraw_javascript_frameworks_-8-qpc.svg"></img>

## 项目结构

```
├─public
└─src
    ├─assets
    │  ├─images
    │  └─svg
    ├─components
    │  └─custom-component.vue
    ├─core
    │  ├─api
    │  ├─libs
    │  ├─links
    │  └─utils
    │      └─request.js
    ├─layouts
    ├─pages
    │  └─index.vue
    ├─plugins
    ├─router
    │   └─index.js
    ├─stores
    ├─styles
    └─themes
```

## 在js中使用路由跳转

在vue3中我们使用comAPI，但是在自己封装的js里面，我们不能使用useRouter ,useRoute，他们需要在setup中调用执行后才能用，我们需要使用路由实例：

`/src/core/utils/request.js`

```js
import router from '../../router';
router.push('/login')
```

## 定义v-model属性

`/src/components/custom-component.vue`
```
<template>
  <div>{{infos}}</div>
</template>
<script setup>
const props = defineProps(['infos'])
const emits = defineEmits(['update:infos'])
setTimeout(() => {
  emits('update:infos', 'hello v-model')
}, 2000)
</script>
```

使用自定义组件

`/src/pages/index.vue`

```
<template>
  <div>
    <custom-component v-model:infos="infos"></custom-component>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import CustomComp from '../components/custom-component.vue';
const infos = ref('hello custom-comp');
</script>
```

## 父组件调用子组件方法

`子组件 Child.vue`

```
<template>
  <div>子页面计数：{{ count }}</div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const add = () => {
  count.value++;
};
const addCustom = (value) => {
  count.value += value;
};
defineExpose({
  add,
  addCustom
})
</script>
```

`父组件 Index.vue`
```
<template>
  <div>
    <Child ref="child"></Child>
    <br />
    父页面按钮：<button @click="handleAdd">点击+1</button>
    <br />
    父页面按钮：<button @click="handleAddCustom">(添加自定义数值)点击+10</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Child from "./Child";

const child = ref();
const handleAdd = () => {
  child.value.add();
};
const handleAddCustom = () => {
  child.value.addCustom(10);
};
</script>
```
## 使用 keep-alive 缓存组件状态

1. 修改 `<router-view></route-view>` 部分

    ```
    <template>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </router-view> 
    </template>
    ```

2. 子组件状态刷新

    - 方案一 使用 `keep-alive` 的生命周期：`activated`

      `child.vue`
        ```
        <script setup>
            activated() {
               // TODO: 这里处理需要刷新的状态
            },
        </script>
        ```
    - 方案二 通过监听路由等发生改变需要改变的场景

      `child.vue`

        ```
        <script setup>
        import {watch} from 'vue';
        import {useRoute} from 'vue-router';
        const route = useRoute();
        watch(() => route.params.id, (id) => {
          // TODO: 这里处理需要刷新的状态
        });
        </script>
        ```
