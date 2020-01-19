import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import BackToTop from 'vue-backtotop'
Vue.use(BackToTop)
// import 'lib-flexible/flexible.js';
import '@styles/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: {
    App
  }
})
