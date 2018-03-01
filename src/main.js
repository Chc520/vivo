// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import router from './router'

//使用axios的时候,允许跨域时 携带 cookie
//axios.defaults.withCredentials = true;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//components: { App },
//template: '<App/>'
})
