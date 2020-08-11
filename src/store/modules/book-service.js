import axios from "axios";

export default {
  namespaced: true,
  state: {
    books: []
  },
  mutations: {
    updateBooks(state, books) {
      state.books = books;
    }
  },
  actions: {
    getBooks({commit}) {
      axios.get('http://localhost:9065/books/all').then(result =>
          commit('updateBooks', result.data)).catch(console.error);
    }
  }
}
