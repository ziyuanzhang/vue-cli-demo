import page404 from '../components/page404.vue'
/* import DynamicRouterA from '../components/DynamicRouter/DynamicRouterA.vue'
import DynamicRouterB from '../components/DynamicRouter/DynamicRouterB.vue' */
const DynamicRouterA = r => require.ensure([], () => r(require('../components/DynamicRouter/DynamicRouterA.vue')), 'DynamicRouterA')
const DynamicRouterA2 = r => require.ensure([], () => r(require('../components/DynamicRouter/DynamicRouterA2.vue')), 'DynamicRouterA')
const DynamicRouterB = r => require.ensure([], () => r(require('../components/DynamicRouter/DynamicRouterB.vue')), 'DynamicRouterB')
const DynamicRouterB2 = r => require.ensure([], () => r(require('../components/DynamicRouter/DynamicRouterB2.vue')), 'DynamicRouterB')



// router.addRoutes([{path: '**',redirect: '/404'}]);
const DynamicRouterAA =[
    {path: '/DynamicRouterA',name:"DynamicRouterA", component: DynamicRouterA},
    {path: '/DynamicRouterA2',name:"DynamicRouterA2", component: DynamicRouterA2}
]
const DynamicRouterBB =[
    {path: '/DynamicRouterB',name:"DynamicRouterB", component: DynamicRouterB},
    {path: '/DynamicRouterB2',name:"DynamicRouterB2", component: DynamicRouterB2}
]
const p404 =[
    {path: '**',name:"page404", component: page404}
]
export {DynamicRouterAA as DynamicRouterA, DynamicRouterBB as DynamicRouterB, p404 as page404}