import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
	//保存到本地存储
	shops:localStorage["shops"]?JSON.parse(localStorage["shops"]): [],
	reg:localStorage["reg"]?JSON.parse(localStorage["reg"]): [],
	log:localStorage["log"]?JSON.parse(localStorage["log"]): {},
//	reg:{
//		abc:{
//			username:'abc',
//			password:'123456'
//		}
//	},
	login:{
		choo:true
	},
	header:'vivo',
	str:'请点击登陆'
	
}
const mutations = {
	//加入购物车
    addcarts(state,data){
        state.shops.push(data)
        console.log(state.shops)
        localStorage.setItem("shops",JSON.stringify(state.shops));
    },
    //删除购物车商品
    outcarts(state,index){
    	var lol = confirm('你确定删除此商品吗？')
    	if(lol){
    		state.shops.splice(index,1)
        	localStorage.setItem("shops",JSON.stringify(state.shops));
    	}
       
    },
    //添加用户
    adduser(state,data){
    	state.reg.push(data)
    	localStorage.setItem("reg",JSON.stringify(state.reg));
    },
    //登陆
    user(state,data){
    	console.log(data)
    	state.log = data
    	localStorage.setItem("log",JSON.stringify(state.log));
    }
}




export default new Vuex.Store({
	state,
	mutations
})