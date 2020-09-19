import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueRouter from 'vue-router'

Vue.prototype.$axios = axios
Vue.use(vueRouter)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
