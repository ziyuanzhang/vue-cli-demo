import Vue from 'vue'
import Router from 'vue-router'
import Slots from '../components/Slots'
import form from '../components/form/form'
import imgCon from '../components/img/imgCon.vue'
import Img from '../components/img/Img.vue'
import products from '../components/products/products.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Slots},
    {path: '/form', component: form}, 
    /* {path: '/img/:id', component: imgCon}, */
    {path: '/img', component: imgCon,
      children:[
        {path:"",component:Img},
        {path:":id",component:Img}
      ]
    },
    {path: '/products', component: products} 
  ],
  mode:"history"
})
