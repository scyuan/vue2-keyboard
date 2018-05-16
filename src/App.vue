<template>
  <div id="app">
    <vue-keyboard type='text' setClass="input" accurate='3' @value='getValue' placeholder='请输入金额'></vue-keyboard>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        value:'',
        input:'input',
    }
  },
  methods:{
      getValue(val){
        // console.log(val);
      }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
