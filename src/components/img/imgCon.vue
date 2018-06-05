<template>
   <div>
       <h1>img 组件容器</h1>
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
