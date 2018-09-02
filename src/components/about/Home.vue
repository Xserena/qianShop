<template>
	<div class="row">	
		<div class="swiper-container col-md-12">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="../../assets/img/chi1.jpg"></div>
		        <div class="swiper-slide "><img src="../../assets/img/ch2.jpg"></div>
		        <div class="swiper-slide"><img src="../../assets/img/ch3.jpg"></div>
		    </div>
		    
		</div>
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
   mounted(){
    new Swiper ('.swiper-container', {
	    loop: true,
	    scrollbar: '.swiper-scrollbar',
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,
	    autoplay: true,
	    effect: 'coverflow',
	    paginationClickable: true
		})        
	  }
  }
 
</script>
 
<style scoped>
 

@import url("../../assets/css/swiper.min.css");
 
 .swiper-container {
        height: 400px;
        margin-top: 150px;
        margin-bottom: 50px;
    }
  img{
  	width: 100%;
  	height:100%;
  }
  .rowBottom .col-lg-3{
  	display: inline-block;
  }
</style>

