<template>
  <div id="app" ondragstart="return false">
    <div class="container">
      <HeaderNav></HeaderNav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderNav from "./components/HeaderNav"

export default {
  name: 'App',
  components:{
    HeaderNav
  }
}
</script>

<style>
body{
  background-color:#404040;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
