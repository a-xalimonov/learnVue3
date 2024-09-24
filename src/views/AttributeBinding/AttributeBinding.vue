<script setup lang="ts">
import { ref } from 'vue';

const className = ref('teal');

function setTeal() {
  className.value = 'teal'
}
function setBlue() {
  className.value = 'blue'
}

</script>

<template>
  <div class="content">
      <h1 :class="className">Цветной текст ({{ className }})</h1>
      <button @click="setTeal">Бирюзовый</button>
      <button @click="setBlue">Синий</button>
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