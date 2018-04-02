<template>
  <div id="container">
      <p v-fontColor>fontColor ---  Directives</p>
      <p v-dir ="'w800'">---value==pc;;width==800</p>
      <p v-dir>---value==“haha”</p>
      <p v-dir:fs40>font-size-40px</p>
      <p v-dir:fs40 = "'w800'">font-size-40px</p>
      <h1 v-bg> directive in component </h1>
  </div>
</template>
<script>
export default {
  directives:{
    "bg":{
      bind(el,binding,vnode) {
          el.style.backgroundColor="red"
      }
    }
  }
}
</script>

<style scoped>
#container{
  margin: 10px auto;
  padding: 10px 5px;
  border: 2px solid firebrick;
  box-sizing: border-box;
  text-align: center;
}
</style>

