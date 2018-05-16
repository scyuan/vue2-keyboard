<template>
	<div id="num-input" >
		<input :type="typee" :class='input_class' ref='input' :value='value' @focus='showBoard' :placeholder="placeholder" >
		<v-keyboard ref='keyboard' @input='getvalue' :accuratee='accuratea' :type='type'></v-keyboard>
	</div>
</template>
<script>
import vKeyboard from './keyboard.vue'
	export default{
		name:'vue-keyboard',
		props:{
			setClass:{
				type:String,
				default:'default-input'
			},
			type:{
				type:String,
				default:'text'
			},
			placeholder:{
				type:String,
				default:''
			},
			accurate:{
				type:String,
				default:"2"
			}
		},
		data(){
			return {
				input_class:'default-input ' + this.setClass,
				value:'',
				typee:this.type,
				accuratea:this.accurate
			}
		},
		methods:{
			getvalue(val){
		      this.value = val;

		      if(this.typee === 'text'){
		      	val = parseFloat(val);
		      }

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
	margin: 0;
	padding: 0;
	display: block;
}
.default-input{
	display: block;
	min-width: 100px !important;
	margin: 0;
	padding: 0;
	border: 1px solid #000;
	width: 100%;
	height: 36px;
	letter-spacing: 1px;
	font-size: 18px;
	padding: 0 15px;
	border-radius: 5px;
	overflow: hidden;
	box-sizing: border-box;
}
</style>