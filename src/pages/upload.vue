<template>
    <div class="upload">
        <a-upload name="file" :multiple="false" :fileList="fileList" @change="handChange" :beforeUpload="(file)=>handBeforeChange(file,0)" :remove="handRemove">
            <a-button :class="resarr.indexOf(0)>-1?'active':''"> <a-icon type="upload" /> 权重 {{ resarr }}</a-button>
        </a-upload>
        <a-upload name="file" :multiple="false" :showUploadList="false" @change="handChange" :beforeUpload="(file)=>handBeforeChange(file,1)" :remove="handRemove">
            <a-button :class="resarr.indexOf(1)>-1?'active':''"> <a-icon type="upload" /> 题目 </a-button>
        </a-upload>
        <a-upload name="file" :multiple="false" :showUploadList="false" @change="handChange" :beforeUpload="(file)=>handBeforeChange(file,2)" :remove="handRemove">
            <a-button :class="resarr.indexOf(2)>-1?'active':''"> <a-icon type="upload" /> 选项 </a-button>
        </a-upload>
        <a-upload name="file" :multiple="false" :showUploadList="false" @change="handChange" :beforeUpload="(file)=>handBeforeChange(file,3)" :remove="handRemove">
            <a-button :class="resarr.indexOf(3)>-1?'active':''"> <a-icon type="upload" /> 规则 </a-button>
        </a-upload>
        <a-button @click="getRes">导入</a-button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            fileList:[],
            paramsList:[]
        }
    },
    computed:{
        resarr(){
            let arr=[]
            this.paramsList.forEach(el=>{
                arr.push(el.index)
            })
            return arr
        }
    },
    methods:{
        handChange(file){
            console.log('change',file);
        },
        handBeforeChange(file,index){
            // 判断是否存在已上传
            let haveIndex = this.isHave(this.paramsList,index)
            if(haveIndex!==undefined){
                this.paramsList.splice(haveIndex,1,{index:index,file:file})
                this.fileList.splice(haveIndex,1,file)
            }else{
                this.paramsList.push({index:index,file:file})
                this.fileList.push(file)
            }
            return false;
        },
        handRemove(file){
            const index = this.fileList.indexOf(file)
            // const newFileList = this.fileList.slice()
            // newFileList.splice(index,1)
            // this.fileList=newFileList
            this.fileList.splice(index,1)
            this.paramsList.splice(index,1)
        },
        isHave(list,index){
            for(let i=0;i<list.length;i++){
                if(list[i].index===index){
                    return i
                }
            }
        },
        getRes(){
            console.log(this.fileList);
            console.log(this.paramsList);
        }
    }
}
</script>
<style lang="less" scoped>
.upload{
    display: flex;
    .active{
        background-color: red;
    }
}
</style>