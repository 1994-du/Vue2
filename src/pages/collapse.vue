<template>
    <div class="collapse">
        <p>折叠面板</p>
        <circulation-collapse :data="treeData" @expand="expandHandle"></circulation-collapse>

        <p>dxtestui</p>
        <dx-collapse :data="treeData" @expand="expandHandle"></dx-collapse>
    </div>
</template>
<script>
import demoData from "./../json/tree.json";
export default{
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
            console.log('item',item);
            this.recursionFun(this.treeData,item)
        }
    }
}
</script>