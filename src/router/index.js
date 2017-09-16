import Vue from 'vue'
import Router from 'vue-router'
import VueFire from 'vuefire'
import Landing from '@/components/Landing'
import Post from '@/components/Post'
import Cms from '@/components/Cms'

Vue.use(Router)
Vue.use(VueFire)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: Post,
      props: true
    },
    {
      path: '/cms',
      name: 'cms',
      component: Cms
    }
  ]
})
