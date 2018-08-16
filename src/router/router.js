import Vue from 'vue'
import Router from 'vue-router'
import baseRoutes from './baseRouter'
import childRoutes from './childRouter'
import { store } from '../store/store'
import {
  DynamicRouterA,
  DynamicRouterB,
  page404
} from '../router/DynamicRouter'

Vue.use(Router)
const routesArr = baseRoutes.concat(childRoutes)
let router = new Router({
  routes: routesArr,
  mode: 'history',
  base: '/vue-cli-demo/'
})

let userRole = sessionStorage.userRole
let Refreshed = store.getters.getRefresh
if (userRole) {
  if (Refreshed) {
    if (userRole === 'AdminA') {
      router.addRoutes(DynamicRouterA)
      router.addRoutes(page404)

      store.commit('addRoute', DynamicRouterA)
    } else if (userRole === 'AdminB') {
      router.addRoutes(DynamicRouterB)
      router.addRoutes(page404)

      store.commit('addRoute', DynamicRouterB)
    } else {
      router.addRoutes(page404)
    }
    store.commit('notRefreshed')
  }
}

router.beforeEach((to, from, next) => {
  /*  const nextRoute = ['form', 'img', 'Slots', 'products', 'Slots'];
   if (nextRoute.indexOf(to.name) >= 0) {} */

  if (to.name === 'login') {
    if (sessionStorage.loginBtnShow) {
      sessionStorage.clear()
      window.location.reload()
    }
    next()
  } else if (to.meta.notLogin === true) {
    next()
  } else {
    if (sessionStorage.userName) {
      if (!to.name) {
        router.push({ name: 'page404' })
      } else {
        next()
      }
    } else {
      router.push({ name: 'login' })
    }
  }
})

export default router
