<template>
    <div  class="home">
    <dx-button>按钮测试</dx-button>
    <circulation-collapse :data="treeData" @expand="expandHandle"></circulation-collapse>
    </div>
</template>

<script>
import datas from "./../json/tree.json"
export default {
name:'Home',
data() {
    return {
        code:'',
        treeData:[]
    };
},
computed: {},
watch: {},
methods: {
    recursionFun(list,item){
        list.forEach(el=>{
            if(el.id==item.id){
                el.collapse=!el.collapse
            }
            if(el.children&&el.children.length>0){
                this.recursionFun(el.children,item)
            }
        })
    }
    ,
    expandHandle(item){
        this.recursionFun(this.treeData,item)
    }
},
created() {},
mounted() {
    this.treeData=datas

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
</style>../components/circulationCollapse.vue