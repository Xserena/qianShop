<template>
	<div class="row">
		<div class="col-4">
			<div class="list-group">
				<router-link class='nav-link' :to="{name:'ourLink'}">
					<p class="list-group-item list-group-item-action">小店介绍</p>
				</router-link>
				<router-link class='nav-link' :to="{name:'newsLink'}">
					<p class="list-group-item list-group-item-action">新闻资讯</p>
				</router-link>
				<router-link class='nav-link' :to="{name:'contactLink'}">
					<p class="list-group-item list-group-item-action">联系我们</p>
				</router-link>
			</div>
		</div>
		<div class="col-8">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name:"About"
	}
</script>
<style scoped>
	.row{
		margin-top: 200px;
	}
</style>