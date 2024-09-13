<script setup lang="ts">
import { ref } from 'vue';
import type { TodoItem } from './types'

const newName= ref<string>('');
const list = ref<TodoItem[]>([
	{
		name: 'Купить молоко',
		active: false
	},
	{
		name: 'Помыть полы',
		active: true
	},
	{
		name: 'Приготовить ужин',
		active: true
	},
]);

function removeItem(item: TodoItem) {
	list.value = list.value.filter(todo => todo !== item);
}
function toggleItem(item: TodoItem) {
	item.active = !item.active;
}
function addItem() {
	if (newName.value) {
		list.value = [
			...list.value,
			{
				name: newName.value,
				active: true
			}
		];
		newName.value = '';
	}
}

</script>

<template>
  <div class="content">
		<div class="todo-list">
			<h1 class="header">TODO</h1>
			<form @submit.prevent="addItem">
				<input v-model="newName" type="text">
				<button>Добавить</button>
			</form>
			
			<div
				v-for="item in list"
				class="todo-item"
				@click="toggleItem(item)"
			>
				<div
					:class="{ inactive: !item.active }"
				>
					{{ item.name }}
				</div>
				<button @click="removeItem(item)">╳</button>
			</div>
		</div>
  </div>
</template>

<style scoped>
.content {
}

.todo-list {
	margin: 80px auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	width: 265px;
}

.todo-item {
	display: flex;
	justify-content: space-between;
	padding: 10px;
	margin-top: 12px;
	background-color: white;
	word-break: break-all;
	width: 100%;
	
}

.todo-item button {
	width: 32px;
	height: 32px;
	margin-left: 8px;
	flex-shrink: 0;
	font-size: 8px;
	color: white;
	background-color: rgb(191, 87, 87);
}

.inactive {
	text-decoration: line-through;
}
</style>