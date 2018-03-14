import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/home.vue'
import Shop from '../pages/shop/shop.vue'
import Type from '../pages/type/type.vue'
import User from '../pages/user/user.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/type',
      component: Type
    },
    {
      path:'/shop',
      component: Shop
    },
    {
      path:'/user',
      component: User
    },
  ]
})
