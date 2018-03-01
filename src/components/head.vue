<template>
	<div>
		<div class="header">vivo</div>
		<!--<div :style="searchWidth" class="inp"><p><i class="fa fa-star-o" aria-hidden="true"></i></p><input type="text" /></div>-->
	</div>
	
	
</template>

<script>
	export default{
		data(){
			return{
				searchWidth:{
					width:'3.8rem'
				}
			}
		},
		methods:{
			search(){
				var scroll = document.body.scrollTop||document.documentElement.scrollTop
				if(scroll >=300){
					this.searchWidth.width = '0.35rem'
				}else{
					this.searchWidth.width = '3.8rem'
				}
			}
		},
		mounted(){
			window.addEventListener('scroll',this.search)
		}
	}
</script>

<style>
	.header{
		width: 100%;
		height: 0.58rem;
		font-size: 0.3rem;
		padding-top: 0.13rem;
		padding-left: 0.12rem;
		box-sizing: border-box;
		position: fixed;
		border-bottom: silver 1px solid;
		top: 0;
		left: 0;
		background-color: white;
		z-index: 99;
	}
	.inp{
		/*width: 4rem;*/
		height: 0.35rem;
		position: fixed;
		top: 0;
		left: 0.1rem;
		background-color: transparent;
		border-radius: 0.35rem 0.35rem 0.35rem 0.35rem;
		border: 1px solid red;
		z-index: 888;
		transition: 0.5s;
		overflow: hidden;
	}
	.inp p{
		float: left;
		width: 0.35rem;
		height: 100%;
		vertical-align: top;
		text-align: center;
		line-height: 0.35rem;
	}
	.inp p i{
		font-size: 0.2rem;
		vertical-align: top;
		line-height: 0.35rem;
	}
	.inp input{
		width: 3rem;
		height: 100%;
		float: left;
		vertical-align: top;
		border: none;
		background-color: transparent;
		font-size: 0.16rem;
		outline: none;
	}
</style>