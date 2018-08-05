<template>
  <div id="nijia">
    <h1>This is nijia component.</h1>
    <ul>
      <li v-for="(nijia,index) in nijias" :key="index"  v-on:click="nijia.show=!nijia.show">
        <h2>{{nijia.name}}</h2>
        <p v-show="nijia.show">{{nijia.content}}</p>
      </li>
    </ul>
    <button v-on:click="deleteNijia">Delete Nijia</button>
  </div>
</template>

<script>
export default {
  /* props:["nijias"], */
  props: {
    nijias: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    deleteNijia: function () {
      this.nijias.pop()
    }
  },
  beforeCreate () {
    alert('beforeCreate')
  },
  created () {
    alert('created')
  },
  beforeMount () {
    alert('beforeMount')
  },
  mounted () {
    alert('mounted')
  },
  beforeUpdate () {
    alert('beforeUpdate')
  },
  updated () {
    alert('updated')
  },
  beforeDestroy () {
    alert('beforeDestroy')
  },
  destroyed () {
    alert('destroyed')
  }
}
</script>
<style scoped>
#nijia {
  width: 100%;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
h1 {
  text-align: center;
  margin: 5px;
  border: 1px solid #000000;
  padding: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  padding: 30px;
  margin: 10px;
  border: 1px solid #000000;
}
h2 {
  margin: 10px 0;
}
p {
  margin: 5px 0;
}
</style>
