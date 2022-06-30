import Vue from 'vue'
import VueRouter from 'vue-router'
import Splash from '../views/Splash.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Splash',
    component: Splash
  },
  {
    path: '/time',
    name: 'Time',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AllYears.vue')
  },
  {
    path: '/network',
    name: 'Network',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NetworkGraph.vue')
  },
  {
    path: '/sources',
    name: 'Sources',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sources.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Resources.vue')
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
