<script lang="ts">
import BookView from '@/components/BookView.vue'
import type { Trade, OutgoingTrade } from '../../shared/book'

export default {
  components: { BookView },
  props: {
    incomingTrades: Array<Trade>,
    outgoingTrades: Array<OutgoingTrade>,
  },
  methods: {
    acceptTrade(tradeId: number): void {
      const tradeIndex = this.incomingTrades.findIndex(trade => trade.id === tradeId);
      if (tradeIndex !== -1) {
        const acceptedTrade = this.incomingTrades.splice(tradeIndex, 1)[0];
        this.$emit('tradeAccepted', acceptedTrade);
      }
    },
    declineTrade(tradeId: number): void {
      this.incomingTrades = this.incomingTrades.filter(trade => trade.id !== tradeId);
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
