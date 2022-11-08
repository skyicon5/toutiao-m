import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLogin from '@/views/MyLogin'
import Layout from '@/views/Layout'
import MyHome from '@/views/MyHome'
import MyAsk from '@/views/MyAsk'
import MyVideo from '@/views/MyVideo'
import MyMine from '@/views/MyMine'
import store from '@/store'
import { Toast } from 'vant'

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
    path: '/layout',
    redirect: '/layout/home',
    component: Layout,
    children: [
      { name: 'home', path: 'home', component: MyHome },
      { name: 'ask', path: 'ask', component: MyAsk },
      { name: 'video', path: 'video', component: MyVideo },
      {
        name: 'mine',
        path: 'mine',
        component: MyMine,
        meta: { needLogin: true }
      }
    ]
  },
  {
    path: '/',
    redirect: '/layout/home'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (store.state.tokenObj.token) {
      next()
    } else {
      Toast('请先登录')
      next({ name: 'login', query: { back: to.path } })
    }
  } else {
    next()
  }
})
// 解决3.1版本后在控制台出现的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

export default router
