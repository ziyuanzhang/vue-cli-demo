export default {
  computed: {
    filteRres() {
      return this.results.filter(result => {
        return result.title.match(this.search);
      });
    }
  }
};
