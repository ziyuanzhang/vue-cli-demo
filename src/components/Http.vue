<template>
    <div class="http-container">
        <h2 class="http-title">http 请求</h2>
        <div>
          <p>{{postJson}}</p>
            <button v-on:click="postFun">从( 后台 )中获取 post</button>
            <hr>
            <p>{{getJson}}</p>
            <button v-on:click="getFun">从( 后台 )中获取 get</button>
            <hr>
            <p>{{postRoot}}</p>
            <button @click="postRootFun">从( EnvRoot )中获取路径 </button>
            <hr>
            <p>{{mockShow}}</p>
            <button @click="getMockFun">从( mock )中获取数据</button>
        </div>
    </div>
</template>
<script>
const Root = process.env.API_ROOT
export default {
  data () {
    return {
      postJson: 'postJson',
      getJson: 'getJson',
      postRoot: 'postRoot',
      mockShow: '显示从mock获得的数据'
    }
  },
  methods: {
    postFun () {
      this.$http.post('/api/http', {'userId': 1, 'root': 'root30', 'date': '299999'}).then(json => {
        this.postJson = json.data
      })
    },
    getFun () {
      this.$http.get('/api/http').then(json => {
        this.getJson = json.data
        // console.log(json.data)
      })
    },
    postRootFun () {
      this.$http
        .post(`${Root}/root`, { root: 2 })
        .then(json => {
          this.postRoot = json.data
          // console.log('root:', json.data)
        })
    },
    getMockFun () {
      this.$http.get('/mock/api/get').then(json => {
        this.mockShow = json.data.list
        // console.log('mock:', json.data.list)
      })
    }
  }
}
</script>
<style scoped>
.http-container{
  text-align: center;
}
.http-title{
  font-size: 20px;
}
.http-container p{
  margin: 10px 0;
}
</style>
