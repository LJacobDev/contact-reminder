<script setup lang="ts"></script>
<template>
  <RouterLink to="/interaction">
    <div class="interaction-item">
      This is an interaction item which shows up in the list of interactions <br />
      it has 'columns', like interaction datetime, interaction summary, followup datetime, followup
      summary
    </div>
  </RouterLink>
</template>

<style scoped>
.interaction-item {
  margin: 8px 4px;
  border: 1px solid black;
}
</style>
