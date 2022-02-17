<template>
  <div
    @click.self="closeModal"
    :class="{ active: isModalOpen }"
    class="modal__wrapper"
  >
    <div class="modal">
      <svg
        @click="closeModal"
        class="modal__close"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.2482 9.16663L21.9998 19.415L11.7515 9.16663L9.1665 11.7516L19.4148 22L9.1665 32.2483L11.7515 34.8333L21.9998 24.585L32.2482 34.8333L34.8332 32.2483L24.5848 22L34.8332 11.7516L32.2482 9.16663Z"
        ></path>
      </svg>

      <slot name="movie-info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    isModalOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.modal__wrapper {
  cursor: default;

  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  inset: 0 0 0 0;
  z-index: 1005;
  display: grid;
  align-content: end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
}
.modal__wrapper.active {
  opacity: 1;
  visibility: visible;
}

.modal {
  position: relative;
  z-index: 2;

  padding: 50px 75px 30px;

  display: flex;
  flex-direction: column;

  max-width: 1240px;
  width: 100vw;
  height: 90vh;
  max-height: 900px;

  overflow-y: auto;
  background: #fff;

  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
}
.modal::-webkit-scrollbar {
  display: none;
}

.modal__close {
  cursor: pointer;
  position: absolute;
  z-index: 1;
  top: 40px;
  right: 30px;

  width: 44px;
  height: auto;

  fill: #181818;
}

@media screen and (max-width: 767px) {
  .modal {
    overflow: hidden;
    padding: 50px 20px 0;
    color: #ffffff;
    text-shadow: 0px 0px 3px #000000;
  }

  .modal__close {
    top: 10px;
    right: 10px;
    fill: #ffffff;
  }
}
</style>
