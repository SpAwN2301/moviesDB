<template>
  <div class="preloader__wrap" v-if="isShowLoader">
    <div class="preloader">
      <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Preloader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>

<style scoped>
.preloader__wrap {
  position: fixed;
  z-index: 10;
  inset: 0 0 0 0;

  display: grid;
  place-content: center;

  background: rgba(0, 0, 0, 0.7);
}

.preloader__row {
  position: relative;
  width: 70px;
  height: 70px;
  animation: preloader-rotate 2s infinite linear;
}

.preloader__item {
  position: absolute;
  display: inline-block;
  top: 0;
  background-color: #337ab7;
  border-radius: 100%;
  width: 35px;
  height: 35px;
  animation: preloader-bounce 2s infinite ease-in-out;
}

.preloader__item:last-child {
  top: auto;
  bottom: 0;
  animation-delay: -1s;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes preloader-bounce {
  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

.loaded_hiding .preloader {
  transition: 0.3s opacity;
  opacity: 0;
}

.loaded .preloader {
  display: none;
}
</style>
