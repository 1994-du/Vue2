// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import components from "./components/index2.js";
Vue.use(components)
Vue.use(Antd)
import dxUI from "dxtestui"
Vue.use(dxUI)

import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Elementui)

import axios from "@/axios"
Vue.prototype.$axios=axios

// import globalBus from './globalBus.js';
import globalBus from "./bus.js"
Vue.use(globalBus)
import _ from 'lodash'
window._=_;
Vue.config.productionTip = false
// import test from '@/pages'
// console.log(test)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
