<!--  -->
<template>
<div>
    <h2>useSlot</h2>
    <p>具名插槽、作用域插槽</p>
    <useSlot1Vue>
        <template #header="{person}">
            <p>具名插槽头部--插槽数据：{{person.name}}</p>
        </template>
        <template v-slot:default="scope">
            默认插槽：{{scope}}
        </template>
        <template #footer>
            <p>具名插槽尾部</p>
        </template>
    </useSlot1Vue>
    <img src="@/static/useSlot.png" alt="">
</div>
</template>

<script>
import useSlot1Vue from '../../components/useSlot1.vue';
export default {
name:'',
components: {
    useSlot1Vue,
},
data() {
return {
    list:['name','age','sex']
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
img{
    width: 200px;
    transition: all 2s;
    &:hover{
        width: 400px;
    }
}
</style>