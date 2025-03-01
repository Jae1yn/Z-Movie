import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: [],
    mode: "movie",
  },
  mutations: {
    addToMovie(state, item) {
      state.movie.push(item);
    },
    removeFromMovie(state, id) {
      state.movie = state.movie.filter((item) => item.id !== id);
    },
    setMode(state, mode) {
      state.mode = mode;
    },
  },
  actions: {
    async fetchSearch({ commit }, { query, mode }) {
      // 调用 api 逻辑，未来扩展
    },
  },
});
