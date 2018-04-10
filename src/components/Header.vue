<template>
  <header>
      <h1 v-on:click="changeTitle">This is header ---- {{headerTitle}}</h1>
      <p v-on:click="changeSubTitle">Header subTitle</p>

      <ul>
        <li><router-link exact to="/">Slots</router-link> </li>
        <li><router-link exact to="/form">form</router-link> </li>
        <li><router-link exact to="/img/1">img</router-link> </li>
      </ul>
  </header>
</template>

<script>
import { Bus } from "../main";
export default {
  props: {
    headerTitle: {
      style: String
    }
  },
  methods: {
    changeTitle: function() {
      this.$emit("changeTitle", "changeTitle");
    },
    changeSubTitle: function() {
      Bus.$emit("changeSubTitle", "const subTitle");
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
li {
  display: inline-block;
}
a {
  display: inline-block;
  border: 1px solid saddlebrown;
  padding: 10px;;
}
.router-link-active{
  background-color: aliceblue;
}
</style>


