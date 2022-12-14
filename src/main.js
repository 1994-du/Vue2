// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import globalUi from "./components/index.js";
// Vue.use(globalUi)

import dxUI from "dxtestui"
Vue.use(dxUI)

import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Elementui)

import axios from "@/axios"
Vue.prototype.$axios=axios
Vue.config.productionTip = false

//全局自定义指令
Vue.directive('directivename',{
  inserted:(el)=>{
    el.style.padding='5px'
    el.style.border='1px solid red'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
