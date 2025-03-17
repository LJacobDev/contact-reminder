<script setup lang="ts">
import InteractionItem from '@/components/InteractionItem.vue'
</script>

<template>
  <div v-for="i in 3" v-bind:key="i">
    <InteractionItem />
  </div>
</template>

<style scoped></style>
