import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  base:window.__MICRO_APP_BASE_ROUTE__||'/',
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve=>require(['@/pages/index.vue'],resolve)
    },
    {
      path:'/dxtestui',
      name:'dxtestui',
      component:resolve=>require(['@/pages/dxtestui.vue'],resolve),
      //此路由独享钩子
      beforeEnter:(to,from,next)=>{
        next()
      }
    },
    {
        path:'/vue/vue3',
        name:'vue3',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/vue3.vue'],resolve)
    },
    {
        path:'/html',
        name:'html',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/html.vue'],resolve)
    },
    {
        path:'/upload',
        name:'upload',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/upload.vue'],resolve)
    }
  ]
})
//全局导航钩子函数
router.beforeEach((to,from,next)=>{
  // console.log('全局导航钩子函数-beforeEach',to)
  next()
  //next(false)--中断当前导航
  //next('/')--跳转到其他地址，当前导航被中断
  //确保调用next方法，否则钩子不会被resolved
})
router.afterEach((route)=>{
  // console.log('全局导航钩子函数-afterEach',route)
})
export default router
