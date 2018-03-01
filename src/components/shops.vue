<template>
	<div>
		<div class="myHeader">
			<span @click="black"><</span>
			<p>商品详情</p>
		</div>
		<div style="padding-top: 0.5rem;padding-bottom: 0.53rem;overflow: hidden;">
			<div class="imgaBox swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(v,i) in $data[$route.params.id].pic"><img :src="v" /></div>
				</div>
				<div class="swiper-pagination dian"></div>
			</div>
			<div class="shopsName">
				<p>{{$data[$route.params.id].name}}</p>
				<span>￥{{$data[$route.params.id].price}}</span>
			</div>
			<div class="shopsNumber">
				<div>购买数量：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span @click="addnum">+</span><span>{{num}}</span><span @click="rednum">-</span> </div>
			</div>
			<div class="shops-nav">
				<div @click="active1" v-bind:class="{active:flag}">图文详情</div>
				<div @click="active2" v-bind:class="{active:flag2}">商品配置</div>
			</div>
			<div class="shops-imgas" style="width: 4.14rem;">
				<div class="box111" :style="left1" style="transition: 1s; position: relative; overflow: hidden; width:8.28rem;">
					<div style="float: left;width: 4.14rem;">
						<p v-for="(v,i) in $data[$route.params.id].imgsArr"><img v-bind:src="v" /></p>
					</div>
					<div style="float:left;width: 4.14rem;height: 10rem;background: blueviolet;"></div>
				</div>
			</div>
		</div>
		<div class="shops-footer">
			<button class="car" @click="mmm()" >加入购物车</button>
			<button @click="block">立即购买</button>
		</div>
		<transition name="fade">
			<div class="mask" v-show="choose">
				<div>
					<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
					<p>成功支付了{{pri}}元</p>
				</div>
			</div>
		</transition>
		
	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'
	import store from '../vuex/store.js'
	
	export default{
		store,
		data(){
			return{
				na:'加入购物车',
				num:1,
				flag:true,
				left1:{
					left: '0'
				},
				a:0,
				flag2: false,
				choose:false,
				one:{
					pic:[
					'../../static/img/01/4171_1482112377158_530x530.png',
					'../../static/img/01/4171_1496689409434hd_530x530.png',
					'../../static/img/01/4171_1482112378797_530x530.png'
					],
					name:'X9Plus 全网通 6GB+64GB',
					price:'2798',
					imgsArr:[
						'../../static/img/01/20171115110719510981_original.jpg',
						'../../static/img/01/20171113112115957344_original.jpg',
						'../../static/img/01/20161219093807784269_original.jpg',
						'../../static/img/01/20161219093810349285_original.jpg',
						'../../static/img/01/20161219093813167921_original.jpg',
						'../../static/img/01/20161219093814935600_original.jpg',
						'../../static/img/01/20161219093817527717_original.jpg',
						'../../static/img/01/20161219093820318903_original.jpg',
						'../../static/img/01/20161219093822750588_original.jpg',
						'../../static/img/01/20161219093824598774_original.jpg',
						'../../static/img/01/20161219093827290232_original.jpg',
						'../../static/img/01/20161219093829298284_original.jpg',
						'../../static/img/01/2016121909383925061_original.jpg',
						'../../static/img/01/20171113112115957344_original.jpg',
						'../../static/img/01/20161230205257942403_original.jpg'
					]
				},
				two:{
					pic:[
					'../../static/img/02/4440_1508723832425hd_530x530.png',
					'../../static/img/02/4440_1508723830538hd_530x530.png',
					'../../static/img/02/4440_1508723828993hd_530x530.png'
					],
					name:'X20Plus 全面屏手机 4GB+64GB',
					price:'3498',
					imgsArr:[
						'../../static/img/02/20171115110719510981_original.jpg',
						'../../static/img/02/20171019200901204411_original.jpg',
						'../../static/img/02/20171019200902359537_original.jpg',
						'../../static/img/02/20171019200922571186_original.jpg',
						'../../static/img/02/20171019201528695755_original.jpg',
						'../../static/img/02/2017101920094926848_original.jpg',
						'../../static/img/02/20171019200948703417_original.jpg',
						'../../static/img/02/2017101920101331912_original.jpg',
						'../../static/img/02/20171019201119431711_original.jpg',
						'../../static/img/02/20171019201051376383_original.jpg',
						'../../static/img/02/20171019201051448387_original.jpg',
						'../../static/img/02/20171019201158341496_original.jpg',
						'../../static/img/02/2017102711364996936_original.jpg',
						'../../static/img/02/20171027113700613256_original.jpg'
						
					]
				},
				three:{
					pic:[
					'../../static/img/03/4495_1509454714610hd_530x530.png',
					'../../static/img/03/4495_1509454710945hd_530x530.png',
					'../../static/img/03/4495_1509454706314hd_530x530.png'
					],
					name:'Y79 全面屏手机 4GB+64GB',
					price:'2498',
					imgsArr:[
					'../../static/img/03/20171031232228644662_original.jpg',
					'../../static/img/03/20171031232229235145_original.jpg',
					'../../static/img/03/20171031232243781406_original.jpg',
					'../../static/img/03/20171031232353254161_original.jpg',
					'../../static/img/03/20171101191141708950_original.jpg',
					'../../static/img/03/20171031232409516746_original.jpg',
					'../../static/img/03/20171031232409523196_original.jpg',
					'../../static/img/03/20171031232442377774_original.jpg',
					'../../static/img/03/20171031232442208606_original.jpg',
					'../../static/img/03/2017103123244195095_original.jpg',
					'../../static/img/03/20171031232457784713_original.jpg',
					'../../static/img/03/20171031232457762898_original.jpg',
					'../../static/img/03/20171031232456912178_original.jpg',
					'../../static/img/03/20171031232519457796_original.jpg'
					]
				},
				four:{
					pic:[
					'../../static/img/04/4266_1500026039430hd_530x530.png',
					'../../static/img/04/4266_1496689781362hd_530x530.png',
					'../../static/img/04/4266_1490271072649hd_530x530.png'
					],
					name:'Xplay6 全网通 6GB+128GB',
					price:'3998',
					imgsArr:[
					'../../static/img/04/20171115110719510981_original.jpg',
					'../../static/img/04/20171116155420650567_original.jpg',
					'../../static/img/04/20170323155103829614_original.jpg',
					'../../static/img/04/20170323155114886378_original.jpg',
					'../../static/img/04/20170323155120205409_original.jpg',
					'../../static/img/04/20170329154926638158_original.jpg',
					'../../static/img/04/20170922151756502731_original.jpg',
					'../../static/img/04/20170323155216955152_original.jpg',
					'../../static/img/04/20170323155227379507_original.jpg',
					'../../static/img/04/20170821083311616767_original.jpg',
					'../../static/img/04/20170323155304684132_original.jpg',
					'../../static/img/04/20170329154947686685_original.jpg',
					'../../static/img/04/20170323155330211312_original.jpg',
					'../../static/img/04/20170323155342477248_original.jpg',
					'../../static/img/04/20171109160002274104_original.jpg',
					'../../static/img/04/20170629145248102954_original.jpg'
					]
				},
				five:{
					pic:[
					'../../static/img/05/4111_1500023519212hd_530x530.png',
					'../../static/img/05/4111_1492998667334hd_530x530.png',
					'../../static/img/05/4111_1500023520345hd_530x530.png'
					],
					name:'Y55 全网通 2GB+16GB',
					price:'1098',
					imgsArr:[
					'../../static/img/04/20171115110719510981_original.jpg',
					'../../static/img/05/20170421091204610656_original.jpg',
					'../../static/img/05/20170421091210168540_original.jpg',
					'../../static/img/05/20170421091215924855_original.jpg',
					'../../static/img/05/20170421091221372744_original.jpg',
					'../../static/img/05/20170421091230675858_original.jpg',
					'../../static/img/05/20170421091237320807_original.jpg',
					'../../static/img/05/20170421091244500855_original.jpg',
					'../../static/img/05/20170421091253281854_original.jpg',
					'../../static/img/05/20170421091321785328_original.jpg',
					'../../static/img/05/2017042109132813680_original.jpg',
					'../../static/img/05/2017042109133367195_original.jpg',
					'../../static/img/05/20170421091341301683_original.jpg',
					'../../static/img/05/20170421091351664625_original.jpg'
					]
				},
				first:{
					pic:[
					'../../static/img/first/4020_1456733531803_530x530.png',
					'../../static/img/first/4020_1456733534360_530x530.png',
					'../../static/img/first/4020_1481558694236_250x250.png'
					],
					name:'vivo原装闪充充电器-9V/2A快充',
					price:'85',
					imgsArr:[
					'../../static/img/first/201602291614408070_original.jpg',
					'../../static/img/first/201602291614462415_original.jpg',
					'../../static/img/first/201602291614533948_original.jpg',
					'../../static/img/first/201602291614558048_original.jpg',
					'../../static/img/first/201602291614495925_original.jpg',
					'../../static/img/first/201602291614437442_original.jpg',
					'../../static/img/first/201602291614437442_original.jpg',
					'../../static/img/first/201602291614385696_original.jpg',
					'../../static/img/first/20161220104443338583_original.jpg'
					]
				},
				second:{
					pic:[
					'../../static/img/second/1882_1447902809866_530x530.png',
					'../../static/img/second/1882_1447902810338_530x530.png',
					'../../static/img/second/1882_1481558960471_530x530.png'
					],
					name:'vivo XE600i 原装音乐耳机',
					price:'89',
					imgsArr:[
					'../../static/img/second/20160818164932573700_original.jpg',
					'../../static/img/second/20160818164953579712_original.jpg',
					'../../static/img/second/2016081816500395651_original.jpg',
					'../../static/img/second/20160818165007673346_original.jpg',
					'../../static/img/second/201608181651084158_original.jpg',
					'../../static/img/second/20170113090615670252_original.jpg'
					]
				}
				
			}
			
		},
		methods:{
			block(){
				this.choose = true;
				var _this = this
				setTimeout(function(){
					_this.choose = false
				},2000)
			},
			mmm(){
				this.$store.commit('addcarts',{
					img:this.$data[this.$route.params.id].pic[0],
					price:this.$data[this.$route.params.id].price,
					name:this.$data[this.$route.params.id].name,
					falg:this.flag2,
					num:this.num,
					xuan:true
				})
			},
			addcar(){
				this.a++
				
				
				if(this.a>1){
					alert('已存在')
				}else{
					this.$store.state.shops.push({
					img:this.$data[this.$route.params.id].pic[0],
					price:this.$data[this.$route.params.id].price,
					name:this.$data[this.$route.params.id].name,
					falg:this.flag2,
					num:this.num
				})
				}
//				this.$store.state.shops.img = ;
//				this.$store.state.shops.price = ;
//				this.$store.state.shops.name = ;
			},
			black(){
				this.$router.push({
					path: '/home'
				})
			},
			addnum(){
				this.num++;
			},
			rednum(){
				if(this.num<=1){
					this.num =1
				}else{
					this.num--;
				}
			},
			active1(){
				this.flag = true;
				this.flag2 = false
				this.left1.left = '0rem'
			},
			active2(){
				this.flag = false;
				this.flag2 = true
				this.left1.left = '-4.14rem'
			},
			lunbo() {
				new Swiper('.swiper-container', {
					autoplay: {
						disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination',
						clickable:true
					},
				})
			}
		},
		mounted(){
			this.lunbo();
			console.log(this.$route.params.id)

		},
		computed:{
			pri:function(){
				return this.$data[this.$route.params.id].price*this.num
			}
		}
	}
