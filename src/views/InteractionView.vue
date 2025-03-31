<script setup lang="ts"></script>

<template>
  <main>
    <div style="display: flex; justify-content: space-between">
      <h1>Interaction Details</h1>
      <div>
        <!-- TODO: turn these into better looking button components, these are placeholders -->
        <button>Save</button>
        <button>Cancel</button>
        <button>Delete</button>
      </div>
    </div>
    <h3>Interaction Date and Time:</h3>
    <input type="datetime-local" />
    <h3>Interaction Summary:</h3>
    <input />
    <h3>Interaction Details:</h3>
    <textarea name="" id=""></textarea>
    <h3>Followup Date and Time:</h3>
    <input type="datetime-local" />
    <h3>Followup Summary:</h3>
    <input />
    <h3>Followup Details:</h3>
    <textarea name="" id=""></textarea>
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

button {
  font-size: 1rem;
  padding: 8px 16px;
}
</style>
