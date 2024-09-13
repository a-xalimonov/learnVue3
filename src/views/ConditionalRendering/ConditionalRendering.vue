<script setup lang="ts">
import { ref } from 'vue';

const opened = ref(false)
const hidden = ref(true);

function toggleWindow() {
	opened.value = !opened.value;
}
function showWindow() {
	hidden.value = false;
}
function hideWindow() {
	hidden.value = true;
}

</script>

<template>
  <div class="content">
    <button
			@click="toggleWindow"
			@mouseenter="showWindow"
			@mouseleave="hideWindow"
    >
			Открыть
    </button>
    <div v-if="opened || !hidden" class="info-panel">
			<h2>Панель с информацией</h2>
			<p>
				Стена текста стена текста стена текста стена текста
				стена текста стена текста стена текста стена текста
				стена текста стена текста стена текста стена текста
				стена текста стена текста стена текста стена текста
			</p>
    </div>
  </div>
</template>

<style scoped>
.content {
	margin-inline: auto;
	margin-top: 80px;
	width: 400px;
}

.info-panel {
	padding: 10px;
	margin-top: 10px;
	text-align: center;
	background-color: white;
}
</style>