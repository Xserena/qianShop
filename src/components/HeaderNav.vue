<template>
     <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div class="container">
       <router-link :to="{name:'home'}" class="navbar-brand">二千炸鸡店</router-link>
       <div class="collapse navbar-collapse" id="navbarResponsive">
         <ul class="navbar-nav">
         <li class="nav-item"><router-link :to="{name:'home'}" class="nav-link">主页</router-link></li>
         <li class="nav-item"><router-link :to="{name:'menu'}" class="nav-link">菜单</router-link></li>
         <li><router-link :to="{name:'admin'}" class="nav-link">管理</router-link></li>
         <li><router-link :to="{name:'about'}" class="nav-link">关于我们</router-link></li>
         <li><router-link :to="{name:'person'}" class="nav-link"  v-show='isLogin'>个人中心</router-link></li>
       </ul>
      <ul class="nav navbar-nav ml-auto">
         <li class="nav-item"><router-link :to="{name:'sign'}" class="nav-link" v-show='!isLogin'>登录</router-link></li>

         <li class="nav-link">{{currentUser}}</li>
        <li><router-link :to="{name:'sign'}" class="nav-link" v-show='isLogin'>[退出]</router-link></li>

         <li class="nav-item"><router-link :to="{name:'register'}" class="nav-link" v-show='!isLogin'>注册</router-link></li>
       </ul>
       </div>
        </div>
     </div>   
</template>

<script>
  import Sign from "../components/about/Sign"
  export default {
    components:{
      Sign
    },
    data(){
      return {
        
      }
    },
    computed:{
      currentUser(){
        return this.$store.getters.currentUser
      },
      isLogin(){
        return this.$store.getters.isLogin
      }
    }
  }
</script>

<style scoped>
.container{

}
.bg-primary{
  background-color: #409EFF !important;

}
.navbar-brand{
  font-size: 22px;
}
.navbar-dark .navbar-nav .nav-link{
  color: #375a7f;
  font-size: 18px;
}
</style>
