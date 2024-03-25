const install=(Vue)=>{
    const bus = new Vue({
        // methods:{
        //     on(eventName,callback){
        //         this.$on(eventName,callback);
        //     },
        //     emit(eventName,data){
        //         this.$emit(eventName,data);
        //     },
        //     off(eventName,callback){
        //         this.$off(eventName,callback);
        //     }
        // }
    })
    Vue.prototype.$bus = bus;
}
export default install;