<template>
    <div class="home">
        <h1>我是 home--home</h1>
        <hr>
        <p class="attr-show">{{persen}}</p>
        <button @click="addAttrFun()">data添加属性</button>
        <p>history 模式: 发布后history 模式刷新会有404问题，解决办法需要后端配置 <br />
          https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
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
</style>
