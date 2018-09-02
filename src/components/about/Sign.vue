<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3">	
			</div>
			<div class="col-md-6">
				<div class="bs-component">
					<form>
						<fieldset>
							<legend>登录</legend>
							<div class="form-group">
								<label for="exampleInputEmail1" >用户名</label>
								<input type="text" name="" class="form-control"  placeholder="请输入用户名" v-model='name'>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">密码</label>
								<input type="password" name="" class="form-control" id='exampleInputPassword1' placeholder="请输入密码"  v-model='pass'>
							</div>
						</fieldset>
						<input type="button" name=""  @click='getInfo' value="登录" class="btn btn-success"/>
					</form>
				</div>
			</div>		
		</div>
	</div>
</template>
<script>
	export default {
		name:"Sign",
		data(){
			return  {
				name:"",
				pass:"",
			}
		},
		methods:{
			getInfo:function () {
				let userInfo=sessionStorage.getItem("userInfo");
				let passInfo=sessionStorage.getItem("passInfo");
				if (this.name!='' && this.pass!='') {
					if (this.name==userInfo && this.pass==passInfo) {
						alert("您好，"+this.name);
						this.name='';
						this.pass='';
						this.$router.replace('/person')
					}else{
						alert("用户名或密码不正确");
					}
				}else{
					alert("请填写完整");
				}
				
			},
		}
	}
</script>

<style scoped>
	.container{
		margin: 150px auto;
	}
	legend{
		color: #fff;
		font-weight: bold;
	}
	label{
		font-size: 14px;
		color: #fff;
		margin-top: 20px;
	}
	.btn-success{
		margin-top: 20px;
		margin-bottom: 30px;
	}
	.sign{
		color: #fff;
	}
	.toSign{
		font-weight: bolder;
		color: #FFCC00;
	}
</style>