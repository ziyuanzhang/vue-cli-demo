<template>
  <div id="LoginCon">
      <p><label>账户：<input type="text" v-model="useName"/></label></p>
      <p><label>密码：<input type="password" v-model="passWords" /></label></p>
      <p><button v-on:click="login">提交</button></p>
  </div>
</template>
<script>
export default {
    data(){
        return {
            useName:"",
            passWords:""
        }
    },
    methods:{
        login(){
            console.log({"useName":this.useName,"passWord":this.passWords})
            this.$http.post("/api/login",{"useName":this.useName,"passWord":this.passWords}).then(json=>{
                if(json.data=="ok"){
                   //this.$store.commit("loginStatus",json.data);
                   sessionStorage.useName = this.useName;
                   sessionStorage.passWord = this.passWords;
                   this.$router.push({ name: 'form' })
                }
            });
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


