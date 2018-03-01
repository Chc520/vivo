<template>
	<div>
		<div class="login-header">
			<p style="float: left;">登陆</p>
			<i @click="jump" class="fa fa-university"></i>
			<p style="float: right;">注册</p>
		</div>
		
		
		<div class="login-nav">
			<div  v-for="(v,i) in navList" :class="{ act:count == i}" @click="act(i)" >{{v.text}}</div>
		</div>
		<!--<div>
			<div class="pass">
				<div>账号 :&nbsp;&nbsp;&nbsp; <input type="text" ref='lo' />   </div>
				<div>密码 :&nbsp;&nbsp;&nbsp; <input type="text" ref='pa' />  </div>
			</div>
			<button @click="deng">登陆</button>
		</div>-->
		<transition name="component-fade" mode="out-in">
		  <component v-bind:is="view"></component>
		</transition>
		<!--<div>
			<div class="pass">
				<div>账号 :&nbsp;&nbsp;&nbsp; <input type="text" ref="acc" />   </div>
				<div>密码 :&nbsp;&nbsp;&nbsp; <input type="text" ref="pass" />  </div>
				<div>确定密码 :&nbsp;&nbsp;&nbsp; <input type="text" ref="againpass" />  </div>
			</div>
			<button @click="regS">注册</button>
		</div>-->
	</div>
</template>

<script>
	import Swiper from '../../static/js/swiper.min.js'
	import store from '../vuex/store.js'
	import login1 from './login in.vue'
	import register from './register.vue'
	export default{
		store,
		components:{login1,register},
		data(){
			return{
				view:'login1',
				navList:[
				{
					'text':'账号密码登陆'
				},
				{
					'text':'快捷注册'
				}
				],
				count:0
			}
		},
		methods:{
			act(index){//vue动态过度效果
				this.count = index;
				if(this.count == 0){
					this.view = 'login1'
				}else{
					this.view = 'register'
				}
			},
			jump(){
				this.$router.push({
						path: '/home'
					})
			}
//			regS(){
//				var userName = this.$refs.acc.value.trim();
//				var pass = this.$refs.pass.value.trim();
//				var againpass = this.$refs.againpass.value.trim();
//				if(pass == againpass){
//					if(this.$store.state.reg.length ==0){
//						this.$store.commit('adduser',{
//							username:userName,
//							password:pass
//						})
//						
//					}else{
//						for(var j=0;j<this.$store.state.reg.length;j++){
//							if(this.$store.state.reg[j].username == userName){
//								alert('用户名重复');
//								return
//							}
//							
//						}
//						this.$store.commit('adduser',{
//								username:userName,
//								password:pass
//							})
//							alert('注册成功')
//					}
//				}else{
//					alert('两次密码不相同')
//				}
//			},
//			deng(){
//				var lo = this.$refs.lo.value.trim();
//				var pa = this.$refs.pa.value.trim();
//				for(var k=0;k<this.$store.state.reg.length;k++){
//					if(lo == this.$store.state.reg[k].username&&pa == this.$store.state.reg[k].password){
//						alert('登陆成功');
//						this.$store.state.login.choo = false;
//						this.$store.state.login.userName = lo
//						this.$router.push({
//							path: '/my'
//						})
//						
//						return
//					}
//					
//				}
//				alert('用户名或者密码错误')
//				
//			},
//			regbtn(){
//				var userName = this.$refs.acc.value.trim();
////				console.log(this.$refs.acc.value.trim())
//				var pass = this.$refs.pass.value.trim();
//				var againpass = this.$refs.againpass.value.trim();
//				if(pass == againpass){
//					if(this.reg[userName]){
//						alert('用户已存在')
//						this.$store.state.login.choo = false;
//						this.$router.push({
//							path: '/my'
//						})
//					}else{
//						this.reg[userName] = {
//							username:userName,
//							password:pass
//						}
//					}
//				}else{
//					alert('两次密码不相同');
//				}
//			},
//			login(){
//				var lo = this.$refs.lo.value.trim();
//				var pa = this.$refs.pa.value.trim();
//				if(this.reg[lo]){
//					if(this.reg[lo].password==pa){
//						alert('登陆成功');
//						this.$store.state.login.userName = lo;
//						this.$store.state.login.choo = false;
//						this.$router.push({
//							path: '/my'
//						})
//					}
//					
//				}else{
//						alert('账号或者密码不对')
//				}
//			}
		},
		computed:{
			reg(){
				return this.$store.state.reg
			}
		}
	}
</script>

<style scoped>@import url("../assets/css/swiper.min.css");
* {
	margin: 0;
	padding: 0;
}

.component-fade-enter-active,
.component-fade-leave-active {
	transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */

{
	opacity: 0;
}

.login-header {
	width: 100%;
	height: 0.58rem;
	float: left;
	padding: 0 0.15rem;
	box-sizing: border-box;
	background-color: springgreen;
	color: white;
	line-height: 0.58rem;
	font-size: 0.18rem;
	font-weight: bold;
	border-bottom: 1px solid gray;
}
i{
	font-size: 0.25rem;
	position: absolute;
	left: 1.8rem;
	top: 0.16rem;
}
.login-nav {
	width: 100%;
	height: 0.5rem;
	float: left;
	border: 1px solid gray;
	font-size: 0.15rem;
	box-sizing: border-box;
}

.login-nav div {
	float: left;
	width: 50%;
	line-height: 0.5rem;
	text-align: center;
}

/*.pass {
	width: 100%;
	float: left;
}

.pass div {
	width: 100%;
	height: 0.6rem;
	line-height: 0.6rem;
	text-indent: 0.2rem;
	font-size: 0.16rem;
	border: 1px solid gray;
}

.pass div input {
	width: 60%;
	height: 0.35rem;
	border: none;
	font-size: 0.15rem;
}*/

.act {
	color: springgreen;
	border-bottom: 3px solid springgreen;
}

/*button {
	width: 90%;
	height: 0.6rem;
	text-align: center;
	line-height: 0.6rem;
	color: white;
	font-size: 0.16rem;
	background-color: springgreen;
	margin-left: 0.2rem;
}*/

</style>