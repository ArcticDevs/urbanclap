import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/salon-at-home',
    name: 'Salon-at-home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "salon-at-home" */ '../views/salon-at-home.vue')
  },
  {
    path: '/haircut',
    name: 'Haircut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "haircut" */ '../views/haircut.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
