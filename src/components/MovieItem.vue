<template>
  <li class="movieItem">
      <div class="movieItem__bg" :style="setBg"></div>
  </li>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    setBg() {
        return {
            "background-image": `url(${this.movie.Poster})`
        }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movieItem {
    transition: transform .25s;
    cursor: pointer;

    position: relative;
    border-radius: 5px;
    aspect-ratio: 2 / 3;
}
.movieItem::after {
    transition: opacity .25s;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    opacity: 0;
    box-shadow: 0 0 1rem .25rem rgba(0, 0, 0, .35);
}
.movieItem:hover {
    transform: scale(1.02);
}
.movieItem:hover::after {
    opacity: 1;
}

.movieItem__bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: #ffffff center center / cover no-repeat;
}
</style>
