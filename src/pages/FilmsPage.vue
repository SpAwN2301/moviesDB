<template>
  <div class="filmsPage">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import MoviesPagination from "@/components/MoviesPagination";
import Preloader from "@/components/Preloader";

export default {
  name: "FilmsPage",
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
      console.log(this.$route);
      this.changeCurrentPage(value)
    }
  },
};
</script>

<style scoped>
  .filmsPage {
    padding: 2rem 0;
  }
</style>