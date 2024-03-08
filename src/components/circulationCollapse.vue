<!-- 递归-折叠面板组件 -->
<!-- 
传入数据--data：Array
折叠事件--this.$emit('expand',item)，外部递归处理展开属性(collapse)来展开关闭
-->
<template>
    <div class="circulation_collapse">
        <div v-for="(item,index) in data" :key="item.id" class="circulation_collapse_item">
            <div class="collapse_item" @click="changeShow(item)">
                <span>{{ item.name }}</span>
                <i v-if="item.children && item.children.length > 0" class="el-icon-arrow-down" :class="item.collapse?'active':''"></i>
            </div>
            <circulation-collapse 
                v-if="item.children && item.children.length > 0 && item.collapse" :data="item.children"
                @expand="changeShow">
            </circulation-collapse>
        </div>
    </div>
</template>

<script>
export default {
    name: 'circulation-collapse',
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
<style lang="less" scoped>
.circulation_collapse{
    padding: 10px;
    user-select: none;
    &_item{
        line-height: 40px;
        text-align: left;
        text-indent: 12px;
        
        .el-icon-arrow-down{
            transform-origin: 70% 50%;
            transition: all 0.3s;
            margin-right: 10px;
        }
        .active{
            transform: rotate(180deg);
        }
        .collapse_item{
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>