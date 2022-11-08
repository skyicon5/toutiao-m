import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLogin from '@/views/MyLogin'
import Layout from '@/views/Layout'
import MyHome from '@/views/MyHome'
import MyAsk from '@/views/MyAsk'
import MyVideo from '@/views/MyVideo'
import MyMine from '@/views/MyMine'

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
  },
  {
    name: 'layout',
    path: '/layout',
    component: Layout,
    children: [{ name: 'home', path: 'home', component: MyHome }]
  }
]

const router = new VueRouter({
  routes
})

export default router
