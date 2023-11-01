<template>
    <div class="a_input">
        <a-input-number ref="aipt" v-model="val" :formatter="handFormatter" @change="handleChange"></a-input-number>
    </div>
</template>
<script>
export default{
    data(){
        return{
            val:null
        }
    },
    methods:{
        handFormatter(value){
            if(value.length>3){
                return value.slice(0,3)
            }
            return value
        },
        handleChange(value){
            this.val=value.toString().slice(0,3)
        }
    }
}
</script>