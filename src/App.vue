<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    isModalOpen: false
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-text-size-adjust: 100%;
}
.container {
  max-width: 1240px;
  margin: 0 auto;
}
#app {
  position: relative;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body::-webkit-scrollbar { display: none; }
</style>
