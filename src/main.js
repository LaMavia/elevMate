// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRes from 'vue-resource'
import router from './router'
import App from './App'
import Menu from './components/Menu'
import Posts from './components/Posts'
import Landing from './components/Landing'


Vue.config.productionTip = false
Vue.use(VueRes)

Vue.component('NavBar', Menu)
Vue.component('Posts', Posts)
Vue.component('Landing', Landing)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
