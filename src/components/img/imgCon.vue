<template>
   <div class="img-container">
       <h2>img 组件容器</h2>
       <!-- <app-img></app-img> -->
       <router-view/>
   </div>

</template>
<script>
import Img from './Img'
export default {
  components: {
    'app-img': Img
  }
}
</script>
<style scoped>
.img-container{
  text-align: center;
}
h2{
  font-size: 20px;
  margin: 10px 0;
}
</style>
