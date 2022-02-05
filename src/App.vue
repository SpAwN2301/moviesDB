<template>
  <Preloader />
  <PosterBg :poster="posterBg" />
  <div class="container">
    <MoviesList :moviesList="moviesList" @changePoster="changePoster" />
    <MoviesPagination 
      :current-page="currentPage" 
      :per-page="moviesPerPage" 
      :total="moviesLength" 
      
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import MoviesPagination from "@/components/MoviesPagination";
import Preloader from "@/components/Preloader";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination,
    Preloader,
  },
  data: () => ({
    posterBg: ''
  }),
  mounted() {
    this.fetchMovies();
  },
  computed: {
    ...mapGetters("moviesStore", ["moviesList", "currentPage", "moviesPerPage", "moviesLength"]),
  },
  methods: {
    ...mapActions("moviesStore", ["fetchMovies", "changeCurrentPage"]),
    changePoster(poster) {
      this.posterBg = poster
    },
    onPageChanged(value) {
      this.changeCurrentPage(value)
    }
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
  position: relative;
  padding: 60px 0;
  min-height: 900px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
