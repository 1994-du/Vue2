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
        path:'/ainput',
        name:'ainput',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/aInput.vue'],resolve)
    },
    {
      path:'/gitUse',
        name:'gitUse',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/gitUse.vue'],resolve)
    },
    {
      path:'/watch',
        name:'watch',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/watch.vue'],resolve)
    },
    {
      path:'/sync',
        name:'sync',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/sync.vue'],resolve)
    },
    {
      path:'/drawflow',
        name:'drawflow',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/drawflow.vue'],resolve)
    },
    {
      path:'/antvx6',
        name:'antv_x6',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/antv_X6.vue'],resolve)
    },
    {
      path:'/form',
        name:'form',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/useForm.vue'],resolve)
    },
    {
      path:'/quarter',
        name:'季度选择器',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/quarter.vue'],resolve)
    },
    {
      path:'/collapse',
        name:'折叠面板',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/collapse.vue'],resolve)
    },
    {
      path:'/uploadFile',
        name:'form校验上传文件',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/formUpload.vue'],resolve)
    },
    {
      path:'/flute',
        name:'荒',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/flute.vue'],resolve)
    },
    {
      path:'/debounce',
        name:'防抖',
        // component:import('@/pages/vue3.vue')
        component:resolve=>require(['@/pages/debounce.vue'],resolve)
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
