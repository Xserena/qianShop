<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-4" v-for="(shop,index) in shops">
				<img :src="shop.url">
				<p>
					<span>{{shop.name}}&nbsp;{{moneyFormat(shop.price)}}</span>
				</p>
				<p class="show">
					<button class="del" @click='delClick(index)'>&#8211;</button>
					<span class="shopnum" >{{shop.shopNumber}}</span>
					<button class="add" @click="addClick(index)">+</button>
				</p>
			</div>
			<div class="order">
				<MyOrder v-bind:shops='shops' v-bind:shopName='shopName' v-bind:totalPrice='totalPrice'></MyOrder>
			</div>
		</div>		
	</div>
</template>

<script>
	import MyOrder from "../menudetail/MyOrder"
	export default{
		data(){
			return {	
				shops:[],
				shopName:"饮料类",
				totalPrice:null
			}
		},
		components:{
			MyOrder
		},
		mounted: function() {
		    this.getData();
		 },
		 methods:{
		 	addClick:function (index) {
				this.shops[index].shopNumber+=1;  //设置index,以免点击一个按钮，其他金额都改变
				this.getTotalPrice()
			},
			delClick:function (index) {
				if (this.shops[index].shopNumber>0) {
					this.shops[index].shopNumber-=1;
					this.getTotalPrice()
				}				
			},
		 	getData(){
		 		const myshops = this.$route.query.myshops;
		 		this.shops=myshops;
		 	},
		 	//格式化价格
			moneyFormat(str){
				return "￥"+str.toFixed(2)
			},
 			//计算总金额
			getTotalPrice(){
				var totalPrice=0;
				this.shops.forEach((shop,index)=>{
					if (shop.shopNumber>0) {
						totalPrice+=(shop.price*shop.shopNumber)
					}
				});
				this.totalPrice=totalPrice;
			}
		 }
	}
</script>

<style scoped>
	.row  div{
		height: 200px;
		margin: auto;
		margin-bottom: 50px;
	}
	img{
		width: 150px;
		height:130px;
	}
	span{
		color: #fff;
		font-weight: bolder;
	}
	button{
		padding: 0;
		display: inline-block;
		width: 22px;
		height:22px;
		text-align: center;
		line-height: 22px;
		border: none;
		background-color: #FFCC00;
		border-radius: 2px;
		cursor: pointer;
	}
	.shopnum{
		margin:8px;
	}
	.row .order{
		position: absolute;
		top: 50px;
		right: -400px;
		width: 360px;
	}
</style>