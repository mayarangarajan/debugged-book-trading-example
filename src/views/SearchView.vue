<script lang="ts">
import BookView from '@/components/BookView.vue'
import type { Book, OutgoingTrade } from '../../shared/book'

export default {
  components: { BookView },
  data() {
    return {
      searchQuery: '',
      searchType: 'title' as 'title' | 'author',
      searchResults: [] as Book[],
      sendTo: '',
      showModal: false,
      chooseBook: {} as Book
    }
  },
  emits: ['createTrade'],
  methods: {
    closeModal(): void {
      this.showModal = false;
    },
    createTrade(): void {
      const trade: OutgoingTrade = {
        book: this.chooseBook,
        offeredTo: this.sendTo,
        status: 'pending',
        createdAt: new Date().toISOString(),
        id: 0,
        offeredBy: '' // TODO: Get current user
      };
      this.$emit('createTrade', trade);
    }
  }
}
</script>

<template>
  <div class="search">
    <h1>Search Books</h1>
    <div class="search-controls">
      <input v-model="searchQuery" placeholder="Enter title or author..." />
      <select v-model="searchType">
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
    </div>
    <div class="search-results">
      <div v-for="book in searchResults" :key="book.id" class="book-item">
        <BookView :book="book" />
        <button @click="() => { showModal = true; chooseBook = book }">Offer Trade</button>
      </div>
    </div>
  </div>
</template>
