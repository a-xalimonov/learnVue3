<script setup lang="ts">
import { ref } from 'vue';

const className = ref('teal');
</script>

<template>
  <div class="content">
      <h1 :class="className">Цветной текст ({{ className }})</h1>
      <button @click="className = 'teal'">Бирюзовый</button>
      <button @click="className = 'blue'">Синий</button>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  margin-top: 80px;
}

.teal {
    color: teal;
}
.blue {
    color: blue;
}

button {
    font-size: 20px;
    margin: 10px;
}
</style>