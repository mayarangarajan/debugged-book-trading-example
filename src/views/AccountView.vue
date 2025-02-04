<script lang="ts">
import type { Trade } from '../../shared/book'

export default {
  props: {
    tradeHistory: Array<Trade>
  }
}
</script>

<template>
  <div class="account">
    <h1>My Account</h1>
    <h2>Trade History</h2>
    <div v-for="trade in tradeHistory" :key="trade.id" class="trade-item">
      <p>{{ trade.book.title }} - {{ trade.createdAt }}</p>
      <span :class="trade.status">{{ trade.status }}</span>
    </div>
  </div>
</template>
