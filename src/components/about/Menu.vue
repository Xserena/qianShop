<template>
	<div class="container">
		<div class="bs-component col-md-9">
			<ul class="nav nav-tabs"> 
				<li class="nav-item"><router-link :to="{name:'hamburger'}" class="nav-link" >汉堡</router-link></li>
				<li class="nav-item"><router-link :to="{name:'snack',query:{myshops:shops.snack}}" class="nav-link">小吃</router-link></li>
				
				<li class="nav-item"><router-link :to="{name:'drinks',query:{myshops:shops.drink}}" class="nav-link">饮料</router-link></li>
				<li class="nav-item"><router-link :to="{name:'setmeal',query:{myshops:shops.setmeal}}" class="nav-link">套餐</router-link></li>
			</ul>
			<div class="container ">
			<router-view></router-view>
		</div>
		</div>		
	</div>

</template>

<script>
  export default {
  	data(){
			return {	
				shops:[],
			}
	},
	mounted(){
	//请求json数据
		this.getData();
	},
	methods:{
		//请求json数据
		getData(){
			this.$http.get("../../../static/menutext.json").then(response=>{			
					const res=response.bodyText;
					const obj = eval('(' + res + ')');
					this.shops=obj;
			},response=>{
				alert("请求数据失败");
			})
		},
	}
  }
  

</script>
<style scoped>
	.container {
		margin-top: 100px;
	}
	.router-link-active{
		background-color: #FFCC00;
		border: 2px solid skyblue;
		color: #375a7f
	}
</style>