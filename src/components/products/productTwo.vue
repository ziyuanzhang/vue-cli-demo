<template>
  <div id="product-two">
      <h2>this is product two</h2>
     <ul>
         <li v-for="(product,index) in saleProducts" :key="index">
             <span>{{product.name}}:{{product.price}}</span>
         </li>
     </ul>
  </div>
</template>
<script>
export default {
  computed: {
    products () {
      return this.$store.state.product.products
    },
    saleProducts () {
      return this.$store.getters.saleProducts
    }
  }
}
</script>
<style scoped>
#product-two{
    margin-top: 10px;
    text-align: center;
    border: 1px solid #000;
}

</style>
