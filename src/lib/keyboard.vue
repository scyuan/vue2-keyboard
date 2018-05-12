<template>
	
	<transition name='board-slide'>
	<div class="wrap" v-show='showme'>
		<div class="hide" @click='hide()'>
			<span>关闭</span>
		</div>
		<ul class="board">
			<li class="br bt" @click='click(1)'>1</li>
			<li class="br bt" @click='click(2)'>2</li>
			<li class="bt" @click='click(3)'>3</li>
			<li class="br bt" @click='click(4)'>4</li>
			<li class="br bt" @click='click(5)'>5</li>
			<li class="bt" @click='click(6)'>6</li>
			<li class="br bt" @click='click(7)'>7</li>
			<li class="br bt" @click='click(8)'>8</li>
			<li class="bt" @click='click(9)'>9</li>
			<li class="br bt dott" @click='click(".")'>.</li>
			<li class="br bt" @click='click(0)'>0</li>
			<li class="bt delete" @click='deleteLast()'>X</li>
		</ul>
	</div>
	</transition>
</template>
<script>
	export default{
		name:'v-keyboard',
		data(){
			return {
				showme:false,
				result:'',
			}
		},
		methods:{
			show(val){
				this.result = val;
				this.showme = true;
			},
			hide(){
				this.result = '';
				this.showme = false;
			},
			click(num){
				this.result = this.result + num;
				
				this.$emit('input',this.result);
			},
			deleteLast(){
				if(this.result === ''){
					this.showme = false;
					this.$emit('input',this.result);
				}else{
					this.result = this.result.substring(0,this.result.length-1);
					
					this.$emit('input',this.result);
				}
			}
		}
	}
</script>
<style scoped>
div,input,ul,li,span{
	-webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
ul{
	list-style: none;
}
ul,li{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
ul>li{
	width: 33.33333%;
	height: 60px;
	float: left;
	text-align: center;
	line-height: 60px;
	font-size: 22px;
	color: #000;
	font-weight: bold;
}
ul>li:hover{
	background: #dfdfdf;
}
ul .dott,ul .delete{
	background: #dfdfdf;
}
ul .dott:hover,ul .delete:hover{
	background: #fff;
}
.board-slide-enter,.board-slide-leave-to{
	transform: translateY(100%);
}
.board-slide-enter-to,.board-slide-leave{
	transform: translateY(0);
}
.board-slide-enter-active,.board-slide-leave-active{
	transition: all 0.3s;
}
.br{
	border-right: 1px solid #bbb;
}
.bt{
	border-top: 1px solid #bbb;
}
.keyboard{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	//background: rgba(0,0,0,0.5);
}

.wrap{
	position: fixed;
	z-index: 10000;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 276px;
	background: #fff;
}
.wrap .hide{
	height: 36px;
	border-top: 1px solid #bbb;
	line-height: 36px;
	color: #bbb;
	text-align: center;
}
.wrap .hide i{
	font-weight: bold;
	font-size: 18px;
	margin-right: 5px;
}
.board{
	width: 100%;
	height: 240px;
	background: #fff;
}
</style>