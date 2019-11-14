import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) 

export default new Vuex.Store({
  state: {
    nickname:'sima'
  },
  mutations: {
    change(state,val){
      state.nickname = val
    },
    
  },
  actions: {
  },
  modules: {
  }
})
