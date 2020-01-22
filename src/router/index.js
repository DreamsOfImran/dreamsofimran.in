import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from './../components/Home'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  routes: [{
    path: '/',
    component: Home
  }]
})

export default router
