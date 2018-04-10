import Vue from 'vue'
import Router from 'vue-router'
import Slots from '../components/Slots'
import form from '../components/form/form'
import Img from '../components/Img'
import products from '../components/products/products.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Slots},
    {path: '/form', component: form}, 
    {path: '/img/:id', component: Img},
    {path: '/products', component: products} 
  ],
  mode:"history"
})
