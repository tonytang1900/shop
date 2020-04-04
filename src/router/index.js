import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home')
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    component: () => import('@/views/detail/Detail')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/Cart')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
