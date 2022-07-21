import Vue from "vue";
import dxButton from "./dxButton";
const components=[
    dxButton
]

// components.forEach(el=>{
//     Vue.component(el.name,el)
// })
// export {dxButton}

//全局注册
const install = Vue=>{
    components.forEach(el=>{
        Vue.component(el.name,el)
    })
}
export default {
    install
}