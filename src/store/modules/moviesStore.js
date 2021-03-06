/* eslint-disable */
import IDs from "@/store/mock/imdb_top250";
import axios from "@/plugins/axios";
import mutations from "@/store/mutations";

function serializeResponse(movies) {
    return movies.reduce((acc, movie) => {
        acc[movie.imdbID] = movie;
        return acc;
    }, {});
}

const { MOVIES, CURRENT_PAGE, REMOVE_MOVIE } = mutations;

const moviesStore = {
    namespaced: true,
    state: {
        top250IDs: IDs,
        moviesPerPage: 12,
        currentPage: 1,
        movies: {}
    },
    getters: {
        moviesList: ({ movies }) => movies,
        slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
        currentPage: ({ currentPage }) => currentPage,
        moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
        moviesLength: ({ top250IDs }) => Object.keys(top250IDs).length,
    },
    mutations: {
        [MOVIES](state, value) {
            state.movies = value;
        },
        [CURRENT_PAGE](state, value) {
            state.currentPage = value;
        },
        [REMOVE_MOVIE](state, index) {
            state.top250IDs.splice(index, 1)
        }
    },
    actions: {
        async fetchMovies({ getters, commit, dispatch }) {
            try {
                dispatch('toggleLoader', true, { root: true })
                const { currentPage, moviesPerPage, slicedIDs } = getters;
                const from = currentPage * moviesPerPage - moviesPerPage;
                const to = currentPage * moviesPerPage;
                const moviesToFetch = slicedIDs(from, to);

                const requests = moviesToFetch.map(id => axios.get(`/?i=${id}`));
                const response = await Promise.all(requests);
                const resData = response.map(res => res.data);

                const movies = serializeResponse(resData);
                commit(MOVIES, movies);
            } catch (error) {
                console.log(error);
            } finally {
                dispatch('toggleLoader', false, { root: true })
            }
        },
        changeCurrentPage({ commit, dispatch }, page) {
            commit(CURRENT_PAGE, page);
            dispatch("fetchMovies");
        },
        removeMovie({ commit, dispatch, state }, id) {
            const index = state.top250IDs.findIndex(item => item === id);

            if (index !== -1) {
                commit(REMOVE_MOVIE, index);
                dispatch("fetchMovies")
            }
        },
        async searchMovie({ commit, dispatch }, title) {
            try {
                dispatch("toggleLoader", true, { root: true });

                const response = await axios.get(`/?s=${title}`);

                if (response.data.Error) {
                    throw Error(response.data.Error)
                }

                const movies = serializeResponse(response.data.Search);
                console.log(movies);             
                commit(MOVIES, movies);

            } catch (error) {
                console.log(error);
            } finally {
                dispatch("toggleLoader", false, { root: true })
            }
        }
    }
};

export default moviesStore;