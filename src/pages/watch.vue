<template>
    <div class="watch_use">
        <el-select v-model="obj.value1" size="small">
            <el-option value="0" label="值一"></el-option>
        </el-select>
        <el-input type="textarea" v-model="obj.textarea1"></el-input>
    </div>
</template>
<script>
export default{
    data(){
        return{
            obj:{
                value1:'',
                textarea1:''
            }
        }
    }
}
</script>