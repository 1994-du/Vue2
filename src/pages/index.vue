<!--  -->
<template>
<div  class="home">
    <dx-button type="default" @click="$router.push('/customerDirective')">自定义指令</dx-button>
    <dx-button type="default" @click="$router.push('/useRoute')">路由导航钩子函数</dx-button>
    <dx-button type="default" @click="$router.push('/useSlot')">插槽</dx-button>
    <dx-button type="default" @click="$router.push('/useElectronApp')">创建electron桌面应用项目</dx-button>
</div>
</template>

<script>
export default {
name:'',
data() {
    return {

    };
},
computed: {},
watch: {},
methods: {},
created() {},
mounted() {},
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
</style>