import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
	state:{
		//设置属性，存储数据
		currentUser:null,
		isLogin:false
	},
	getters:{
		//获取属性状态，方法，用于获取state中的数据
		currentUser:state=>state.currentUser,
		isLogin:state=>state.isLogin,
	},
	mutations:{
		//改变属性的状态
		userStatus(state,user){
			if (user) {
				state.currentUser=user;
				state.isLogin=true;
			}else{
				state.currentUser=null;
				state.isLogin=false;
			}
		}
	},
	actions:{
		//应用mutations
		setUser({commit},user){
			commit('userStatus',user)
		}
	}
})