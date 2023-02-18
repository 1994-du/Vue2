<template>
  <div id="app" class="intest">
    <el-menu 
      mode="horizontal" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      @select="handleSelect">
      <el-menu-item index="/">
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/dxtestui">
            <span>dxtestui</span>
        </el-menu-item>
        <el-submenu index="/vue">
          <template slot="title">vue</template>
          <el-menu-item index="/vue/vue2">vue2</el-menu-item>
          <el-menu-item index="/vue/vue3">vue3</el-menu-item>
        </el-submenu>
        <el-menu-item index="/react">
          <span>react</span>
        </el-menu-item>
        <el-menu-item index="/html">
          <span>html</span>
        </el-menu-item>
        <el-menu-item index="/js">
          <span>js</span>
        </el-menu-item>
    </el-menu>
    <div class="content_wrap">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    handleSelect(key,keyPath){
      console.log(key,keyPath)
    }
  }
}
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  @fontSize:12px;
  .content_wrap{
    flex: 1;
    font-size: @fontSize;
  }
  
}
</style>
