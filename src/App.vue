<template>
  <button class="test">click</button>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: "App",
  components: {
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions('moviesStore', ['fetchMovies'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
