import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Type from './views/Type.vue'
import Cart from './views/Cart.vue'
import My from './views/My.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/type',
      name: 'type',
      component: Type
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    }
  ]
})
