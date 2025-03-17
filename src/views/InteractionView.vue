<script setup lang="ts"></script>

<template>
  <main>
    <h1>Interaction View</h1>
    Interaction Date and Time:<input type="datetime-local" /><br />
    Interaction Summary: <input /><br />
    Interaction Details: <textarea name="" id=""></textarea><br />
    Followup Date and Time:<input type="datetime-local" /><br />
    <br />
    Followup Summary: <input /><br />
    <br />
    Followup Details: <textarea name="" id=""></textarea>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}

input {
  width: 100%;
}

textarea {
  width: 100%;
  max-width: 100%;
  min-height: 100px;
}
</style>
