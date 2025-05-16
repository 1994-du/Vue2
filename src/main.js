import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import _ from 'lodash';
window._ = _; // Make lodash available globally
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
