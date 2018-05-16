### vue-keyboard

> 一个基于vue的移动端数字键盘组件(A vue-based mobile-side numeric keyboard assembly)。

### install

```bash
npm install vue2-keyboard --save
```

### quick start

main.js

```JavaScript
import vueKeyboard from 'vue2-keyboard'
Vue.use(vueKeyboard)
```

component.vue

```HTML
<vue-keyboard type='text' setClass="input" accurate='3' @value='getValue' placeholder='请输入金额'></vue-keyboard>
```

### demo

![](https://ws1.sinaimg.cn/large/006tNc79ly1frd4ip5zfqg30l211e178.gif)

### option

property | Defaults | description | optional 
--- | --- | --- | ---
type | text | Input type (text or password) | yes
accurate | 2 | The accurate of a number when input type is text | yes
placeholder| "" | placeholder text of input | yes
setClass| default-class | Component style | yes
value| "" | return value callback | no



