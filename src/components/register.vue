<template>
	<div>
		<div class="pass">
			<div>账号 :&nbsp;&nbsp;&nbsp; <input type="text" ref="acc" />   </div>
			<div>密码 :&nbsp;&nbsp;&nbsp; <input type="text" ref="pass" />  </div>
			<div>确定密码 :&nbsp;&nbsp;&nbsp; <input type="text" ref="againpass" />  </div>
		</div>
		<button @click="regS">注册</button>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	export default{
		store,
		methods:{
			regS(){
				var userName = this.$refs.acc.value.trim();
				var pass = this.$refs.pass.value.trim();
				var againpass = this.$refs.againpass.value.trim();
				if(pass == againpass){
					if(this.$store.state.reg.length ==0){
						this.$store.commit('adduser',{
							username:userName,
							password:pass
						})
						
					}else{
						for(var j=0;j<this.$store.state.reg.length;j++){
							if(this.$store.state.reg[j].username == userName){
								alert('用户名重复');
								return
							}
							
						}
						this.$store.commit('adduser',{
								username:userName,
								password:pass
							})
							alert('注册成功')
					}
				}else{
					alert('两次密码不相同')
				}
			}
		},
		computed:{
			reg(){
				return this.$store.state.reg
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