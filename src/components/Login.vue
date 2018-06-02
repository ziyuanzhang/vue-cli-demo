<template>
  <div id="LoginCon">
      <p><label>账户：<input type="text" v-model="userName"/></label></p>
      <p><label>密码：<input type="password" v-model="passWords" /></label></p>
      <p><button v-on:click="login">提交</button></p>
  </div>
</template>
<script>
import Bus  from '../event.js'
export default {
    data(){
        return {
            userName:"",
            passWords:""
        }
    },
    methods:{
        login(){
            console.log({"userName":this.userName,"passWord":this.passWords})
            if(this.userName == sessionStorage.userName){
                console.log("已经登陆了！！！");
                this.$router.push({ name: 'form' })
                return;
            }else{
                             
                this.$http.post("/api/login",{"userName":this.userName,"passWord":this.passWords}).then(json=>{
                    if(json.data.state=="ok"){                    
                        console.log("login:",json.data);
                        sessionStorage.userName = this.userName;
                        sessionStorage.passWord = this.passWords;
                        sessionStorage.userRole = json.data.userRole;
                        Bus.$emit("login");

                        this.$router.push({ name: 'home' })
                    }
                });
            }

        }
    }
  
}
</script>
<style scoped>
  #LoginCon{
      padding: 30px 0px;
      text-align: center;
  }
</style>


