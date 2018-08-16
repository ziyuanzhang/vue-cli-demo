import Login from '../components/Login.vue'
import form from '../components/form/form'
import imgCon from '../components/img/imgCon.vue'
import Img from '../components/img/Img.vue'
import Slots from '../components/Slots'
import AboutUS from '../components/AboutUS.vue'
import home from '../components/home.vue'

const baseRoutes = [
  {path: '/vue-cli-demo/', name: 'home', component: home},
  {path: '/vue-cli-demo/Login', name: 'login', component: Login},
  {path: '/vue-cli-demo/aboutUs', name: 'aboutus', meta: {notLogin: true}, component: AboutUS},
  {path: '/vue-cli-demo/form', name: 'form', component: form},
  {path: '/vue-cli-demo/img',
    name: 'img',
    component: imgCon,
    children: [
      {path: '', name: 'imgChildren', component: Img},
      {path: ':id', name: 'imgChildren', component: Img}
    ]
  },
  {path: '/vue-cli-demo/Slots', name: 'Slots', component: Slots}
]

export default baseRoutes
