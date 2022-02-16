<template>
    <div class="moviesList">
        <h3 class="moviesList__title" @click="showList">IMDB Top 250</h3>
        <ul class="moviesList__grid">
            <MovieItem
                v-for="(movie, key) in moviesList"
                :key="key"
                :movie="movie"
                @mouseover="onMouseOver(movie.Poster)"
                @removeItem="onRemoveItem"
            />
        </ul>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import MovieItem from "./MovieItem";

export default {
    name: "MoviesList",
    components: {
        MovieItem,
    },
    props: {
        moviesList: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        isExist() {
            return Boolean(Object.keys(this.moviesList).length);
        },
    },
    methods: {
        ...mapActions("moviesStore", ["removeMovie"]),
        onMouseOver(poster) {
            this.$emit("changePoster", poster);
        },
        onRemoveItem({ id, title }) {
            let deleteMovie = confirm(
                `Вы действительно хотите удалить фильм '${title}' из списка?`
            );

            if (deleteMovie) {
                this.removeMovie(id);
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moviesList__title {
    margin-bottom: 30px;

    text-shadow: 0 0 20px #181818;
    font-size: 50px;
    color: #ffffff;
}
.moviesList__grid {
    list-style: none;
    margin: 2em 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

@media screen and (max-width: 767px) {
    .moviesList__title {
        font-size: 13.3vw;
    }

    .moviesList__grid {
        position: relative;
		left: -20px;
		padding: 0 20px;

        display: flex;
        width: 100vw;

        overflow: auto;
        scroll-snap-type: x mandatory;
    }
    .moviesList__grid::-webkit-scrollbar {
        display: none;
    }
}
</style>
