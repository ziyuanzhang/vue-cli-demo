<template>
  <div>
      <img src="../assets/logo.png" v-bind:alt="id" />
      <p>{{id}}</p>
  </div>
</template>
<script>
export default {
  data(){
      return{
          id:this.$route.params.id
      }
  }
}
</script>
<style scoped>
img{
    width: 100px;
}
</style>


