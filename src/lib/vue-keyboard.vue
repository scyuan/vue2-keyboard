<template>
	<div id="num-input">
		<input type="text" :class='input_class' ref='input' :value='value' @focus='showBoard'>
		<v-keyboard ref='keyboard' @input='getvalue'></v-keyboard>
	</div>
</template>
<script>
import vKeyboard from './keyboard.vue'
	export default{
		name:'vue-keyboard',
		props:{
			inputclass:{
				type:String,
				default:'default-input'
			}
		},
		data(){
			return {
				input_class:this.inputclass,
				value:''
			}
		},
		methods:{
			getvalue(val){
		      this.value = val;
		      this.$emit('value',val);
		    },
		    showBoard(){
		      // 不弹出默认的键盘
      		  document.activeElement.blur();

		      this.$refs.keyboard.show(this.value);
		    }
		},
		components:{
			vKeyboard
		}
	}
</script>
<style>
div,input{
	-webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
#num-input{
	display: inline-block;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.default-input{
	border: 1px solid #000;
}

</style>