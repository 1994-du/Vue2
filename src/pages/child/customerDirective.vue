<!--  -->
<template>
<div class="useCustomerDirective">
    <p>vue2自带指令</p>
    <p>v-once:只渲染一次</p>
    <p>v-bind:绑定属性</p>
    <p>v-model:双向数据绑定</p>
    <p>v-if:判断节点是否存在DOM上</p>
    <p>v-show:判断display属性是否为none</p>

    <p>vue2指令钩子函数<br/>
        <var>bind:指令第一次绑定到元素时调用，可以进行初始化设置</var><br/>
        <var>inserted:被绑定元素插入父节点时调用（父节点存在，但不一定插入文档中）</var>、<br/>
        <var>update:所在组件的虚拟节点更新时调用</var>、<br/>
        <var>componentUpdated:所在组件的虚拟节点及其子虚拟节点全部更新后调用</var>、<br/>
        <var>unbind:指令与元素解绑时调用</var><br/>
    </p>
    <p>局部自定义指令</p>
    <div class="codeview">
        <img src="@/static/directive.png" alt="">
        <img src="@/static/directive-use.png" alt="">
        <input type="text" v-focus v-show="isShow">
    </div>
    <p>全局自定义指令</p>
    <div class="codeview">
        <img src="@/static/globalDirective.png" alt="">
        <img src="@/static/globalDirective-use.png" alt="">
        <button v-directivename>测试元素</button>
    </div>
</div>
</template>

<script>

export default {
name:'',
components: {},
data() {
    return {
        isShow:true
    };
},
directives:{
    /*参数
    el:指令绑定的元素
    binding:{
        name:指令名,
        value:指令绑定的值；例如：v-show='true',值为true
        oldValue:指令绑定的前一个值；仅在update和componentUpdated钩子中可用
        expression:字符串形式的指令表达式,
        arg:传给指令的参数，例如：v-show="isShow"，参数为isShow
        modifiers:包含修饰符的对象，
    }
    vnode：vue编译生成的虚拟节点
    oldVnode:上一个虚拟节点
    */
    focus:{
        bind:function(el,binding,vnode){
            console.log('自定义指令-bind')
        },
        inserted:function(el,binding,vnode){
            el.focus()
            console.log('inserted')
        },
        update:function(el,binding,vnode,oldVnode){
            console.log('wupdate',oldVnode)
        },
        componentUpdated:function(el,binding,vnode,oldVnode){
            console.log('componentUpdated')
        },
        unbind:function(el,binding,vnode){
            console.log('unbind')
        }
    }
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

p{
    text-align: left;
}
img{
    width: 200px;
    transition: all 2s;
    &:hover{
        width: 400px;
    }
}
.codeview{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    img{
        margin-right:10px;
    }
}
</style>