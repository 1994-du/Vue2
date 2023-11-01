import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve=>require(['@/pages/index.vue'],resolve)
    },
    {
        path:'/upload',
        name:'upload',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/upload.vue'],resolve)
    },
    {
        path:'/tree',
        name:'tree',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/tree.vue'],resolve)
    },
    {
        path:'/time',
        name:'time',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/time.vue'],resolve)
    },
    {
        path:'/gitUse',
        name:'gitUse',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/gitUse.vue'],resolve)
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
