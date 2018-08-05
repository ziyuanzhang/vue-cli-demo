<template>
    <div>
        <ul>
            <li v-for="(nav,index) in NavlistFun.addRouters" :key="index + NavlistFun.time">
                 <router-link  :to=nav.path>{{nav.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  computed: {
    NavlistFun: function () {
      return this.$store.getters.getRouter
    }
  }
}
</script>
<style scoped>
header {
  background-color: aqua;
  padding: 20px;
  text-align: center;
}
li {
  display: inline-block;
}
a {
  display: inline-block;
  border: 1px solid saddlebrown;
  padding: 10px;;
}
.router-link-active{
  background-color: aliceblue;
}
</style>
