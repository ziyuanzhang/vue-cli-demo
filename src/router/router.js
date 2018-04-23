import Vue from 'vue'
import Router from 'vue-router'
import Slots from '../components/Slots'
import form from '../components/form/form'
import imgCon from '../components/img/imgCon.vue'
import Img from '../components/img/Img.vue'
import products from '../components/products/products.vue'
import Http from '../components/Http.vue'
import Directives from '../components/Directives.vue'
import Search from '../components/Search.vue'
import Filters from '../components/Filters.vue'
import Login  from '../components/Login.vue'
import {store} from '../store/store'


Vue.use(Router)

let router = new Router({
  routes: [
    {path: '/',name:"login", component: Login},
    {path: '/form',name:"form", component: form}, 
    {path: '/img',name:"img", component: imgCon,
      children:[
        {path:"",name:"imgChildren",component:Img},
        {path:":id",name:"imgChildren",component:Img}
      ]
    },
    {path: '/Slots',name:"Slots", component: Slots}, 
    {path: '/products',name:"products", component: products}, 
    {path: '/http',name:"http", component: Http} ,
    {path: '/Directives',name:"Directives", component: Directives} ,
    {path: '/Filters',name:"Filters", component: Filters} ,
    {path: '/Search',name:"Search", component: Search},
    {path: '**',redirect: '/'}
   ],
  mode:"history"
})
router.beforeEach((to, from, next) => {
 /*  const nextRoute = ['form', 'img', 'Slots', 'products', 'Slots'];
  if (nextRoute.indexOf(to.name) >= 0) {} */

  if(to.name== "login"){
    next();
  }else if (!store.state.status) {
    router.push({ name: 'login' })
  } else {
    next();
  }
});

export default router;