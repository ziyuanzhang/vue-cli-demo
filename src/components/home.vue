<template>
    <div class="home">
        <h1>我是 home--home</h1>
        <hr>
        <p class="attr-show">{{persen}}</p>
        <button @click="addAttrFun()">data添加属性</button>
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
