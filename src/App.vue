<template>
  <div id="app">
    <vue-keyboard v-bind:inputclass="input" v-on:value='getValue'></vue-keyboard>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        value:'',
        input:'input'
    }
  },
  methods:{
      getValue(val){
        
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
.input{
  border: 1px solid red;
}
</style>
