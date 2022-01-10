<template>
  <div class="moviesList">
    <h3 class="moviesList__title" @click="showList">IMDB Top 250</h3>
    <ul class="moviesList__grid">
      <MovieItem v-for="(movie, key) in list" :key="key" :movie="movie" />
    </ul>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      console.log(this.list);
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    showList(){
      console.log(this.list);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moviesList__title {
  font-size: 50px;
  margin-bottom: 30px;
}
.moviesList__grid {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
