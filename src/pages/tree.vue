<template>
    <div class="tree_tmp">
        <el-select style="width: 120px" @change="handleChange" v-model="selectIndex">
            <el-option value="0">
                Jack
            </el-option>
            <el-option value="1">
                Lucy
            </el-option>
            <el-option value="2">
                Disabled
            </el-option>
        </el-select>
        <el-tree
            v-model="checkedKeysUp"
            checkable
            :tree-data="treeDataUp"
            :replaceFields="replaceFields"
            @check="onCheckUp"
        />
        <hr>
        <el-tree
            v-model="checkedKeysDown"
            checkable
            :tree-data="treeDataDown"
            :replaceFields="replaceFields"
            @check="onCheckDown"
        />
    </div>
</template>
<script>
import data from "@/json/tree.json"
export default{
    data(){
        return{
            checkedKeysUp:[],
            treeDataUp:[],
            checkedKeysDown:[],
            treeDataDown:[],
            replaceFields:{
                title:'name',
                key:'id',
                children:'children'
            },
            selectIndex:'0',
            allKeys:[]
        }
    },
    mounted(){
        console.log(_);
        
        // console.log(_.cloneDeep(JSON.parse(JSON.stringify(data))));
        this.treeDataUp=JSON.parse(JSON.stringify(data))
        this.treeDataDown=JSON.parse(JSON.stringify(data))
    },
    methods:{
        handleChange(val){
            // tree数据初始化
            this.treeDataUp=JSON.parse(JSON.stringify(data))
            this.treeDataDown=JSON.parse(JSON.stringify(data))
            // 勾选复现
            let currentIndexObj = this.allKeys.find(el=>el.selectIndex==this.selectIndex);
            this.checkedKeysUp=currentIndexObj?currentIndexObj.upKeys:[]
            this.checkedKeysDown=currentIndexObj?currentIndexObj.downKeys:[]
            // 禁用复现
            this.treeDataUp = this.disabledNode(this.treeDataUp,this.checkedKeysDown)
            this.treeDataDown = this.disabledNode(this.treeDataDown,this.checkedKeysUp)

            console.log('val',this.treeDataUp,this.treeDataDown);
        },
        onCheckUp(keys,e){
            let isHave = this.allKeys.some(el=>el&&el.selectIndex==this.selectIndex)
            if(isHave){
                this.allKeys.forEach(el=>{
                    if(el.selectIndex==this.selectIndex){
                        el.upKeys=keys
                    }
                })
            }else{
                this.allKeys.push({
                    selectIndex:this.selectIndex,
                    upKeys:keys
                })
            }
            
            this.treeDataDown=this.disabledNode(this.treeDataDown,keys)// 禁用down
            console.log('allkeys',this.allKeys);
        },
        onCheckDown(keys,e){
            let isHave = this.allKeys.some(el=>el&&el.selectIndex==this.selectIndex)
            if(isHave){
                this.allKeys.forEach(el=>{
                    if(el.selectIndex==this.selectIndex){
                        el.downKeys=keys
                    }
                })
            }else{
                this.allKeys.push({
                    selectIndex:this.selectIndex,
                    downKeys:keys
                })
            }
            this.treeDataUp=this.disabledNode(this.treeDataUp,keys)// 禁用down
            console.log('allkeys',this.allKeys);
        },
        disabledNode(list,keys){
            list.forEach(el=>{
                if(el.children&&el.children!==null){
                    this.disabledNode(el.children,keys)
                }
                if(keys.includes(el.id)){
                    this.$set(el,'disabled',true)
                }else{

                    this.$delete(el,'disabled')
                }
            })
            return list
        }
    }
}
</script>