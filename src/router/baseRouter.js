import Login  from '../components/Login.vue'
import Slots from '../components/Slots'
import form from '../components/form/form'
import imgCon from '../components/img/imgCon.vue'
import Img from '../components/img/Img.vue'
import products from '../components/products/products.vue'
import Http from '../components/Http.vue'
import Directives from '../components/Directives.vue'

const baseRoutes =[
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
  {path: '/Directives',name:"Directives", component: Directives}
]

export default baseRoutes