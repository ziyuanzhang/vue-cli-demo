<template>
  <footer>
      <h2>This is Footer ----{{footerTitle}}</h2>
      <p>{{pTitle}}</p>
  </footer>
</template>
<script>
import Bus from '../event.js'
export default {
  props: {
    footerTitle: {
      style: String
    }
  },
  data() {
    return {
      pTitle: "footerTitle"
    };
  },
  created() {
    Bus.$on("changeSubTitle", data => {
      this.pTitle = data;
    });
  }
};
</script>
<style scoped>
footer {
  padding: 10px;
  background-color: aquamarine;
  text-align: center;
}
</style>


