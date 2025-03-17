<script setup lang="ts">
import InteractionItem from '@/components/InteractionItem.vue'
</script>

<template>
  <div style="display: flex; justify-content: space-evenly">
    <p>Interaction DateTime</p>
    <p>Interaction Summary</p>
    <p>FollowUp DateTime</p>
    <p>FollowUp Summary</p>
  </div>

  <div v-for="i in 3" v-bind:key="i">
    <InteractionItem />
  </div>
</template>

<style scoped></style>
