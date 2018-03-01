<template>
	<div>
		<vihead></vihead>
		<div class="net">
			<img class="pic" src="../../static/img/official.png"/>
		</div>
		<div class="carousel swiper-container">
			
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img class="pic" src="../../static/img/20171113232814110405_original.jpg" /></div>
				<div class="swiper-slide"><img class="pic" src="../../static/img/20171122174336166279_original.jpg" /></div>
			</div>
			<div class="swiper-pagination dian"></div>
			
		</div>
		<div class="icon">
			<ul class="iconul">
				<li><img class="pic" src="../../static/img/xuangou.jpg"/></li>
				<li @click="push2"><img class="pic" src="../../static/img/peijian.jpg"/></li>
				<li><img class="pic" src="../../static/img/pingbao.jpg"/></li>
				<li><img class="pic" src="../../static/img/dingzhi.jpg"/></li>
			</ul>
		</div>
		<div class="myp">
			<p>爆款产品</p>
		</div>
		<div class="main_box">
			<ul>
				<li v-for="(v,i) in list" @click="push(v)">
					<div class="image">
                  		<img class="pic" v-bind:src="v.img" />
                	</div>
                	<div class="name">{{v.name}}</div>
                	<div class="nametwo">{{v.nametwo}}</div>
                	<div class="price">￥{{v.Price}}</div> 
				</li>
			</ul>
		</div>
		<vifoot></vifoot>
	</div>
</template>

<script>
	import app from "@/components/app.js"
	import vihead from "@/components/head.vue"
	import vifoot from "@/components/footer.vue"
	import Swiper from '../../static/js/swiper.min.js'
	import store from '../vuex/store.js'
	
	export default {
	store,
	components: {
		vihead,
		vifoot
	},
	data() {
		return {
			list: [
			{
				'title':'one',
				'img': '../../static/img/4171_1496689409434hd_530x530.png',
				"name": "X9Plus 全网通",
				"nametwo": "优惠200元|限量促销",
				"Price": "2798"
			}, 
			{
				'title':'two',
				'img': '../../static/img/4440_1508723830538hd_530x530.png',
				"nametwo": "6.43英寸大屏|0.1s快速解锁",
				"name": "X20Plus 全面屏",
				"Price": "3498"
			}, 
			{
				'title':'three',
				'img': '../../static/img/4495_1509454710945hd_530x530.png',
				"name": "Y79 全面屏手机",
				"nametwo": "前置2400万像素",
				"Price": "2498"
			}, 
			{
				'title':'four',
				'img': '../../static/img/4266_1496689781362hd_530x530.png',
				"name": "Xplay6 128G版",
				"nametwo": "后置双摄|免费镭射镌刻",
				"Price": "3998"
			}, 
			{
				'title':'five',
				'img': '../../static/img/4180_1496689544465hd_530x530.png',
				"name": "Y55 全网通",
				"nametwo": "大屏美颜自拍",
				"Price": "1098"
			}, 
			{
				'title':'six',
				'img': '../../static/img/4171_1496689409434hd_530x530.png',
				"name": "Y66 全网通",
				"nametwo": "5.5英寸大屏|支持花呗分期",
				"Price": "1298"
			}]
		}
	},
	methods: {
		push(v) {
			var url = '/shops/'+v.title
			this.$router.push({path: url})
		},
		push2() {
			this.$router.push({
				path: '/parts'
			})
		},
		lunbo() {
			new Swiper('.swiper-container', {
				autoplay: {
					disableOnInteraction: false
				},
				pagination: {
					el: '.swiper-pagination'
				},
			})
		}
	},
	mounted() {
		this.lunbo();
	}
}</script>
	
<style>
	@import url("../assets/css/swiper.min.css");
	*{
		margin: 0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
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
	.net{
		width: 100%;
		height: 0.36rem;
		position: relative;
		margin-top: 0.58rem;
	}
	
	.pic{
		width: 100%;
		height: 100%;
		vertical-align: top;
		/*position: absolute;*/
		float: left;
		top: 0;
		left: 0;
	}
	.carousel{
		width: 100%;
		height: 2.82rem;
		position: relative;
	}
	li{
		list-style: none;
	}
	.icon{
		width: 100%;
		height: 1.1rem;
		padding-top: 0.18rem;
		box-sizing: border-box;
	}
	.iconul{
		width: 100%;
		height: 0.66rem;
		
	}
	.iconul li {
		float: left;
		margin-left: 0.28rem;
		position: relative;
		width: 0.7rem;
		height: 0.69rem;
		
	}
	.myp{
		width: 100%;
		height: 0.54rem;
		font-size: .16rem;
		line-height: .54rem;
		border-top: silver 1px solid;
		border-bottom: silver 1px solid;
		padding-left: 0.2rem;
		box-sizing: border-box;
	}
	.dian{
		margin-bottom: -0.1rem;
				
	}
	.dian span{
		width: 0.1rem;
		height: 0.1rem;
		background-color: gray;
	}
	.main_box{
		width: 100%;
		height: 9.9rem;
	}
	.main_box ul{
		/*overflow: hidden;*/
		width: 100%;
		height: auto;
		height: 9.9rem;
	}
	.main_box ul li{
		height: 3.3rem;
	    float: left;
	    box-sizing:border-box;
	    width:50%;
	    border-bottom: 2px solid #cccccc;
	    position: relative;
	    box-sizing: border-box;
	}
	.image{
		float: left;
		width: 1.6rem;
      	height: 1.5rem;
      	position: absolute;
      	top: 0.4rem;
      	left: 0.25rem;
	}
	.name{
		float: left;
		width: 50%;
	    overflow: hidden;
	    white-space: nowrap;
	    /*text-overflow: ellipsis;*/
	    /*margin: auto;*/
	    font-size: 0.15rem;
	    font-weight: bold;
	    text-align: center;
	    position: absolute;
	    bottom: 1rem ;
	    left: .5rem;
	}
	.nametwo{
		float: left;
		width: 50%;
		font-size: 0.12rem;
      	text-align: center;
      	overflow: hidden;
      	white-space:nowrap;
      	/*padding-top: 0.15rem;*/
      	font-family: "微软雅黑";
      	position: absolute;
      	bottom: 0.8rem;
	    left: 0.5rem;
	}
	.price{
		float: left;
		width: 50%;
		font-size: 0.3rem;
      	color: red;
      	text-align: center;
      	font-size: 0.2rem;
      	position: absolute;
      	bottom: 0.3rem;
      	left: 0.5rem;
      	overflow: hidden;
	}

</style>