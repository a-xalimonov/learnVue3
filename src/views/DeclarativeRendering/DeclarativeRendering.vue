<script setup lang="ts">
import Clock from '../../components/Clock.vue';
import { ref } from 'vue';

const headerText = ref('Текущее время')
</script>

<template>
  <div class="content">
      <h2>{{ headerText }}</h2>
      <Clock />
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  margin-top: 80px;
}
</style>