<template>
    <div class="searchBox">
        <input placeholder="Search" type="text"
            v-model="searchValue"
        >
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'SearchBox',
    data: () => ({
        searchValue: '',

    }),
    watch: {
        searchValue: "onSearchValueChanged"
    },
    methods: {
        ...mapActions('moviesStore', ['searchMovie', 'fetchMovies']),
        onSearchValueChanged(val) {
            if (val) {
                this.searchMovie(val)
            } else {
                this.fetchMovies()
            }
        }
    }
}
</script>

<style scoped>
    .searchBox > input {
        border: none;
        border-radius: 25px;
        padding: 5px 5px 5px 15px;
    }
</style>