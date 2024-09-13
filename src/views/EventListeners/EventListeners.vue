<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);

function increase() {
    counter.value++;
}
function decrease() {
    if (counter.value > 0)
        counter.value--;
}
function multiply() {
    counter.value *= 2;
}
function reset() {
    counter.value = 0;
}

</script>

<template>
  <div class="content">
      <p class="main-text">Счётчик:<br>{{ counter }}</p>
      <div class="button-panel">
        <button @click="increase">Увеличить на 1</button>
        <button @click="decrease">Уменьшить на 1</button>
        <button @click="multiply">Умножить на 2</button>
        <button class="reset" @click="reset">Сбросить</button>
      </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  margin-top: 80px;
}

.main-text {
    font-size: 80px;
}

.button-panel {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.reset {
    color: rgb(255, 255, 255);
    background-color: rgb(180, 100, 100);
}
</style>