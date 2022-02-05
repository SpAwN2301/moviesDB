<template>
  <div class="moviesList">
    <h3 class="moviesList__title" @click="showList">IMDB Top 250</h3>
    <ul class="moviesList__grid">
      <MovieItem v-for="(movie, key) in moviesList" :key="key" :movie="movie" @mouseover="onMouseOver(movie.Poster)" />
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
    moviesList: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.moviesList).length);
    },
  },
  methods: {
    onMouseOver(poster) {
      this.$emit('changePoster', poster)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moviesList__title {
  margin-bottom: 30px;

  text-shadow: 0 0 20px #181818;
  font-size: 50px;
  color: #FFFFFF;
}
.moviesList__grid {
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
