<script setup lang="ts">

const emit = defineEmits(['delete'])

const props = defineProps({
  title: String
})

</script>

<template>
	<div class="card">
		<h1 class="card-header">{{ title }}</h1>
		<div class="card-content">
			<slot>Нет содержимого</slot>
		</div>
		<div class="card-footer">
			<button @click="emit('delete')">
				Удалить
			</button>
		</div>
	</div>
</template>

<style scoped>
.card {
	width: 300px;
	border-radius: 20px;
	background-color: white;
	overflow: hidden;
	margin-block: 10px;
}

.card-header {
	text-align: center;
	color: white;
	background-color: red;
	margin: 0px;
	padding: 6px;
}

.card-content {
	padding: 8px;
}

.card-footer {
	text-align: center;
	background-color: rgb(205, 205, 205);
	padding: 6px;
}

.card-footer button {
	border-radius: 8px;
}
</style>