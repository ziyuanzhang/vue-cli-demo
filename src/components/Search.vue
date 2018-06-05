<template>
  <div id="container">
    <input type="text"
           v-model="search" />
    <ul>
      <li v-for="result in filteRres">{{result.title}}</li>
    </ul>
  </div>

</template>
<script>
import searchMixins from './SearchMixins'
export default {
  data () {
    return {
      results: [
        { title: 'abc' },
        { title: 'bcd' },
        { title: 'abcdd' },
        { title: 'ssdfer' },
        { title: 'zmmn' }
      ],
      search: ''
    }
  },
  computed: {
    /*   filteRres(){
            return this.results.filter(result=>{
               return result.title.match(this.search);
                })
        } */
  },
  mixins: [searchMixins]
}
</script>
<style scoped>
#container {
  margin: 20px auto;
  padding: 20px 5px;
  border: 2px solid firebrick;
  box-sizing: border-box;
  text-align: center;
}
</style>
