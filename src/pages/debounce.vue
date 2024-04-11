<template>
    <div class="debounce">
        <el-input @input="testFn" v-model="val" class="ipt"></el-input>
    </div>
</template>
<script>

window.testFn=function(){
    let ipt = document.getElementsByClassName('ipt')[0]
    console.log('1',ipt,ipt.value);
}
import { debounce } from "../utils/tool.js"
// let that = null
export default {
    data(){
        return {
            val: ''
        }
    },
    mounted(){
        // that=this
    },
    beforeDestroy(){
        // that=null
    },
    methods: {
        testFn:debounce(function(){
            this.testFn()
            console.log('val',this)
            // that.apdeFn()
        },1000),
        apdeFn(){
            console.log('this');
        }
    }
}
</script>