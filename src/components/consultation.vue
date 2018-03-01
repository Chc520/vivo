<template>
	<div>
		<vihead></vihead>
		<div style="padding-top: 0.6rem;">
			<div class="newsMain" v-for="(v,i) in newsList">
				<h3 class="newsTitle">{{v.title}}</h3>
				<span class="newsTime">{{v.time}}</span>
				<div class="newsBody">
					<img v-bind:src="v.img" />
					<p>阅读全文</p>
				</div>
			</div>
		</div>
		<vifoot></vifoot>
	</div>
</template>

<script>
	import vihead from "@/components/head.vue"
	import vifoot from "@/components/footer.vue"
	export default{
		components:{vihead,vifoot},
		data(){
			return{
				newsList:[
				{
					"title":"vivo杀出重围成为黑马销量迅速上升",
		            "time":"2017-11-15 11:00:10",
		            "img":"../../static/img/1497187.png"
				},
				{
					"title":"vivo将扩张六大新市场 包括香港和台湾",
		            "time":"2017-11-15 11:00:10",
		            "img":"../../static/img/1493799.jpg"
				},
				{
					"title":"战斗民族将用上vivo手机！",
		            "time":"2017-11-15 11:00:10",
		            "img":"../../static/img/1494158.jpg"
				},
				{
					"title":"何为好的全面屏手机?首先得是好用手机!",
		            "time":"2017-11-15 11:00:10",
		            "img":"../../static/img/1489925.jpg"
				}
				]
			}
		}
		
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		
	}
	.newsMain{
		width: 100%;
		height: 3.5rem;
		/*margin-top: 0.6rem;*/
		padding-top: 0.2rem;
		border-bottom: gray solid 1px;
		border-top: gray solid 1px;
		float: left;
	}
	.newsMain h3{
		vertical-align: top;
		font-size: 0.16rem;
		/*float: left;*/
		padding-left: 0.6rem;
		padding-bottom: 0.06rem;
	}
	.newsMain span{
		font-size: 0.1rem;
		vertical-align: top;
		/*float: left;*/
		padding-left: 0.6rem;
		
	}
	.newsBody{
		/*vertical-align: top;*/
		width: 100%;
		margin-top: -1.1rem;
		overflow: hidden;
	}
	.newsBody img{
		width: 100%;
		vertical-align: top;
		float: left;
		height: 2.3rem;
	}
	.newsBody p{
		font-size: 0.2rem;
		float: right;
		margin-right:0.3rem ;
		margin-top: 0.1rem;
	}
</style>