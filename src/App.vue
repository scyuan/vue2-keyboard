<template>
  <div id="app">
    <input type="text" :value='value' @focus='showBoard'>

    <vue-keyboard ref='keyboard' @input='getvalue'></vue-keyboard>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        value:''
    }
  },
  methods:{
    getvalue(val){
      this.value = val;
    },
    showBoard(){
      this.$refs.keyboard.show(this.value);
    }
  }

}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 649406 */
  src: url('//at.alicdn.com/t/font_649406_7s6w6o81fvvuc8fr.eot');
  src: url('//at.alicdn.com/t/font_649406_7s6w6o81fvvuc8fr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_649406_7s6w6o81fvvuc8fr.woff') format('woff'),
  url('//at.alicdn.com/t/font_649406_7s6w6o81fvvuc8fr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_649406_7s6w6o81fvvuc8fr.svg#iconfont') format('svg');
}
.icon{
  font-family: 'iconfont';
  font-style: normal;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
