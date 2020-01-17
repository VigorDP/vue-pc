import Vue from 'vue'
import Router from 'vue-router'
import Home from '@src/views/首页'
import Product from '@src/views/产品'
import Situation from '@src/views/应用场景'
import Practice from '@src/views/行业实践'
import News from '@src/views/新闻资讯'
import About from '@src/views/关于我们'
import Join from '@src/views/加入我们'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/product',
      name: 'Product',
      component: Product,
    },
    {
      path: '/situation',
      name: 'Situation',
      component: Situation,
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice,
    }, {
      path: '/news',
      name: 'News',
      component: News,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    }, {
      path: '/join',
      name: 'Join',
      component: Join,
    },
    {
      path: '*',
      redirect: '/home'
    },
  ]
})
