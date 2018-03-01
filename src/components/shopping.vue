<template>
	<div>
		<vihead></vihead>
		<div class="cart">
			<div class="cartbody" v-if="show">
				<img src="../../static/img/gouwuche.png" />
				<h3>购物车是空的，快去购物吧！</h3>
				<router-link to="/home"><button>买买买</button></router-link>
			</div>
			<div style="padding-top: 0.58rem;" v-else>
				<div class="cartList" v-for="(v,i) in car">
					<div class="inps"><input type="checkbox" v-model="v.xuan" @click="more(v)" /></div>
					<div class="cartList-img">
						<img :src="v.img" />
					</div>
					<div class="cartList-msg">
						<h3>{{v.name}}</h3>
						<p>￥{{v.price}}</p>
						<div><span @click="addnum(i)">+</span><span>{{v.num}}</span><span @click="rednum(i)">-</span></div>
					</div>
					<div class="del" @click="out(i)"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
				</div>
				<div class="add">
					<button @click="block">提交订单</button>
					<button class="buy" @click="back">继续购物</button>
					<p>￥{{addP}}</p>
					<div>全选 <input type="checkbox" v-model="falg" @click="all" /></div>
				</div>
				<transition name="fade">
					<div class="mask" v-show="choose">
						<div>
							<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
							<p>成功支付了{{addP}}元</p>
						</div>
					</div>
				</transition>
			</div>
			
		</div>
	</div>
</template>

<script>
	import vihead from "@/components/head.vue"
	import store from '../vuex/store.js'
	export default{
		store,
		components:{vihead},
		data(){
			return{
				choose:false,
				falg:true
			}
		},
		computed:{
			car(){
				return this.$store.state.shops;
			},
			addP(){
				var Price = 0;
				
					for(var i=0;i<this.car.length;i++){
						if(this.car[i].xuan){
							Price += Number(this.car[i].num*this.car[i].price) 
						}
						
					}
					return Price
				
			},
			show(){//切换
				if(this.car.length != 0){
					return false;
				}else if(this.car.length == 0){
					return true;
				}
			}
		},
		mounted(){
//			if(this.car.length != 0){
//				this.falg = false;
//			}else if(this.car.length == 0){
//				this.falg = true;
//			}
//			console.log(this.car);
		},
		methods:{
			del(index){
				var lol = confirm('你确定删除此商品吗？')
				if(lol){
					this.car.splice(index,1)
				}
				
			},
			all(){
				
				for(var k=0;k<this.car.length;k++){
					if(this.falg){
						this.car[k].xuan = false;
					}else{
						this.car[k].xuan = true;
					}
						
				}
				
			},
			more(v){//列表选择项
				var count = 0;
				for(var h=0;h<this.car.length;h++){
					if(this.car[h].xuan){
						count++;
						
					}
				}
				
				if(!v.xuan){
					count++;
				}else{
					count--;
				}
console.log(count)
				console.log(this.car.length)
				if(count == this.car.length){
					this.falg = true;
				}else{
					this.falg = false;
				}
			},
			out(index){
				this.$store.commit('outcarts',index)
			},
			block(){
				this.choose = true;
				var _this = this
				setTimeout(function(){
					_this.choose = false
				},2000)
			},
			addnum(index){
				for(var j=0;j<this.car.length;j++){
					this.car[index].num++
				}
			},
			rednum(index){
				for(var k=0;k<this.car.length;k++){
					if(this.car[index].num<=1){
						this.car[index].num = 1
					}else{
						this.car[index].num--
					}
					
				}
			},
			back(){
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
	}
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
.cart{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.cartbody{
	float: left;
	width: 100%;
	padding-top: 0.58rem;
	text-align: center;
}
.cartbody img{
	padding-top: 0.5rem;
	width: 28%;
	
}
.cartbody h3{
	font-size: 0.2rem;
	margin: 0;
	padding: 0;
	color: gray;
}
.cartbody button{
	width: 0.9rem;
	height: 0.3rem;
	background-color: crimson;
	border: none;
	border-radius: 0.05rem;
	font-size: 0.16rem;
	color: white;
	vertical-align: top;
	margin-top: 0.2rem;
	font-weight: bold;
}
.cartList{
	width: 100%;
	height: 1.55rem;
	margin-top: 0.05rem;
	/*background-color: khaki;*/
	position: relative;
	box-sizing: border-box;
}
.cartList-img{
	float: left;
	height: 100%;
	padding: 0.207rem;
	width: 1.49rem;
	box-sizing: border-box;
}
.cartList-img img{
	float: left;
	width: 100%;
	height: 100%;
}
.cartList-msg{
	width: 2rem;
	height: 100%;
	float: left;
}
.cartList-msg h3{
	font-size: 0.15rem;
	float: left;
	width: 100%;
	padding-top: 0.22rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.cartList-msg p{
	font-size: 0.15rem;
	color: red;
	float: left;
	width: 100%;
	padding-top: 0.15rem;
}
.cartList-msg div{
	padding-top: 0.15rem;
	width: 100%;
	font-size: 0.15rem;
	float: left;
}
.cartList-msg div span{
	float: left;
	width: 0.35rem;
	height: 0.3rem;
	text-align: center;
	border: 1px solid gray;
	line-height: 0.3rem;
}
.del{
	float: right;
	width: 0.6rem;
	height: 100%;
	font-size: 0.22rem;
	text-align: center;
	line-height: 1.55rem;
	color: grey;
}
.add{
	width: 100%;
	height: 0.6rem;
	position: fixed;
	bottom: 0;
	left: 0;
	font-size: 0.16rem;
	box-sizing: border-box;
	background-color: sandybrown;
}
.add button{
	float: right;
	width: 1rem;
	height: 100%;
	background-color: crimson;
	text-align: center;
	line-height: 0.6rem;
	color: white;
	font-size: 0.16rem;
	border: none;
	
}
.add .buy{
	background-color: #05A8F9;
}
.add p{
	float: right;
	line-height: 0.6rem;
	padding-right: 0.15rem;
	
}
.add div{
	float: left;
	height: 100%;
	padding-top:0.2rem ;
	box-sizing: border-box;
	margin-left: 0.1rem;
}
.add input{
	width: 0.15rem;
	height: 0.15rem;
	vertical-align: middle;
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
.inps{
	width: 4%;
	height: 1.3rem;
	position: absolute;
	left: 0.05rem;
	top: 0;
}
.inps input{
	width: 100%;
	height: 0.2rem;
	float: left;
	margin-top: 0.6rem;
}
.mask div i {
	font-size: 0.65rem;
}
</style>