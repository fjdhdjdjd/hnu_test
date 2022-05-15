// 路由文件
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 重定向
  {
    path:'/',
    redirect:'/main'
  },
  // 首页
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main/Main.vue'),
    redirect:'/main/home',
    children:[
      {
        path:'home',
        name:'Home',
        component: () => import('../views/main/home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
