<script setup lang="ts">
// Original import from the Vite scaffolding files
// import TheWelcome from '../components/TheWelcome.vue'
import { useStore } from '@/store'
const store = useStore()
</script>

<template>
  <main>
    <!-- Original view from the Vite scaffolding files -->
    <!-- <TheWelcome /> -->

    HomeView contents (preferably will be just one component with its own sub components)
    <div>
      <p>Highest Contact ID: {{ store.highestContactID }}</p>
      <p>Highest Interaction ID: {{ store.highestInteractionID }}</p>
      <p>Debug Messages: {{ store.debugMessages }}</p>
    </div>
  </main>
</template>
