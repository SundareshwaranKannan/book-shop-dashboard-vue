<template>
  <div>
    <h1 class="book-header">The Western Book Bank</h1>
    <b-card>
      <b-card-body class="d-flex justify-content-between">
        <table>
          <thead class="table-header">
          <tr>
            <th>
              Book name
            </th>
            <th class="cost">
              Availability
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(book, index) in availableBooks" :key="index">
            <td>
              {{book.name}}
            </td>
            <td :style="[book.availability === 0 ? {'color': 'red'} : book.availability > 50 ? {'color': 'green'} : {'color': 'yellow'}]">
              {{book.availability}}
            </td>
          </tr>
          </tbody>
        </table>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'BookManagement',
  created() {
    this.getBooks();
  },
  data() {
    return {
      bookDetail: {
        id: '',
        name: '',
        availability: ''
      }
    }
  },
  computed: {
    availableBooks() {
      return this.$store.state.books.books;
    },
  },
  methods: {
    ...mapActions('books', ['getBooks']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #42b983;
  }
  .book-header {
    color: darkslateblue;
    padding-bottom: 40px;
  }
  .table-header {
    color: darkslategray;
  }
</style>
