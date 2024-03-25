<template>
    <div class="a_input">
        <a-input-number ref="aipt" v-model="val" :formatter="handFormatter" @change="handleChange"></a-input-number>
        <button @click="handleBus">bus传值</button>
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
        handleBus(){
            this.$bus.$emit('bustest','11111')
        },
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