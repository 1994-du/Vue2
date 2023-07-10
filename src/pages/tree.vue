<template>
    <div class="tree_tmp">
        <a-tree
            v-model="checkedKeys"
            checkable
            :tree-data="treeData"
            :replaceFields="replaceFields"
            @check="onCheck"
        />
    </div>
</template>
<script>
import data from "@/json/tree.json"
export default{
    data(){
        return{
            checkedKeys:[],
            replaceFields:{
                title:'name',
                key:'id',
                children:'children'
            }
        }
    },
    computed:{
        treeData(){
            return data
        }
    },
    mounted(){
        console.log(data);
    },
    methods:{
        onCheck(keys,e){
            console.log(keys,e);
        }
    }
}
</script>