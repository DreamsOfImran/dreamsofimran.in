import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import VueInstagram from 'vue-instagram'
import App from './App.vue'
import router from './router'
import axios from 'axios'


Vue.use(VueTypedJs)
Vue.use(VueInstagram)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
