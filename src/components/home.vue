<template>
    <div class="home">
        <h1>我是 home--home</h1>
        <hr>
        <p class="attr-show">{{persen}}</p>
        <button @click="addAttrFun()">data添加属性</button>
        <p>history 模式: 发布后history 模式刷新会有404问题，解决办法
          <a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html" target="_blank">后端配置</a>  <br />
          <a href="https://blog.csdn.net/a20023930/article/details/80436663" target="_blank">nginx配置</a>

          </p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      persen: {
        name: 'zhangsan',
        age: '20'
      }
    }
  },
  methods: {
    addAttrFun () {
      this.$set(this.persen, 'class', 4)
    }
  }
}
</script>

<style scoped>
    .home{
      text-align: center;
    }
    .attr-show{
       margin: 10px 0;
    }
    .home a{
      color: red;
      border-bottom: 1px solid red;
    }
</style>
