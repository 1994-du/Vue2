<template>
    <div class="use_sync">
        <dxButton 
            v-model="model"
            :title.sync="title"
            :other="other" @update:other="changeHandle">
        </dxButton>
        v-model:默认绑定value 和 input事件；
        <p>:other="other" @update:other="changeHandle"   相当于->   :other.sync="other"</p>
        <p>`v-model="value"  重构成->  :value="value" @input="value=$event"`</p>
    </div>
</template>
<script>
import dxButton from "@/components/dxButton.vue"
export default{
    components:{
        dxButton
    },
    data(){
        return{
            model:'model',
            title:'title',
            other:'other'
        }
    },
    methods:{
        changeHandle(e){
            this.other = e
        }
    }
}
</script>