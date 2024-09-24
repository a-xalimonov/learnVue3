<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const coloredCircle = ref(null);
let timerId: number;

function updateColor() {
	coloredCircle.value.style['background-color'] = getRandomColor();
	coloredCircle.value.style['color'] = getRandomColor();
	timerId = setTimeout(updateColor, 1000);
}

function getRandomColor(): string {
	const randomVal = () => Math.floor(Math.random() * 256);
	return `rgb(${randomVal()}, ${randomVal()}, ${randomVal()})`
}

onMounted(() => {
	updateColor();
});
onUnmounted(() => {
	clearTimeout(timerId);
});
</script>

<template>
  <div class="circle" ref="coloredCircle">
	TEXT
  </div>
</template>

<style scoped>
.circle {
    --diameter: 256px;
    height: var(--diameter);
    width: var(--diameter);
    border-radius: calc(var(--diameter) / 2);
    background-color: red;
	transition: 1s;
	margin: 80px auto;
	line-height: calc(var(--diameter));
	font-size: calc(var(--diameter) / 3);
	text-align: center;
}
</style>