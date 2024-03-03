<!-- 递归-折叠面板组件 -->
<!-- 
传入数据--data：Array
折叠事件--this.$emit('expand',item)，外部递归处理展开属性(collapse)来展开关闭
-->
<template>
    <div class="circulation_collapse">
        <div v-for="(item,index) in data" :key="item.id">
            <div class="collapse_item" @click="changeShow(item)">{{ item.name }}</div>
            <circulation_collapse 
                v-if="item.children && item.children.length > 0 && item.collapse" :data="item.children"
                @expand="changeShow">
            </circulation_collapse>
        </div>
    </div>
</template>

<script>
import circulation_collapse from './circulationCollapse.vue'
export default {
    name: 'circulation-collapse',
    components: {
        circulationCollapse: circulation_collapse
    },
    props: {
        data: Array,
        collapse: Boolean
    },
    data() {
        return {
            isShow: this.collapse
        }
    },
    methods: {
        changeShow(item) {
            this.$emit('expand', item)
        }
    }
}
</script>