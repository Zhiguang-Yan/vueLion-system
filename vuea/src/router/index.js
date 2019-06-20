import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login'
// import index from '@/components/index'

// 异步加载组件
const login = () => import('@/view/login/index')
const index = () => import('@/view/index/index')
const userList = () => import('@/components/userList')
const vip = () => import('@/components/vip')
const swiper = () => import('@/components/swiper')
const home = () => import('@/components/home')
const headerTop = () => import('@/components/headerTop')
const updata = () => import('@/components/updata')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect: '/home',
      beforeEnter: (to, from, next) => {
        if (from.path === '/') {
          next()
        } else {
          alert('请先登录')
          next('/')
        }
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: home,
          children: [
            {
              path: '/',
              name: 'headerTop',
              component: headerTop
            }
          ]
        },
        {
          path: '/userList',
          name: 'userList',
          component: userList,
          children: [
            {
              path: '/',
              name: 'headerTop',
              component: headerTop
            }
          ]
        },
        {
          path: '/vip',
          name: 'vip',
          component: vip,
          children: [
            {
              path: '/',
              name: 'headerTop',
              component: headerTop
            }
          ]
        },
        {
          path: '/swiper',
          name: 'swiper',
          component: swiper,
          children: [
            {
              path: '/',
              name: 'headerTop',
              component: headerTop
            }
          ]
        },
        {
          path: '/updata',
          name: 'updata',
          component: updata,
          children: [
            {
              path: '/',
              name: 'headerTop',
              component: headerTop
            }
          ]
        }
      ]
    }
  ],
  mode: 'history'
})
