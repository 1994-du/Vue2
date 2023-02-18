<template>
   <div class="vue3_wrap">
        <micro-app 
        name="vue3"
        url="http://localhost:3333"
        baseroute="/vue3"
        ></micro-app>
   </div>
</template>
<script>
import microApp from '@micro-zoe/micro-app';
microApp.start()
export default {
   components:{},
   props:{},
   data(){
       return{}
   },
   watch:{},
   computed:{},
   created(){},
   mounted(){},
   methods:{}
}
</script>
<style lang="less" scoped>
.vue3_wrap{
    height: 100%;
    micro-app{
        height: 100%;
    }
}
</style>