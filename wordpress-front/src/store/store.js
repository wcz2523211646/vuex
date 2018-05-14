import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		host:'http://169.254.96.104:3000',
		num:0
	},
	mutations:{//内部的函数不能直接执行，需要通过commit方法来执行
		addNum(state){
			state.num++;
		}
	}
})

export default store;