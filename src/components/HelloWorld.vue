<template>
  <div class="hello">
   <h1>{{title}}</h1>
   <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    greeting: function() {
      return "This is cool!";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
