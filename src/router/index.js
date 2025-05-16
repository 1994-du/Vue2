import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      // component: resolve=>require(['@/pages/index.vue'],resolve)
      component: () => import('@/pages/index.vue')
    },
    {
        path:'/upload',
        name:'upload',
        // component:resolve=>require(['@/pages/upload.vue'],resolve)
        component: () => import('@/pages/upload.vue')
    },
    {
        path:'/tree',
        name:'tree',
        // component:resolve=>require(['@/pages/tree.vue'],resolve)
        component: () => import('@/pages/tree.vue')
    },
    {
        path:'/time',
        name:'time',
        // component:resolve=>require(['@/pages/time.vue'],resolve)
        component: () => import('@/pages/time.vue')
    },
    {
        path:'/ainput',
        name:'ainput',
        // component:resolve=>require(['@/pages/aInput.vue'],resolve)
        component: () => import('@/pages/aInput.vue')
    },
    {
      path:'/gitUse',
        name:'gitUse',
        // component:resolve=>require(['@/pages/gitUse.vue'],resolve)
        component: () => import('@/pages/gitUse.vue')
    },
    {
      path:'/watch',
        name:'watch',
        // component:resolve=>require(['@/pages/watch.vue'],resolve)
        component: () => import('@/pages/watch.vue')
    },
    {
      path:'/sync',
        name:'sync',
        // component:resolve=>require(['@/pages/sync.vue'],resolve)
        component: () => import('@/pages/sync.vue')
    },
    {
      path:'/drawflow',
        name:'drawflow',
        // component:resolve=>require(['@/pages/drawflow.vue'],resolve)
        component: () => import('@/pages/drawflow.vue')
    },
    // {
    //   path:'/antvx6',
    //     name:'antv_x6',
    //     // component:resolve=>require(['@/pages/antv_X6.vue'],resolve)
    //     component: () => import('@/pages/antv_X6.vue')
    // },
    {
      path:'/form',
        name:'form',
        // component:resolve=>require(['@/pages/useForm.vue'],resolve)
        component: () => import('@/pages/useForm.vue')
    },
    {
      path:'/quarter',
        name:'季度选择器',
        // component:resolve=>require(['@/pages/quarter.vue'],resolve)
        component: () => import('@/pages/quarter.vue')
    },
    {
      path:'/collapse',
        name:'折叠面板',
        // component:resolve=>require(['@/pages/collapse.vue'],resolve)
        component: () => import('@/pages/collapse.vue')
    },
    {
      path:'/uploadFile',
        name:'form校验上传文件',
        // component:resolve=>require(['@/pages/formUpload.vue'],resolve)
        component: () => import('@/pages/formUpload.vue')
    },
    {
      path:'/flute',
        name:'荒',
        // component:resolve=>require(['@/pages/flute.vue'],resolve)
        component: () => import('@/pages/flute.vue')
    },
    {
      path:'/debounce',
        name:'防抖',
        // component:resolve=>require(['@/pages/debounce.vue'],resolve)
        component: () => import('@/pages/debounce.vue')
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
