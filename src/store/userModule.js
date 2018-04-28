export default {
  //strict: true,
  state: {
    status: ""
  },
  mutations: {
    loginStatus: (state, val) => {
      state.status = val;
    }
  }
}
