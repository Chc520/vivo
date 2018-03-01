<template>
	<div class="footer">
		<router-link to='/home'>
			<i class="fa fa-university"></i>
			<div>首页</div>
		</router-link>
		<router-link to='/news'>
			<i class="fa fa-list-alt"></i>
			<div>咨询</div>
		</router-link>
		<router-link to='/shopping'>
			<i class="fa fa-shopping-cart"></i>
			<div>购物车</div>
		</router-link>
		<router-link to='/my'>
			<i class="fa fa-user-o"></i>
			<div>我的</div>
		</router-link>
		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 0.63rem;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 99;
		background: white;
	}
	
	.footer a {
		float: left;
		width: 25%;
		height: 0.63rem;
		text-align: center;
		vertical-align: top;
		padding-top: 0.12rem;
		box-sizing: border-box;
		color: black;
	}
	.footer a i{
		font-size: 0.25rem;
		float: left;
		padding: 0 0.39rem ;
	}
	.footer a div{
		font-size: 0.16rem;
		
	}
	.footer .router-link-active{
		color: blue;
	}
</style>