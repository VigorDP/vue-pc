import Vue from 'vue'
import Router from 'vue-router'
import Home from '@src/views/首页'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      redirect: '/home'
    },
  ]
})
