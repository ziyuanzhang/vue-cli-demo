<template>
  <div id="formHelper">
    <slot name="title"></slot>
        <h1> I am form helper</h1>
    <slot name="text"></slot>
    <div>
      <form-one ref="one"></form-one>
      <form-two ref="two"></form-two>
      <button @click="getChilrd">ref获取子组件的属性</button>
    </div>
<hr>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component='form-one'">show form-one</button>
    <button v-on:click="component='form-two'">show form-two</button>
  </div>
</template>

<script>
import FormOne from './formOne'
import FromTwo from './formTwo'
export default {
  components: {
    'form-one': FormOne,
    'form-two': FromTwo
  },
  data () {
    return {
      component: 'form-two'
    }
  },
  methods: {
    getChilrd: function () {
      console.log('ref--child:', this.$refs.one.txt)
      console.log('ref--child:', this.$refs)
    }
  }
}
</script>

<style scoped>
#formHelper {
  border: 1px solid #000;
}
h2,
p {
  text-decoration: underline;
  padding: 5px 0;
}
</style>
