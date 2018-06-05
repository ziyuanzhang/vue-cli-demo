<template>
  <div id="products">
     <product-one></product-one>
     <product-two></product-two>
  </div>
</template>
<script>
import ProductOne from './ProductOne'
import ProductTwo from './ProductTwo'
export default {
  components: {
    'product-one': ProductOne,
    'product-two': ProductTwo
  }
}
</script>
<style scoped>

</style>
