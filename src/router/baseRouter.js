import Login  from '../components/Login.vue'
import form from '../components/form/form'
import imgCon from '../components/img/imgCon.vue'
import Img from '../components/img/Img.vue'
import Slots from '../components/Slots'


const baseRoutes =[
  {path: '/',name:"login", component: Login},
  {path: '/form',name:"form", component: form}, 
  {path: '/img',name:"img", component: imgCon,
    children:[
      {path:"",name:"imgChildren",component:Img},
      {path:":id",name:"imgChildren",component:Img}
    ]
  },
  {path: '/Slots',name:"Slots", component: Slots}
]

export default baseRoutes