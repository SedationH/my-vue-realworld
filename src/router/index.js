import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('@/views/Register')
  },
  {
    name: 'settings',
    path: '/settings',
    component: () => import('@/views/Settings')
  },
  {
    name: 'article-edit',
    path: '/editor',
    component: () => import('@/views/ArticleEdit')
  }
]

const router = new VueRouter({
  routes
})

export default router
