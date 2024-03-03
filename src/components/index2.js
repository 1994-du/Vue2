// 动态加载组件
let components=[]
const files = require.context('./', true, /\.vue$/i)
files.keys().forEach(key => {
    components.push({
        name:files(key).default.name,
        component:files(key).default
    })
})
const install=(Vue)=>{
    components.forEach(component=>{
        Vue.component(component.name,component.component)
    })
}
export default {
    install
}