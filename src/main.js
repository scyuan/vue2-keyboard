import Vue from 'vue'
import App from './App.vue'

import vueKeyboard from './lib/index.js'
// import vuePayKeyboard from './lib/indexvue-pay-keyboard'
Vue.use(vueKeyboard)

new Vue({
  el: '#app',
  render: h => h(App)
})
