<!--  -->
<template>
<div  class="home">
    <p>使用MicroApp微前端框架</p>
    <p>自定义指令、http、插槽、路由</p>
    <!-- <dx-button type="default" @click="$router.push('/customerDirective')">自定义指令</dx-button>
    <dx-button type="default" @click="$router.push('/useRoute')">路由导航钩子函数</dx-button>
    <dx-button type="default" @click="$router.push('/useSlot')">插槽</dx-button>
    <dx-button type="default" @click="$router.push('/useElectronApp')">创建electron桌面应用项目</dx-button>
    <dx-button @click="$router.push('/useAxios')">axios</dx-button>
    <dx-button @click="$router.push('/useHttp')">HTTP</dx-button> -->
   <img src="@/assets/devServer-headers.png" alt="子应用设置允许跨域" title="子应用设置允许跨域"/>
</div>
</template>

<script>
export default {
name:'',
data() {
    return {
        code:''
    };
},
computed: {},
watch: {},
methods: {},
created() {},
mounted() {
    // let str='"devServer":{"port":1111,"headers":{"Access-Control-Allow-Origin":'*'}}';
    // this.code=JSON.parse(str)
    // let pre = document.getElementsByTagName('pre')[0]
    // console.log(pre)
    // let str='devServer:{port:1111,headers:{"Access-Control-Allow-Origin":'*'}}';
    // pre.innerHTML=str
},
beforeCreate() {}, 
beforeMount() {}, 
beforeUpdate() {}, 
updated() {}, 
beforeDestroy() {}, 
destroyed() {}, 
activated() {},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
pre{
    // margin: 20px auto;
    // padding: 20px;
    background-color: #aea8a8;
    white-space: pre-wrap;
    word-wrap: break-word;
    letter-spacing: 0;
    font: 14px/26px 'courier new';
    position: relative;
    border-radius: 2px;
}
img{
    width: 400px;
    height: auto;
}
</style>