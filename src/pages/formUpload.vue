<template>
    <div class="form_upload">
        <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="选择文件" prop="fileList">
                <el-upload
                class="upload-demo"
                action="#"
                :auto-upload="false"
                :on-change="handleChange"
                :on-remove="handleRemove"
                :file-list="form.fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
        </el-form>
        <el-button @click="submit" type="primary" size="small">提交</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                fileList:[]
            },
            rules: {
                fileList:[
                    {required:true,message:'请选择文件',trigger:'change'}
                ]
            },
        }
    },
    methods:{
        handleRemove(file,fileList){
            console.log(file,fileList);
            this.form.fileList = fileList
        },
        handleChange(file,fileList){
            if(fileList.length>1){
                fileList.splice(0,1)
            }
            this.form.fileList=fileList;
            this.$refs.form.clearValidate('fileList');
        },
        submit(){
            this.$refs.form.validate((valid)=>{
                if(valid){
                    console.log(this.form.fileList); 
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.form_upload{
    width: 500px;
    .el-form-item{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .el-form-item__label{
            width: 100px;
        }
        .el-form-item__content{
            .upload-demo{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }
    
}
</style>