</script>

<style scoped>
	@import url("../assets/css/swiper.min.css");
.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
	opacity: 0;
}

.box111:after {
	content: '';
	height: 0;
	clear: both;
	overflow: hidden;
}

* {
	margin: 0;
	padding: 0;
	list-style: none;
}

.myHeader {
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
	z-index: 99;
}

.myHeader span {
	float: left;
	font-weight: bold;
	font-size: 0.25rem;
}

.myHeader p {
	float: left;
	margin-left: 1.2rem;
}
.swiper-pagination span{
	width: 0.1rem;
	height: 0.1rem;
	background-color: gray;
	z-index: 99;
	display: block;
}
.imgaBox {
	width: 100%;
	height: 4.05rem;
	float: left;
	text-align: center;
	/*position: relative;*/
	border-bottom: 1px solid gray;
	overflow: hidden;
}

.imgaBox img {
	padding-top: 0.3rem;
	width: 73%;
}


.shopsName,
.shopsNumber {
	width: 100%;
	height: 0.78rem;
	padding-left: 0.2rem;
	box-sizing: border-box;
	float: left;
	/*line-height: 0.78rem;*/
	border-bottom: 1px solid gray;
	padding-top: 0.18rem;
	box-sizing: border-box;
}

.shopsName p {
	font-size: 0.18rem;
	margin: 0;
	padding: 0;
}

