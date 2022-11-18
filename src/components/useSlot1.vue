<!--  -->
<template>
<div>
    <slot name="header" :person="person"></slot>
    <slot name="default" :person="person"></slot>
    <slot name="footer"></slot>
</div>
</template>

<script>

export default {
name:'',
components: {},
data() {
return {
    person:{
        name:'dxx',
        age:28
    }
};
},
computed: {},
watch: {},
methods: {

},
created() {

},
mounted() {

},
beforeCreate() {},
beforeMount() {},
beforeUpdate() {},
updated() {},
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>

</style>