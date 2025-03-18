<script setup lang="ts">
import InteractionItem from '@/components/InteractionItem.vue'
</script>

<template>
  <div class="interactions-header" style="display: flex; justify-content: space-evenly">
    <p>Interaction DateTime</p>
    <p>Interaction Summary</p>
    <p>FollowUp DateTime</p>
    <p>FollowUp Summary</p>
  </div>

  <div v-for="i in 3" v-bind:key="i">
    <InteractionItem />
  </div>
</template>

<style scoped>
.interactions-header p {
  font-weight: 700;
  margin: 4px 16px;
}
</style>
