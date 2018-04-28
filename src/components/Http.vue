<template>
  <div>
     <h1>http 请求</h1>
    <div>
        <button v-on:click="postFun">post</button>
        <p>{{postJson}}</p>
        <button v-on:click="getFun">get</button>
        <p>{{getJson}}</p>
        <button @click="postRootFun">EnvRoot</button>
    </div>
  </div>
</template>
<script>
const Root = process.env.API_ROOT;
export default {
    data(){
        return{
            postJson:"",
            getJson:""
        }
    },
  methods:{
      postFun(){
          this.$http.post("/api/http",{
                "userId": 1
          }).then(json => {this.postJson = json});
      },
      getFun(){
          this.$http.get("/api/http").then(json => console.log(json.data));
      },
      postRootFun(){
          this.$http.post(`${Root}/root`,{"root":2}).then(json => console.log("root:",json.data));
      }
  }
}
</script>
<style scoped>

</style>
