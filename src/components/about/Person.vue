<template>
	<div class="person">
		<h1>个人中心</h1>
		<h3>{{userSign}}，欢迎来到二千炸鸡店</h3>
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
	export default {
		data(){
			return {
				userSign:""
			}
		},
		mounted:function () {
			this.getUser()
		},
		methods:{
			getUser:function () {
				let userInfo=sessionStorage.getItem("userInfo");
				this.userSign=userInfo
			}
		}
	}
</script>
<style scoped>
	.person{
		margin-top: 150px;
		color: #fff;
	}
	h1{
		margin-bottom: 50px;
	}
  	.rowBottom .col-lg-3{
  		margin-top: 100px;
  		display: inline-block;
  	}
</style>