export default {
  //strict: true,
  state: {
    products: [{
        name: "荣耀1",
        price: "100"
      },
      {
        name: "荣耀2",
        price: "200"
      },
      {
        name: "荣耀3",
        price: "300"
      },
      {
        name: "荣耀4",
        price: "400"
      }
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: "----" + product.name + "-----",
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit("reducePrice", payload);
      }, 20)
    }
  }
}
