<template>
    <div class="collapse">
        <p>折叠面板</p>
        <collapse :data="treeData" @expand="expandHandle"></collapse>
    </div>
</template>
<script>
import demoData from "./../json/tree.json";
import collapse from "@/components/circulationCollapse.vue"
export default{
    components:{collapse},
    data(){
        return{
            treeData:[]
        }
    },
    mounted(){
        this.treeData = demoData;
    },
    methods:{
        recursionFun(list,item){
            list.forEach(el=>{
                if(el.id === item.id){
                    el.collapse = !el.collapse;
                }
                if(el.children && el.children.length>0){
                    this.recursionFun(el.children,item)
                }
            })
        },
        expandHandle(item){
            this.recursionFun(this.treeData,item)
        }
    }
}
</script>