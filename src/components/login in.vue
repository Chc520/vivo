<template>
	<div>
		<div class="pass">
			<div>账号 :&nbsp;&nbsp;&nbsp; <input type="text" ref='lo' />   </div>
			<div>密码 :&nbsp;&nbsp;&nbsp; <input type="text" ref='pa' />  </div>
		</div>
		<button @click="deng">登陆</button>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	export default{
		methods:{
			deng(){
				var lo = this.$refs.lo.value.trim();
				var pa = this.$refs.pa.value.trim();
				for(var k=0;k<this.$store.state.reg.length;k++){
					if(lo == this.$store.state.reg[k].username&&pa == this.$store.state.reg[k].password){
						alert('登陆成功');
						this.$store.state.login.choo = false;
						this.$store.state.login.userName = lo
						this.$router.push({
							path: '/my'
						})
						this.$store.state.str=lo
						this.$store.commit('user',{userName : lo})
						console.log(this.$store.state.str)
						return
					}
					
				}
				alert('用户名或者密码错误')
				
			}
		},
		computed:{
			reg(){
				return this.$store.state.reg
			},
			log(){
				return this.$store.state.log
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.pass{
		width: 100%;
		float: left;
		
	}
	.pass div{
		width: 100%;
		height: 0.6rem;
		line-height: 0.6rem;
		text-indent: 0.2rem;
		font-size: 0.16rem;
		border: 1px solid gray;
		box-sizing: border-box;
	}
	.pass div input{
		width: 60%;
		height: 0.35rem;
		border: none;
		font-size: 0.15rem;
	}
	button{
		width: 90%;
		height: 0.6rem;
		text-align: center;
		line-height: 0.6rem;
		color: white;
		font-size: 0.16rem;
		background-color: springgreen;
		margin-left:0.2rem ;
	}
</style>