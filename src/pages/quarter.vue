<template>
    <div class="quarter">
        <input type="text" @focus="inputFocusHandle" :value="value">
        <div class="quarters" v-show="quarterShow">
            <div class="quarter_header">
                <div class="pre" @click="changeCurrentYear('pre')">
                    <img src="/static/double-left.png" alt="">
                </div>
                <div @click="currentStatue=false" class="header_year">{{ showYear }}</div>
                <div class="next" @click="changeCurrentYear('next')">
                    <img src="/static/double-right.png" alt="">
                </div>
            </div>
            <div class="quarter_content" v-show="currentStatue">
                <div 
                    class="quarter_item" 
                    v-for="item in quarterList" 
                    :key="item"
                    @click="itemClickHandle(item)"
                    >
                    {{ item }}
                </div>
            </div>
            <div class="years_content" v-show="!currentStatue">
                <div class="year_item" :class="index==showYearIndex?'active':''" v-for="(item,index) in years" :key="item+index" @click="showYearHandle(item,index)">{{ item }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['value'],
    data(){
        return {
            quarterList:['Q1','Q2','Q3','Q4'],//季度列表
            quarterDom:null,// panelDOM
            quarterShow:false,
            quarterValue:null,
            currentStatue:true,
            initYear:'',
            initQuarter:'',
            currentYear:'',
            showYear:'',
            showYearIndex:4,
            years:[]
        }
    },
    watch:{
        currentYear(val){
            this.years=[]
            for(let i = -4;i<5;i++){
                this.years.push(Number(this.currentYear) + i);
            }
        }
    },
    mounted(){
        if(this.value&&this.value.split('-')[0]){
            this.initYear = this.value.split('-')[0]
            this.initQuarter = this.value.split('-')[1]
        }else{
            this.initYear = new Date().getFullYear()
            this.initQuarter = 'Q1'
        }
        this.quarterValue = this.initQuarter;
        this.currentYear = this.initYear;
        this.showYear = this.initYear;
        this.quarterDom = document.querySelector('.quarter');
        window.addEventListener('click',this.clickEvent)
    },
    methods:{
        inputFocusHandle(){
            this.quarterShow = true;
        },
        clickEvent(e){
            if(!this.quarterDom.contains(e.target)){
                this.quarterShow = false;
            }
        },
        itemClickHandle(item){
            this.quarterValue = item
            this.$emit('input',`${this.showYear}-${item}`);
        },
        showYearHandle(item,index){
            this.showYearIndex = index;
            this.showYear = item;
            this.currentStatue=true;
        },
        changeCurrentYear(type){
            if(this.currentStatue){
                if(type=='pre'){
                    this.showYear = this.showYear-1;
                }
                if(type=='next'){
                    this.showYear = (Number(this.showYear)+1).toString();
                }
            }else{
                if(type=='pre'){
                    this.currentYear = this.currentYear-8;
                }
                if(type=='next'){
                    this.currentYear = (Number(this.currentYear)+8).toString();
                }
            }
            this.$emit('input',`${this.showYear}-${this.quarterValue}`);
        }
    },
    beforeDestroy(){
        window.removeEventListener('click',this.clickEvent)
    }
}
</script>
<style scoped lang="less">
@active:#40a9ff;
@hover:#1890ff;
.quarter{
    cursor: pointer;
    width: clamp(100px,50%,200px);
    position: relative;
    display: inline-block;
    input{
        width: 100%;
        height: 32px;
        text-indent: 12px;
        outline: none;
        border: none;
        border: 1px solid #d9d9d9;
        border-radius: 3px;
    }
    input:hover{
        border-color: @hover;
    }
    .quarters{
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid #e8e8e8;
        border-radius: 5px;
        position: absolute;
        top: 32px;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
        .quarter_header{
            height: 40px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e8e8e8;
            .next:hover img{
                opacity: 1;
            }
            .pre:hover img{
                opacity: 1;
            }
            img{
                width: 20px;
                height: auto;
                opacity: 0.3;
            }
            .header_year:hover{
                color:@active;
            }
        }
        .quarter_content{
            display: flex;
            flex-wrap: wrap;
            .quarter_item{
                width: 49%;
                line-height: 30px;
                aspect-ratio: 2 / 1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .quarter_item:hover{
                color: @active;
            }
        }
        .years_content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
                .year_item{
                    width: 30%;
                    aspect-ratio: 2 / 1;
                    padding: 5px 10px;
                    border-radius:3px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    // margin: 5px 10px;
                }
                .active{
                    background-color: #1890ff;
                    color:white;
                }
        }
    }
}
</style>