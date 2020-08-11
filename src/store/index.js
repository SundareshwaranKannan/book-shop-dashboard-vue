import Vue from 'vue';
import Vuex from 'vuex';
import booksServiceModule from './modules/book-service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    books: booksServiceModule,
  },
  getters: {
  }
});
