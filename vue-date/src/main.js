import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBus from 'vue-bus'
Vue.config.productionTip = false
Vue.use(VueBus)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
