import products from '../components/products/products.vue'
import Http from '../components/Http.vue'
/* import Directives from '../components/Directives.vue' */
/* import Search from '../components/Search.vue'
import Filters from '../components/Filters.vue' */

const Directives = r => require.ensure([], () => r(require('../components/Directives.vue')), 'Directives')
const Search = r => require.ensure([], () => r(require('../components/Search.vue')), 'Search')
const Filters = r => require.ensure([], () => r(require('../components/Filters.vue')), 'Search')

const childRoutes = [
  {path: '/vue-cli-demo/products', name: 'products', component: products},
  {path: '/vue-cli-demo/http', name: 'http', component: Http},
  {path: '/vue-cli-demo/Directives', name: 'Directives', component: Directives},
  {path: '/vue-cli-demo/Filters', name: 'Filters', component: Filters},
  {path: '/vue-cli-demo/Search', name: 'Search', component: Search}

]
export default childRoutes
