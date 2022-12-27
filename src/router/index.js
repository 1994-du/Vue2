import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve=>require(['@/pages/index.vue'],resolve)
    },{
      path:'/customerDirective',
      name:'CustomerDirective',
      component:resolve=>require(['@/pages/child/customerDirective.vue'],resolve)
    },
    {
      path:'/useRoute',
      name:'UseRoute',
      component:resolve=>require(['@/pages/child/useRoute.vue'],resolve),
      //此路由独享钩子
      beforeEnter:(to,from,next)=>{
        next()
      }
    },
    {
      path:'/useSlot',
      name:'UseSlot',
      component:resolve=>require(['@/pages/child/useSlot.vue'],resolve)
    },
    {
      path:'/useElectronApp',
      name:'useElectronApp',
      component:resolve=>require(['@/pages/child/useElectron.vue'],resolve)
    },
    {
      path:"/useAxios",
      name:'useAxios',
      component:resolve=>require(['@/pages/child/useAxios.vue'],resolve)
    },
    {
      path:"/useHttp",
      name:'useHttp',
      component:resolve=>require(['@/pages/child/useHttp.vue'],resolve)
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
