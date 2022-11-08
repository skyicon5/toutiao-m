import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLogin from '@/views/MyLogin'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: MyLogin
  },
  {
    name: 'layout',
    path: '/layout',
    component: Layout
  }
]

const router = new VueRouter({
  routes
})

export default router
