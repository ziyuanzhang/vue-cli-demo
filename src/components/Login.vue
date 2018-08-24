<template>
  <div id="LoginCon">
    <div class="Login-form">
        <p>
          <label>账户：<input type="text" v-model="userName" /></label>
        </p>
        <p>
          <label>密码：<input type="password" v-model="passWords" /></label>
        </p>
        <p>
          <button v-on:click="login">提交</button>
        </p>
    </div>
    <div class="Login-description">
        <p>
           1. 账户："AdminA" , 加载：加载：DynamicRouterA , DynamicRouterA2  路由
        </p>
        <p>
           2. 账户："AdminB" , 加载：DynamicRouterB , DynamicRouterB2  路由
        </p>
        <p>
          3. 其他账户，不加载动态路由
        </p>
    </div>
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
      // console.log({ userName: this.userName, passWord: this.passWords })
      if (!this.userName || !this.passWords) {
        return false
      } else if (this.userName === sessionStorage.userName) {
        console.log('已经登陆了！！！')
        this.$router.push({ name: 'form' })
      } else {
        this.$http
          .post('/mock/api/login', {
            userName: this.userName,
            passWord: this.passWords
          })
          .then(json => {
            if (json.data.state === 'ok') {
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

              if (userRole === 'AdminA') {
                this.$router.addRoutes(DynamicRouterA)
                this.$router.addRoutes(page404)
                this.$store.commit('addRoute', DynamicRouterA)
              } else if (userRole === 'AdminB') {
                this.$router.addRoutes(DynamicRouterB)
                this.$router.addRoutes(page404)
                this.$store.commit('addRoute', DynamicRouterB)
              } else {
                this.$router.addRoutes(page404)
              }

              this.$store.commit('notRefreshed')

              // header.vue监听login事件
              Bus.$emit('login')

              this.$router.push({ name: 'home' })
              // window.location.reload()
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
.Login-form p{
  margin-bottom: 10px;
}
.Login-description{
  margin-top: 20px;
  display: inline-block;
  text-align: left;
}
</style>
