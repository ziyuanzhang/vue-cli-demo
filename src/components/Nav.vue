<template>
    <div class="nav-dynamic" v-if="navShow">
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
    navShow: function () {
      // console.log('nav:', this.$route.path)
      return ((this.$route.path !== '/Login') && sessionStorage.userRole !== 'member')
    },
    NavlistFun: function () {
      return this.$store.getters.getRouter
    }
  }
}
</script>
<style scoped>
.nav-dynamic{
  text-align: center;
  margin: 10px 0;
}
li {
  display: inline-block;
  margin-left: 5px;
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