.shopsName span {
	font-size: 0.15rem;
	vertical-align: top;
	color: red;
}

.shopsNumber div {
	font-size: 0.15rem;
	float: left;
	padding-top: 0.12rem;
}

.shopsNumber span {
	float: right;
	width: 0.43rem;
	height: 0.35rem;
	font-size: 0.15rem;
	text-align: center;
	border: 1px solid gray;
	line-height: 0.35rem;
	margin-top: -0.08rem;
}

.shops-nav {
	width: 100%;
	height: 0.49rem;
	float: left;
	border-bottom: 1px solid gray;
}

.shops-nav div {
	float: left;
	width: 50%;
	height: 0.46rem;
	font-size: 0.15rem;
	text-align: center;
	line-height: 0.46rem;
}

.active {
	color: skyblue;
	border-bottom: 3px solid skyblue;
	/*overflow: hidden;*/
}

.shops-imgas,
.shops-imgas p,
.shops-imgas p img {
	width: 4.14rem;
	float: left;
}

.shops-footer {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 0.53rem;
}

.shops-footer button {
	float: left;
	width: 50%;
	height: 0.53rem;
	color: white;
	background-color: crimson;
	font-size: 0.16rem;
	text-align: center;
	line-height: 0.53rem;
	border: none;
}

.shops-footer .car {
	background-color: orangered;
}

.mask {
	width: 1.5rem;
	height: 1.5rem;
	position: fixed;
	bottom: 3.5rem;
	left: 1.28rem;
	background: rgba(0, 0, 0, .5);
	font-size: 0.15rem;
	text-align: center;
	padding-top: 0.3rem;
	box-sizing: border-box;
	border-radius: 0.08rem;
	color: white;
	z-index: 99;
}

.mask div i {
	font-size: 0.65rem;
}

</style>