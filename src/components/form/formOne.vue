<template>
  <div>
    <h1>I am formOne.</h1>
    <textarea v-model="txt"></textarea>
    <button @click="getParent">我是子组件通过ref过去父组件信息</button>
  </div>
</template>
<script>
export default {

  data () {
    return {
      txt: 'txtone'
    }
  },
  methods: {
    getParent () {
      console.log('ref--Parent:', this.$parent)
    }
  }
}
</script>
