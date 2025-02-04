<script lang="ts">
import BookView from '@/components/BookView.vue'
import type { Trade, OutgoingTrade } from '../../shared/book'

export default {
  components: { BookView },
  props: {
    incomingTrades: {
      type: Array as () => Trade[],
      required: true,
    },
    outgoingTrades: {
      type: Array as () => OutgoingTrade[],
      required: true,
    },
  },
  methods: {
    acceptTrade(tradeId: number): void {
      const trade = this.incomingTrades.find(trade => trade.id === tradeId);
      if (trade) {
        this.$emit('tradeAccepted', trade); // Emit to parent
      }
    },
    declineTrade(tradeId: number): void {
      this.$emit('tradeDeclined', tradeId); // Emit event to parent for removal
    }
  }
}
</script>

<template>
  <div class="trades-container">
    <div class="trades-section">
      <h1>Incoming Trades</h1>
      <div class="trades-list">
        <div v-for="trade in incomingTrades" :key="trade.id" class="trade-card">
          <BookView :book="trade.book" />
          <p>Offered by: {{ trade.offeredBy }}</p>
          <div class="trade-actions">
            <button class="accept-btn" @click="acceptTrade(trade.id)">Accept</button>
            <button class="decline-btn" @click="declineTrade(trade.id)">Decline</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
