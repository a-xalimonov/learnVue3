<script setup lang="ts">
import { reactive } from 'vue'

function updateTime(): void {
  const date = new Date();
  time.hours = date.getHours();
  time.minutes = date.getMinutes();
  time.seconds = date.getSeconds();
  setTimeout(updateTime, 1000);
}

const time = reactive({
  hours: 0,
  minutes: 0,
  seconds: 0,
})
updateTime();
</script>

<template>
  <div class="clock">
    {{`${
      (time.hours < 10 ? '0' : '') + time.hours}:${
      (time.minutes < 10 ? '0' : '') + time.minutes}:${
      (time.seconds < 10 ? '0' : '') + time.seconds}`
    }}
  </div>
</template>

<style scoped>
.clock {
  font-size: 80px;
}
</style>
