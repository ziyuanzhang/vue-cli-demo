<template>
    <div class="home">
        <h1>我是 home--home</h1>
        <hr>
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
      console.log('persen', this.persen)
      // this.persen.class = 4
      this.$set(this.persen, 'class', 4)
      console.log('persen后', this.persen)
    }
  }
}
</script>

<style scoped>
    .dynamic-Router{
        margin: 20px auto;
        border: 3px solid #000;
        text-align: center;
        padding: 50px;
    }
</style>
