//引入模块
import Vue from 'vue'
import VueRouter from 'vue-router'
//import bootstrap from 'bootstrap'
//require('bootstrap')
//配置路由
const Home = () => import("views/home/home")
const Cart = () => import("views/cart/cart")
const Category = () => import("views/category/category")
const Profile = () => import("views/profile/profile")
const Detail = () => import("views/detail/detail")


Vue.use(VueRouter)
//解决vue-router在3.0版本以上重复点击菜单报错问题Error: Avoided redundant navigation to current location
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'/',
    redirect:'/home',
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  }
  ,
  {
    path:'/categopy',
    component:Category
  }
  ,
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },

]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
