import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from './../components/Home'
import PageNotFound from './../components/pages/404'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    // {
    //   path: '*',
    //   component: PageNotFound
    // }
    //TODO Hiding 404 page for now
  ]
})

export default router
