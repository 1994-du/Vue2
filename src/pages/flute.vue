<template>
    <div class="flute">
        <div class="flute_item">
            <div class="hole"></div>
            <div class="hole"></div>
            <div class="hole"></div>
            <div class="hole"></div>
            <div class="hole"></div>
            <div class="hole"></div>
            <div class="hole"></div>
        </div>
        <div class="flute_item" v-for="item in list" :key="item.id">
            <div class="hole" v-for="initem in item.holes" :key="initem.id" :class="initem?'active':''"></div>
            <div class="voice">{{ item.voice }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    id:1,
                    holes:[false,false,false,true,true,true],
                    voice:'1'
                },
                {
                    id:2,
                    holes:[false,false,true,true,true,true],
                    voice:'7'
                },
                {
                    id:1,
                    holes:[false,false,false,true,true,true],
                    voice:'1'
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.flute{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .flute_item{
        display: flex;
        align-items: center;
        .hole{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid #000;
            margin: 0 10px;
        }
        .active{
            background: #000;
        }

        .voice{
            margin: 0 10px;
        }
    }
}
</style>