import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'


Vue.use(VueTypedJs)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
