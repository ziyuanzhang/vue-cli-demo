
export default {
  state: {
    refresh: true,
    addRouterObj: {
      time:new Date().getTime(),
      addRouters:[]
    }
  },
  getters: {
    getRouter:(state)=> {
      console.log("addRouterObj:",state.addRouterObj)
      return state.addRouterObj
    },
    getRefresh:(state)=> {
      return state.refresh
    }
  },
  mutations: {
    addRoute:(state, DynamicRouter) => {
      console.log("stateuserRole:", DynamicRouter);
      state.refresh = false;
      state.addRouterObj.addRouters.push(...DynamicRouter)
      state.addRouterObj.time = new Date().getTime()
      console.log("state.addRouter:", state.addRouterObj)
    },
    notRefreshed:(state) =>{
      state.refresh = false;
    },
    changeUser:(state)=>{
      state.addRouterObj ={
        time:new Date().getTime(),
        addRouters:[]
      }
      state.refresh = true;


     
    }
  },
  actions: {}
}