<template>
  <div>
     <h1>http 请求</h1>
    <div>
        <button v-on:click="postFun">post</button>
        <p>{{postJson}}</p>
        <button v-on:click="getFun">get</button>
        <p>{{getJson}}</p>
    </div>

  </div>
</template>
<script>
export default {
    data(){
        return{
            postJson:"",
            getJson:""
        }
    },
  methods:{
      postFun(){
          this.$http.post("http://localhost:8079/",{
                "userId": 1
          }).then(json => {this.postJson = json});
      },
      getFun(){
          this.$http.get("http://localhost:8079/").then(json => console.log(json.data))
      }
  }
}
</script>
<style scoped>

</style>
