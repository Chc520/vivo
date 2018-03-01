import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import news from '@/components/consultation.vue'
import my from '@/components/my.vue'
import shopping from '@/components/shopping.vue'
import shops from '@/components/shops.vue'
import parts from '@/components/parts.vue'
import login from '@/components/login'
import register from '@/components/register'
import swiper from '@/components/swiper'


Vue.use(Router)

export default new Router({
	//历史模式
//	mode:'history',
//	base:__dirname+'/',
  routes: [
    {
      path: '/',
      component: home
    },
    {
    	path: '/home',
      component: home
    },
    {
    	path:'/news',
    	component:news
    },
    {
    	path:'/my',
    	component:my
    },
    {
    	path:'/shopping',
    	component:shopping
    },
    {
    	path:'/shops/:id',
    	component:shops,
    },
    {
    	path:'/parts',
    	component:parts
    },
    {
    	path:'/login',
    	component:login
    },
    {
    	path:'/reg',
    	component:register
    },
    {
    	path:'/swiper',
    	component:swiper
    }
  ]
})
