<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
    <app-form-helper>
      <h2 slot="title">{{hTitle}}</h2>
      <p slot="text"> I am p from slots</p>
    </app-form-helper>
  </div>
</template>

<script>
import FormHelper from './form/formHelper'
export default {
  components: {
    'app-form-helper': FormHelper
  },
  name: 'HelloWorld',
  data () {
    return {
      title: 'Welcome to slotsVue',
      hTitle: 'I am h2 form slots'
    }
  },
  methods: {
    greeting: function () {
      return 'This is cool!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
  border: 2px solid #000;
  padding: 10px 0;
  padding: 5px 20px;
}
h1 {
  font-size: 20px;
}
</style>
