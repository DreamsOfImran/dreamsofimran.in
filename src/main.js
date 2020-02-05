import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueTypedJs from 'vue-typed-js'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import Toast from 'vue-toastification'
import VueScrollTo from 'vue-scrollto'
import Carousel3d from 'vue-carousel-3d'
import VueGtag from 'vue-gtag'
import "vue-toastification/dist/index.css"

Vue.use(VueTypedJs)
Vue.use(VueScrollTo)
Vue.use(Carousel3d)
Vue.use(Toast)
Vue.use(VueGtag, { config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID } })
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
