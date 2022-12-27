<!--  -->
<template>
<div class="use_axios">
    <p><dx-button @click="getHeros">获取所有英雄</dx-button></p>
    <p><dx-button v-for="item in roles" :key="item+1" @click="filterHero(item)" :class="currentRole==item?'active':''">
        {{item=='mage'?'法师':item=='marksman'?'射手':item=='assassin'?'刺客':item=='support'?'辅助':item=='tank'?'坦克':item=='fighter'?'战士':item}}
    </dx-button></p>
    <img v-for="item in selectList" :key="item.alias" :src="item.heroimg" alt="" @click="playAudio(item)" @tap="playAudio2(item)">
</div>
</template>

<script>

export default {
name:'',
components: {},
data() {
return {
    selectList:[],
    heroList:[],//英雄列表
    msgList:[],//语音播报队列
    currentAudio:'',//当前英雄语音
    roles:[],//角色列表
    currentRole:'',//当前角色
    audio:new Audio()
};
},
computed: {
    // audio:function(){
    //     return new Audio();
    // }
},
watch: {},
methods: {
    filterHero(role){
        if(this.currentRole==role){
            this.currentRole=''
            this.selectList=this.heroList
            return
        }
        this.currentRole=role;
        this.selectList = this.heroList.filter((el)=>{
            if(el.roles.includes(role)){return el}
        })
    },
    getHeros(){
        this.currentRole=''
        if(!this.heroList.length>0){
            this.$axios.post('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js').then(res=>{
                
                res.data.hero.forEach(async el=>{
                    let heroImg=await this.getLoLImg(el)
                    this.$set(el,'heroimg',heroImg)
                })
                this.heroList=res.data.hero;
                this.selectList=res.data.hero;
                this.getRoles()
            })
        }else{
            this.selectList=this.heroList;
        }
    },
    getRoles(){
        this.heroList.forEach(el=>{
            el.roles.forEach(ml=>{
                if(!this.roles.includes(ml)){
                    this.roles.push(ml)
                }
            })
        })
        console.log(this.roles)
    },
    getLoLImg(item){
        return new Promise((resolve)=>{
            this.$axios.get('https://game.gtimg.cn/images/lol/act/img/champion'+`/${item.alias}.png`).then(res=>{
                resolve(res.config.url)
            })
        })
    },
    playAudio(item){
        this.currentAudio=item.selectAudio
        this.audio.src=this.currentAudio
        this.audio.play()
        alert(item.alias)
    },
    playAudio2(item){
        alert(item.alias)
    }
},
created() {

},
mounted() {
    
},
beforeCreate() {},
beforeMount() {},
beforeUpdate() {},
updated() {},
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
.use_axios{
    font-size: 0;
    img{
        cursor: pointer;
    }
}
.active{
    border: 1px solid red!important;
}
.dx_button{
    margin:5px 10px!important;
}
</style>