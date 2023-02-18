<template>
   <div class="vue2_wrap">
        <micro-app 
        name="vue2"
        url="http://localhost:2222"
        baseroute="/vue2"
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
</style>