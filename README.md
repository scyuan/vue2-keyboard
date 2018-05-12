### vue-keyboard

> 一个基于vue的移动端数字键盘组件

### install

``` bash
npm install vue2-keyboard --save
```

### quick start

main.js

```JavaScript

import vueKeyboard from 'vue2-keyboard'
Vue.use(vueKeyboard)

```

component.vue

```JavaScript

<vue-keyboard v-bind:inputclass="input" v-on:value='getValue'></vue-keyboard>


```

### option

property | description 
- | :-: | -: 
inputclass | 组件样式
value | 返回值回调



