<script setup lang="ts"></script>
<template>
  <RouterLink to="/interaction">
    <div class="interaction-item">
      <!-- This is an interaction item which shows up in the list of interactions -->

      <div class="interaction-wrapper">
        <input class="interaction-details" type="datetime-local" name="" id="" />
        <input class="interaction-details" type="text" />
        <input class="interaction-details" type="datetime-local" name="" id="" />
        <input class="interaction-details" type="text" />
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.interaction-item {
  margin: 8px 4px;
  border: 1px solid black;
}

.interaction-wrapper {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid black;
  width: 100%;
}

.interaction-details {
  /* I'm expecting the input elements inside the interaction-wrapper to shrink to fit it but they're still overflowing */
  flex: 1 1 auto;
}
</style>
