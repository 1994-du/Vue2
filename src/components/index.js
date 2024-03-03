import Vue from "vue";
import dxButton from "./dxButton";
import square from "./square.vue";
import circulationCollapse from "./circulationCollapse.vue";
const components=[
    dxButton,
    square,
    circulationCollapse
]
// const install=(Vue)=>{
//     Vue.component('dx-button',dxButton),
//     Vue.component('square',square)
// }

//全局注册(必须声明为install)
const install = Vue=>{
    components.forEach(el=>{
        Vue.component(el.name,el)
    })
}
export default {
    install
}