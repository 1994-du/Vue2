<template>
  <div id="app">
    <div class="menus">
      <el-button v-for="(item,index) in menus" :key="item.name" @click="$router.push(item.path)">{{ item.name }}</el-button>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
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
  mounted(){
    console.log(this.menus);
    
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
  height: 100%;
  @fontSize:12px;
  .menus{
    display: flex;
    flex-direction: column;
    overflow: auto;
    .el-button{
      margin: 5px 0;
    }
  }
  .content{
    flex: 1;
    padding: 10px;
  }
}
</style>
