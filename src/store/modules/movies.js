import axios from "@/plugins/axios"

const moviesStore = {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async fetchMovies(context) {
            console.log(context);
            const responce = await axios.get('/?i=tt3896198')
            console.log(responce);
        }
    }
}

export default moviesStore