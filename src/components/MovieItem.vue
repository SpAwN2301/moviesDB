<template>
    <li @click.self="openModal" class="movieItem">
        <div class="movieItem__bg" :style="setBg"></div>
        <div class="movieItem__content">
            <div class="movieItem__info">
                <p class="movieItem__name">{{ movie.Title }}</p>
                <p class="movieItem__year">{{ movie.Year }}</p>
            </div>
            <div class="movieItem__controlls">
                <button class="movieItem__btn">Edit</button>
                <button class="movieItem__btn" @click="emitRemoveFilm">
                    Remove
                </button>
            </div>
        </div>

        <Modal :is-modal-open="isModalOpen" @closeModal="closeModal">            
            <template #movie-info>
              {{ movie }}
            </template>
        </Modal>
    </li>
</template>

<script>
import Modal from "./Modal.vue";

export default {
    name: "MovieItem",
    components: {
        Modal,
    },
    data: () => ({
        isModalOpen: false,
    }),
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    computed: {
        setBg() {
            return {
                "background-image": `url(${this.movie.Poster})`,
            };
        },
    },
    methods: {
        emitRemoveFilm() {
            this.$emit("removeItem", {
                id: this.movie.imdbID,
                title: this.movie.Title,
            });
        },
        openModal() {
            console.log("open");
            this.isModalOpen = true;
            document.body.style.overflow = "hidden";
        },
        closeModal() {
            console.log("close");
            this.isModalOpen = false;
            document.body.style.overflow = "visible";
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movieItem {
    transition: transform 0.25s;
    cursor: pointer;

    position: relative;
    border-radius: 5px;
    aspect-ratio: 2 / 3;
}
.movieItem::after {
    transition: opacity 0.25s;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    opacity: 0;
    box-shadow: 0 0 1rem 0.25rem rgba(0, 0, 0, 0.35);
}
/* .movieItem:hover {
  transform: scale(1.02);
} */
.movieItem:hover::after,
.movieItem:hover .movieItem__content {
  opacity: 1;
}

.movieItem__bg {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.movieItem__content {
    transition: opacity 0.25s;

    padding: 1.5rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
}
.movieItem__name {
    margin-bottom: 10px;
    text-align: left;

    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 120%;
    color: #ffffff;
}
.movieItem__year {
    text-align: left;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #ffffff;
}

.movieItem__controlls {
    z-index: 1; /*for hover effect*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
}
.movieItem__btn {
    transition: all 0.25s;
    cursor: pointer;

    display: grid;
    place-content: center;

    width: 100%;
    height: 35px;

    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 5px;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
}
.movieItem__btn:hover {
    background: #ffffff;
    color: #181818;
}
</style>
