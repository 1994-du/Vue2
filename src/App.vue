<template>
  <div id="app" class="intest">
    <el-menu 
      mode="horizontal" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      @select="handleSelect">
        <el-menu-item index="/dxtestui">
            <span>dxtestui</span>
        </el-menu-item>
        <el-submenu index="/vue2">
          <template slot="title">vue2</template>
          <el-menu-item index="/vue2/slot">slot</el-menu-item>
        </el-submenu>
        <el-submenu index="/vue3">
          <template slot="title">vue3</template>
          <el-menu-item index="/vue3/slot">slot</el-menu-item>
        </el-submenu>
        <el-menu-item index="/react">
          <span>react</span>
        </el-menu-item>
    </el-menu>
    <router-view/>
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
}
</style>
