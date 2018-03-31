<template>
  <header>
      <h1 v-on:click="changeTitle">This is header ---- {{headerTitle}}</h1>
      <p v-on:click="changeSubTitle">Header subTitle</p>
  </header>
</template>

<script>
import {Bus} from '../main'
export default {
  props: {
    headerTitle: {
      style: String
    }
  },
  methods:{
    changeTitle:function(){
      this.$emit("changeTitle","changeTitle");
    },
    changeSubTitle:function(){
      Bus.$emit("changeSubTitle","const subTitle")
    }
  }
};
</script>
<style scoped>
header {
  background-color: aqua;
  padding: 20px;
  text-align: center;
}
</style>


