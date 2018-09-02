<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3">	
			</div>
			<div class="col-md-6">
				<div class="bs-component">
					<form>
						<fieldset>
							<legend>注册</legend>
							<div class="form-group">
								<label for="exampleInputEmail1" >用户名</label>
								<input type="text" name="" class="form-control"  placeholder="请输入用户名" v-model='name'>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">密码</label>
								<input type="password" name="" class="form-control" id='exampleInputPassword1' placeholder="请输入密码"  v-model='pass'>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">密码确认</label>
								<input type="password" name="" class="form-control" id='exampleInputPassword1' placeholder="请确认密码"  v-model='checkPass'>
							</div>
						</fieldset>
						<input type="submit" name=""  @click='getInfo' value="注册" class="btn btn-success"/>
						<p class="sign">已有账号，去<router-link :to="{name:'sign'}" class='toSign'>登录</router-link> </p>
					</form>
				</div>
			</div>		
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return  {
				name:"",
				pass:"",
				checkPass:"",
			}
		},
		methods:{
			getInfo:function () {
				if (this.name!='' && this.pass!='' && this.checkPass==this.pass) {
					
					if(!window.localStorage){
                        alert('您的浏览器不支持sessionStorage')
                    }else{
                        sessionStorage.setItem('userInfo',this.name);
                        sessionStorage.setItem('passInfo',this.pass);
                    }
				}else{
					alert("请填写完整或确认密码是否正确")
				}
				
			},
		}
	}
</script>

<style scoped>
	.container{
		margin: 100px auto;
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