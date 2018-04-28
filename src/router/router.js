import Vue from 'vue'
import Router from 'vue-router'
import baseRoutes from './baseRouter'
import childRoutes from './childRouter'
import {store} from '../store/store'


Vue.use(Router)
const routesArr = baseRoutes.concat(childRoutes, [{path: '**',redirect: '/form'}]);
let router = new Router({
  routes: routesArr,
  mode: "history"
})
router.beforeEach((to, from, next) => {
  /*  const nextRoute = ['form', 'img', 'Slots', 'products', 'Slots'];
   if (nextRoute.indexOf(to.name) >= 0) {} */
  console.log(sessionStorage.useName);
  console.log(routesArr);

  if (to.name == "login") {
    next();
  } else if (!sessionStorage.useName) {
    //}else if (!store.state.status) {
    router.push({
      name: 'login'
    })
  } else {
    next();
  }
});

export default router;
