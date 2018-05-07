<template>
	<div class="keyboard" v-show='show'>
		<div class="wrap">
			<transition name='board-slide'>
				<div class="board" v-show='show'>
				
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
	export default{
		name:'vue-keyboard',
		data(){
			return {
				show:true
			}
		}
	}
</script>
<style scoped>
.board-slide-enter,.board-slide-leave-to{
	transform: translateY(100%);
}
.board-slide-enter-to,.board-slide-leave{
	transform: translateY(0);
}
.board-slide-enter-active,.board-slide-leave-active{
	transition: all 0.3s;
}
.keyboard{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	background: rgba(0,0,0,0.5);
}
.wrap{
	position: relative;
	width: 100%;
	height: 100%;
}
.board{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 720px;
	background: #fff;
}
</style>