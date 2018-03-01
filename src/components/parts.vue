<template>
	<div>
		<div class="myHeader">
			<span @click="black"><</span>
			<p>选购配件</p>
		</div>
		<div style="padding-top:0.5rem ;">
			<div class="parts-nav">
				<ul>
					<li class="active">全部</li>
					<li>充电器</li>
					<li>保护膜</li>
					<li>耳机音响</li>
				</ul>
			</div>
			<div class="parts-list">
				<ul>
					<li v-for="(v,i) in list" @click="parameter(v)">
						<img :src="v.img" />
						<h2>{{v.name}}</h2>
						<p>{{v.nametwo}}</p>
						<div>￥{{v.price}}</div>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
				{
					'title':'first',
					"name":"vivo原装闪充充电器-9V/2A快充",
		            "nametwo":"vivo原装旅行充电头，支持双引擎闪充，不含数据线（ 不支持X9Plus/X20Plus低压闪充）",
		            "price":"85.00",
		            'img':'../../static/img/parts/4020_1481558694236_250x250.png'
				},
				{
					'title':'second',
					"name":"vivo XE600i 原装音乐耳机",
		            "nametwo":"【直降10元，限时促销】vivo原装HiFi耳机，适配全部vivo机型；三频均衡，让音乐更震撼；入耳式设计，有效阻隔噪音，尽享音乐时光；轻量化设计，佩戴舒适！",
		            "price":"89.00",
		            'img':'../../static/img/parts/1882_1481558960471_250x250.png'
				},
				{
					"name":"vivo原装闪充数据线—2A电流输出",
		            "nametwo":"【限时包邮】原装闪充数据线（适配机型：X6/X6Plus/X7/X7Plus/Xplay5/Xplay6/X9/X9s/X9s Plus/X20）",
		            "price":"29.00",
		            'img':'../../static/img/parts/4459_1506593158905hd_250x250.png'
				},
				{
					"name":"原装低压闪充数据线",
		            "nametwo":"【限时包邮】X9Plus、X20Plus专用原装闪充数据线，闪充功能需搭配原装低压闪充充电器使用。温馨提示：除X9Plus、X20Plus外其他机型无闪充功能",
		            "price":"29.00",
		            'img':'../../static/img/parts/4273_1491007460873hd_250x250.png'
				},
				{
					"name":"vivo X9原装柔性钢化膜",
		            "nametwo":"【限时包邮】X9原装柔性钢化膜，两片装，平面贴膜，2.5D弧面位置不在贴膜覆盖范围，适用X9s、X9机型",
		            "price":"29.00",
		            'img':'../../static/img/parts/4181_1482720908043_250x250.png'
				},
				{
					"name":"vivo Xplay6原装3D高清保护膜",
		            "nametwo":"【限时包邮】【两片装】请先观看详情中贴膜教程视频，按照教程贴膜",
		            "price":"39.00",
		            'img':'../../static/img/parts/4068_1481558920994_250x250.png'
				},
				{
					"name":"vivo XE100耳机",
		            "nametwo":"vivo原装耳机，Y系列机型标配耳机，适配全部vivo机型。由vivo自主设计，品牌原装，三频均衡，音域广阔！",
		            "price":"39.00",
		            'img':'../../static/img/parts/4068_1481558920994_250x250.png'
				},
				{
					"name":"OVEVO欧雷特 无线蓝牙耳机Q62",
		            "nametwo":"【新品上市】Q62无线蓝牙耳机，Hi-Fi音质，震撼立体声，智能降噪，还原CD级原音；支持蓝牙4.2版本，通话无卡顿；旋转收纳，舒适佩戴，长达10H超级续航。",
		            "price":"499.00",
		            'img':'../../static/img/parts/4535_1511511335809hd_250x250.png'
				}
				]
			}
		},
		methods:{
			parameter(v){
				var url = '/shops/'+v.title
				this.$router.push({path: url})
			},
			black(){
				this.$router.push({
					path: '/home'
				})
			}
		}
	}
</script>

<style scoped>
		
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.myHeader{
		width: 100%;
		height: 0.5rem;
		position: fixed;
		top: 0;
		left: 0;
		border-bottom: 1px solid gray;
		font-size: 0.2rem;
		line-height: 0.5rem;
		padding-left: 0.15rem;
		box-sizing: border-box;
		background-color: white;
	}
	.myHeader span{
		float: left;
		font-weight: bold;
		font-size: 0.25rem;
	}
	.myHeader p{
		float: left;
		margin-left: 1.2rem;
	}
	.parts-nav{
		width: 100%;
		height: 0.49rem;
		float: left;
	}
	.parts-nav ul{
		width: 100%;
		float: left;
		height: 0.49rem;
	}
	.parts-nav ul li{
		text-align: center;
		width: 25%;
		float: left;
		
		font-size: 0.14rem;
		line-height: 0.46rem;
		overflow: hidden;
	}
	.active{
		color: skyblue;
		border-bottom: 3px solid skyblue;
	}
	.parts-list,.parts-list ul{
		width: 100%;
		float: left;
	}
	.parts-list ul li{
		width: 50%;
		float: left;
		text-align: center;
		vertical-align: top;
	}
	.parts-list ul li img{
	    margin: auto;
	    width: 1.7rem;
	    height: 1.5rem;
	    padding-top: 0.2rem;
	}
	.parts-list ul li h2{
		width: 90%;
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	font-size: 0.17rem;
    	margin: auto;
	}
	.parts-list ul li p{
		word-break: break-all;
    	overflow: hidden;
    	width: 75%;
    	height: 0.25rem;
    	font-size: 0.1rem;
    	margin: 0 auto;
    	text-indent: 0.05rem;
    	padding-top: 0.1rem;
	}
	.parts-list ul li div{
		padding-top:0.25rem ;
		padding-bottom:0.15rem ;
		font-size: 0.13rem;
		margin: auto;
		width: 90%;
		color: red;
	}
</style>