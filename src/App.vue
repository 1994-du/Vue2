<template>
  <div id="app">
    <div class="menus">
      <div v-for="(item,index) in menus">
        <el-button @click="$router.push(item.path)">{{ item.name }}</el-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      fileList:[]
    }
  },
  methods:{
     
  },
  computed:{
    menus(){
      return this.$router.options.routes
    }
  },
  mounted(){}
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
//   flex-direction: column;
  height: 100%;
  @fontSize:12px;
  .el-menu{
    width: 200px;
    flex-shrink: 0;
  }
  .content_wrap{
    flex: 1;
    font-size: @fontSize;
  }
  
}
</style>
