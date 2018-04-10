<template>
  <div id="product-one">
     <h2>this is product one</h2>
     <ul>
         <li v-for="product in saleProducts">
             <span>{{product.name}}:{{product.price}}</span>
         </li>
     </ul>
     <button v-on:click="reducePrice">reducePrice</button>
  </div>
</template>
<script>
export default {
  computed:{
     products(){
         return this.$store.state.products
     },
     saleProducts(){
          var saleProducts = this.$store.state.products.map(product=>{
              return {
                    name:"----"+product.name+"-----",
                    price:product.price / 2
              }
          })
          return saleProducts
     }
  },
  methods:{
     reducePrice(){
         /* this.$store.state.products.forEach(product=>{
            product.price -=1;
         }) */
         this.$store.commit("reducePrice");
     }
  }
}
</script>
<style scoped>
#product-one{
    text-align: center;
    border: 1px solid #000;
}
#product-one ul{
    
}
</style>


