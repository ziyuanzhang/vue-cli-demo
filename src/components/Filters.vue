<template>
   <div id="container">
       <h1 >{{title|to-uppercase}}</h1>
       <h2>{{content|toLowercase}}</h2>
   </div>
</template>

<script>
export default {
  data(){
      return{
          title:"i am lower",
          content:"UPPERCASE change to lower"
      }
  },
  filters:{
      toLowercase(value){
          return value.toLowerCase();
      }
  }
}
</script>
<style scoped>
#container{
    margin: 10px auto;
    padding: 10px 5px;
    border: 2px solid darkcyan;
    box-sizing: border-box;
    }
</style>


