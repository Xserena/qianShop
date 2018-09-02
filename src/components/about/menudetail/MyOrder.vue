<template>
	<div class="myorder card border-warning mb-3" id="card">
		<h3 class="card-header">我的订单—{{shopName}}</h3>
		<div class="card-body">
			<ul v-for="shop in shops">
				<li v-if="shop.shopNumber>0">
					<img :src="shop.url">
					{{shop.name}}&nbsp;&nbsp;共{{shop.shopNumber}}个&nbsp;&nbsp;{{moneyFormat(shop.price*shop.shopNumber)}}
				</li>
			</ul>
			<p class="total">总价&nbsp;&nbsp;&nbsp;{{moneyFormat(totalPrice)}}</p>
		</div>	
	</div>
</template>

<script>
	export default {
		name:"MyOrder",   //大写
		props:["shops","shopName","totalPrice"],	
		methods:{
			//格式化价格
			moneyFormat(str){
				if (str) {
					return "￥"+str.toFixed(2)
				}
				
			},
		}
	}
</script>
<style scoped>
	h3{
		font-size: 22px;
	}
	img{
		width: 50px;
		height: 50px;
		margin-left: -30px;
	}
	ul{
		list-style: none;
		margin-right:10px;
		text-align: left;
	}
	.total{
		font-size: 18px;
	}
	.card{
		height: 600px;
	}
	#card{
		height:600px;
		color: #fff;
	}
</style>