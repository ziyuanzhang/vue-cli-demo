<template>
  <div id="product-one">
     <h2>this is product one</h2>
     <ul>
         <li v-for="(product,index) in saleProducts" :key="index">
             <span>{{product.name}}:{{product.price}}</span>
         </li>
     </ul>
     <button v-on:click="reducePrice(4)">reducePrice</button>
  </div>
</template>
<script>
export default {
  computed: {
    products () {
      return this.$store.state.product.products
    },
    saleProducts () {
      var saleProducts = this.$store.state.product.products.map(product => {
        return {
          name: '----' + product.name + '-----',
          price: product.price / 2
        }
      })
      return saleProducts
    }
  },
  methods: {
    reducePrice (amount) {
      this.$store.dispatch('reducePrice', amount)
      // this.$store.commit("reducePrice"，amount);
    }
  }
}
</script>
<style scoped>
#product-one{
    text-align: center;
    border: 1px solid #000;
}

</style>
