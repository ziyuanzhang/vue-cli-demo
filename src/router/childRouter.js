/* import Search from '../components/Search.vue' */
import Filters from '../components/Filters.vue'

const Search = r => require.ensure([], () => r(require('../components/Search.vue')), 'Search')

const childRoutes =[
    {path: '/Filters',name:"Filters", component: Filters} ,
    {path: '/Search',name:"Search", component: Search}
]
export default childRoutes