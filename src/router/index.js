import Vue from 'vue'
import Router from 'vue-router'
import VueFire from 'vuefire'
import Landing from '@/components/Landing'

Vue.use(Router)
Vue.use(VueFire)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/home',
      name: 'Home',
      component: Landing
    }
  ]
})
