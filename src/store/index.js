import { createStore } from "vuex";
import moviesStore from "./modules/moviesStore";
import loaderStore from "./modules/loaderStore";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    moviesStore,
    loaderStore,
  },
});
