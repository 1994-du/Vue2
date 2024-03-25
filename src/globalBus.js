export default{
    install:(Vue)=>{
        const bus = new Vue()
        Object.defineProperties(bus,{
            on:{
                get(){
                    return this.$on.bind(this)
                }
            },
            emit:{
                get(){
                    return this.$emit.bind(this)
                }
            },
            off:{
                get(){
                    return this.$off.bind(this)
                }
            }
        })
        Vue.prototype.$bus = bus
    }
}