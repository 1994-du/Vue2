<template>
    <div>
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item label="输入框" prop="ipt">
                <el-input v-model="form.ipt"></el-input>
            </el-form-item>
            <el-form-item label="下拉列表" prop="select">
                <el-select v-model="form.select">
                    <el-option label="一" value="0"></el-option>
                    <el-option label="二" value="1"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-button @click="submitHandle">提交</el-button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            form:{
                ipt:'',
                select:''
            },
            rules:{
                ipt:[
                    {required:true,message:'请输入',validator:(rule,value,callback)=>{
                        console.log('value',value);
                        if(value){
                            callback()
                        }else{
                            callback(new Error('请输入'))
                        }
                    },trigger:'blur'}
                ],
                select:[
                    {required:true,message:'请选择',validator:(rule,value,callback)=>{
                        console.log('value2',value);
                        if(value){
                            callback()
                        }else{
                            callback(new Error('请选择'))
                        }
                    },trigger:'change'}
                ]
            }
        }
    },
    methods:{
        submitHandle(){
            this.$refs.form.validate(valid=>{
                if(valid){
                    console.log('验证通过');
                }else{
                    console.log('验证失败');
                }
            })
        }
    }
}
</script>