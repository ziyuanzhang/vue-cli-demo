<template>
  <div id="LoginCon">
    <p>
      <label>账户：<input type="text"
               v-model="userName" /></label>
    </p>
    <p>
      <label>密码：<input type="password"
               v-model="passWords" /></label>
    </p>
    <p>
      <button v-on:click="login">提交</button>
    </p>
  </div>
</template>
<script>
import Bus from '../event.js'
import {
  DynamicRouterA,
  DynamicRouterB,
  page404
} from '../router/DynamicRouter'
export default {
  data () {
    return {
      userName: '',
      passWords: ''
    }
  },
  methods: {
    login () {
      console.log({ userName: this.userName, passWord: this.passWords })
      if (this.userName == sessionStorage.userName) {
        console.log('已经登陆了！！！')
        this.$router.push({ name: 'form' })
      } else {
        this.$http
          .post('/api/login', {
            userName: this.userName,
            passWord: this.passWords
          })
          .then(json => {
            if (json.data.state == 'ok') {
              console.log('login:', json.data)
              sessionStorage.userName = this.userName
              sessionStorage.passWord = this.passWords
              let userRole = json.data.userRole
              sessionStorage.userRole = json.data.userRole
              sessionStorage.loginBtnShow = true
              /* if(sessionStorage.userRoleArr){
                            let userRoleArr =  sessionStorage.userRoleArr;
                            userRoleArr.push(json.data.userRole);
                            sessionStorage.userRoleArr = userRoleArr;
                        }else{
                            sessionStorage.userRoleArr = [json.data.userRole]
                        } */

              if (userRole == 'supAdmin') {
                this.$router.addRoutes(DynamicRouterA)
                this.$store.commit('addRoute', DynamicRouterA)
              } else if (userRole == 'Admin') {
                this.$router.addRoutes(DynamicRouterB)
                this.$store.commit('addRoute', DynamicRouterB)
              }
              this.$router.addRoutes(page404)
              this.$store.commit('notRefreshed')

              Bus.$emit('login')

              this.$router.push({ name: 'home' })
            }
          })
      }
    }
  }
}
</script>
<style scoped>
#LoginCon {
  padding: 30px 0px;
  text-align: center;
}
</style>
