<template>
    <div>
        <el-date-picker 
            mode='year'
            format="YYYY"
            @change="HandleChange"
            @openChange="openChange"
            @panelChange="PanelChange"
            v-model="yearValue"
        />
        <quarter v-model="testval"></quarter>
    </div>
</template>
<script>
import moment from 'moment';
import quarter from './quarter.vue'
export default{
    components:{
        quarter
    },
    data(){
        return{
            testval:'',
            dateFormat:'YYYY',
            yearValue:''
        }
    },
    methods:{
        moment,
        getCurrentYear(){
            this.yearValue=moment(new Date().getFullYear().toString(),this.dateFormat)
        },
        HandleChange(date,dateString){
            console.log('@change');
            if(date==null){
                this.getCurrentYear()
            }
        },
        openChange(status){
            console.log('openChange',status);
        },
        PanelChange(value,mode){
            console.log('PanelChange',value,mode);
            this.yearValue = moment(value,this.dateFormat)
        }
    },
    mounted(){
        this.getCurrentYear()
    }
}
</script>