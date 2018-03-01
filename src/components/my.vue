<template>
	<div>
		<vihead></vihead>
		<div style="padding-top: 0.78rem;" >
			<div class="userBox" v-if="false" >
				<img src="../../static/img/tou.jpg"/>
				<span>Mr.Cai</span>
			</div>
			<div class="login">
				<div class="login-img"><img src="../../static/img/dingzhi.jpg" /></div>
				<div  class="login-p" @click="click">{{str}}</div>
				<!--<div class="login-p" v-else>{{this.$store.state.login.userName}}-->
					
				<p v-if="shaCheng" @click="quit">退出登陆</p>
			</div>
			<div class="myBox">
				<span>我的订单</span>
			</div>
			<div class="myBox">
				<span>联系我</span>
			</div>
		</div>
		<vifoot></vifoot>
	</div>
</template>

<script>
	import vihead from "@/components/head.vue"
	import vifoot from "@/components/footer.vue"
	import store from '../vuex/store.js'
	export default{
		store,
		components:{vihead,vifoot},
		data(){
			return{
				bool:true,
				str:'请点击登陆',
				shaCheng: false
			}
		},
		methods:{
			click(){
				this.$router.push({
					path: '/login'
				})
			},
			quit(){
				this.bool = true;
//				this.reg.userName = '';
				localStorage.removeItem('log')//移除本地存储数据
				this.aaa()
				console.log(this.str)
				alert('退出成功');
				this.shaCheng = false
			},
			aaa(){
				
				if(localStorage.log){
					this.str = JSON.parse(localStorage.log).userName
				}else{
					this.str = '请点击登陆'
				}
			}
		},
		computed:{
			reg(){
				return this.$store.state.login;
			}
		},
		mounted(){
			this.bool = this.reg.choo;
			console.log(this.reg)
			this.aaa()
			if(localStorage.log){
				this.shaCheng = true
			}else{
				this.shaCheng = false
			}
		}
	}
</script>

<style scoped>
.userBox,.myBox{
	width: 97%;
	float: right;
	border-bottom: 1px solid gray;
	
}
.userBox{
	height: 0.76rem;
}
.myBox{
	height: 0.57rem;
	line-height: 0.57rem;
}
.userBox img{
	float: left;
}
.userBox span{
	line-height: 0.68rem;
	font-size: 0.2rem;
	float: left;
	margin-left: 0.2rem;
}
.myBox span{
	font-size: 0.2rem;
	float: left;
}
.login{
	width: 100%;
	height: 1rem;
	background-color: deepskyblue;
	float: left;
	box-sizing: border-box;
}
.login-img{
	float: left;
	box-sizing: border-box;
}
.login-img img{
	width: 0.6rem;
	height: 0.6rem;
	float: left;
	padding:0.2rem;
	border-radius:50% ;
}
.login-p{
	font-size: 0.18rem;
	width: 2rem;
	height: 100%;
	line-height: 1rem;
	float: left;
	color:white;
	margin-left: 0.2rem;
	box-sizing: border-box;
}
.login p{
	float: right;
	font-size: 0.18rem;
	margin: 0;
	line-height: 1rem;
	margin-right: 0.2rem;
}
</style>