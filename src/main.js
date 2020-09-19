import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueRouter from 'vue-router'
import { routes } from "./routes"
import VueRouter from 'vue-router'

Vue.prototype.$axios = axios
Vue.use(vueRouter)

const router = new VueRouter({
   routes,
   mode: "history"
  })
  
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
