<template>
    <micro-app 
    name="dxtestui"
    url="http://localhost:8081"
    baseroute="/dxtestui"
    ></micro-app>
</template>
<script>
import microApp from '@micro-zoe/micro-app';
microApp.start()
export default{
    name:'dxtestui',
    data(){
        return{

        }
    },
    components:microApp
}
</script>