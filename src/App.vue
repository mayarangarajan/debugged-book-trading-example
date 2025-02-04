<script lang="ts">
import NavBar from './components/NavBar.vue'
import type { Trade, OutgoingTrade } from '../shared/book'

export default {
  components: { NavBar },
  data() {
    return {
      incomingTrades: [] as Trade[],
      outgoingTrades: [] as OutgoingTrade[],
      tradeHistory: [] as Trade[],
    }
  },
  methods: {
    createTrade(trade: OutgoingTrade) {
      this.outgoingTrades.push(trade);
    },
    handleTradeAccepted(trade: Trade) {
      this.tradeHistory.push(trade);
      this.incomingTrades = this.incomingTrades.filter(t => t.id !== trade.id);
    }
  }
}
</script>

<template>
  <NavBar />
  <RouterView @create-trade="createTrade" @tradeAccepted="handleTradeAccepted" :tradeHistory="tradeHistory" :outgoingTrades="outgoingTrades" :incomingTrades="incomingTrades" />
</template>
