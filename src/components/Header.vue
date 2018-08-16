<template>
  <header>
      <h1 v-on:click="changeTitle">This is header ---- {{headerTitle}}</h1>
      <p v-on:click="changeSubTitle">Header subTitle</p>

      <ul>

        <li><router-link exact to="/">home</router-link> </li>
        <li><router-link  to="/form">form</router-link> </li>
        <li><router-link  to="/img">img</router-link> </li>
        <li><router-link  to="/Slots">Slots</router-link> </li>
        <li><router-link  to="/products">products</router-link> </li>
        <li><router-link  to="/http">http</router-link> </li>
        <li><router-link  to="/Directives">Directives</router-link> </li>
        <li><router-link  to="/Filters">Filters</router-link> </li>
        <li><router-link  to="/Search">Search</router-link> </li>
        <li><router-link  to="/aboutUs">aboutUs不需要登陆</router-link> </li>
        <li v-if="loginBtnShow"><a @click="signOutFun()">Sign out</a></li>
        <br/>
      </ul>
  </header>
</template>

<script>
import Bus from '../event.js'

export default {
  props: {
    headerTitle: {
      style: String
    }
  },
  data () {
    return {
      loginBtnShow: sessionStorage.loginBtnShow
    }
  },
  computed: { },
  methods: {
    changeTitle: function () {
      this.$emit('changeTitle', 'changeTitle')
    },
    changeSubTitle: function () {
      Bus.$emit('changeSubTitle', 'const subTitle')
    },
    signOutFun: function () {
      if (sessionStorage.userName) {
        this.loginBtnShow = false
        this.$router.push({ name: 'login' })
        // sessionStorage.clear()
        this.$store.commit('changeUser')
      }
    }
  },
  created () {
    Bus.$on('login', () => {
      this.loginBtnShow = true
    })
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
