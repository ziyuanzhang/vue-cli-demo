import Vue from 'vue'
import Vuex, {
  Store
} from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
   strict:true,
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
  mutations:{
    reducePrice:state=>{
        state.products.forEach(product => {
            product.price -=1;
        });
      }
  }
});
