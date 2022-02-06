<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data: () => ({

  }),
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

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
