<template>
  <div class="posterBg" :style="setPosterStyle"></div>
</template>

<script>
export default {
  name: "PosterBg",
  props: {
    poster: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    defaultPosterBg: "",
  }),
  computed: {
    setPosterStyle() {
      let posterStyleValue = this.poster
        ? `url(${this.poster})`
        : "linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)";
      return {
        "background-image": posterStyleValue,
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posterBg {
  transition: all 0.2s ease;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: -1;
}
.posterBg::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  opacity: 0.7;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgb(82, 15, 117) 100%
  );
}
</style>
