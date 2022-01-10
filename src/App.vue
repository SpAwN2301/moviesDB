<template>
  <div class="container">
    <MoviesList :list="moviesList" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";

export default {
  name: "App",
  components: {
    MoviesList,
  },
  mounted() {
    this.fetchMovies();
  },
  computed: {
    ...mapGetters("moviesStore", ["moviesList"]),
  },
  methods: {
    ...mapActions("moviesStore", ["fetchMovies"]),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-text-size-adjust: 100%;
}
.container {
  max-width: 1240px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
