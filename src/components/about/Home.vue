<template>
	<div class="row">
		<div class="top">
			
		</div>
		  <el-carousel :interval="4000" type="card" height="400px" class='col-md-12 col-lg-12'>
		    <el-carousel-item v-for="(img,index) in imgItems" :key="index">
		    	<img :src="img.url">
		    </el-carousel-item>
		  </el-carousel>
		<div class="rowBottom col-md-12">
			<div class="col-lg-3">
				<div class="bs-component">	
					<router-link class='nav-link' :to="{name:'ourLink'}">
						<p class="list-group-item list-group-item-action">小店介绍</p>
					</router-link>					
				</div>
			</div>
			<div class="col-lg-3">
				<div class="bs-component">	
					<router-link class='nav-link' :to="{name:'newsLink'}">
						<p class="list-group-item list-group-item-action">新闻资讯</p>
					</router-link>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="bs-component">	
					<router-link class='nav-link' :to="{name:'contactLink'}">
						<p class="list-group-item list-group-item-action">联系我们</p>
					</router-link>					
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
  import Swiper from 'swiper';
  export default{
  	data(){
  		return {
  			imgItems:[
  				{url:require('../../assets/img/chi1.jpg')},
  				{url:require('../../assets/img/ch2.jpg')},
  				{url:require('../../assets/img/ch3.jpg')},
  			]
  		}
  	},
  }
 
</script>
 
<style scoped>
  img{
  	width: 100%;
  	height:100%;
  }
  .rowBottom .col-lg-3{
  	display: inline-block;
  }
  .top{
  	width: 150px;
  	height:150px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .list-group-item{
  	background-color: #409EFF;
  }
</style>

